import LegalPage from './LegalPage'

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p>Last updated: August 2026</p>
      <p>
        By accessing or using Verseo, you agree to be bound by these Terms of
        Service. Please read them carefully before using our platform.
      </p>
      <h2 className="text-lg font-semibold text-foreground">Use of Service</h2>
      <p>
        Verseo provides AI-powered content creation tools. You agree to use the
        service only for lawful purposes and in accordance with these terms.
      </p>
      <h2 className="text-lg font-semibold text-foreground">Account Responsibilities</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account
        credentials and for all activities that occur under your account.
      </p>
      <h2 className="text-lg font-semibold text-foreground">Content Ownership</h2>
      <p>
        You retain ownership of content you create using Verseo. We do not claim
        ownership over your generated content.
      </p>
      <h2 className="text-lg font-semibold text-foreground">Limitation of Liability</h2>
      <p>
        Verseo is provided "as is" without warranties of any kind. We are not
        liable for any damages arising from your use of the service.
      </p>
      <h2 className="text-lg font-semibold text-foreground">Contact</h2>
      <p>
        For questions about these terms, contact us at{' '}
        <a href="mailto:kcbianzon@gmail.com" className="text-accent hover:underline">
          kcbianzon@gmail.com
        </a>
        .
      </p>
    </LegalPage>
  )
}
