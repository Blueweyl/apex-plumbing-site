'use client'

import { trackServiceClick } from '@/lib/analytics'

const services = [
  {
    emoji: '🚨',
    title: 'Emergency Plumbing',
    description: 'Burst pipe at 3am? Flooding basement? We answer every call. A licensed tech is at your door in under 2 hours — any time, any day.',
    tag: 'Most Requested',
    tagColor: 'bg-status-red-bg text-status-red',
    href: '#contact',
  },
  {
    emoji: '🔥',
    title: 'Water Heater',
    description: 'No hot water ruins your morning. We repair or replace all brands — tank and tankless — same day. Full install in under 3 hours.',
    tag: 'Same-Day',
    tagColor: 'bg-apple-blue-light text-apple-blue',
    href: '#contact',
  },
  {
    emoji: '🪠',
    title: 'Drain Cleaning',
    description: 'Slow drains or complete blockages cleared fast with hydro-jetting and snaking. Includes a free camera inspection so you see exactly what we found.',
    tag: 'Free Camera',
    tagColor: 'bg-status-green-bg text-status-green',
    href: '#contact',
  },
  {
    emoji: '🚽',
    title: 'Toilet Repair',
    description: 'Running, rocking, clogged, or not flushing right. We fix every toilet brand and model. Most repairs done in under an hour.',
    tag: null,
    tagColor: '',
    href: '#contact',
  },
  {
    emoji: '🚰',
    title: 'Faucet & Fixture',
    description: 'Dripping faucets waste up to 3,000 gallons a year. We install and repair kitchen, bathroom, and outdoor faucets — all brands.',
    tag: null,
    tagColor: '',
    href: '#contact',
  },
  {
    emoji: '🏗️',
    title: 'Sewer Line',
    description: 'Full sewer inspections, cleaning, and trenchless repairs. We diagnose the problem before quoting — no surprise charges, ever.',
    tag: 'Trenchless',
    tagColor: 'bg-status-amber-bg text-status-amber',
    href: '#contact',
  },
  {
    emoji: '🔧',
    title: 'Pipe Repair & Repiping',
    description: 'Leaking, corroded, or noisy pipes fixed right. Full repiping for older homes done cleanly — minimal drywall damage, full cleanup.',
    tag: null,
    tagColor: '',
    href: '#contact',
  },
  {
    emoji: '⛽',
    title: 'Gas Line',
    description: 'Licensed gas line installation, relocation, and leak detection. We work with utilities and pull permits — safe and code-compliant.',
    tag: 'Licensed',
    tagColor: 'bg-apple-blue-light text-apple-blue',
    href: '#contact',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              onClick={() => trackServiceClick(service.title)}
              className="group relative flex flex-col p-6 bg-white border border-apple-border-subtle rounded-2xl shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              {/* Badge */}
              {service.tag && (
                <span className={`absolute top-4 right-4 px-2.5 py-1 text-[11px] font-semibold rounded-full ${service.tagColor}`}>
                  {service.tag}
                </span>
              )}

              {/* Icon */}
              <span className="text-4xl mb-4 block">{service.emoji}</span>

              {/* Content */}
              <h3 className="text-[17px] font-semibold text-apple-dark mb-2 group-hover:text-apple-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-[14px] text-apple-secondary leading-relaxed flex-1">
                {service.description}
              </p>

              {/* CTA arrow */}
              <div className="flex items-center gap-1 mt-4 text-apple-blue text-[13px] font-medium">
                Schedule service
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 bg-apple-surface rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[19px] font-semibold text-apple-dark">Don't see your issue listed?</p>
            <p className="text-[15px] text-apple-secondary">
              Call us — if it involves pipes, water, or gas, we handle it.
            </p>
          </div>
          <a
            href="tel:5552478629"
            className="flex-shrink-0 px-8 py-3.5 bg-apple-blue text-white text-[15px] font-semibold rounded-xl hover:bg-apple-blue-hover transition-colors shadow-card whitespace-nowrap"
          >
            Call (555) 247-8629
          </a>
        </div>
      </div>
    </section>
  )
}
