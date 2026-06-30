import { Phone } from 'lucide-react'

const services = [
  'Emergency Plumbing', 'Water Heater', 'Drain Cleaning',
  'Toilet Repair', 'Faucet & Fixture', 'Sewer Line',
  'Pipe Repair', 'Gas Line',
]

const areas = [
  'Seattle', 'Tacoma', 'Bellevue', 'Puyallup',
  'Renton', 'Kirkland', 'Everett', 'Redmond',
]

export default function Footer() {
  return (
    <footer className="bg-apple-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-apple-blue/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3 animate-float-slow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/4 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3 animate-float-reverse" />
      <div className="absolute inset-0 dot-grid opacity-[0.04] pointer-events-none" />

      {/* Top CTA strip */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-green opacity-50" />
              <span className="relative w-3 h-3 bg-status-green rounded-full" />
            </span>
            <p className="text-[15px] font-medium text-white/80">
              Techs available right now — 24/7
            </p>
          </div>
          <a
            href="tel:5552478629"
            className="group flex items-center gap-2.5 px-6 py-3 bg-apple-blue rounded-xl text-[15px] font-semibold hover:bg-apple-blue-hover hover:shadow-glow-blue hover:-translate-y-0.5 transition-all duration-200 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 pointer-events-none" />
            <Phone size={16} className="group-hover:rotate-12 transition-transform duration-300 relative" />
            <span className="relative">Call (555) 247-8629</span>
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5 group cursor-default">
              <div className="w-9 h-9 rounded-xl bg-apple-blue flex items-center justify-center group-hover:shadow-glow-blue group-hover:scale-110 transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2C10 2 4 6 4 11C4 14.314 6.686 17 10 17C13.314 17 16 14.314 16 11C16 6 10 2 10 2Z" fill="white" />
                  <circle cx="10" cy="11" r="2.5" fill="#0071E3" />
                </svg>
              </div>
              <span className="text-[17px] font-semibold group-hover:text-apple-blue transition-colors duration-200">GrowBridge Plumbing</span>
            </div>
            <p className="text-[14px] text-white/60 leading-relaxed mb-6">
              Licensed, insured plumbing services across the Greater Seattle area.
              We pick up every call.
            </p>
            <div className="space-y-2">
              <a href="tel:5552478629" className="flex items-center gap-2 text-[14px] text-white/70 hover:text-white link-underline transition-colors duration-200">
                <Phone size={14} />
                (555) 247-8629
              </a>
              <p className="text-[14px] text-white/50">WA License #PL-XXXXX</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-widest text-white/40 mb-4">
              Services
            </p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-[14px] text-white/60 hover:text-white link-underline transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-widest text-white/40 mb-4">
              Service Areas
            </p>
            <ul className="space-y-2.5">
              {areas.map((a) => (
                <li key={a}>
                  <a
                    href="#service-areas"
                    className="text-[14px] text-white/60 hover:text-white link-underline transition-colors duration-200"
                  >
                    {a}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#service-areas"
                  className="text-[14px] text-apple-blue hover:text-blue-400 link-underline transition-colors duration-200 font-medium"
                >
                  View all 37+ cities →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-widest text-white/40 mb-4">
              Contact
            </p>
            <ul className="space-y-3 mb-6">
              {[
                { label: 'Main', number: '(555) 247-8629' },
                { label: 'South Sound', number: '(555) 366-4042' },
                { label: 'Eastside', number: '(555) 949-4539' },
              ].map(({ label, number }) => (
                <li key={label} className="text-[14px] text-white/60">
                  <span className="text-white/40">{label}: </span>
                  <a
                    href={`tel:${number.replace(/\D/g, '')}`}
                    className="hover:text-white link-underline transition-colors duration-200"
                  >
                    {number}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block px-5 py-2.5 border border-white/20 rounded-lg text-[14px] font-medium text-white/80 hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              Book online
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-white/40">
            © {new Date().getFullYear()} GrowBridge Plumbing. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[13px] text-white/40 hover:text-white/70 link-underline transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
