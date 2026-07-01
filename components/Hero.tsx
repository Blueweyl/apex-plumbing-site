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
    <section className="relative min-h-screen flex items-center overflow-hidden section-bg dark:bg-zinc-950 pt-16">

      {/* Background photo — slightly transparent */}
      <div className="absolute inset-0 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/worriedowner-plumber.jpeg"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.8 }}
        />
      </div>

      {/* Mesh gradient base */}
      <div className="absolute inset-0 mesh-light dark:mesh-dark pointer-events-none" />
      {/* Strong left overlay so text is always readable over the photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/75 to-transparent dark:from-zinc-950/95 dark:via-zinc-950/70 dark:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60 dark:from-zinc-950/40 dark:to-zinc-950/60 pointer-events-none" />

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

            {/* Headline */}
            <h1 className="text-6xl lg:text-7xl font-black text-apple-dark dark:text-white tracking-tighter leading-[1.02] mb-6 text-balance">
              Plumbing problems{' '}
              <span className="relative inline-block gradient-text-brand">
                fixed today.
              </span>
              {' '}Not next week.
            </h1>

            <p className="text-[22px] text-black dark:text-zinc-100 leading-relaxed max-w-lg font-bold">
              Licensed plumbers at your door in under 2 hours. Upfront pricing
              before we touch a single pipe. Guaranteed work — or we come back free.
            </p>

            {/* Emergency badge — below paragraph */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mt-5 mb-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-default"
                 style={{ background: '#FF3B30' }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-70" />
                <span className="relative w-2.5 h-2.5 bg-white rounded-full" />
              </span>
              <span className="text-[13px] font-bold text-white uppercase tracking-wide">
                24/7 Emergency Service Available
              </span>
            </div>

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
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:brightness-110 transition-all duration-300"
                       style={{ background: '#003A9B' }}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[17px] font-bold text-apple-dark dark:text-white leading-tight">{label}</p>
                    <p className="text-[14px] font-medium text-apple-secondary dark:text-zinc-400">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Plumber photo with dispatch overlay */}
          <div className="relative animate-scale-in delay-200">

            {/* Photo container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: '620px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/0.jpeg"
                alt="Professional GrowBridge plumber ready to help"
                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
              />

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-950/20" />

              {/* Floating badge — top right */}
              <div className="absolute top-5 right-5 flex items-center gap-2 bg-zinc-900/80 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 shadow-float animate-float">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-green opacity-75" />
                  <span className="relative w-2 h-2 bg-status-green rounded-full" />
                </span>
                <span className="text-[13px] font-semibold text-white">3 techs nearby</span>
              </div>

              {/* Dispatch card overlay — bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 rounded-b-3xl border-t border-white/10"
                   style={{ background: 'rgba(15,15,18,0.82)', backdropFilter: 'blur(20px)' }}>

                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 animate-glow-pulse"
                         style={{ background: 'linear-gradient(135deg, #0071E3 0%, #7B61FF 100%)' }}>
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-white">GrowBridge Plumbing Dispatch</p>
                      <div className="flex items-center gap-1.5">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-green opacity-75" />
                          <span className="relative w-1.5 h-1.5 bg-status-green rounded-full" />
                        </span>
                        <p className="text-[12px] text-zinc-400">Techs available now</p>
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-green-950/60 text-status-green text-[11px] font-semibold rounded-full border border-status-green/20">
                    Open 24/7
                  </span>
                </div>

                {/* Jobs */}
                <div className="space-y-2 mb-4">
                  {jobs.map((job) => (
                    <div key={job.service} className="group flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-200 cursor-default">
                      <span className="text-xl group-hover:scale-125 transition-transform duration-300">{job.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-semibold text-white truncate">{job.service}</p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${job.dot} animate-pulse`} />
                          <p className={`text-[11px] font-medium ${job.textColor}`}>{job.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: '90 min', label: 'Avg arrival' },
                    { value: '4.9★', label: 'Google rating' },
                    { value: '15yr', label: 'In business' },
                  ].map(({ value, label }) => (
                    <div key={label} className="text-center py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-200 cursor-default border border-white/5">
                      <p className="text-[18px] font-bold text-white tracking-tight">{value}</p>
                      <p className="text-[10px] text-zinc-400 mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating review card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-float p-4 border border-apple-border-subtle dark:border-zinc-700 max-w-[210px] hidden lg:block animate-float-slow hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#FF9F0A" stroke="none" />)}
              </div>
              <p className="text-[12px] text-apple-dark dark:text-white leading-snug font-medium">
                "Showed up in 45 minutes. Fixed our burst pipe. Couldn't believe how fast."
              </p>
              <p className="text-[11px] text-apple-secondary dark:text-zinc-500 mt-2">— Mike T., Tacoma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
