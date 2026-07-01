'use client'

import { useState, useEffect, useRef } from 'react'
import { CheckCircle, Star } from 'lucide-react'

const promises = [
  { icon: '💰', title: 'Upfront pricing — always', description: "We quote before we work. The price we give you is the price you pay. No trip fees, no hourly surprises.", grad: 'from-amber-400/15 to-orange-400/15', hoverGrad: 'from-amber-400/25 to-orange-400/25', barColor: '#F59E0B' },
  { icon: '🏆', title: '1-year labor warranty', description: "Every job we do is covered for a full year. If anything fails due to our work, we come back and fix it — for free.", grad: 'from-apple-blue/15 to-accent-purple/15', hoverGrad: 'from-apple-blue/25 to-accent-purple/25', barColor: '#0071E3' },
  { icon: '⚡', title: 'Same-day service', description: "Most calls answered and dispatched within 15 minutes. Emergency jobs prioritized — we understand leaks don't wait.", grad: 'from-accent-cyan/15 to-apple-blue/15', hoverGrad: 'from-accent-cyan/25 to-apple-blue/25', barColor: '#00C2FF' },
  { icon: '🛡️', title: 'Licensed & background-checked', description: "Every tech is WA state licensed, insured, and background-checked. You know who's coming before they knock.", grad: 'from-status-green/15 to-teal-400/15', hoverGrad: 'from-status-green/25 to-teal-400/25', barColor: '#34C759' },
  { icon: '🧹', title: 'We clean up after ourselves', description: "Techs wear shoe covers and lay drop cloths. When we leave, your home looks the same as when we arrived — maybe better.", grad: 'from-violet-400/15 to-accent-purple/15', hoverGrad: 'from-violet-400/25 to-accent-purple/25', barColor: '#7B61FF' },
  { icon: '📱', title: 'Instant digital invoice', description: "Pay by card, cash, or check on-site. Invoice emailed immediately after. No waiting, no paper, no follow-up calls.", grad: 'from-pink-400/15 to-accent-pink/15', hoverGrad: 'from-pink-400/25 to-accent-pink/25', barColor: '#FC466B' },
]

function useCountUp(target: number, duration: number = 1500) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const tick = (now: number) => {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(target * eased))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])
  return { count, ref }
}

export default function WhyUs() {
  const rating49 = useCountUp(49)
  const reviews = useCountUp(847)

  return (
    <section id="why-us" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Happy customer background photo */}
      <div className="absolute inset-0 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/happy customer.jpeg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Overlay — light enough to see the photo, dark enough to read text */}
      <div className="absolute inset-0 bg-white/70 dark:bg-zinc-950/85 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* Left — sticky */}
          <div className="lg:sticky lg:top-24">
            <p className="text-[13px] font-semibold text-apple-blue uppercase tracking-widest mb-3">Why choose us</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-apple-dark dark:text-white tracking-tighter leading-tight mb-6">
              The plumber your{' '}
              <span className="gradient-text-brand">neighbors trust.</span>
            </h2>
            <p className="text-[17px] text-apple-secondary dark:text-zinc-400 leading-relaxed mb-10">
              We've been serving Tacoma and surrounding areas for 15 years. Our customers
              call us back — not because they had another problem, but because they trust us.
            </p>

            {/* Rating card */}
            <div className="relative p-6 rounded-2xl mb-8 overflow-hidden"
                 style={{ background: 'linear-gradient(135deg, rgba(0,113,227,0.06) 0%, rgba(123,97,255,0.04) 100%)', border: '1px solid rgba(0,113,227,0.15)' }}>
              <div className="absolute inset-0 dot-grid opacity-[0.03] pointer-events-none" />
              <div className="relative flex items-center gap-4 mb-4">
                <div ref={rating49.ref} className="w-16 h-16 rounded-2xl flex items-center justify-center animate-glow-pulse flex-shrink-0"
                     style={{ background: 'linear-gradient(135deg, #0071E3 0%, #7B61FF 100%)' }}>
                  <span className="text-white font-black text-[22px]">{(rating49.count / 10).toFixed(1)}</span>
                </div>
                <div>
                  <p className="text-2xl font-black text-apple-dark dark:text-white tracking-tighter">/ 5.0 Google</p>
                  <p className="text-[13px] text-apple-secondary dark:text-zinc-400">Avg rating</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#FF9F0A" stroke="none" />)}
                <span ref={reviews.ref} className="ml-2 text-[14px] font-semibold text-apple-dark dark:text-white">{reviews.count}+ reviews</span>
              </div>
              <div className="space-y-2">
                {[{ label: '5 star', pct: 92 }, { label: '4 star', pct: 6 }, { label: '3 star', pct: 2 }].map(({ label, pct }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="text-[12px] text-apple-secondary dark:text-zinc-400 w-10">{label}</span>
                    <div className="flex-1 h-2 bg-apple-surface dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: 'linear-gradient(to right, #0071E3, #7B61FF)' }} />
                    </div>
                    <span className="text-[12px] font-medium text-apple-dark dark:text-white w-8 text-right">{pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '15+', label: 'Years in business', grad: 'from-status-green to-teal-400' },
                { value: '12k+', label: 'Jobs done', grad: 'from-apple-blue to-accent-purple' },
                { value: '98%', label: 'Recommend us', grad: 'from-accent-purple to-accent-pink' },
              ].map(({ value, label, grad }) => (
                <div key={label} className="group text-center cursor-default">
                  <div className={`text-2xl font-black tracking-tighter mb-0.5 bg-gradient-to-br ${grad} bg-clip-text text-transparent`}>{value}</div>
                  <p className="text-[12px] text-apple-secondary dark:text-zinc-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — promise cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {promises.map((promise, i) => (
              <div
                key={promise.title}
                style={{ animationDelay: `${i * 80}ms` }}
                className="group relative p-6 bg-white dark:bg-zinc-900 border border-apple-border-subtle dark:border-zinc-800 rounded-2xl shadow-card hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${promise.hoverGrad} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"
                     style={{ backgroundColor: promise.barColor }} />

                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${promise.grad} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <span className="text-2xl leading-none">{promise.icon}</span>
                  </div>
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle size={15} className="text-status-green flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                    <h3 className="text-[16px] font-semibold text-apple-dark dark:text-white leading-tight group-hover:text-apple-blue transition-colors duration-200">
                      {promise.title}
                    </h3>
                  </div>
                  <p className="text-[14px] text-apple-secondary dark:text-zinc-400 leading-relaxed">
                    {promise.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
