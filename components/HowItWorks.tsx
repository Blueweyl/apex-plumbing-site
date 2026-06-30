const steps = [
  {
    number: '01',
    title: 'Call or book online',
    description:
      'Call (555) 247-8629 anytime or fill out the form below. Tell us what\'s wrong — we\'ll ask a few quick questions to send the right tech with the right parts.',
    time: 'Takes 2 minutes',
  },
  {
    number: '02',
    title: 'Tech arrives fast',
    description:
      'A background-checked, licensed plumber is at your door — average 90 minutes. You\'ll get a text when they\'re dispatched and another when they\'re 10 minutes out.',
    time: 'Avg. 90 min response',
  },
  {
    number: '03',
    title: 'See the price. Approve the work.',
    description:
      'Your tech diagnoses the issue and gives you the full price upfront — before touching anything. No "we already started, so…" pressure. You say yes or no.',
    time: 'No surprises',
  },
  {
    number: '04',
    title: 'Done right. Guaranteed.',
    description:
      'Work gets done. Your tech cleans up completely before leaving. You get a digital receipt and a 12-month guarantee. If it breaks again, we\'re back for free.',
    time: '12-month guarantee',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[13px] font-semibold text-apple-blue uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-apple-dark tracking-tighter leading-tight mb-4">
            From call to fixed in 4 steps.
          </h2>
          <p className="text-[19px] text-apple-secondary leading-relaxed">
            No runaround, no waiting games. Just fast, clean, guaranteed plumbing work.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-apple-border-subtle" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col">
                {/* Step number circle */}
                <div className="relative w-12 h-12 rounded-2xl bg-apple-blue flex items-center justify-center mb-6 shadow-card">
                  <span className="text-white font-bold text-[15px]">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-[17px] font-semibold text-apple-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-apple-secondary leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-apple-blue-light text-apple-blue text-[12px] font-semibold rounded-full">
                    <span className="w-1.5 h-1.5 bg-apple-blue rounded-full" />
                    {step.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 relative overflow-hidden bg-apple-blue rounded-3xl p-10 lg:p-14 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-apple-blue via-apple-blue to-blue-700 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="relative">
            <p className="text-white/70 text-[13px] font-semibold uppercase tracking-widest mb-3">
              Emergency? Don't wait.
            </p>
            <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              A plumber picks up every call.
              <br />24 hours. 7 days a week.
            </h3>
            <p className="text-white/80 text-[17px] mb-8 max-w-xl mx-auto">
              No voicemail. No "press 1 for billing." A real dispatcher answers, takes
              your info, and gets a tech moving toward your address.
            </p>
            <a
              href="tel:5552478629"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-apple-blue text-[17px] font-bold rounded-xl shadow-elevated hover:bg-apple-surface transition-colors"
            >
              Call (555) 247-8629
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
