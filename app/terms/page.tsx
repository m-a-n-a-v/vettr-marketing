import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - VETTR",
  description: "VETTR Terms of Service — the terms and conditions governing your use of the VETTR platform.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
        Terms of Service
      </h1>
      <p className="text-sm text-gray-400 mb-12">Last updated: February 2026</p>

      <div className="prose prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-400 leading-relaxed">
            By accessing or using the VETTR application and services, you agree
            to be bound by these Terms of Service and all applicable laws and
            regulations. If you do not agree with any of these terms, you are
            prohibited from using or accessing our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            2. Description of Service
          </h2>
          <p className="text-gray-400 leading-relaxed">
            VETTR provides stock analysis tools, scoring systems, alert
            services, and related information for mining and resource stocks.
            Our services are designed for informational and research purposes
            only and do not constitute financial advice, investment
            recommendations, or solicitations to buy or sell securities.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            3. User Accounts
          </h2>
          <p className="text-gray-400 leading-relaxed">
            To access certain features of our services, you may be required to
            create an account. You are responsible for maintaining the
            confidentiality of your account credentials and for all activities
            that occur under your account. You agree to notify us immediately
            of any unauthorized use of your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            4. Subscription and Payments
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Some features of VETTR require a paid subscription. Subscription
            fees are billed in advance on a monthly or annual basis. You may
            cancel your subscription at any time, and cancellation will take
            effect at the end of the current billing period. Refunds are
            handled in accordance with the applicable app store policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            5. Not Financial Advice
          </h2>
          <p className="text-gray-400 leading-relaxed">
            The information provided through VETTR, including VETR Scores, red
            flag alerts, executive pedigree data, and filing analyses, is for
            informational purposes only. It should not be construed as
            financial advice, investment recommendations, or endorsements of
            any securities. You should always conduct your own research and
            consult with a qualified financial advisor before making investment
            decisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            6. Intellectual Property
          </h2>
          <p className="text-gray-400 leading-relaxed">
            All content, features, and functionality of the VETTR platform,
            including but not limited to text, graphics, logos, icons, scoring
            algorithms, and software, are the exclusive property of VETTR and
            are protected by international copyright, trademark, patent, trade
            secret, and other intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            7. Prohibited Uses
          </h2>
          <p className="text-gray-400 leading-relaxed">
            You may not use our services for any unlawful purpose, to solicit
            others to perform unlawful acts, to violate any regulations, to
            infringe upon our intellectual property rights, to harass or
            discriminate, to submit false information, to upload malicious
            code, to scrape or data mine our platform, or to interfere with
            the security features of the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            8. Limitation of Liability
          </h2>
          <p className="text-gray-400 leading-relaxed">
            To the maximum extent permitted by law, VETTR and its affiliates,
            officers, directors, employees, and agents shall not be liable for
            any indirect, incidental, special, consequential, or punitive
            damages, or any loss of profits or revenues, whether incurred
            directly or indirectly, or any loss of data, use, goodwill, or
            other intangible losses, resulting from your use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            9. Disclaimer of Warranties
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Our services are provided on an &quot;as is&quot; and &quot;as available&quot; basis
            without any warranties of any kind, either express or implied. We
            do not warrant that our services will be uninterrupted, timely,
            secure, or error-free, or that any information provided will be
            accurate or reliable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            10. Indemnification
          </h2>
          <p className="text-gray-400 leading-relaxed">
            You agree to defend, indemnify, and hold harmless VETTR and its
            affiliates from any claims, damages, obligations, losses,
            liabilities, costs, or debt arising from your use of the services,
            your violation of these terms, or your violation of any third-party
            rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            11. Modifications to Terms
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We reserve the right to modify these terms at any time. We will
            provide notice of material changes by posting the updated terms on
            our platform and updating the &quot;Last updated&quot; date. Your continued
            use of our services following the posting of changes constitutes
            your acceptance of such changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            12. Governing Law
          </h2>
          <p className="text-gray-400 leading-relaxed">
            These terms shall be governed by and construed in accordance with
            the laws of the applicable jurisdiction, without regard to its
            conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            13. Contact Us
          </h2>
          <p className="text-gray-400 leading-relaxed">
            If you have any questions about these Terms of Service, please
            contact us at{" "}
            <a
              href="mailto:legal@vettr.app"
              className="text-vettr-accent hover:underline"
            >
              legal@vettr.app
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
