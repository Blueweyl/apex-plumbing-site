'use client'

import { Phone, Clock, Shield, Star } from 'lucide-react'
import { trackEvent, trackPhoneClick } from '@/lib/analytics'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-apple-blue-light via-white to-white pointer-events-none" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-apple-blue/5 rounded-full blur-3xl pointer-events-none translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-apple-blue/4 rounded-full blur-2xl pointer-events-none -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Emergency badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-status-red-bg border border-status-red/20 rounded-full mb-8">
              <span className="w-2 h-2 bg-status-red rounded-full animate-pulse" />
              <span className="text-[13px] font-semibold text-status-red uppercase tracking-wide">
                24/7 Emergency Service Available
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-apple-dark tracking-tighter leading-[1.05] mb-6 text-balance">
              Plumbing problems{' '}
              <span className="text-apple-blue">fixed today.</span>{' '}
              Not next week.
            </h1>

            {/* Subheadline */}
            <p className="text-[19px] text-apple-secondary leading-relaxed mb-10 max-w-lg">
              Licensed plumbers at your door in under 2 hours. Upfront pricing
              before we touch a single pipe. Guaranteed work — or we come back free.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="tel:5552478629"
                onClick={() => { trackPhoneClick('hero'); trackEvent('hero_cta_clicked', { label: 'call_now' }) }}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-apple-blue text-white text-[17px] font-semibold rounded-xl shadow-elevated hover:bg-apple-blue-hover transition-all duration-200 active:scale-[0.98]"
              >
                <Phone size={20} />
                Call (555) 247-8629
              </a>
              <a
                href="#contact"
                onClick={() => trackEvent('hero_cta_clicked', { label: 'get_estimate' })}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-apple-surface text-apple-dark text-[17px] font-semibold rounded-xl hover:bg-apple-border-subtle transition-all duration-200 active:scale-[0.98]"
              >
                Get Free Estimate
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Star, label: '4.9★ rating', sub: '800+ reviews' },
                { icon: Shield, label: 'Licensed & Insured', sub: 'All techs verified' },
                { icon: Clock, label: 'Same-day service', sub: 'Avg. 90 min response' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-apple-blue-light flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-apple-blue" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-apple-dark leading-tight">{label}</p>
                    <p className="text-[12px] text-apple-secondary">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Visual card */}
          <div className="relative">
            {/* Main card */}
            <div className="bg-white rounded-3xl shadow-modal p-8 border border-apple-border-subtle">
              {/* Status header */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-apple-border-subtle">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-apple-blue flex items-center justify-center">
                    <Phone size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-apple-dark">GrowBridge Plumbing Dispatch</p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-status-green rounded-full" />
                      <p className="text-[13px] text-apple-secondary">Techs available now</p>
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1.5 bg-status-green-bg text-status-green text-[12px] font-semibold rounded-full">
                  Open 24/7
                </span>
              </div>

              {/* Active jobs ticker */}
              <div className="space-y-3 mb-6">
                {[
                  { icon: '🔧', service: 'Water heater replacement', time: 'En route — 12 min away', color: 'text-apple-blue' },
                  { icon: '🚿', service: 'Emergency drain unclog', time: 'Completed — 4.9★ review left', color: 'text-status-green' },
                  { icon: '🪠', service: 'Toilet repair', time: 'Scheduled — today 2:30pm', color: 'text-status-amber' },
                ].map((job) => (
                  <div
                    key={job.service}
                    className="flex items-center gap-4 p-4 bg-apple-surface rounded-xl"
                  >
                    <span className="text-2xl">{job.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[14px] font-semibold text-apple-dark truncate">{job.service}</p>
                      <p className={`text-[12px] font-medium ${job.color}`}>{job.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '90 min', label: 'Avg arrival' },
                  { value: '4.9★', label: 'Google rating' },
                  { value: '15yr', label: 'In business' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center py-4 bg-apple-surface rounded-xl">
                    <p className="text-[20px] font-bold text-apple-dark tracking-tight">{value}</p>
                    <p className="text-[11px] text-apple-secondary mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating review card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-float p-4 border border-apple-border-subtle max-w-[220px] hidden lg:block">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#FF9F0A" stroke="none" />
                ))}
              </div>
              <p className="text-[13px] text-apple-dark leading-snug font-medium">
                "Showed up in 45 minutes. Fixed our burst pipe. Couldn't believe how fast."
              </p>
              <p className="text-[11px] text-apple-secondary mt-2">— Mike T., Tacoma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
