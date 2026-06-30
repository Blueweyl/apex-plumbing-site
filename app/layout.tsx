import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GrowBridge Plumbing — 24/7 Plumbing Services | Licensed & Insured',
  description:
    'Fast, reliable plumbing in your area. Water heaters, drain cleaning, emergency repairs, and more. Same-day service. Licensed & insured techs. Call now: (555) 247-8629.',
  keywords: 'plumbing services, emergency plumber, drain cleaning, water heater, local plumber',
  openGraph: {
    title: 'GrowBridge Plumbing — 24/7 Plumbing Services',
    description: 'Same-day plumbing repairs. Licensed techs. Upfront pricing. Call now.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#0071E3" />
      </head>
      <body className="bg-white text-apple-dark antialiased">{children}</body>
    </html>
  )
}
