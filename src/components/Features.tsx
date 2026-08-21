import { PenLine, Sparkles, Mic2, LayoutTemplate } from 'lucide-react'
import { FadeIn, SectionHeader, Card } from './ui/Shared'

const features = [
  {
    icon: PenLine,
    title: 'Smart Rewrite',
    description:
      'Improve clarity, structure, and tone instantly without rewriting from scratch.',
    tagline: 'Fix and refine in one click.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Sparkles,
    title: 'AI Writing',
    description:
      'Start from a simple idea and turn it into structured, high-quality content in seconds.',
    tagline: 'No more blank pages.',
    color: 'text-accent-purple',
    bg: 'bg-accent-purple/15',
  },
  {
    icon: Mic2,
    title: 'Tone Control',
    description:
      'Keep your voice consistent across every channel — from emails to social posts.',
    tagline: 'Write like your brand, every time.',
    color: 'text-accent-green',
    bg: 'bg-accent-green/15',
  },
  {
    icon: LayoutTemplate,
    title: 'Ready Templates',
    description:
      'Use proven formats for real-world use cases — from ads to product descriptions.',
    tagline: 'Start faster with the right structure.',
    color: 'text-accent-yellow',
    bg: 'bg-accent-yellow/15',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="features"
          title="Everything you need to create better content"
          description="Create, refine, and scale content - faster and without starting from scratch."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.08}>
              <Card className="h-full">
                <div
                  className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${feature.bg}`}
                >
                  <feature.icon size={20} className={feature.color} />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="mb-3 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
                <p className="font-mono text-xs text-muted-light">
                  {feature.tagline}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
