import { X, Check, Zap } from 'lucide-react'
import { FadeIn, SectionHeader } from './ui/Shared'
import { ComparisonMock } from './ui/ProductMock'

const columns = [
  {
    title: 'Fragmented writing',
    icon: X,
    iconColor: 'text-accent-coral',
    bgColor: 'bg-accent-coral/10',
    items: [
      "Ideas don't translate into clear content",
      'Constantly starting from a blank page',
      'No clear structure or direction',
    ],
  },
  {
    title: 'Manual workflows',
    icon: X,
    iconColor: 'text-accent-yellow',
    bgColor: 'bg-accent-yellow/10',
    items: [
      'Writing takes too much time',
      'Endless editing and rewriting',
      'Inconsistent tone across channels',
    ],
  },
  {
    title: 'AI-powered content flow',
    icon: Check,
    iconColor: 'text-accent-green',
    bgColor: 'bg-accent-green/10',
    items: [
      'Generate structured content in seconds',
      'Keep your voice consistent everywhere',
      'Refine, edit, and scale effortlessly',
    ],
    highlight: true,
  },
]

export default function Difference() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="the difference"
          title="Where content friction ends, clarity begins"
          description="See how AI replaces slow, manual writing with fast, structured content creation."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {columns.map((col, i) => (
            <FadeIn key={col.title} delay={i * 0.1}>
              <div
                className={`h-full rounded-2xl border p-6 ${
                  col.highlight
                    ? 'border-accent-green/30 bg-gradient-to-b from-accent-green/5 to-surface'
                    : 'border-border bg-surface'
                }`}
              >
                <div
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${col.bgColor}`}
                >
                  <col.icon size={18} className={col.iconColor} />
                </div>
                <h3 className="mb-4 text-lg font-semibold">{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <Zap
                        size={14}
                        className={`mt-0.5 shrink-0 ${col.highlight ? 'text-accent-green' : 'text-muted-light'}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12">
          <ComparisonMock />
        </FadeIn>
      </div>
    </section>
  )
}
