import { useState } from 'react'
import { FadeIn, SectionHeader } from './ui/Shared'

const useCases = [
  {
    id: '001',
    title: 'For marketers',
    description:
      'Create ads, emails, landing pages, and social content - without starting from scratch. Quickly generate multiple variations, test different angles, and adapt your message for every platform in seconds.',
  },
  {
    id: '002',
    title: 'For founders',
    description:
      'Ship product updates, pitch decks, and investor emails without hiring a copywriter. Turn rough ideas into polished messaging that builds trust and drives conversions from day one.',
  },
  {
    id: '003',
    title: 'For teams',
    description:
      'Collaborate on content with shared brand voice settings, templates, and workflows. Keep every team member aligned and scale content production across departments effortlessly.',
  },
]

export default function UseCases() {
  const [active, setActive] = useState(0)

  return (
    <section id="use-cases" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="use cases"
          title="Built for how you actually create content"
          description={
            <>
              Whether you're creating content daily or scaling it across a team,
              Verseo adapts to your workflow.
            </>
          }
        />

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {useCases.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                className={`shrink-0 rounded-xl border px-5 py-4 text-left transition-all ${
                  active === i
                    ? 'border-foreground bg-foreground text-white'
                    : 'border-border bg-surface text-muted hover:border-border-strong'
                }`}
              >
                <span className="font-mono text-xs opacity-60">{item.id}</span>
                <p className="mt-1 font-medium">{item.title}</p>
              </button>
            ))}
          </div>

          <FadeIn key={active}>
            <div className="rounded-2xl border border-border bg-surface p-8 md:p-10">
              <span className="font-mono text-sm text-muted">
                {useCases[active].id}
              </span>
              <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                {useCases[active].title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                {useCases[active].description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {['Ads & campaigns', 'Email sequences', 'Social content'].map(
                  (tag) => (
                    <div
                      key={tag}
                      className="rounded-xl bg-surface-muted px-4 py-3 text-center text-sm font-medium"
                    >
                      {tag}
                    </div>
                  ),
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
