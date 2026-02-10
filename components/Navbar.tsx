"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/blog", label: "Blog" },
    { href: "/developers", label: "Developers" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-vettr-navy/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-vettr-accent">V</span>
              <span className="text-white">ETTR</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-vettr-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#download"
              className="text-sm font-medium bg-vettr-accent text-vettr-navy px-4 py-2 rounded-lg hover:bg-vettr-accent/90 transition-colors"
            >
              Download App
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-vettr-dark border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-gray-300 hover:text-vettr-accent transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium bg-vettr-accent text-vettr-navy px-4 py-2 rounded-lg hover:bg-vettr-accent/90 transition-colors text-center mt-2"
            >
              Download App
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
