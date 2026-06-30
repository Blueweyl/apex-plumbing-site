import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const ContactSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  phone: z
    .string()
    .min(10)
    .max(20)
    .regex(/^[\d\s\-\(\)\+]+$/)
    .trim(),
  email: z.string().email().max(200).optional().or(z.literal('')),
  service: z.string().min(1).max(100),
  urgency: z.enum(['emergency', 'today', 'this_week', 'scheduling']),
  message: z.string().max(1000).trim().optional(),
})

// Simple in-memory rate limiter — swap for Redis/Upstash in production
const requestMap = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = requestMap.get(ip)

  if (!entry || now > entry.resetAt) {
    requestMap.set(ip, { count: 1, resetAt: now + 60_000 })
    return false
  }

  if (entry.count >= 5) return true

  entry.count++
  return false
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const result = ContactSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: result.error.flatten() },
      { status: 400 }
    )
  }

  const { name, phone, email, service, urgency, message } = result.data

  // TODO: send email/SMS notification to dispatcher
  // e.g. via Twilio, SendGrid, Resend, etc.
  console.log('[Contact form]', {
    name,
    phone: phone.replace(/\d(?=\d{4})/g, '*'), // mask all but last 4 digits in logs
    service,
    urgency,
    hasEmail: !!email,
    hasMessage: !!message,
    timestamp: new Date().toISOString(),
    ip,
  })

  return NextResponse.json({ success: true }, { status: 200 })
}
