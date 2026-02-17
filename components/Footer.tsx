import Link from "next/link";
import { VettrWordmark } from "./VettrLogo";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Blog", href: "/blog" },
    { label: "API", href: "/developers" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  Developers: [
    { label: "API Docs", href: "/developers" },
    { label: "Swagger", href: "/developers/swagger" },
    { label: "GitHub", href: "https://github.com/m-a-n-a-v" },
  ],
  Connect: [
    { label: "Twitter", href: "https://twitter.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-vettr-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-vettr-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <VettrWordmark size="sm" />
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} VETTR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
