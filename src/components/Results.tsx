import { ArrowRight, Bold, Share2, Italic, Eraser } from 'lucide-react'
import { FadeIn, SectionHeader, Button } from './ui/Shared'

const stats = [
  { label: 'Less time spent editing', value: '68%' },
  { label: 'Brand Voice', value: '94%' },
]

export default function Results() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="results"
          title="See the impact instantly"
          description="Create content faster, stay consistent across every channel, and achieve better results with less effort."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-2xl border border-border bg-gradient-to-br from-accent-purple/10 via-surface to-accent-green/10 p-8">
              <span className="font-mono text-xs text-muted uppercase">
                Verseo
              </span>
              <h3 className="mt-2 text-2xl font-semibold">Stay in the flow</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Keep momentum while writing. Generate, improve, and expand ideas
                without breaking your creative process.
              </p>
              <p className="mt-2 font-mono text-xs text-muted-light">
                No more switching between tools and tabs.
              </p>
              <Button href="/contact-us" variant="primary" size="sm" className="mt-6">
                Start Writing
                <ArrowRight size={14} />
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-surface p-8">
              <span className="font-mono text-xs text-muted uppercase">
                Ready to Publish
              </span>
              <p className="mt-2 text-sm text-muted">
                Review, edit, regenerate, and export your content wherever you
                need it.
              </p>

              <div className="mt-6 flex gap-3 rounded-xl border border-border bg-surface-muted p-4">
                {[Bold, Share2, Italic, Eraser].map((Icon, i) => (
                  <div
                    key={i}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface text-muted"
                  >
                    <Icon size={16} />
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-surface-muted p-4"
                  >
                    <p className="text-sm text-muted">{stat.label}</p>
                    <p className="mt-1 text-3xl font-semibold text-accent">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-8">
          <div className="rounded-2xl border border-border bg-dark p-8 text-white md:p-10">
            <h3 className="text-xl font-semibold">Content that fits anywhere</h3>
            <p className="mt-2 text-sm text-white/60">
              From social posts to long-form content.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Twitter', 'LinkedIn', 'Email', 'Blog', 'Ads', 'Product'].map(
                (channel) => (
                  <span
                    key={channel}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono"
                  >
                    {channel}
                  </span>
                ),
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
