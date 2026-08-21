import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button, SectionLabel } from './ui/Shared'

const tickerItems = [
  'AI Writer',
  'Brand Voice',
  'Rewrite',
  'Summarize',
  'Trusted by modern teams',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-accent-purple/20 via-accent-green/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <SectionLabel>AI writing tool</SectionLabel>

          <h1 className="text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl lg:leading-[1.05]">
            Write better content.
            <br />
            <span className="text-muted">Faster. With AI</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Verseo helps teams, founders, and marketers generate high-quality
            content in seconds — without overthinking every word
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact-us" variant="primary" size="lg">
              Get Started
              <ArrowRight size={16} />
            </Button>
            <Button href="/contact-us" variant="secondary" size="lg">
              Try Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/10">
            <div className="flex items-center gap-2 border-b border-border bg-surface-muted px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-accent-coral/80" />
                <span className="h-3 w-3 rounded-full bg-accent-yellow/80" />
                <span className="h-3 w-3 rounded-full bg-accent-green/80" />
              </div>
              <div className="mx-auto flex items-center gap-2 rounded-lg bg-surface px-4 py-1.5 text-xs text-muted">
                <Sparkles size={12} className="text-accent" />
                What do you want to write today?
              </div>
            </div>
            <img
              src="/images/hero-dashboard.png"
              alt="Verseo AI writing dashboard"
              className="w-full"
            />
          </div>
        </motion.div>

        <div className="relative mt-12 overflow-hidden">
          <div className="flex animate-marquee gap-8 whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="inline-flex items-center gap-2 font-mono text-sm text-muted"
              >
                <span className="text-muted/50">[</span>
                {item}
                <span className="text-muted/50">]</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
          {[
            'logo-partner-1.png',
            'logo-partner-2.png',
            'logo-partner-3.png',
            'logo-partner-4.png',
            'logo-partner-5.png',
            'logo-partner-6.png',
          ].map((logo) => (
            <img
              key={logo}
              src={`/images/${logo}`}
              alt="Partner logo"
              className="h-6 object-contain grayscale md:h-7"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
