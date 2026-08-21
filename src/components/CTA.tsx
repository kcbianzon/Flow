import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button, SectionLabel } from './ui/Shared'

export default function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent-purple/15 via-surface to-accent-green/10 p-10 md:p-16"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionLabel>ready to start?</SectionLabel>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl lg:leading-[1.1]">
                Start creating
                <br />
                better content today
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                Turn ideas into polished content in seconds. Generate, refine,
                and publish faster with AI-powered workflows designed for modern
                teams.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact-us" variant="primary" size="lg">
                  Get Started
                  <ArrowRight size={16} />
                </Button>
                <Button href="/contact-us" variant="secondary" size="lg">
                  Try Demo
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-dark p-6 font-mono text-xs text-white/80 shadow-2xl">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-coral/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-yellow/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-green/80" />
                </div>
                <span className="text-white/40">FLOW</span>
              </div>
              <p className="text-accent-green">content_request:</p>
              <p className="mt-1 text-white/90">
                &gt; Create a high-converting landing page
              </p>
              <p className="mt-4 text-accent-yellow">
                processing<span className="animate-pulse-dot">…</span>
              </p>
              <div className="mt-2 space-y-1 text-white/50">
                <p>→ analyzing audience</p>
                <p>→ structuring content</p>
                <p>→ optimizing messaging</p>
              </div>
              <p className="mt-4 text-accent-purple">output:</p>
              <div className="mt-1 space-y-1 text-white/70">
                <p>+ compelling headline</p>
                <p>+ clear value proposition</p>
                <p>+ conversion-focused copy</p>
              </div>
              <p className="mt-4 text-accent-green">
                status: ready to publish ✓
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
