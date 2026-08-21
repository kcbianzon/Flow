import { FadeIn, SectionHeader } from './ui/Shared'

const steps = [
  {
    step: 'Step 1',
    title: 'Enter your idea',
    description:
      'Describe what you want to create in a simple prompt - even a rough idea works.',
  },
  {
    step: 'Step 2',
    title: 'Generate content',
    description:
      'Verseo turns your input into structured, high-quality content in seconds.',
  },
  {
    step: 'Step 3',
    title: 'Refine and publish',
    description:
      'Adjust tone, edit, and use your content anywhere - ready when you are.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-surface-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="how it works"
          title="Turn any idea into ready-to-use content in seconds"
          description={
            <>
              No complex tools or long workflows - just describe what you need,
              and Verseo does the rest.
            </>
          }
        />

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.12}>
              <div className="relative h-full rounded-2xl border border-border bg-surface p-8">
                <span className="font-mono text-xs tracking-wide text-accent uppercase">
                  {item.step}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <div className="absolute top-8 right-8 font-mono text-4xl font-bold text-border-strong">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          <p className="font-mono text-sm text-muted">
            The simpler the input, the faster you get results
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
