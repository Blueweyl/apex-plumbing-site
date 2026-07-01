import { CheckCircle } from 'lucide-react'

const features = [
  'Book a service call in under 60 seconds',
  "Track your tech's arrival in real time",
  'Pay your invoice from anywhere',
  'Receive SMS updates at every step',
]

const miniServices = [
  { emoji: '🚨', title: 'Emergency', bg: '#FEF2F2', border: '#FECACA' },
  { emoji: '🔥', title: 'Water Heater', bg: '#FFFBEB', border: '#FDE68A' },
  { emoji: '🪠', title: 'Drain Cleaning', bg: '#F0FDF4', border: '#BBF7D0' },
  { emoji: '🚽', title: 'Toilet Repair', bg: '#EFF6FF', border: '#BFDBFE' },
]

export default function MobilePreview() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden section-bg-alt dark:bg-zinc-900">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(at 0% 50%, hsla(211,100%,44%,0.06) 0px, transparent 55%), radial-gradient(at 100% 50%, hsla(262,100%,65%,0.04) 0px, transparent 50%)',
        }}
      />
      <div className="absolute inset-0 dot-grid opacity-[0.025] dark:opacity-[0.035] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <p className="text-[13px] font-semibold text-apple-blue uppercase tracking-widest mb-3">Works everywhere</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-apple-dark dark:text-white tracking-tighter leading-tight mb-6">
              Perfect on phone,{' '}
              <span className="gradient-text-brand">tablet, or desktop.</span>
            </h2>
            <p className="text-[17px] text-apple-secondary dark:text-zinc-400 leading-relaxed mb-10">
              Whether you're a homeowner booking from your couch or an office manager
              dispatching from a tablet — GrowBridge works seamlessly on every screen size.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(52,199,89,0.15)' }}
                  >
                    <CheckCircle size={14} className="text-status-green" />
                  </div>
                  <p className="text-[16px] text-apple-dark dark:text-zinc-200">{f}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-white text-[15px] font-semibold rounded-xl shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #0071E3 0%, #7B61FF 100%)' }}
              >
                Book Online Now
              </a>
              <a
                href="tel:5552478629"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-zinc-800 border border-apple-border-subtle dark:border-zinc-700 text-apple-dark dark:text-white text-[15px] font-semibold rounded-xl hover:-translate-y-0.5 hover:border-apple-blue/40 transition-all duration-200"
              >
                📞 (555) 247-8629
              </a>
            </div>
          </div>

          {/* Right — phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">

              {/* Phone shell */}
              <div
                className="relative rounded-[44px] shadow-2xl"
                style={{
                  width: '270px',
                  background: 'linear-gradient(145deg, #1c1c1e, #2c2c2e)',
                  border: '1.5px solid rgba(255,255,255,0.12)',
                  padding: '12px',
                }}
              >
                {/* Dynamic island */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 rounded-full z-20"
                  style={{ top: '14px', width: '88px', height: '20px', background: '#1c1c1e' }}
                />

                {/* Screen */}
                <div className="rounded-[34px] overflow-hidden bg-white" style={{ height: '560px' }}>

                  {/* Status bar */}
                  <div className="px-5 pt-6 pb-1 flex justify-between items-center">
                    <span className="text-[10px] font-semibold text-zinc-800">9:41</span>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3 h-2.5" viewBox="0 0 17 12" fill="#1c1c1e">
                        <rect x="0" y="3" width="3" height="9" rx="1" />
                        <rect x="4.5" y="2" width="3" height="10" rx="1" />
                        <rect x="9" y="1" width="3" height="11" rx="1" />
                        <rect x="13.5" y="0" width="3" height="12" rx="1" />
                      </svg>
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="#1c1c1e" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
                      </svg>
                      <div className="rounded-sm border border-zinc-700 flex items-center p-px" style={{ width: '22px', height: '11px' }}>
                        <div className="rounded-sm bg-status-green h-full" style={{ width: '75%' }} />
                      </div>
                    </div>
                  </div>

                  {/* Mini navbar */}
                  <div className="px-4 py-2 flex items-center justify-between border-b border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-md bg-apple-blue flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 20 20" fill="none">
                          <path d="M10 2C10 2 4 6 4 11C4 14.314 6.686 17 10 17C13.314 17 16 14.314 16 11C16 6 10 2 10 2Z" fill="white" />
                          <circle cx="10" cy="11" r="2.5" fill="#0071E3" />
                        </svg>
                      </div>
                      <span className="text-[9px] font-bold text-zinc-900">GrowBridge Plumbing</span>
                    </div>
                    <div className="rounded-md px-2 py-0.5" style={{ background: '#FF3B30' }}>
                      <span className="text-[7px] font-bold text-white">📞 CALL NOW</span>
                    </div>
                  </div>

                  {/* Mini hero */}
                  <div className="px-4 pt-3 pb-3" style={{ background: 'linear-gradient(to bottom, #EFF6FF, #fff)' }}>
                    <div
                      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 mb-2"
                      style={{ background: '#FF3B30' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span className="text-[6.5px] font-bold text-white uppercase tracking-wide">24/7 Emergency Available</span>
                    </div>
                    <h3 className="text-[14px] font-black text-zinc-900 leading-tight tracking-tight mb-1">
                      Plumbing fixed today.<br />Not next week.
                    </h3>
                    <p className="text-[7.5px] text-zinc-500 mb-2.5 leading-relaxed">
                      Licensed plumbers at your door in under 2 hrs. Upfront pricing — always.
                    </p>
                    <div className="flex gap-2">
                      <div
                        className="flex-1 flex items-center justify-center py-2 rounded-lg text-white text-[7.5px] font-bold gap-1"
                        style={{ background: 'linear-gradient(135deg, #0071E3, #7B61FF)' }}
                      >
                        📞 Call Now
                      </div>
                      <div className="flex-1 flex items-center justify-center py-2 rounded-lg text-[7.5px] font-bold border border-gray-200 text-zinc-600 gap-1 bg-white">
                        Get Estimate →
                      </div>
                    </div>
                  </div>

                  {/* Mini trust strip */}
                  <div className="px-4 py-2 flex gap-1.5">
                    {[
                      { icon: '⭐', text: '4.9 Google' },
                      { icon: '🛡️', text: 'Licensed' },
                      { icon: '⚡', text: 'Same-day' },
                    ].map(({ icon, text }) => (
                      <div key={text} className="flex-1 flex items-center gap-1 bg-gray-50 rounded-lg p-1.5 border border-gray-100">
                        <span style={{ fontSize: '9px' }}>{icon}</span>
                        <span className="text-[6.5px] font-semibold text-zinc-600">{text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mini services grid */}
                  <div className="px-4 py-2">
                    <p className="text-[7px] font-bold text-zinc-400 uppercase tracking-widest mb-2">Our Services</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {miniServices.map((s) => (
                        <div
                          key={s.title}
                          className="rounded-xl p-2.5"
                          style={{ background: s.bg, border: `1px solid ${s.border}` }}
                        >
                          <span className="text-base leading-none block mb-1">{s.emoji}</span>
                          <p className="text-[7.5px] font-semibold text-zinc-700">{s.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mini rating */}
                  <div
                    className="mx-4 mt-2 rounded-xl p-2.5 flex items-center gap-2.5"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,113,227,0.08), rgba(123,97,255,0.06))',
                      border: '1px solid rgba(0,113,227,0.12)',
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #0071E3, #7B61FF)' }}
                    >
                      <span className="text-white font-black" style={{ fontSize: '10px' }}>4.9</span>
                    </div>
                    <div>
                      <div className="flex gap-0.5 mb-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-amber-400" style={{ fontSize: '7px' }}>★</span>
                        ))}
                      </div>
                      <p className="text-zinc-500" style={{ fontSize: '6.5px' }}>847+ Google reviews</p>
                    </div>
                    <span className="ml-auto text-apple-blue font-semibold" style={{ fontSize: '6px' }}>View all →</span>
                  </div>
                </div>

                {/* Home indicator */}
                <div className="flex justify-center pt-2.5">
                  <div className="w-20 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.25)' }} />
                </div>
              </div>

              {/* Floating: tech en route */}
              <div
                className="absolute -right-6 top-20 bg-white rounded-2xl p-3 w-36 hidden sm:block animate-float"
                style={{ border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-status-green animate-pulse" />
                  <span className="text-[10px] font-bold text-zinc-800">Tech en route</span>
                </div>
                <p className="text-[9px] text-zinc-500 mb-2">Mike T. · ~15 min away</p>
                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: '65%', background: 'linear-gradient(to right, #34C759, #0071E3)' }} />
                </div>
              </div>

              {/* Floating: review */}
              <div
                className="absolute -left-6 bottom-32 bg-white rounded-2xl p-3 w-36 hidden sm:block animate-float-slow"
                style={{ border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }}
              >
                <div className="flex gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400" style={{ fontSize: '11px' }}>★</span>
                  ))}
                </div>
                <p className="text-[9px] text-zinc-700 font-medium leading-snug mb-1">"Fixed our burst pipe in 45 min!"</p>
                <p className="text-[8px] text-zinc-400">— Sarah M., Tacoma</p>
              </div>

              {/* Floating: payment */}
              <div
                className="absolute -right-6 bottom-40 bg-white rounded-2xl px-3 py-2.5 w-36 hidden lg:block animate-float-reverse"
                style={{ border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(52,199,89,0.15)' }}>
                    <span style={{ fontSize: '14px' }}>✅</span>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-zinc-800">Payment received</p>
                    <p className="text-[8px] text-zinc-500">Invoice #INV-1042 paid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
