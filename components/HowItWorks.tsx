const steps = [
  {
    num: '01',
    title: 'Call or book online',
    description: "One call gets you a real human dispatcher — not a voicemail. Describe the problem and we'll have a tech assigned in minutes. Online booking available 24/7.",
    icon: '📞',
    grad: 'from-apple-blue to-accent-purple',
    badge: 'Takes 2 minutes',
    badgeBg: 'bg-apple-blue-light dark:bg-apple-blue/20 text-apple-blue',
  },
  {
    num: '02',
    title: 'Get your upfront price',
    description: 'Before we touch anything, your tech gives you the total price in writing. No surprises on the invoice. You approve it — we work.',
    icon: '📋',
    grad: 'from-accent-purple to-accent-cyan',
    badge: 'No surprises',
    badgeBg: 'bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400',
  },
  {
    num: '03',
    title: 'Tech arrives fast',
    description: "You'll get an SMS when your tech is en route with their estimated arrival time. Our average response time is under 90 minutes.",
    icon: '🚐',
    grad: 'from-accent-cyan to-status-green',
    badge: 'Avg. 90 min',
    badgeBg: 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400',
  },
  {
    num: '04',
    title: 'Problem solved, guaranteed',
    description: 'Job done right the first time — backed by our 1-year labor warranty. Pay by card, cash, or check. Invoice emailed instantly.',
    icon: '✅',
    grad: 'from-status-green to-teal-400',
    badge: '1-year warranty',
    badgeBg: 'bg-status-green-bg dark:bg-green-950/40 text-status-green',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden section-bg-alt dark:bg-zinc-900">

      {/* Mesh background */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(at 50% 0%, hsla(211,100%,44%,0.06) 0px, transparent 55%), radial-gradient(at 100% 100%, hsla(262,100%,65%,0.05) 0px, transparent 50%)' }} />
      <div className="absolute inset-0 dot-grid opacity-[0.025] dark:opacity-[0.035] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[13px] font-semibold text-apple-blue uppercase tracking-widest mb-3">Process</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-apple-dark dark:text-white tracking-tighter mb-4">
            From first call to{' '}
            <span className="gradient-text-brand">fixed pipe</span>
          </h2>
          <p className="text-[19px] text-apple-secondary dark:text-zinc-400 max-w-xl mx-auto">
            Four simple steps. No confusion, no hidden costs, no callbacks.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <div key={step.num} className="group relative flex flex-col">
              <div className="w-full p-6 bg-white dark:bg-zinc-800 rounded-2xl border border-apple-border-subtle dark:border-zinc-700 shadow-card group-hover:shadow-lift group-hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.grad} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <span className="text-3xl leading-none">{step.icon}</span>
                  </div>
                  <span className="text-6xl font-black text-apple-dark dark:text-white opacity-[0.05] leading-none tracking-tighter select-none">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-[18px] font-semibold text-apple-dark dark:text-white mb-2 group-hover:text-apple-blue transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-[14px] text-apple-secondary dark:text-zinc-400 leading-relaxed flex-1 mb-4">
                  {step.description}
                </p>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-semibold rounded-full self-start ${step.badgeBg}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70 animate-pulse" />
                  {step.badge}
                </span>
                <div className="mt-4 flex items-center gap-1.5">
                  <div className={`h-1.5 w-8 rounded-full bg-gradient-to-r ${step.grad} opacity-70 group-hover:opacity-100 group-hover:w-12 transition-all duration-300`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0"
               style={{ background: 'linear-gradient(135deg, #0071E3 0%, #7B61FF 50%, #00C2FF 100%)' }} />
          <div className="absolute inset-0 dot-grid opacity-[0.08] pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none animate-float"
               style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-[60px] pointer-events-none animate-float-reverse"
               style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 70%)' }} />

          <div className="relative px-8 py-12 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-3xl font-bold text-white tracking-tight mb-2">Emergency? Call right now.</p>
              <p className="text-white/80 text-[17px]">Real dispatcher answers 24/7. Techs on call every night and weekend.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href="tel:5552478629"
                 className="group flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-apple-blue font-semibold text-[17px] rounded-xl hover:bg-blue-50 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 whitespace-nowrap">
                <span className="text-xl">📞</span>
                (555) 247-8629
              </a>
              <a href="#contact"
                 className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/15 text-white font-semibold text-[17px] rounded-xl border border-white/30 hover:bg-white/25 hover:-translate-y-1 transition-all duration-200 whitespace-nowrap backdrop-blur-sm">
                Book Online
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
