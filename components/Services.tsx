'use client'

import { Phone } from 'lucide-react'
import { trackServiceClick } from '@/lib/analytics'

const services = [
  {
    emoji: '🚨',
    title: 'Emergency Plumbing',
    description: 'Burst pipe at 3am? Flooding basement? We answer every call. A licensed tech is at your door in under 2 hours — any time, any day.',
    tag: 'Most Requested',
    tagStyle: 'bg-status-red-bg text-status-red border border-status-red/20',
    href: '#contact',
  },
  {
    emoji: '🔥',
    title: 'Water Heater',
    description: 'No hot water ruins your morning. We repair or replace all brands — tank and tankless — same day. Full install in under 3 hours.',
    tag: 'Same-Day',
    tagStyle: 'bg-apple-blue-light text-apple-blue border border-apple-blue/20',
    href: '#contact',
  },
  {
    emoji: '🪠',
    title: 'Drain Cleaning',
    description: 'Slow drains or complete blockages cleared fast with hydro-jetting and snaking. Includes a free camera inspection so you see exactly what we found.',
    tag: 'Free Camera',
    tagStyle: 'bg-status-green-bg text-status-green border border-status-green/20',
    href: '#contact',
  },
  {
    emoji: '🚽',
    title: 'Toilet Repair',
    description: 'Running, rocking, clogged, or not flushing right. We fix every toilet brand and model. Most repairs done in under an hour.',
    tag: null,
    tagStyle: '',
    href: '#contact',
  },
  {
    emoji: '🚰',
    title: 'Faucet & Fixture',
    description: 'Dripping faucets waste up to 3,000 gallons a year. We install and repair kitchen, bathroom, and outdoor faucets — all brands.',
    tag: null,
    tagStyle: '',
    href: '#contact',
  },
  {
    emoji: '🏗️',
    title: 'Sewer Line',
    description: 'Full sewer inspections, cleaning, and trenchless repairs. We diagnose the problem before quoting — no surprise charges, ever.',
    tag: 'Trenchless',
    tagStyle: 'bg-status-amber-bg text-status-amber border border-status-amber/20',
    href: '#contact',
  },
  {
    emoji: '🔧',
    title: 'Pipe Repair & Repiping',
    description: 'Leaking, corroded, or noisy pipes fixed right. Full repiping for older homes done cleanly — minimal drywall damage, full cleanup.',
    tag: null,
    tagStyle: '',
    href: '#contact',
  },
  {
    emoji: '⛽',
    title: 'Gas Line',
    description: 'Licensed gas line installation, relocation, and leak detection. We work with utilities and pull permits — safe and code-compliant.',
    tag: 'Licensed',
    tagStyle: 'bg-apple-blue-light text-apple-blue border border-apple-blue/20',
    href: '#contact',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-apple-blue/3 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[13px] font-semibold text-apple-blue uppercase tracking-widest mb-3">
            Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-apple-dark tracking-tighter leading-tight mb-4">
            Every plumbing problem.
            <br />One phone call.
          </h2>
          <p className="text-[19px] text-apple-secondary leading-relaxed">
            From dripping faucets to full repiping — our licensed techs handle it all.
            Upfront pricing before we start. Satisfaction guaranteed.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <a
              key={service.title}
              href={service.href}
              onClick={() => trackServiceClick(service.title)}
              style={{ animationDelay: `${i * 60}ms` }}
              className="group relative flex flex-col p-6 bg-white border border-apple-border-subtle rounded-2xl shadow-card
                         hover:shadow-lift-blue hover:-translate-y-2 hover:border-apple-blue/25
                         transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Blue left accent bar */}
              <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-gradient-to-b from-apple-blue to-blue-400 rounded-r-full transform origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

              {/* Hover glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/0 to-apple-blue/0 group-hover:from-apple-blue/[0.03] group-hover:to-transparent transition-all duration-300 pointer-events-none rounded-2xl" />

              {/* Badge */}
              {service.tag && (
                <span className={`absolute top-4 right-4 px-2.5 py-1 text-[11px] font-semibold rounded-full ${service.tagStyle}`}>
                  {service.tag}
                </span>
              )}

              {/* Icon box */}
              <div className="w-14 h-14 rounded-2xl bg-apple-surface flex items-center justify-center mb-4 group-hover:bg-apple-blue-light group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="text-3xl leading-none">{service.emoji}</span>
              </div>

              {/* Content */}
              <h3 className="text-[17px] font-semibold text-apple-dark mb-2 group-hover:text-apple-blue transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-[14px] text-apple-secondary leading-relaxed flex-1">
                {service.description}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-1.5 mt-5 text-apple-blue text-[13px] font-semibold">
                Schedule service
                <svg
                  className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-200"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-apple-surface to-apple-blue-light rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-apple-border-subtle hover:border-apple-blue/20 transition-colors duration-300">
          <div>
            <p className="text-[19px] font-semibold text-apple-dark">Don't see your issue listed?</p>
            <p className="text-[15px] text-apple-secondary">
              Call us — if it involves pipes, water, or gas, we handle it.
            </p>
          </div>
          <a
            href="tel:5552478629"
            className="group flex-shrink-0 flex items-center gap-2.5 px-8 py-3.5 bg-apple-blue text-white text-[15px] font-semibold rounded-xl hover:bg-apple-blue-hover hover:shadow-glow-blue hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
          >
            <Phone size={17} className="group-hover:rotate-12 transition-transform duration-300" />
            Call (555) 247-8629
          </a>
        </div>
      </div>
    </section>
  )
}
