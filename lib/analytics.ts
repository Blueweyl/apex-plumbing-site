'use client'

type PlumbingEvent =
  | 'page_viewed'
  | 'hero_cta_clicked'
  | 'phone_number_clicked'
  | 'service_card_clicked'
  | 'contact_form_started'
  | 'contact_form_submitted'
  | 'contact_form_error'
  | 'emergency_cta_clicked'
  | 'testimonial_viewed'
  | 'service_area_viewed'
  | 'nav_cta_clicked'
  | 'coupon_clicked'

interface EventProperties {
  label?: string
  service?: string
  source?: string
  phone?: string
  area?: string
}

export function trackEvent(event: PlumbingEvent, properties?: EventProperties) {
  if (typeof window === 'undefined') return

  // Google Analytics 4
  if (typeof (window as any).gtag === 'function') {
    ;(window as any).gtag('event', event, {
      event_category: 'engagement',
      ...properties,
    })
  }

  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] ${event}`, properties ?? {})
  }
}

export function trackPhoneClick(area: string) {
  trackEvent('phone_number_clicked', { area, source: 'plumbing_site' })
}

export function trackServiceClick(service: string) {
  trackEvent('service_card_clicked', { service })
}

export function trackFormStart() {
  trackEvent('contact_form_started', { source: 'contact_section' })
}

export function trackFormSubmit() {
  trackEvent('contact_form_submitted', { source: 'contact_section' })
}
