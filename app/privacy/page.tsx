import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - VETTR",
  description: "VETTR Privacy Policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-400 mb-12">Last updated: February 2026</p>

      <div className="prose prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            1. Information We Collect
          </h2>
          <p className="text-gray-400 leading-relaxed">
            When you use VETTR, we may collect information you provide directly
            to us, such as your name, email address, and account preferences.
            We also collect certain information automatically when you use our
            services, including device information, usage data, and log
            information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We use the information we collect to provide, maintain, and improve
            our services, including to personalize your experience, deliver
            relevant alerts and notifications, process transactions, and
            communicate with you about products, services, and updates.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            3. Information Sharing
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We do not sell your personal information to third parties. We may
            share your information with service providers who assist us in
            operating our platform, conducting our business, or servicing you.
            We may also share information when required by law, to protect our
            rights, or in connection with a business transfer.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            4. Data Security
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We implement appropriate technical and organizational security
            measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction. However, no method
            of transmission over the Internet or electronic storage is
            completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            5. Data Retention
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We retain your personal information for as long as your account is
            active or as needed to provide you services. We will also retain
            and use your information as necessary to comply with legal
            obligations, resolve disputes, and enforce our agreements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            6. Your Rights
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Depending on your jurisdiction, you may have the right to access,
            correct, delete, or port your personal data. You may also have the
            right to opt out of certain data processing activities. To exercise
            any of these rights, please contact us at privacy@vettr.app.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            7. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We use cookies and similar tracking technologies to collect and
            track information about your activity on our platform. You can
            control cookies through your browser settings, although disabling
            cookies may affect the functionality of certain features.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            8. Third-Party Services
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Our services may contain links to third-party websites or services
            that are not operated by us. We have no control over, and assume no
            responsibility for, the content, privacy policies, or practices of
            any third-party websites or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            9. Children&apos;s Privacy
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Our services are not directed to individuals under the age of 18.
            We do not knowingly collect personal information from children. If
            we become aware that we have collected personal information from a
            child, we will take steps to delete such information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            10. Changes to This Policy
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We may update this privacy policy from time to time. We will notify
            you of any changes by posting the new privacy policy on this page
            and updating the &quot;Last updated&quot; date. You are advised to review
            this privacy policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            11. Contact Us
          </h2>
          <p className="text-gray-400 leading-relaxed">
            If you have any questions about this privacy policy or our data
            practices, please contact us at{" "}
            <a
              href="mailto:privacy@vettr.app"
              className="text-vettr-accent hover:underline"
            >
              privacy@vettr.app
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
