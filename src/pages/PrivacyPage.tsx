import LegalPage from './LegalPage'

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>Last updated: August 2026</p>
      <p>
        Verseo ("we", "our", or "us") is committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, and safeguard your
        information when you use our AI writing platform.
      </p>
      <h2 className="text-lg font-semibold text-foreground">Information We Collect</h2>
      <p>
        We may collect personal information such as your name, email address,
        and content you create using our service. We also collect usage data to
        improve our platform.
      </p>
      <h2 className="text-lg font-semibold text-foreground">How We Use Your Information</h2>
      <p>
        We use your information to provide and improve our services, communicate
        with you, and ensure the security of our platform. We do not sell your
        personal data to third parties.
      </p>
      <h2 className="text-lg font-semibold text-foreground">Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your data.
        However, no method of transmission over the Internet is 100% secure.
      </p>
      <h2 className="text-lg font-semibold text-foreground">Contact</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at{' '}
        <a href="mailto:kcbianzon@gmail.com" className="text-accent hover:underline">
          kcbianzon@gmail.com
        </a>
        .
      </p>
    </LegalPage>
  )
}
