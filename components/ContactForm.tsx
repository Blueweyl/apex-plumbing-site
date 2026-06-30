'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Clock, CheckCircle2, Sparkles } from 'lucide-react'
import { trackFormStart, trackFormSubmit, trackPhoneClick, trackEvent } from '@/lib/analytics'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name').max(100).trim(),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(20)
    .regex(/^[\d\s\-\(\)\+]+$/, 'Invalid phone format')
    .trim(),
  email: z.string().email('Please enter a valid email').max(200).optional().or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().max(1000).trim().optional(),
  urgency: z.enum(['emergency', 'today', 'this_week', 'scheduling']),
})

type FormData = z.infer<typeof schema>

const services = [
  'Emergency plumbing',
  'Water heater repair/replacement',
  'Drain cleaning',
  'Toilet repair',
  'Faucet/fixture repair',
  'Sewer line',
  'Pipe repair/repiping',
  'Gas line',
  'Other',
]

const inputClass = cn(
  'w-full px-4 py-3.5 bg-apple-surface rounded-xl text-[15px] text-apple-dark placeholder:text-apple-tertiary',
  'outline-none border-2 border-transparent transition-all duration-200',
  'hover:bg-white hover:border-apple-border-subtle',
  'focus:bg-white focus:border-apple-blue focus:shadow-glow-blue'
)

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [hasStarted, setHasStarted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { urgency: 'today' },
  })

  const handleFocus = () => {
    if (!hasStarted) {
      setHasStarted(true)
      trackFormStart()
    }
  }

  const onSubmit = async (data: FormData) => {
    setServerError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Server error')
      trackFormSubmit()
      setSubmitted(true)
    } catch {
      setServerError('Something went wrong. Please call us directly at (555) 247-8629.')
      trackEvent('contact_form_error')
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl shadow-elevated border border-apple-border-subtle p-10 text-center animate-scale-in">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 bg-status-green-bg rounded-full animate-ping" style={{ animationDuration: '1.5s' }} />
          <div className="relative w-20 h-20 bg-status-green-bg rounded-full flex items-center justify-center">
            <CheckCircle2 size={36} className="text-status-green" />
          </div>
        </div>
        <h3 className="text-[26px] font-bold text-apple-dark mb-3">We got it. Expect a call soon.</h3>
        <p className="text-[17px] text-apple-secondary leading-relaxed max-w-sm mx-auto mb-8">
          A dispatcher will call you within 15 minutes to confirm the job and get a tech moving.
        </p>
        <div className="inline-flex items-center gap-3 px-6 py-3.5 bg-apple-surface rounded-xl border border-apple-border-subtle">
          <Clock size={18} className="text-apple-blue" />
          <span className="text-[15px] font-medium text-apple-dark">
            Avg. callback time: <span className="text-apple-blue font-bold">12 minutes</span>
          </span>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-3xl shadow-elevated border border-apple-border-subtle p-8 lg:p-10 hover:shadow-modal transition-shadow duration-500"
      noValidate
    >
      <div className="flex items-start justify-between mb-1">
        <h3 className="text-[22px] font-bold text-apple-dark">Get a free estimate</h3>
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-status-green-bg rounded-full">
          <span className="w-1.5 h-1.5 bg-status-green rounded-full animate-pulse" />
          <span className="text-[12px] font-semibold text-status-green">Responding now</span>
        </div>
      </div>
      <p className="text-[15px] text-apple-secondary mb-8">
        Fill this out and we'll call within 15 minutes.
      </p>

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-[14px] font-semibold text-apple-dark mb-2">
            Your name <span className="text-status-red">*</span>
          </label>
          <input
            {...register('name')}
            onFocus={handleFocus}
            placeholder="First and last name"
            className={cn(
              inputClass,
              errors.name && 'border-status-red bg-status-red-bg focus:border-status-red focus:shadow-none'
            )}
          />
          {errors.name && (
            <p className="mt-1.5 text-[13px] text-status-red flex items-center gap-1">
              <span>↑</span> {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone + Email */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-[14px] font-semibold text-apple-dark mb-2">
              Phone number <span className="text-status-red">*</span>
            </label>
            <input
              {...register('phone')}
              onFocus={handleFocus}
              type="tel"
              placeholder="(555) 000-0000"
              className={cn(
                inputClass,
                errors.phone && 'border-status-red bg-status-red-bg focus:border-status-red focus:shadow-none'
              )}
            />
            {errors.phone && (
              <p className="mt-1.5 text-[13px] text-status-red">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label className="block text-[14px] font-semibold text-apple-dark mb-2">
              Email <span className="text-apple-tertiary font-normal">(optional)</span>
            </label>
            <input
              {...register('email')}
              onFocus={handleFocus}
              type="email"
              placeholder="you@email.com"
              className={inputClass}
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="block text-[14px] font-semibold text-apple-dark mb-2">
            What do you need? <span className="text-status-red">*</span>
          </label>
          <select
            {...register('service')}
            onFocus={handleFocus}
            className={cn(
              inputClass,
              'appearance-none cursor-pointer',
              errors.service && 'border-status-red bg-status-red-bg'
            )}
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1.5 text-[13px] text-status-red">{errors.service.message}</p>
          )}
        </div>

        {/* Urgency */}
        <div>
          <label className="block text-[14px] font-semibold text-apple-dark mb-2">
            How urgent is this?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { value: 'emergency', label: '🚨 Emergency', desc: 'Right now' },
              { value: 'today', label: '⚡ Today', desc: 'ASAP today' },
              { value: 'this_week', label: '📅 This week', desc: 'Flexible' },
              { value: 'scheduling', label: '🗓 Planning', desc: 'Not urgent' },
            ].map(({ value, label, desc }) => (
              <label key={value} className="cursor-pointer">
                <input
                  type="radio"
                  {...register('urgency')}
                  value={value}
                  className="sr-only peer"
                />
                <div className="p-3 bg-apple-surface rounded-xl border-2 border-transparent
                                peer-checked:border-apple-blue peer-checked:bg-apple-blue-light peer-checked:shadow-glow-blue
                                hover:border-apple-blue/30 hover:bg-apple-blue-light/50
                                transition-all duration-200 text-center">
                  <p className="text-[13px] font-semibold text-apple-dark">{label}</p>
                  <p className="text-[11px] text-apple-secondary">{desc}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-[14px] font-semibold text-apple-dark mb-2">
            Describe the issue <span className="text-apple-tertiary font-normal">(optional)</span>
          </label>
          <textarea
            {...register('message')}
            onFocus={handleFocus}
            rows={3}
            placeholder="e.g., Pipe under kitchen sink dripping, water pooling in cabinet..."
            className={cn(inputClass, 'resize-none')}
          />
        </div>

        {/* Server error */}
        {serverError && (
          <div className="p-4 bg-status-red-bg border border-status-red/20 rounded-xl">
            <p className="text-[14px] text-status-red">{serverError}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative w-full py-4 bg-apple-blue text-white text-[17px] font-semibold rounded-xl
                     hover:bg-apple-blue-hover hover:shadow-glow-blue hover:-translate-y-0.5
                     transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed
                     overflow-hidden shadow-card"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
          <span className="relative flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <Sparkles size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                Request Free Estimate
              </>
            )}
          </span>
        </button>

        <p className="text-center text-[13px] text-apple-tertiary">
          No credit card. No commitment. We'll call within 15 minutes.
        </p>
      </div>
    </form>
  )
}
