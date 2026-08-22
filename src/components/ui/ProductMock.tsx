import { Sparkles } from 'lucide-react'

export function HeroDashboard() {
  return (
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

      <div className="grid min-h-[340px] md:grid-cols-[220px_1fr]">
        <aside className="hidden border-r border-border bg-surface-muted/60 p-4 md:block">
          <p className="font-mono text-[10px] tracking-wide text-muted uppercase">
            Templates
          </p>
          <ul className="mt-3 space-y-1.5">
            {['Blog post', 'Email', 'Ad copy', 'Product page', 'Social post'].map(
              (item, i) => (
                <li
                  key={item}
                  className={`rounded-lg px-3 py-2 text-sm ${
                    i === 0
                      ? 'bg-foreground text-white'
                      : 'text-muted hover:bg-surface'
                  }`}
                >
                  {item}
                </li>
              ),
            )}
          </ul>
        </aside>

        <div className="p-5 md:p-6">
          <div className="rounded-xl border border-border bg-surface-muted px-4 py-3">
            <p className="font-mono text-[10px] text-muted uppercase">Prompt</p>
            <p className="mt-1 text-sm text-foreground">
              Write a landing page intro for an AI writing tool used by marketing
              teams.
            </p>
          </div>

          <div className="mt-4 space-y-3">
            <div className="h-3 w-2/5 rounded-full bg-foreground/90" />
            <div className="h-2.5 w-full rounded-full bg-border" />
            <div className="h-2.5 w-[92%] rounded-full bg-border" />
            <div className="h-2.5 w-[78%] rounded-full bg-border" />
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {['Clear structure', 'On-brand voice', 'Ready to publish'].map(
                (chip) => (
                  <div
                    key={chip}
                    className="rounded-lg border border-border bg-surface px-3 py-2 text-center font-mono text-[10px] text-muted"
                  >
                    {chip}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ComparisonMock() {
  return (
    <div className="mx-auto grid w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-surface shadow-lg md:grid-cols-2">
      <div className="border-b border-border p-6 md:border-r md:border-b-0">
        <p className="font-mono text-[10px] tracking-wide text-accent-coral uppercase">
          Before
        </p>
        <h3 className="mt-2 text-lg font-semibold">Draft in progress…</h3>
        <div className="mt-4 space-y-2">
          <div className="h-2.5 w-full rounded-full bg-border" />
          <div className="h-2.5 w-4/5 rounded-full bg-border" />
          <div className="h-2.5 w-2/3 rounded-full bg-border" />
          <div className="mt-6 rounded-xl bg-accent-coral/10 p-4 text-sm text-muted">
            Blank page. No structure. Inconsistent tone.
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-accent-green/10 to-surface p-6">
        <p className="font-mono text-[10px] tracking-wide text-accent-green uppercase">
          After
        </p>
        <h3 className="mt-2 text-lg font-semibold">Ready to publish</h3>
        <div className="mt-4 space-y-2">
          <div className="h-2.5 w-full rounded-full bg-foreground/80" />
          <div className="h-2.5 w-[90%] rounded-full bg-foreground/40" />
          <div className="h-2.5 w-[70%] rounded-full bg-foreground/25" />
          <div className="mt-6 rounded-xl bg-accent-green/15 p-4 text-sm text-foreground">
            Structured copy, consistent voice, shipped in seconds.
          </div>
        </div>
      </div>
    </div>
  )
}

const examplePalettes = [
  'from-accent-purple/30 to-accent/10',
  'from-accent-yellow/30 to-accent-coral/10',
  'from-accent-green/30 to-accent-purple/10',
]

export function ExampleCover({
  title,
  index,
}: {
  title: string
  index: number
}) {
  return (
    <div
      className={`flex aspect-[16/10] items-end bg-gradient-to-br p-5 ${examplePalettes[index % examplePalettes.length]}`}
    >
      <div className="w-full rounded-xl border border-white/50 bg-white/80 p-4 backdrop-blur-sm">
        <p className="font-mono text-[10px] text-muted uppercase">Generated</p>
        <p className="mt-1 text-sm font-semibold">{title}</p>
        <div className="mt-3 space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-border" />
          <div className="h-1.5 w-4/5 rounded-full bg-border" />
        </div>
      </div>
    </div>
  )
}

export function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground font-mono text-xs font-medium text-white">
      {initials}
    </div>
  )
}

export function PartnerMarks() {
  const names = ['Linear', 'Notion', 'Stripe', 'Figma', 'Vercel', 'Slack']

  return (
    <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
      {names.map((name) => (
        <span
          key={name}
          className="text-sm font-semibold tracking-tight text-muted/70"
        >
          {name}
        </span>
      ))}
    </div>
  )
}
