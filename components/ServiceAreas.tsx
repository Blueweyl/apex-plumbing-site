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
    <section
      id="service-areas"
      className="py-24 lg:py-32 bg-white"
      onMouseEnter={() => trackEvent('service_area_viewed')}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-[13px] font-semibold text-apple-blue uppercase tracking-widest mb-3">
              Service Area
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-apple-dark tracking-tighter leading-tight mb-6">
              We serve the
              <br />Greater Seattle area.
            </h2>
            <p className="text-[19px] text-apple-secondary leading-relaxed mb-8">
              From Seattle proper to the South Sound, our licensed techs cover the whole
              metro. Same 90-minute response time, regardless of where you are in our zone.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: '37+', label: 'Cities served' },
                { value: '90 min', label: 'Avg response' },
                { value: '24/7', label: 'Availability' },
              ].map(({ value, label }) => (
                <div key={label} className="p-4 bg-apple-surface rounded-xl text-center">
                  <p className="text-[22px] font-bold text-apple-dark tracking-tight">{value}</p>
                  <p className="text-[12px] text-apple-secondary mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            <p className="text-[15px] text-apple-secondary">
              Don't see your city?{' '}
              <a href="tel:5552478629" className="text-apple-blue font-medium hover:underline">
                Call us
              </a>
              {' '}— we may still cover your area.
            </p>
          </div>

          {/* Right — area pills */}
          <div>
            <div className="p-6 bg-apple-surface rounded-3xl">
              <div className="flex items-center gap-2 mb-5">
                <MapPin size={16} className="text-apple-blue" />
                <p className="text-[14px] font-semibold text-apple-dark">
                  {areas.length} cities covered
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 bg-white border border-apple-border-subtle rounded-full text-[13px] font-medium text-apple-dark shadow-card hover:border-apple-blue hover:text-apple-blue transition-colors cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Emergency callout */}
            <div className="mt-4 p-5 bg-status-red-bg border border-status-red/20 rounded-2xl flex items-start gap-4">
              <span className="text-2xl flex-shrink-0">🚨</span>
              <div>
                <p className="text-[15px] font-semibold text-apple-dark mb-1">
                  Emergency anywhere in our zone?
                </p>
                <p className="text-[13px] text-apple-secondary mb-3">
                  Emergency calls jump the queue. A tech moves toward you immediately — no waiting for a callback.
                </p>
                <a
                  href="tel:5552478629"
                  className="text-[14px] font-semibold text-status-red hover:underline"
                >
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
