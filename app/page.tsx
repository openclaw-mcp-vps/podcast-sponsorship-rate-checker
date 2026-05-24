export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Podcast Advertisers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Are you paying fair{" "}
          <span className="text-[#58a6ff]">podcast ad rates?</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Compare sponsorship rates across similar shows by audience size, engagement, and niche.
          Stop overpaying — get data-backed rate estimates in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Checking Rates — $16/mo
        </a>
        <p className="text-xs text-[#484f58] mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "📊", title: "Rate Benchmarks", desc: "Aggregated CPM data across hundreds of shows" },
          { icon: "🎯", title: "Niche Matching", desc: "Compare only against shows in your target niche" },
          { icon: "📈", title: "Engagement Score", desc: "Factor in listener engagement, not just downloads" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
            <div className="text-xs text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$16</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited rate checks",
              "Access to full benchmark database",
              "Niche & audience size filters",
              "Engagement-adjusted CPM estimates",
              "CSV export of comparisons",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Where does the rate data come from?",
              a: "We aggregate publicly available sponsorship disclosures, media kits, and industry reports to build a continuously updated benchmark database."
            },
            {
              q: "How accurate are the rate estimates?",
              a: "Estimates are based on real market data filtered by niche, audience size, and engagement metrics. They reflect typical market ranges, not guarantees."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white text-sm mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] border-t border-[#21262d] pt-8">
        © {new Date().getFullYear()} Podcast Sponsorship Rate Checker. All rights reserved.
      </footer>
    </main>
  );
}
