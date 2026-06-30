import { Phone, Clock, MapPin, Award } from 'lucide-react'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-apple-surface dark:bg-zinc-900">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(at 0% 50%, hsla(211,100%,44%,0.08) 0px, transparent 55%), radial-gradient(at 100% 50%, hsla(262,100%,65%,0.06) 0px, transparent 50%), radial-gradient(at 50% 0%, hsla(190,100%,50%,0.05) 0px, transparent 50%)' }} />
      <div className="absolute inset-0 dot-grid opacity-[0.025] dark:opacity-[0.04] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[13px] font-semibold text-apple-blue uppercase tracking-widest mb-3">Get in Touch</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-apple-dark dark:text-white tracking-tighter leading-tight mb-4">
            Ready to{' '}
            <span className="gradient-text-brand">fix it?</span>
          </h2>
          <p className="text-[19px] text-apple-secondary dark:text-zinc-400 leading-relaxed">
            Book online in 60 seconds or call directly. Either way, a real person
            is handling your job — not a bot.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left — contact info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Phone card */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-card border border-apple-border-subtle dark:border-zinc-700">
              <p className="text-[12px] font-semibold text-apple-tertiary dark:text-zinc-500 uppercase tracking-widest mb-4">Call anytime</p>
              <div className="space-y-1">
                {[
                  { label: 'Main line', number: '(555) 247-8629', area: 'main', grad: 'from-apple-blue to-accent-purple' },
                  { label: 'South Sound', number: '(555) 366-4042', area: 'south', grad: 'from-status-green to-teal-400' },
                  { label: 'Eastside', number: '(555) 949-4539', area: 'eastside', grad: 'from-accent-cyan to-apple-blue' },
                ].map(({ label, number, area, grad }) => (
                  <a key={area} href={`tel:${number.replace(/\D/g, '')}`}
                     className="group flex items-center justify-between py-3 border-b border-apple-border-subtle dark:border-zinc-700 last:border-0 hover:bg-apple-blue-light dark:hover:bg-apple-blue/10 -mx-2 px-2 rounded-xl transition-all duration-200">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${grad} bg-opacity-20 flex items-center justify-center`}
                           style={{ background: `linear-gradient(135deg, rgba(0,113,227,0.15), rgba(123,97,255,0.1))` }}>
                        <Phone size={16} className="text-apple-blue" />
                      </div>
                      <div>
                        <p className="text-[12px] text-apple-secondary dark:text-zinc-400">{label}</p>
                        <p className="text-[16px] font-semibold text-apple-dark dark:text-white group-hover:text-apple-blue transition-colors">{number}</p>
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
                iconGrad: 'from-apple-blue/20 to-accent-purple/20',
                iconColor: 'text-apple-blue',
              },
              {
                icon: MapPin,
                title: 'Service area',
                lines: ['Greater Seattle metro', 'Tacoma & South Sound', 'Eastside & Snohomish County'],
                iconGrad: 'from-status-green/20 to-teal-400/20',
                iconColor: 'text-status-green',
              },
              {
                icon: Award,
                title: 'License',
                lines: ['WA State License #PL-XXXXX', 'Bonded & fully insured', 'Background-checked techs'],
                iconGrad: 'from-status-amber/20 to-orange-400/20',
                iconColor: 'text-status-amber',
              },
            ].map(({ icon: Icon, title, lines, iconGrad, iconColor }) => (
              <div key={title}
                   className="group bg-white dark:bg-zinc-800 rounded-2xl p-5 shadow-card border border-apple-border-subtle dark:border-zinc-700 flex items-start gap-4 hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${iconGrad} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={18} className={iconColor} />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-apple-dark dark:text-white mb-1">{title}</p>
                  {lines.map((line) => (
                    <p key={line} className="text-[13px] text-apple-secondary dark:text-zinc-400 leading-relaxed">{line}</p>
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
