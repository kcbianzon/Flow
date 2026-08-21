import { Link } from 'react-router-dom'

const resourceLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: '404 page', href: '/404' },
]

const navLinks = [
  { label: 'Product', href: '/#features' },
  { label: 'Use Cases', href: '/#use-cases' },
  { label: 'Examples', href: '/#examples' },
  { label: 'Pricing', href: '/#pricing' },
]

const socialLinks = [
  { label: 'X', href: 'https://x.com/YTsyhanenko' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Linkedin', href: 'https://www.linkedin.com/' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
                <span className="font-mono text-xs font-bold text-white">F</span>
              </div>
              <span className="text-lg font-semibold">FLOW</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Flow helps teams create, refine, and publish high-quality content
              faster — without complicated workflows or endless revisions.
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs tracking-wide text-muted uppercase">
              [ Contact us through e-mail ]
            </p>
            <a
              href="mailto:kcbianzon@gmail.com"
              className="text-sm font-medium text-foreground hover:text-accent"
            >
              kcbianzon@gmail.com
            </a>
            <p className="mt-6 mb-3 font-mono text-xs tracking-wide text-muted uppercase">
              Stay connected
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs tracking-wide text-muted uppercase">
              [ resources ]
            </p>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs tracking-wide text-muted uppercase">
              [ Navigation ]
            </p>
            <ul className="mb-6 space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mb-3 font-mono text-xs tracking-wide text-muted uppercase">
              [ Social ]
            </p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted">
            © 2026 Verseo | All Rights Reserved
          </p>
          <p className="text-xs text-muted-light">
            Recreated with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
