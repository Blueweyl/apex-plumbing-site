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
      <div className="absolute inset-0 bg-gradient-to-br from-apple-blue-light via-white to-white dark:from-apple-blue/10 dark:via-zinc-950 dark:to-zinc-950 pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      <div className="absolute top-20 right-8 w-80 h-80 bg-apple-blue/8 dark:bg-apple-blue/10 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute top-56 right-48 w-52 h-52 bg-blue-300/6 dark:bg-blue-400/8 rounded-full blur-2xl pointer-events-none animate-float-slow delay-2000" />
      <div className="absolute bottom-16 left-8 w-96 h-96 bg-apple-blue/5 dark:bg-apple-blue/8 rounded-full blur-3xl pointer-events-none animate-float-reverse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-status-red-bg dark:bg-red-950/60 border border-status-red/20 rounded-full mb-8 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-red opacity-60" />
                <span className="relative w-2.5 h-2.5 bg-status-red rounded-full" />
              </span>
              <span className="text-[13px] font-semibold text-status-red uppercase tracking-wide">
                24/7 Emergency Service Available
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-apple-dark dark:text-white tracking-tighter leading-[1.05] mb-6 text-balance">
              Plumbing problems{' '}
              <span className="relative inline-block">
                <span className="text-apple-blue">fixed today.</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-apple-blue/20 rounded-full" />
              </span>
              {' '}Not next week.
            </h1>

            <p className="text-[19px] text-apple-secondary dark:text-zinc-400 leading-relaxed mb-10 max-w-lg">
              Licensed plumbers at your door in under 2 hours. Upfront pricing
              before we touch a single pipe. Guaranteed work — or we come back free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="tel:5552478629"
                onClick={() => { trackPhoneClick('hero'); trackEvent('hero_cta_clicked', { label: 'call_now' }) }}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-apple-blue text-white text-[17px] font-semibold rounded-xl shadow-elevated hover:bg-apple-blue-hover hover:shadow-glow-blue hover:-translate-y-1 transition-all duration-200 active:scale-[0.97]"
              >
                <Phone size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                Call (555) 247-8629
              </a>
              <a
                href="#contact"
                onClick={() => trackEvent('hero_cta_clicked', { label: 'get_estimate' })}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-apple-surface dark:bg-zinc-800 text-apple-dark dark:text-white text-[17px] font-semibold rounded-xl border border-apple-border-subtle dark:border-zinc-700 hover:border-apple-blue/30 hover:bg-apple-blue-light dark:hover:bg-zinc-700 hover:-translate-y-1 transition-all duration-200 active:scale-[0.97]"
              >
                Get Free Estimate
                <svg className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="flex flex-wrap gap-5">
              {[
                { icon: Star, label: '4.9★ rating', sub: '800+ reviews' },
                { icon: Shield, label: 'Licensed & Insured', sub: 'All techs verified' },
                { icon: Clock, label: 'Same-day service', sub: 'Avg. 90 min response' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3 group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-apple-blue-light dark:bg-apple-blue/20 flex items-center justify-center flex-shrink-0 group-hover:bg-apple-blue group-hover:shadow-glow-blue group-hover:scale-110 transition-all duration-300">
                    <Icon size={18} className="text-apple-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-apple-dark dark:text-white leading-tight">{label}</p>
                    <p className="text-[12px] text-apple-secondary dark:text-zinc-500">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right card */}
          <div className="relative animate-scale-in delay-200">
            <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-modal dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-8 border border-apple-border-subtle dark:border-zinc-800 hover:shadow-[0_32px_80px_rgba(0,0,0,0.16)] dark:hover:shadow-[0_32px_80px_rgba(0,0,0,0.5)] transition-shadow duration-500 hover-gradient-border">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-apple-border-subtle dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-apple-blue flex items-center justify-center animate-glow-pulse">
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

              <div className="space-y-2.5 mb-6">
                {jobs.map((job) => (
                  <div key={job.service} className="group flex items-center gap-4 p-4 bg-apple-surface dark:bg-zinc-800 rounded-xl hover:bg-apple-blue-light dark:hover:bg-zinc-700 hover:scale-[1.01] transition-all duration-200 cursor-default">
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

              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '90 min', label: 'Avg arrival' },
                  { value: '4.9★', label: 'Google rating' },
                  { value: '15yr', label: 'In business' },
                ].map(({ value, label }) => (
                  <div key={label} className="group text-center py-4 bg-apple-surface dark:bg-zinc-800 rounded-xl hover:bg-apple-blue hover:shadow-glow-blue hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                    <p className="text-[20px] font-bold text-apple-dark dark:text-white tracking-tight group-hover:text-white transition-colors duration-300">{value}</p>
                    <p className="text-[11px] text-apple-secondary dark:text-zinc-400 mt-0.5 group-hover:text-blue-100 transition-colors duration-300">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-float p-4 border border-apple-border-subtle dark:border-zinc-800 max-w-[220px] hidden lg:block animate-float-slow hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#FF9F0A" stroke="none" />)}
              </div>
              <p className="text-[13px] text-apple-dark dark:text-white leading-snug font-medium">
                "Showed up in 45 minutes. Fixed our burst pipe. Couldn't believe how fast."
              </p>
              <p className="text-[11px] text-apple-secondary dark:text-zinc-400 mt-2">— Mike T., Tacoma</p>
            </div>

            <div className="absolute -top-4 -right-4 hidden lg:flex items-center gap-2 bg-white dark:bg-zinc-900 rounded-full px-4 py-2 shadow-float border border-apple-border-subtle dark:border-zinc-800 animate-float delay-1000 hover:shadow-glow-green transition-shadow duration-300">
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
