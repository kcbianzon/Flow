import { Star } from 'lucide-react'
import { FadeIn, SectionHeader, Card } from './ui/Shared'
import { Avatar } from './ui/ProductMock'

const testimonials = [
  {
    rating: '4,9',
    quote:
      "We tested several AI writing tools, but Verseo felt the most practical. It's fast, intuitive, and fits naturally into our workflow.",
    name: 'Emma Rodriguez',
    role: 'Content Strategist',
  },
  {
    rating: '5,0',
    quote:
      'Verseo cut our content creation time in half. What used to take hours now takes minutes, and the quality is consistently high.',
    name: 'Sarah Chen',
    role: 'Marketing Manager',
  },
  {
    rating: '5,0',
    quote:
      'The biggest win for us is consistency. Every email, post, and product update sounds like it comes from the same brand voice.',
    name: 'David Miller',
    role: 'Startup Founder',
  },
]

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-accent-yellow text-accent-yellow" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="testimonials"
          title="Loved by teams that create content every day"
          description={
            <>
              From marketers and founders to agencies and growing teams — Verseo
              helps people create better content faster, without sacrificing
              quality or consistency.
            </>
          }
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.1}>
              <Card className="flex h-full flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <StarRating />
                  <span className="font-mono text-sm font-medium">
                    {item.rating}
                  </span>
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-muted">
                  "{item.quote}"
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <Avatar name={item.name} />
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted">{item.role}</p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
