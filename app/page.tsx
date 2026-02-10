import Link from "next/link";
import DownloadButtons from "@/components/DownloadButtons";

const stats = [
  { value: "25+", label: "Stocks Tracked" },
  { value: "90+", label: "Executives" },
  { value: "75+", label: "Filings Analyzed" },
  { value: "Real-time", label: "Alerts" },
];

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "VETR Score",
    description:
      "Proprietary scoring from 0-100 analyzing financials, management, and filings to give you a clear picture of stock quality.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
        />
      </svg>
    ),
    title: "Red Flag Detection",
    description:
      "Automated detection of insider trading, dilution risks, and governance issues before they impact your portfolio.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Executive Pedigree",
    description:
      "Track executive backgrounds, previous companies, and performance history to evaluate management quality.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    ),
    title: "Real-time Alerts",
    description:
      "Custom alerts for price changes, new filings, score changes, and red flags delivered instantly to your device.",
  },
];

const steps = [
  {
    number: "01",
    title: "Search",
    description: "Find mining and resource stocks from our curated database of tracked companies.",
  },
  {
    number: "02",
    title: "Analyze",
    description: "Review VETR scores, red flags, executive pedigree, and filing analysis in one place.",
  },
  {
    number: "03",
    title: "Decide",
    description: "Make informed investment decisions backed by comprehensive due diligence data.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vettr-navy via-vettr-dark to-vettr-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,230,118,0.08)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(68,138,255,0.06)_0%,_transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Vet Your Stocks{" "}
              <span className="text-vettr-accent">Before</span> You Invest
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              AI-powered due diligence for mining and resource stocks. VETR
              Scores, Red Flag Detection, Executive Pedigree tracking — all in
              one app.
            </p>
            <div className="mt-10 flex justify-center" id="download">
              <DownloadButtons />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-vettr-dark/60 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-vettr-accent">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Everything you need for{" "}
              <span className="text-vettr-accent">smarter</span> investing
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Comprehensive tools built specifically for mining and resource
              stock analysis.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-vettr-card/50 border border-white/5 rounded-2xl p-6 hover:border-vettr-accent/30 transition-all hover:bg-vettr-card/80 group"
              >
                <div className="text-vettr-accent mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28 bg-vettr-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              How it <span className="text-vettr-accent">works</span>
            </h2>
            <p className="mt-4 text-gray-400">
              Three simple steps to better investment decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-vettr-accent/10 border border-vettr-accent/20 mb-6">
                  <span className="text-xl font-bold text-vettr-accent">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-vettr-card to-vettr-dark border border-white/5 rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to make smarter investment decisions?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Join thousands of investors who use VETTR to vet mining and
              resource stocks before they invest.
            </p>
            <div className="flex justify-center mb-8">
              <DownloadButtons />
            </div>
            <Link
              href="/developers"
              className="text-vettr-accent hover:text-vettr-accent/80 text-sm font-medium transition-colors"
            >
              Developers? Check out our API &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
