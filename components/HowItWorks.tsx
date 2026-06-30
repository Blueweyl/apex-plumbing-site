import { Phone } from 'lucide-react'

const steps = [
  { number: '01', title: 'Call or book online', description: "Call (555) 247-8629 anytime or fill out the form below. Tell us what's wrong — we'll ask a few quick questions to send the right tech with the right parts.", time: 'Takes 2 minutes', color: 'from-apple-blue to-blue-500', bgLight: 'bg-apple-blue-light dark:bg-apple-blue/20', textColor: 'text-apple-blue' },
  { number: '02', title: 'Tech arrives fast', description: "A background-checked, licensed plumber is at your door — average 90 minutes. You'll get a text when they're dispatched and another when they're 10 minutes out.", time: 'Avg. 90 min response', color: 'from-blue-500 to-blue-400', bgLight: 'bg-apple-blue-light dark:bg-apple-blue/20', textColor: 'text-apple-blue' },
  { number: '03', title: 'See the price. Approve the work.', description: "Your tech diagnoses the issue and gives you the full price upfront — before touching anything. No \"we already started, so…\" pressure. You say yes or no.", time: 'No surprises', color: 'from-blue-400 to-status-green', bgLight: 'bg-status-green-bg dark:bg-green-950/40', textColor: 'text-status-green' },
  { number: '04', title: 'Done right. Guaranteed.', description: "Work gets done. Your tech cleans up completely before leaving. You get a digital receipt and a 12-month guarantee. If it breaks again, we're back for free.", time: '12-month guarantee', color: 'from-status-green to-green-400', bgLight: 'bg-status-green-bg dark:bg-green-950/40', textColor: 'text-status-green' },
]

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-apple-surface dark:bg-zinc-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[300px] bg-apple-blue/4 dark:bg-apple-blue/6 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[13px] font-semibold text-apple-blue uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-apple-dark dark:text-white tracking-tighter leading-tight mb-4">
            From call to fixed in 4 steps.
          </h2>
          <p className="text-[19px] text-apple-secondary dark:text-zinc-400 leading-relaxed">
            No runaround, no waiting games. Just fast, clean, guaranteed plumbing work.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-[2px] overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-apple-blue via-blue-400 to-status-green opacity-30" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="group relative flex flex-col" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="absolute -top-4 -left-2 text-[96px] font-black text-apple-dark/[0.04] dark:text-white/[0.04] leading-none select-none pointer-events-none group-hover:text-apple-blue/10 transition-colors duration-500">
                  {step.number}
                </div>
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-card group-hover:shadow-glow-blue group-hover:scale-110 transition-all duration-300`}>
                  <span className="text-white font-bold text-[17px]">{step.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-[17px] font-semibold text-apple-dark dark:text-white mb-2 group-hover:text-apple-blue transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-apple-secondary dark:text-zinc-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${step.bgLight} ${step.textColor} text-[12px] font-semibold rounded-full`}>
                    <span className={`w-1.5 h-1.5 ${step.textColor.replace('text-', 'bg-')} rounded-full animate-pulse`} />
                    {step.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 relative overflow-hidden bg-apple-blue rounded-3xl p-10 lg:p-14 text-center">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3 animate-float" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/4 rounded-full blur-2xl pointer-events-none -translate-x-1/4 translate-y-1/4 animate-float-reverse" />
          <div className="absolute inset-0 dot-grid opacity-[0.06] pointer-events-none" />
          <div className="relative">
            <p className="text-white/70 text-[13px] font-semibold uppercase tracking-widest mb-3">Emergency? Don't wait.</p>
            <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              A plumber picks up every call.<br />24 hours. 7 days a week.
            </h3>
            <p className="text-white/80 text-[17px] mb-8 max-w-xl mx-auto leading-relaxed">
              No voicemail. No "press 1 for billing." A real dispatcher answers, takes your info, and gets a tech moving toward your address.
            </p>
            <a
              href="tel:5552478629"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-apple-blue text-[17px] font-bold rounded-xl shadow-elevated hover:bg-apple-surface hover:-translate-y-1 hover:shadow-lift transition-all duration-200"
            >
              <Phone size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              Call (555) 247-8629
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
