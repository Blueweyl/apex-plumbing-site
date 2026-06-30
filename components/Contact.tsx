import { Phone, Clock, MapPin, Award } from 'lucide-react'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-apple-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[13px] font-semibold text-apple-blue uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-apple-dark tracking-tighter leading-tight mb-4">
            Ready to fix it?
          </h2>
          <p className="text-[19px] text-apple-secondary leading-relaxed">
            Book online in 60 seconds or call directly. Either way, a real person
            is handling your job — not a bot.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left — contact info */}
          <div className="lg:col-span-2 space-y-5">
            {/* Phone card */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-apple-border-subtle">
              <p className="text-[12px] font-semibold text-apple-tertiary uppercase tracking-widest mb-4">
                Call anytime
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Main line', number: '(555) 247-8629', area: 'main' },
                  { label: 'South Sound', number: '(555) 366-4042', area: 'south' },
                  { label: 'Eastside', number: '(555) 949-4539', area: 'eastside' },
                ].map(({ label, number, area }) => (
                  <a
                    key={area}
                    href={`tel:${number.replace(/\D/g, '')}`}
                    className="flex items-center justify-between group py-3 border-b border-apple-border-subtle last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-apple-blue-light flex items-center justify-center">
                        <Phone size={16} className="text-apple-blue" />
                      </div>
                      <div>
                        <p className="text-[13px] text-apple-secondary">{label}</p>
                        <p className="text-[16px] font-semibold text-apple-dark group-hover:text-apple-blue transition-colors">
                          {number}
                        </p>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-apple-tertiary group-hover:text-apple-blue group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Info cards */}
            {[
              {
                icon: Clock,
                title: 'Hours',
                lines: ['Monday – Sunday: 24/7', 'Emergency line: always open'],
                iconBg: 'bg-apple-blue-light',
                iconColor: 'text-apple-blue',
              },
              {
                icon: MapPin,
                title: 'Service area',
                lines: ['Greater Seattle metro', 'Tacoma & South Sound', 'Eastside & Snohomish County'],
                iconBg: 'bg-status-green-bg',
                iconColor: 'text-status-green',
              },
              {
                icon: Award,
                title: 'License',
                lines: ['WA State License #PL-XXXXX', 'Bonded & fully insured', 'Background-checked techs'],
                iconBg: 'bg-status-amber-bg',
                iconColor: 'text-status-amber',
              },
            ].map(({ icon: Icon, title, lines, iconBg, iconColor }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-5 shadow-card border border-apple-border-subtle flex items-start gap-4"
              >
                <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={18} className={iconColor} />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-apple-dark mb-1">{title}</p>
                  {lines.map((line) => (
                    <p key={line} className="text-[13px] text-apple-secondary leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
