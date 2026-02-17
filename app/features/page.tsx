"use client";

import { useState } from "react";
import Link from "next/link";
import JoinWaitlist from "@/components/JoinWaitlist";

const scoreRanges = [
  {
    range: "90 - 100",
    label: "Elite (Strong Buy)",
    color: "bg-emerald-500",
    textColor: "text-emerald-400",
    description: "Rare combination of cash, pedigree, and structure",
  },
  {
    range: "75 - 89",
    label: "Contender (Accumulate)",
    color: "bg-teal-500",
    textColor: "text-teal-400",
    description: "Good company, minor flaws — e.g., slightly low liquidity",
  },
  {
    range: "50 - 74",
    label: "Watchlist (Hold)",
    color: "bg-amber-500",
    textColor: "text-amber-400",
    description: "Average. Needs a catalyst or cash injection",
  },
  {
    range: "30 - 49",
    label: "Speculative (Avoid)",
    color: "bg-orange-500",
    textColor: "text-orange-400",
    description: "High risk, high dilution, or low cash",
  },
  {
    range: "0 - 29",
    label: "Toxic (Strong Sell)",
    color: "bg-red-500",
    textColor: "text-red-400",
    description: "Imminent bankruptcy risk or lifestyle company",
  },
];

const redFlagTypes = [
  "Unusual insider selling patterns",
  "Excessive share dilution history",
  "Related-party transactions",
  "Frequent auditor changes",
  "Governance structure concerns",
  "Compensation misalignment",
  "Delayed or amended filings",
  "Material weakness disclosures",
];

const executiveTracking = [
  "Full career history and previous roles",
  "Performance at prior companies",
  "Board memberships and affiliations",
  "Compensation packages and incentive alignment",
  "Insider trading activity and patterns",
  "Education and professional credentials",
];

const filingTypes = [
  "Annual Reports (10-K / AIF)",
  "Quarterly Reports (10-Q / MD&A)",
  "Material Change Reports (8-K)",
  "Insider Trading Reports (Form 4)",
  "Prospectus and Offering Documents",
  "Technical Reports (NI 43-101)",
];

const alertTypes = [
  "Price movement beyond threshold",
  "New filing published",
  "VETTR Score changes",
  "New red flags detected",
  "Executive changes",
  "Insider trading activity",
];

const tiers = [
  {
    name: "Free",
    monthlyPrice: "$0",
    annualPrice: "$0",
    period: "forever",
    annualPeriod: "forever",
    features: [
      "5 stock watchlist",
      "Basic VETTR Scores",
      "Limited red flag alerts",
      "Weekly email digest",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    monthlyPrice: "$19.99",
    annualPrice: "$199",
    period: "/month",
    annualPeriod: "/year",
    savings: "Save $40/yr",
    features: [
      "25 stock watchlist",
      "Full VETTR Score breakdown",
      "All red flag categories",
      "Executive pedigree access",
      "Real-time push alerts",
      "Filing analysis summaries",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Premium",
    monthlyPrice: "$39.99",
    annualPrice: "$399",
    period: "/month",
    annualPeriod: "/year",
    savings: "Save $80/yr",
    features: [
      "Unlimited watchlist",
      "Full VETTR Score + history",
      "All red flag categories + trends",
      "Full executive pedigree + network",
      "Priority real-time alerts",
      "Full filing analysis + AI summaries",
      "API access",
      "Export reports",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
];

export default function FeaturesPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-12 sm:pt-28 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Powerful features for{" "}
            <span className="text-vettr-accent">smarter</span> investing
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Every tool you need to thoroughly vet mining and resource stocks
            before committing your capital.
          </p>
        </div>
      </section>

      {/* VETTR Score */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">VETTR Score</h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Our proprietary scoring system rates stocks from 0 to 100 based on
              a comprehensive analysis of financials, management quality, and
              public filings.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {scoreRanges.map((range) => (
              <div
                key={range.label}
                className="bg-vettr-card/50 border border-white/5 rounded-xl p-6 text-center"
              >
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${range.color}/20 ${range.textColor}`}
                >
                  {range.range}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${range.textColor}`}>
                  {range.label}
                </h3>
                <p className="text-sm text-gray-400">{range.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flag Detection */}
      <section className="py-16 sm:py-20 bg-vettr-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Red Flag Detection
              </h2>
              <p className="text-gray-400 mb-6">
                Our automated system continuously scans filings, insider
                transactions, and corporate governance data to identify potential
                warning signs before they become problems.
              </p>
              <ul className="space-y-3">
                {redFlagTypes.map((flag) => (
                  <li key={flag} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-vettr-red mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                    <span className="text-sm text-gray-300">{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-vettr-card/50 border border-white/5 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-vettr-red/10 border border-vettr-red/20 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-vettr-red" />
                  <span className="text-sm text-gray-300">
                    Insider sold 500K shares last month
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-vettr-yellow/10 border border-vettr-yellow/20 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-vettr-yellow" />
                  <span className="text-sm text-gray-300">
                    3 share dilution events in 12 months
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-vettr-red/10 border border-vettr-red/20 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-vettr-red" />
                  <span className="text-sm text-gray-300">
                    Auditor changed twice in 2 years
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-vettr-green/10 border border-vettr-green/20 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-vettr-green" />
                  <span className="text-sm text-gray-300">
                    No governance concerns detected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Pedigree */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Executive Pedigree
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Evaluate the people running the company. Track careers, past
              performance, and identify patterns in executive behavior.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {executiveTracking.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-vettr-card/50 border border-white/5 rounded-xl p-5"
              >
                <svg
                  className="w-5 h-5 text-vettr-accent mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filing Analysis */}
      <section className="py-16 sm:py-20 bg-vettr-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Filing Analysis</h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              We parse and analyze regulatory filings so you do not have to read
              hundreds of pages of dense legal text.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filingTypes.map((filing) => (
              <div
                key={filing}
                className="flex items-center gap-3 bg-vettr-card/50 border border-white/5 rounded-xl p-5"
              >
                <svg
                  className="w-5 h-5 text-vettr-blue flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-sm text-gray-300">{filing}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Alerts */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Real-time Alerts
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Stay informed with instant notifications delivered to your device
              when something important happens with your watched stocks.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {alertTypes.map((alert) => (
              <div
                key={alert}
                className="flex items-center gap-3 bg-vettr-card/50 border border-white/5 rounded-xl p-5"
              >
                <svg
                  className="w-5 h-5 text-vettr-yellow flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="text-sm text-gray-300">{alert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Subscription Tiers */}
      <section className="py-16 sm:py-20 bg-vettr-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">
              Choose your plan
            </h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto">
              Start free and upgrade when you are ready for more powerful
              features.
            </p>

            {/* Billing Toggle */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className={`text-sm font-medium ${!isAnnual ? "text-white" : "text-gray-400"}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                  isAnnual ? "bg-vettr-accent" : "bg-white/20"
                }`}
                aria-label="Toggle annual billing"
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                    isAnnual ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? "text-white" : "text-gray-400"}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="text-xs font-semibold text-vettr-accent bg-vettr-accent/10 px-2 py-1 rounded-full">
                  Save up to 17%
                </span>
              )}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 ${
                  tier.highlighted
                    ? "bg-vettr-card border-2 border-vettr-accent"
                    : "bg-vettr-card/50 border border-white/5"
                }`}
              >
                {tier.highlighted && (
                  <div className="text-xs font-semibold text-vettr-accent uppercase tracking-wider mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">
                    {isAnnual ? tier.annualPrice : tier.monthlyPrice}
                  </span>
                  <span className="text-sm text-gray-400">
                    {isAnnual ? tier.annualPeriod : tier.period}
                  </span>
                </div>
                {isAnnual && tier.savings && (
                  <div className="mt-2 text-xs font-semibold text-vettr-accent">
                    {tier.savings}
                  </div>
                )}
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-vettr-accent mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#waitlist"
                  className={`mt-8 block text-center py-3 rounded-lg text-sm font-semibold transition-colors ${
                    tier.highlighted
                      ? "bg-vettr-accent text-vettr-navy hover:bg-vettr-accent/90"
                      : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" id="waitlist">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Be the first to try VETTR
          </h2>
          <p className="text-gray-400 mb-8">
            Join the waitlist and get early access to VETTR Scores, red flag
            detection, and executive pedigree tracking.
          </p>
          <JoinWaitlist />
        </div>
      </section>
    </>
  );
}
