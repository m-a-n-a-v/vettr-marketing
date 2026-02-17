import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Developer Portal | VETTR",
  description:
    "Build powerful mining stock analysis tools with the VETTR API. Explore endpoints, authentication, rate limits, and interactive documentation.",
};

const quickStartCards = [
  {
    title: "API Reference",
    description:
      "Explore all endpoints, request/response schemas, and authentication",
    href: "/developers/docs",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Interactive Docs",
    description: "Try API calls directly in your browser with Swagger UI",
    href: "/developers/swagger",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Getting Started",
    description: "Quick guide to authenticate and make your first API call",
    href: "#auth",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

const apiGroups = [
  { name: "Auth", description: "Signup, login, OAuth, and token refresh" },
  { name: "Stocks", description: "List, search, get by ticker, and pagination" },
  { name: "Filings", description: "Regulatory filings with filtering by type" },
  { name: "Executives", description: "Management team data and profiles" },
  { name: "VETTR Score", description: "Score calculation, breakdown, and history" },
  { name: "Red Flags", description: "Detection, analysis, and severity tracking" },
  { name: "Alerts", description: "Custom alert rules and notifications" },
  { name: "Watchlist", description: "User watchlist management and tracking" },
];

const rateLimits = [
  { tier: "Free", read: "60/min", write: "20/min" },
  { tier: "Pro", read: "120/min", write: "60/min" },
  { tier: "Premium", read: "300/min", write: "120/min" },
];

export default function DeveloperPortalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vettr-navy via-vettr-dark to-vettr-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,230,118,0.08)_0%,_transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vettr-accent/10 border border-vettr-accent/20 text-vettr-accent text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-vettr-accent animate-pulse" />
            API v1 is live
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4">
            VETTR Developer Portal
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Build powerful mining stock analysis tools with the VETTR API. Access scores, filings, red flags, and executive data programmatically.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/developers/docs" className="px-6 py-3 bg-vettr-accent text-vettr-navy font-semibold rounded-lg hover:bg-vettr-accent/90 transition-colors">
              View API Reference
            </Link>
            <Link href="/developers/swagger" className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/15 transition-colors border border-white/10">
              Try Interactive Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Start Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Quick Start</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quickStartCards.map((card) => (
            <Link key={card.title} href={card.href} className="group block bg-vettr-card/50 rounded-2xl p-6 border border-white/5 hover:border-vettr-accent/30 transition-all hover:bg-vettr-card/80">
              <div className="text-vettr-accent mb-4 group-hover:scale-110 transition-transform">{card.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-vettr-accent transition-colors">{card.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
              <div className="mt-4 text-vettr-accent text-sm font-medium flex items-center gap-1">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Authentication Section */}
      <section id="auth" className="py-20 bg-vettr-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Authentication</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">The VETTR API uses JWT Bearer tokens for authentication. Follow these steps to get started.</p>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vettr-accent/10 border border-vettr-accent/20 flex items-center justify-center text-vettr-accent text-sm font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Create an account</h3>
                  <p className="text-gray-400 text-sm">Send a POST request to <code className="px-1.5 py-0.5 bg-white/10 rounded text-vettr-accent text-xs">/v1/auth/signup</code> with your email and password.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vettr-accent/10 border border-vettr-accent/20 flex items-center justify-center text-vettr-accent text-sm font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Get your token</h3>
                  <p className="text-gray-400 text-sm">POST to <code className="px-1.5 py-0.5 bg-white/10 rounded text-vettr-accent text-xs">/v1/auth/login</code> with your credentials. You will receive a JWT access token.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vettr-accent/10 border border-vettr-accent/20 flex items-center justify-center text-vettr-accent text-sm font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Make authenticated requests</h3>
                  <p className="text-gray-400 text-sm">Include the token as a <code className="px-1.5 py-0.5 bg-white/10 rounded text-vettr-accent text-xs">Bearer</code> token in the Authorization header. Admin routes require an additional <code className="px-1.5 py-0.5 bg-white/10 rounded text-vettr-accent text-xs">X-Admin-Secret</code> header.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 px-4 py-2 bg-vettr-navy rounded-t-xl border border-white/10 border-b-0">
                  <span className="text-xs text-gray-500 font-mono">Get an access token</span>
                </div>
                <pre className="bg-vettr-navy rounded-b-xl border border-white/10 p-4 overflow-x-auto">
                  <code className="text-sm font-mono text-vettr-accent leading-relaxed">{`curl -X POST https://vettr-backend.vercel.app/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email": "dev@example.com", "password": "your-password"}'`}</code>
                </pre>
              </div>
              <div>
                <div className="flex items-center gap-2 px-4 py-2 bg-vettr-navy rounded-t-xl border border-white/10 border-b-0">
                  <span className="text-xs text-gray-500 font-mono">Use the token in requests</span>
                </div>
                <pre className="bg-vettr-navy rounded-b-xl border border-white/10 p-4 overflow-x-auto">
                  <code className="text-sm font-mono text-vettr-accent leading-relaxed">{`curl https://vettr-backend.vercel.app/v1/stocks \\
  -H "Authorization: Bearer YOUR_TOKEN"`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Rate Limits</h2>
        <p className="text-gray-400 mb-10 max-w-2xl">API requests are rate-limited based on your subscription tier. Limits are applied per minute using a sliding window.</p>
        <div className="bg-vettr-card/50 rounded-2xl border border-white/5 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Tier</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Read Requests</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Write Requests</th>
              </tr>
            </thead>
            <tbody>
              {rateLimits.map((limit, index) => (
                <tr key={limit.tier} className={index < rateLimits.length - 1 ? "border-b border-white/5" : ""}>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${limit.tier === "Free" ? "bg-white/10 text-gray-300" : limit.tier === "Pro" ? "bg-vettr-blue/10 text-vettr-blue border border-vettr-blue/20" : "bg-vettr-accent/10 text-vettr-accent border border-vettr-accent/20"}`}>{limit.tier}</span>
                  </td>
                  <td className="px-6 py-4 font-mono text-sm text-gray-400">{limit.read}</td>
                  <td className="px-6 py-4 font-mono text-sm text-gray-400">{limit.write}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-20 bg-vettr-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">API Overview</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">The VETTR API is organized around REST. All endpoints accept and return JSON. Explore each group below.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {apiGroups.map((group) => (
              <Link key={group.name} href="/developers/docs" className="group bg-vettr-card/50 rounded-2xl p-5 border border-white/5 hover:border-vettr-accent/30 transition-all hover:bg-vettr-card/80">
                <h3 className="font-semibold text-white mb-1 group-hover:text-vettr-accent transition-colors">{group.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{group.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-vettr-card to-vettr-dark border border-white/5 rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to start building?</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">Explore the full API documentation and start integrating VETTR data into your applications today.</p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/developers/docs" className="px-6 py-3 bg-vettr-accent text-vettr-navy font-semibold rounded-lg hover:bg-vettr-accent/90 transition-colors">API Reference</Link>
              <Link href="/developers/swagger" className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/15 transition-colors border border-white/10">Swagger UI</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
