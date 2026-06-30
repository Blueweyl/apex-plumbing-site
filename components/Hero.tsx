'use client'

import { Phone, Clock, Shield, Star } from 'lucide-react'
import { trackEvent, trackPhoneClick } from '@/lib/analytics'

const jobs = [
  { emoji: '🔧', service: 'Water heater replacement', time: 'En route — 12 min away', dot: 'bg-apple-blue', textColor: 'text-apple-blue' },
  { emoji: '🚿', service: 'Emergency drain unclog', time: 'Completed — 4.9★ review left', dot: 'bg-status-green', textColor: 'text-status-green' },
  { emoji: '🪠', service: 'Toilet repair', time: 'Scheduled — today 2:30pm', dot: 'bg-status-amber', textColor: 'text-status-amber' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-zinc-950 pt-16">

      {/* Mesh gradient base */}
      <div className="absolute inset-0 mesh-light dark:mesh-dark pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white dark:via-zinc-950/60 dark:to-zinc-950 pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-[0.025] dark:opacity-[0.04] pointer-events-none" />

      {/* Floating color orbs */}
      <div className="absolute top-16 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none animate-float"
           style={{ background: 'radial-gradient(circle, hsla(211,100%,44%,0.15) 0%, transparent 70%)' }} />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none animate-float-slow delay-2000"
           style={{ background: 'radial-gradient(circle, hsla(262,100%,65%,0.12) 0%, transparent 70%)' }} />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none animate-float-reverse delay-1000"
           style={{ background: 'radial-gradient(circle, hsla(190,100%,50%,0.10) 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 left-1/4 w-[200px] h-[200px] rounded-full blur-[60px] pointer-events-none animate-float delay-3000"
           style={{ background: 'radial-gradient(circle, hsla(340,100%,60%,0.07) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="animate-fade-up">

            {/* Emergency badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default"
                 style={{ background: 'linear-gradient(135deg, rgba(255,59,48,0.08) 0%, rgba(255,107,53,0.06) 100%)', border: '1px solid rgba(255,59,48,0.2)' }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-red opacity-60" />
                <span className="relative w-2.5 h-2.5 bg-status-red rounded-full" />
              </span>
              <span className="text-[13px] font-semibold text-status-red uppercase tracking-wide">
                24/7 Emergency Service Available
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-apple-dark dark:text-white tracking-tighter leading-[1.05] mb-6 text-balance">
              Plumbing problems{' '}
              <span className="relative inline-block gradient-text-brand">
                fixed today.
              </span>
              {' '}Not next week.
            </h1>

            <p className="text-[19px] text-apple-secondary dark:text-zinc-400 leading-relaxed mb-10 max-w-lg">
              Licensed plumbers at your door in under 2 hours. Upfront pricing
              before we touch a single pipe. Guaranteed work — or we come back free.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="tel:5552478629"
                onClick={() => { trackPhoneClick('hero'); trackEvent('hero_cta_clicked', { label: 'call_now' }) }}
                className="group relative flex items-center justify-center gap-3 px-8 py-4 text-white text-[17px] font-semibold rounded-xl shadow-elevated hover:-translate-y-1 transition-all duration-200 active:scale-[0.97] overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0071E3 0%, #0052D4 100%)' }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ background: 'linear-gradient(135deg, #0086FF 0%, #0071E3 100%)' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <Phone size={20} className="relative group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative">Call (555) 247-8629</span>
              </a>
              <a
                href="#contact"
                onClick={() => trackEvent('hero_cta_clicked', { label: 'get_estimate' })}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm text-apple-dark dark:text-white text-[17px] font-semibold rounded-xl border border-apple-border-subtle dark:border-zinc-700 hover:border-apple-blue/40 hover:bg-apple-blue-light dark:hover:bg-zinc-700 hover:-translate-y-1 transition-all duration-200 active:scale-[0.97]"
              >
                Get Free Estimate
                <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-5">
              {[
                { icon: Star, label: '4.9★ rating', sub: '800+ reviews', gradient: 'from-amber-400/20 to-orange-400/20' },
                { icon: Shield, label: 'Licensed & Insured', sub: 'All techs verified', gradient: 'from-status-green/20 to-teal-400/20' },
                { icon: Clock, label: 'Same-day service', sub: 'Avg. 90 min response', gradient: 'from-apple-blue/20 to-accent-purple/20' },
              ].map(({ icon: Icon, label, sub, gradient }) => (
                <div key={label} className="flex items-center gap-3 group cursor-default">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-glow-blue transition-all duration-300`}>
                    <Icon size={18} className="text-apple-blue" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-apple-dark dark:text-white leading-tight">{label}</p>
                    <p className="text-[12px] text-apple-secondary dark:text-zinc-500">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — dispatch card */}
          <div className="relative animate-scale-in delay-200">
            <div className="relative rounded-3xl p-8 border border-apple-border-subtle dark:border-zinc-700 overflow-hidden"
                 style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)' }}>
              {/* Card mesh bg */}
              <div className="absolute inset-0 pointer-events-none"
                   style={{ backgroundImage: 'radial-gradient(at 100% 0%, hsla(262,100%,65%,0.06) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(211,100%,44%,0.05) 0px, transparent 50%)' }} />
              <div className="absolute inset-0 dark:block hidden pointer-events-none rounded-3xl"
                   style={{ background: 'rgba(24,24,27,0.90)', backdropFilter: 'blur(20px)' }} />

              <div className="relative">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-apple-border-subtle dark:border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center animate-glow-pulse"
                         style={{ background: 'linear-gradient(135deg, #0071E3 0%, #7B61FF 100%)' }}>
                      <Phone size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-apple-dark dark:text-white">GrowBridge Plumbing Dispatch</p>
                      <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-green opacity-75" />
                          <span className="relative w-2 h-2 bg-status-green rounded-full" />
                        </span>
                        <p className="text-[13px] text-apple-secondary dark:text-zinc-400">Techs available now</p>
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 bg-status-green-bg dark:bg-green-950/60 text-status-green text-[12px] font-semibold rounded-full border border-status-green/20">
                    Open 24/7
                  </span>
                </div>

                {/* Jobs */}
                <div className="space-y-2.5 mb-6">
                  {jobs.map((job) => (
                    <div key={job.service} className="group flex items-center gap-4 p-4 bg-apple-surface/80 dark:bg-zinc-800/80 rounded-xl hover:bg-apple-blue-light dark:hover:bg-zinc-700 hover:scale-[1.01] transition-all duration-200 cursor-default">
                      <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{job.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[14px] font-semibold text-apple-dark dark:text-white truncate">{job.service}</p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${job.dot} animate-pulse`} />
                          <p className={`text-[12px] font-medium ${job.textColor}`}>{job.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: '90 min', label: 'Avg arrival', grad: 'from-apple-blue/10 to-accent-purple/10' },
                    { value: '4.9★', label: 'Google rating', grad: 'from-amber-400/10 to-orange-400/10' },
                    { value: '15yr', label: 'In business', grad: 'from-status-green/10 to-teal-400/10' },
                  ].map(({ value, label, grad }) => (
                    <div key={label} className={`group text-center py-4 bg-gradient-to-br ${grad} dark:bg-zinc-800 rounded-xl hover:bg-apple-blue hover:shadow-glow-blue hover:-translate-y-0.5 transition-all duration-300 cursor-default border border-white/50 dark:border-zinc-700`}>
                      <p className="text-[20px] font-bold text-apple-dark dark:text-white tracking-tight group-hover:text-white transition-colors duration-300">{value}</p>
                      <p className="text-[11px] text-apple-secondary dark:text-zinc-400 mt-0.5 group-hover:text-blue-100 transition-colors duration-300">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating review */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-float p-4 border border-apple-border-subtle dark:border-zinc-700 max-w-[220px] hidden lg:block animate-float-slow hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#FF9F0A" stroke="none" />)}
              </div>
              <p className="text-[13px] text-apple-dark dark:text-white leading-snug font-medium">
                "Showed up in 45 minutes. Fixed our burst pipe. Couldn't believe how fast."
              </p>
              <p className="text-[11px] text-apple-secondary dark:text-zinc-400 mt-2">— Mike T., Tacoma</p>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 hidden lg:flex items-center gap-2 bg-white dark:bg-zinc-900 rounded-full px-4 py-2 shadow-float border border-apple-border-subtle dark:border-zinc-800 animate-float delay-1000">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-green opacity-75" />
                <span className="relative w-2 h-2 bg-status-green rounded-full" />
              </span>
              <span className="text-[13px] font-semibold text-apple-dark dark:text-white">3 techs nearby</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
