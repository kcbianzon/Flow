import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Shared'

const navLinks = [
  { label: 'Product', href: '/#features' },
  { label: 'Use Cases', href: '/#use-cases' },
  { label: 'Examples', href: '/#examples' },
  { label: 'Pricing', href: '/#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
            <span className="font-mono text-xs font-bold text-white">F</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">FLOW</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => {
                if (location.pathname !== '/' || !link.href.startsWith('/#')) return
                event.preventDefault()
                document
                  .getElementById(link.href.slice(2))
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/contact-us" variant="ghost" size="sm">
            Contact Us
          </Button>
          <Button href="/contact-us" variant="primary" size="sm">
            Start now
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) => {
                  if (location.pathname !== '/' || !link.href.startsWith('/#')) return
                  event.preventDefault()
                  document
                    .getElementById(link.href.slice(2))
                    ?.scrollIntoView({ behavior: 'smooth' })
                  setMobileOpen(false)
                }}
                className="text-sm text-muted"
              >
                {link.label}
              </a>
            ))}
            <Button href="/contact-us" variant="primary" size="sm" className="w-fit">
              Start now
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
