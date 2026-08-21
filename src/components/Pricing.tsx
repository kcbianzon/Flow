import { useState } from 'react'
import { Check } from 'lucide-react'
import { FadeIn, SectionHeader, Button } from './ui/Shared'

const plans = [
  {
    name: 'Starter',
    description: 'For individuals and freelancers',
    monthlyPrice: 12,
    features: [
      'AI writing assistant',
      'Essential content templates',
      'Rewrite and improve text',
      'Standard support',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    description: 'For creators and professionals',
    monthlyPrice: 29,
    features: [
      'Advanced AI generation',
      'Brand voice controls',
      'Full template library',
      'Priority content tools',
    ],
    popular: true,
  },
  {
    name: 'Team',
    description: 'For agencies and growing teams',
    monthlyPrice: 79,
    features: [
      'Shared workspace',
      'Team collaboration tools',
      'Unlimited team projects',
      'Priority support',
    ],
    popular: false,
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="bg-surface-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="pricing"
          title="Choose the plan that grows with you"
          description={
            <>
              Whether you're creating content solo or collaborating with a team,
              there's a plan designed for your workflow.
            </>
          }
        />

        <div className="mb-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setAnnual(false)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              !annual
                ? 'bg-foreground text-white'
                : 'text-muted hover:text-foreground'
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setAnnual(true)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              annual
                ? 'bg-foreground text-white'
                : 'text-muted hover:text-foreground'
            }`}
          >
            Annual
            <span className="ml-1.5 rounded-full bg-accent-green/30 px-2 py-0.5 text-xs">
              -20%
            </span>
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => {
            const price = annual
              ? Math.round(plan.monthlyPrice * 0.8)
              : plan.monthlyPrice

            return (
              <FadeIn key={plan.name} delay={i * 0.1}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                    plan.popular
                      ? 'border-foreground bg-foreground text-white shadow-xl'
                      : 'border-border bg-surface'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-green px-3 py-1 font-mono text-[10px] font-medium text-foreground uppercase">
                      Popular
                    </span>
                  )}

                  <div>
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <p
                      className={`mt-1 text-sm ${plan.popular ? 'text-white/70' : 'text-muted'}`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  <div className="my-6">
                    <span className="text-4xl font-semibold">${price}</span>
                    <span
                      className={`text-sm ${plan.popular ? 'text-white/60' : 'text-muted'}`}
                    >
                      /mo
                    </span>
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check
                          size={16}
                          className={`mt-0.5 shrink-0 ${plan.popular ? 'text-accent-green' : 'text-accent'}`}
                        />
                        <span
                          className={plan.popular ? 'text-white/90' : 'text-muted'}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/contact-us"
                    variant={plan.popular ? 'secondary' : 'primary'}
                    size="md"
                    className={`w-full ${plan.popular ? '!bg-white !text-foreground hover:!bg-white/90' : ''}`}
                  >
                    Get Started
                  </Button>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
