import { FadeIn, SectionHeader } from './ui/Shared'
import { ExampleCover } from './ui/ProductMock'

const examples = [
  {
    title: '5 Ways AI Saves Time',
    description:
      'Learn how modern teams use AI to streamline content creation, improve consistency, and free up time for more meaningful work.',
    tags: 'Productivity | AI | Teams',
    badge: 'Ready to publish',
    time: 'Generated in 3 sec',
  },
  {
    title: 'Ready To Send',
    description:
      'Generate engaging emails with clear messaging, strong structure, and a tone that matches your brand in just a few seconds.',
    tags: 'Campaign | Marketing | Outreach',
    badge: 'Ready to publish',
    time: 'Generated in 3 sec',
  },
  {
    title: 'Built For Growth',
    description:
      'Create polished product descriptions that communicate benefits clearly, build trust, and support better conversion rates.',
    tags: 'SaaS | Product | Copywriting',
    badge: 'Optimized for conversion',
    time: 'Generated in 3 sec',
  },
]

export default function Examples() {
  return (
    <section id="examples" className="bg-surface-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="examples"
          title="See what you can create with flow"
          description={
            <>
              From social media posts and email campaigns to product descriptions
              and ad copy — generate content tailored to any channel in seconds.
            </>
          }
        />

        <div className="grid gap-6 md:grid-cols-3">
          {examples.map((example, i) => (
            <FadeIn key={example.title} delay={i * 0.1}>
              <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-xl hover:shadow-black/5">
                <div className="overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                  <ExampleCover title={example.title} index={i} />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-accent-green/20 px-3 py-1 font-mono text-[10px] text-foreground">
                      {example.badge}
                    </span>
                    <span className="font-mono text-[10px] text-muted">
                      {example.time}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{example.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {example.description}
                  </p>
                  <p className="mt-4 font-mono text-[10px] tracking-wide text-muted-light uppercase">
                    {example.tags}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <p className="text-sm text-muted">
            Works with your favorite tools
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 opacity-50">
            {['Notion', 'Slack', 'Google Docs', 'WordPress', 'HubSpot'].map(
              (tool) => (
                <span key={tool} className="font-mono text-xs text-muted">
                  {tool}
                </span>
              ),
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
