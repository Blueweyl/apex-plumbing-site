import { CheckCircle2 } from 'lucide-react'

const promises = [
  {
    title: 'Upfront pricing. No surprises.',
    description:
      "You get the full price before we pick up a single tool. What we quote is what you pay — no \"we found something extra\" upsells once we're in your home.",
    accent: 'group-hover:border-l-apple-blue',
  },
  {
    title: 'Licensed, background-checked techs.',
    description:
      'Every tech on our team is state-licensed, background-checked, and drug-tested. You know exactly who is coming to your home before they arrive.',
    accent: 'group-hover:border-l-apple-blue',
  },
  {
    title: 'Guaranteed work — or we come back free.',
    description:
      'Every repair is guaranteed for 12 months. If something we fixed fails within a year, we return and fix it at no charge. Zero fine print.',
    accent: 'group-hover:border-l-status-green',
  },
  {
    title: 'Same-day service. We mean it.',
    description:
      "Our average response time is 90 minutes. Not \"we'll add you to the schedule for next Tuesday.\" Real same-day appointments, seven days a week.",
    accent: 'group-hover:border-l-apple-blue',
  },
  {
    title: 'We clean up. Every time.',
    description:
      'Our techs leave your home cleaner than they found it. Shoe covers, drop cloths, and a full cleanup before we leave — not an afterthought.',
    accent: 'group-hover:border-l-status-green',
  },
  {
    title: "You're updated the whole way.",
    description:
      "Real-time text updates from dispatch to arrival to completion. You'll never wonder \"where are they?\" — we tell you before you have to ask.",
    accent: 'group-hover:border-l-apple-blue',
  },
]

const stats = [
  { value: '15+', label: 'Years in business' },
  { value: '12k+', label: 'Jobs completed' },
  { value: '98%', label: 'Would recommend' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-status-green/4 rounded-full blur-3xl pointer-events-none -translate-x-1/2 animate-float-slow" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column — sticky */}
          <div className="lg:sticky lg:top-24">
            <p className="text-[13px] font-semibold text-apple-blue uppercase tracking-widest mb-3">
              Our Promise
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-apple-dark tracking-tighter leading-tight mb-6">
              Why 800+ families
              <br />choose GrowBridge.
            </h2>
            <p className="text-[19px] text-apple-secondary leading-relaxed mb-10">
              Any plumber can unclog a drain. What makes us different is how we
              treat you while we do it.
            </p>

            {/* Social proof card */}
            <div className="bg-white rounded-2xl p-6 shadow-elevated border border-apple-border-subtle hover:shadow-lift transition-all duration-300 hover-gradient-border">
              {/* Stars + rating */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-14 h-14 rounded-full bg-apple-blue flex items-center justify-center text-white font-black text-[20px] shadow-glow-blue animate-glow-pulse">
                  4.9
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#FF9F0A">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[13px] text-apple-secondary">Average from 847 Google reviews</p>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-apple-border-subtle">
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="group text-center p-3 rounded-xl hover:bg-apple-blue-light transition-colors duration-200 cursor-default"
                  >
                    <p className="text-[24px] font-bold number-gradient tracking-tight">{value}</p>
                    <p className="text-[11px] text-apple-secondary leading-tight mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — promises */}
          <div className="space-y-3">
            {promises.map((promise, i) => (
              <div
                key={promise.title}
                style={{ animationDelay: `${i * 80}ms` }}
                className={`group bg-white rounded-2xl p-6 shadow-card border border-l-4 border-apple-border-subtle border-l-transparent
                            hover:shadow-elevated hover:-translate-y-0.5 ${promise.accent}
                            transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-status-green-bg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-status-green group-hover:shadow-glow-green group-hover:scale-110 transition-all duration-300">
                    <CheckCircle2 size={18} className="text-status-green group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-apple-dark mb-1.5 group-hover:text-apple-blue transition-colors duration-200">
                      {promise.title}
                    </h3>
                    <p className="text-[14px] text-apple-secondary leading-relaxed">
                      {promise.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
