'use client'

import { MapPin } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

const areas = [
  'Tacoma', 'Puyallup', 'Bellevue', 'Seattle', 'Renton', 'Kirkland',
  'Redmond', 'Issaquah', 'Kenmore', 'Bothell', 'Shoreline', 'Edmonds',
  'Lynnwood', 'Mountlake Terrace', 'Mukilteo', 'Mill Creek', 'Marysville',
  'Everett', 'Auburn', 'Kent', 'Federal Way', 'Burien', 'Tukwila',
  'SeaTac', 'Des Moines', 'Normandy Park', 'Covington', 'Maple Valley',
  'Black Diamond', 'Enumclaw', 'Bonney Lake', 'Sumner', 'Orting',
  'Gig Harbor', 'University Place', 'Lakewood', 'Spanaway',
]

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-24 lg:py-32 bg-white dark:bg-zinc-950 relative overflow-hidden" onMouseEnter={() => trackEvent('service_area_viewed')}>
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-apple-blue/4 dark:bg-apple-blue/6 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3 animate-float-slow" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[13px] font-semibold text-apple-blue uppercase tracking-widest mb-3">Service Area</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-apple-dark dark:text-white tracking-tighter leading-tight mb-6">
              We serve the<br />Greater Seattle area.
            </h2>
            <p className="text-[19px] text-apple-secondary dark:text-zinc-400 leading-relaxed mb-8">
              From Seattle proper to the South Sound, our licensed techs cover the whole metro. Same 90-minute response time, regardless of where you are in our zone.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: '37+', label: 'Cities served' },
                { value: '90 min', label: 'Avg response' },
                { value: '24/7', label: 'Availability' },
              ].map(({ value, label }) => (
                <div key={label} className="group p-4 bg-apple-surface dark:bg-zinc-900 rounded-xl text-center hover:bg-apple-blue hover:shadow-glow-blue hover:-translate-y-1 transition-all duration-300 cursor-default border border-transparent dark:border-zinc-800 hover:border-transparent">
                  <p className="text-[22px] font-bold text-apple-dark dark:text-white tracking-tight group-hover:text-white transition-colors duration-300">{value}</p>
                  <p className="text-[12px] text-apple-secondary dark:text-zinc-400 mt-0.5 group-hover:text-blue-100 transition-colors duration-300">{label}</p>
                </div>
              ))}
            </div>

            <p className="text-[15px] text-apple-secondary dark:text-zinc-400">
              Don't see your city?{' '}
              <a href="tel:5552478629" className="text-apple-blue font-medium link-underline hover:text-apple-blue-hover transition-colors">
                Call us
              </a>
              {' '}— we may still cover your area.
            </p>
          </div>

          <div>
            <div className="p-6 bg-apple-surface dark:bg-zinc-900 rounded-3xl border border-apple-border-subtle dark:border-zinc-800 hover:border-apple-blue/20 transition-colors duration-300">
              <div className="flex items-center gap-2 mb-5">
                <div className="relative">
                  <MapPin size={16} className="text-apple-blue" />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-status-green rounded-full border border-white dark:border-zinc-900 animate-ping" style={{ animationDuration: '2s' }} />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-status-green rounded-full border border-white dark:border-zinc-900" />
                </div>
                <p className="text-[14px] font-semibold text-apple-dark dark:text-white">{areas.length} cities covered</p>
                <span className="ml-auto px-2 py-1 bg-status-green-bg dark:bg-green-950/50 text-status-green text-[11px] font-semibold rounded-full border border-status-green/20">
                  Live coverage
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="group px-3 py-1.5 bg-white dark:bg-zinc-800 border border-apple-border-subtle dark:border-zinc-700 rounded-full text-[13px] font-medium text-apple-dark dark:text-zinc-300 shadow-card
                               hover:bg-apple-blue hover:text-white hover:border-apple-blue hover:shadow-glow-blue hover:scale-105 hover:-translate-y-0.5
                               transition-all duration-200 cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 p-5 bg-status-red-bg dark:bg-red-950/40 border border-status-red/20 rounded-2xl flex items-start gap-4 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300">
              <span className="text-2xl flex-shrink-0 animate-float-slow">🚨</span>
              <div>
                <p className="text-[15px] font-semibold text-apple-dark dark:text-white mb-1">Emergency anywhere in our zone?</p>
                <p className="text-[13px] text-apple-secondary dark:text-zinc-400 mb-3">
                  Emergency calls jump the queue. A tech moves toward you immediately — no waiting for a callback.
                </p>
                <a href="tel:5552478629" className="text-[14px] font-semibold text-status-red link-underline hover:text-red-700 transition-colors">
                  Call emergency line →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
