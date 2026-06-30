'use client'

import { useEffect, useRef } from 'react'
import { trackEvent } from '@/lib/analytics'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Tacoma, WA',
    service: 'Burst pipe repair',
    rating: 5,
    text: 'Pipe burst under my kitchen sink at 11pm on a Sunday. Called GrowBridge and had a tech at my door by 12:30am. He fixed it in 45 minutes, cleaned up every drop of water, and charged exactly what he quoted. I was floored.',
    initials: 'SM',
    color: 'bg-apple-blue',
  },
  {
    name: 'David R.',
    location: 'Puyallup, WA',
    service: 'Water heater replacement',
    rating: 5,
    text: 'Woke up to no hot water on a Monday morning. GrowBridge had a tech out by 10am. He showed me the issue, explained the two options, gave me the exact prices, and had my new heater installed and running by noon. Outstanding.',
    initials: 'DR',
    color: 'bg-status-green',
  },
  {
    name: 'Jennifer K.',
    location: 'Bellevue, WA',
    service: 'Drain cleaning',
    rating: 5,
    text: 'Three different plumbers told me I might need to tear up my floor to fix the drain. GrowBridge used a camera and found the actual blockage in 10 minutes, cleared it in 20, and didn\'t touch my floor. $180 instead of $3,000.',
    initials: 'JK',
    color: 'bg-status-amber',
  },
  {
    name: 'Tom H.',
    location: 'Seattle, WA',
    service: 'Toilet & faucet repair',
    rating: 5,
    text: 'Had a rocking toilet and a dripping bathroom faucet. Called in the morning, tech was there by 1pm. Fixed both in under 2 hours, left the bathroom spotless. Honest guys — he actually talked me out of an unnecessary part.',
    initials: 'TH',
    color: 'bg-apple-blue',
  },
  {
    name: 'Angela P.',
    location: 'Renton, WA',
    service: 'Sewer line repair',
    rating: 5,
    text: 'Sewer line issue that 2 companies wanted $8,000 to fix. GrowBridge did a camera inspection, diagnosed the actual problem, and repaired it trenchlessly for $2,400. They saved my yard and saved me $5,600.',
    initials: 'AP',
    color: 'bg-status-green',
  },
  {
    name: 'Marcus W.',
    location: 'Kirkland, WA',
    service: 'Gas line installation',
    rating: 5,
    text: 'Needed a gas line run for a new range. GrowBridge pulled the permit, scheduled the utility inspection, and did the whole job in one day. Clean work, all up to code. The inspector actually complimented the installation.',
    initials: 'MW',
    color: 'bg-status-amber',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#FF9F0A">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const tracked = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          trackEvent('testimonial_viewed')
          tracked.current = true
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 lg:py-32 bg-apple-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <p className="text-[13px] font-semibold text-apple-blue uppercase tracking-widest mb-3">
              Reviews
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-apple-dark tracking-tighter leading-tight mb-4">
              Heard it from
              <br />our customers.
            </h2>
            <p className="text-[19px] text-apple-secondary leading-relaxed">
              4.9 stars from 847 Google reviews. Here's why people keep calling us back.
            </p>
          </div>

          {/* Google badge */}
          <div className="flex-shrink-0 bg-white rounded-2xl shadow-card border border-apple-border-subtle p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #4285F4, #34A853)' }}>
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[24px] font-bold text-apple-dark tracking-tight">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#FF9F0A">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-[13px] text-apple-secondary">Based on 847 reviews</p>
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-card border border-apple-border-subtle flex flex-col"
            >
              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Quote */}
              <p className="text-[15px] text-apple-dark leading-relaxed my-4 flex-1">
                "{t.text}"
              </p>

              {/* Service tag */}
              <span className="inline-block self-start px-3 py-1.5 bg-apple-blue-light text-apple-blue text-[12px] font-semibold rounded-full mb-4">
                {t.service}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-apple-border-subtle">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-[13px] font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-apple-dark">{t.name}</p>
                  <p className="text-[12px] text-apple-secondary">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
