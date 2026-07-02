import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/admin/login') return NextResponse.next()

  const token = req.cookies.get('gb_admin_auth')?.value
  if (!token || token !== process.env.ADMIN_PASSWORD) {
    const url = req.nextUrl.clone()
    url.pathname = '/admin/login'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = { matcher: '/admin/:path*' }
