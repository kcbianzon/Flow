import { Link } from 'react-router-dom'
import { ArrowLeft, Mail } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button, FadeIn } from '../components/ui/Shared'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-20">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <FadeIn>
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Have a question or want to get started with Verseo? We'd love to
              hear from you.
            </p>

            <div className="mt-10 rounded-2xl border border-border bg-surface p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted uppercase">
                    Email us
                  </p>
                  <a
                    href="mailto:kcbianzon@gmail.com"
                    className="text-lg font-medium hover:text-accent"
                  >
                    kcbianzon@gmail.com
                  </a>
                </div>
              </div>

              <form
                className="mt-8 space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                  />
                </div>
                <Button href="mailto:kcbianzon@gmail.com" variant="primary" size="md">
                  Send Message
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  )
}
