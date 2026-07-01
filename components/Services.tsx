'use client'

import { Phone } from 'lucide-react'
import { trackServiceClick } from '@/lib/analytics'

const services = [
  {
    emoji: '🚨',
    title: 'Emergency Plumbing',
    description: 'Burst pipe at 3am? Flooding basement? We answer every call. A licensed tech is at your door in under 2 hours — any time, any day.',
    tag: 'Most Requested',
    tagStyle: 'bg-red-50 dark:bg-red-950/60 text-status-red border border-status-red/20',
    iconGrad: 'from-red-400/25 to-orange-400/25 dark:from-red-500/30 dark:to-orange-500/30',
    hoverGrad: 'group-hover:from-red-400/40 group-hover:to-orange-400/40',
    glowColor: 'rgba(255,59,48,0.12)',
    image: '/2.jpeg',
  },
  {
    emoji: '🔥',
    title: 'Water Heater',
    description: 'No hot water ruins your morning. We repair or replace all brands — tank and tankless — same day. Full install in under 3 hours.',
    tag: 'Same-Day',
    tagStyle: 'bg-amber-50 dark:bg-amber-950/60 text-status-amber border border-status-amber/20',
    iconGrad: 'from-orange-400/25 to-amber-400/25 dark:from-orange-400/30 dark:to-amber-400/30',
    hoverGrad: 'group-hover:from-orange-400/40 group-hover:to-amber-400/40',
    glowColor: 'rgba(255,159,10,0.12)',
    image: '/water heater.jpeg',
  },
  {
    emoji: '🪠',
    title: 'Drain Cleaning',
    description: 'Slow drains or complete blockages cleared fast with hydro-jetting and snaking. Includes a free camera inspection so you see exactly what we found.',
    tag: 'Free Camera',
    tagStyle: 'bg-green-50 dark:bg-green-950/60 text-status-green border border-status-green/20',
    iconGrad: 'from-green-400/25 to-teal-400/25 dark:from-green-400/30 dark:to-teal-400/30',
    hoverGrad: 'group-hover:from-green-400/40 group-hover:to-teal-400/40',
    glowColor: 'rgba(52,199,89,0.12)',
    image: '/drain cleaning.jpeg',
  },
  {
    emoji: '🚽',
    title: 'Toilet Repair',
    description: 'Running, rocking, clogged, or not flushing right. We fix every toilet brand and model. Most repairs done in under an hour.',
    tag: null,
    tagStyle: '',
    iconGrad: 'from-apple-blue/20 to-blue-400/20 dark:from-apple-blue/25 dark:to-blue-400/25',
    hoverGrad: 'group-hover:from-apple-blue/35 group-hover:to-blue-400/35',
    glowColor: 'rgba(0,113,227,0.12)',
    image: '/toilet repair.jpeg',
  },
  {
    emoji: '🚰',
    title: 'Faucet & Fixture',
    description: 'Dripping faucets waste up to 3,000 gallons a year. We install and repair kitchen, bathroom, and outdoor faucets — all brands.',
    tag: null,
    tagStyle: '',
    iconGrad: 'from-cyan-400/20 to-apple-blue/20 dark:from-cyan-400/25 dark:to-apple-blue/25',
    hoverGrad: 'group-hover:from-cyan-400/35 group-hover:to-apple-blue/35',
    glowColor: 'rgba(0,194,255,0.12)',
  },
  {
    emoji: '🏗️',
    title: 'Sewer Line',
    description: 'Full sewer inspections, cleaning, and trenchless repairs. We diagnose the problem before quoting — no surprise charges, ever.',
    tag: 'Trenchless',
    tagStyle: 'bg-amber-50 dark:bg-amber-950/60 text-status-amber border border-status-amber/20',
    iconGrad: 'from-amber-400/25 to-yellow-400/25 dark:from-amber-400/30 dark:to-yellow-400/30',
    hoverGrad: 'group-hover:from-amber-400/40 group-hover:to-yellow-400/40',
    glowColor: 'rgba(255,159,10,0.12)',
  },
  {
    emoji: '🔧',
    title: 'Pipe Repair & Repiping',
    description: 'Leaking, corroded, or noisy pipes fixed right. Full repiping for older homes done cleanly — minimal drywall damage, full cleanup.',
    tag: null,
    tagStyle: '',
    iconGrad: 'from-violet-400/20 to-purple-500/20 dark:from-violet-400/25 dark:to-purple-500/25',
    hoverGrad: 'group-hover:from-violet-400/35 group-hover:to-purple-500/35',
    glowColor: 'rgba(123,97,255,0.12)',
  },
  {
    emoji: '⛽',
    title: 'Gas Line',
    description: 'Licensed gas line installation, relocation, and leak detection. We work with utilities and pull permits — safe and code-compliant.',
    tag: 'Licensed',
    tagStyle: 'bg-blue-50 dark:bg-blue-950/60 text-apple-blue border border-apple-blue/20',
    iconGrad: 'from-slate-400/20 to-zinc-500/20 dark:from-slate-400/25 dark:to-zinc-500/25',
    hoverGrad: 'group-hover:from-slate-400/35 group-hover:to-zinc-500/35',
    glowColor: 'rgba(100,116,139,0.12)',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white dark:bg-zinc-950 relative overflow-hidden">
      {/* Subtle mesh */}
      <div className="absolute inset-0 mesh-subtle pointer-events-none opacity-60" />
      <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none"
           style={{ background: 'radial-gradient(circle, hsla(262,100%,65%,0.05) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-[13px] font-semibold text-apple-blue uppercase tracking-widest mb-3">Services</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-apple-dark dark:text-white tracking-tighter leading-tight mb-4">
            Every plumbing problem.
            <br />
            <span className="gradient-text-brand">One phone call.</span>
          </h2>
          <p className="text-[19px] text-apple-secondary dark:text-zinc-400 leading-relaxed">
            From dripping faucets to full repiping — our licensed techs handle it all.
            Upfront pricing before we start. Satisfaction guaranteed.
          </p>
        </div>

        {/* Van photo banner */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl" style={{ height: '420px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/1.jpeg"
            alt="GrowBridge Plumbing van and technician ready to serve"
            className="w-full h-full object-cover object-[center_15%] hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent" />
          {/* Overlay badge */}
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <div className="flex items-center gap-2 bg-zinc-900/80 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-green opacity-75" />
                <span className="relative w-2 h-2 bg-status-green rounded-full" />
              </span>
              <span className="text-[13px] font-semibold text-white">Licensed & Insured</span>
            </div>
            <div className="bg-zinc-900/80 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
              <span className="text-[13px] font-semibold text-white">24/7 Service</span>
            </div>
            <div className="bg-zinc-900/80 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
              <span className="text-[13px] font-semibold text-white">Serving Your Community</span>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            'image' in service && service.image ? (
              /* Photo background card */
              <a
                key={service.title}
                href="#contact"
                onClick={() => trackServiceClick(service.title)}
                style={{ animationDelay: `${i * 60}ms` }}
                className="group relative flex flex-col justify-end rounded-2xl overflow-hidden shadow-card hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image as string}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/50 to-zinc-950/10" />

                {service.tag && (
                  <span className={`absolute top-4 right-4 px-2.5 py-1 text-[11px] font-semibold rounded-full backdrop-blur-sm ${service.tagStyle}`}>
                    {service.tag}
                  </span>
                )}

                <div className="relative p-5">
                  <h3 className="text-[17px] font-semibold text-white mb-1.5">{service.emoji} {service.title}</h3>
                  <p className="text-[13px] text-zinc-300 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center gap-1.5 text-amber-400 text-[13px] font-semibold">
                    Schedule service
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ) : (
              /* Standard card */
              <a
                key={service.title}
                href="#contact"
                onClick={() => trackServiceClick(service.title)}
                style={{ animationDelay: `${i * 60}ms`, ['--glow' as string]: service.glowColor }}
                className="group relative flex flex-col p-6 bg-white dark:bg-zinc-900 border border-apple-border-subtle dark:border-zinc-800 rounded-2xl shadow-card
                           hover:shadow-[0_16px_48px_var(--glow)] hover:-translate-y-2 hover:border-transparent
                           transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                     style={{ background: `linear-gradient(135deg, ${service.glowColor} 0%, transparent 60%)` }} />
                <div className="absolute left-0 top-5 bottom-5 w-[3px] rounded-r-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"
                     style={{ background: `linear-gradient(to bottom, ${service.glowColor.replace('0.12', '0.8')}, ${service.glowColor.replace('0.12', '0.4')})` }} />

                {service.tag && (
                  <span className={`absolute top-4 right-4 px-2.5 py-1 text-[11px] font-semibold rounded-full ${service.tagStyle}`}>
                    {service.tag}
                  </span>
                )}

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.iconGrad} ${service.hoverGrad} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-white/50 dark:border-zinc-700/50`}>
                  <span className="text-3xl leading-none">{service.emoji}</span>
                </div>

                <h3 className="text-[17px] font-semibold text-apple-dark dark:text-white mb-2 group-hover:text-apple-blue transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-[14px] text-apple-secondary dark:text-zinc-400 leading-relaxed flex-1">
                  {service.description}
                </p>

                <div className="flex items-center gap-1.5 mt-5 text-apple-blue text-[13px] font-semibold">
                  Schedule service
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            )
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden"
             style={{ background: 'linear-gradient(135deg, rgba(0,113,227,0.06) 0%, rgba(123,97,255,0.04) 50%, rgba(0,194,255,0.04) 100%)', border: '1px solid rgba(0,113,227,0.15)' }}>
          <div className="absolute inset-0 dot-grid opacity-[0.04] pointer-events-none" />
          <div className="relative">
            <p className="text-[19px] font-semibold text-apple-dark dark:text-white">Don't see your issue listed?</p>
            <p className="text-[15px] text-apple-secondary dark:text-zinc-400">Call us — if it involves pipes, water, or gas, we handle it.</p>
          </div>
          <a
            href="tel:5552478629"
            className="group relative flex-shrink-0 flex items-center gap-2.5 px-8 py-3.5 text-white text-[15px] font-semibold rounded-xl shadow-elevated hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0071E3 0%, #7B61FF 100%)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            <Phone size={17} className="group-hover:rotate-12 transition-transform duration-300 relative" />
            <span className="relative">Call (555) 247-8629</span>
          </a>
        </div>
      </div>
    </section>
  )
}
