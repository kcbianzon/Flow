import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, SectionHeader } from './ui/Shared'

const faqs = [
  {
    question: 'What is Verseo?',
    answer:
      'Verseo is an AI-powered writing assistant that helps you generate, rewrite, and improve content in seconds. From emails and social posts to product descriptions and marketing copy, it helps you create content faster with less effort.',
  },
  {
    question: 'Who is Flow designed for?',
    answer:
      'Flow is designed for marketers, founders, content creators, and teams who need to produce high-quality content quickly. Whether you are a solo freelancer or part of a growing agency, Verseo adapts to your workflow.',
  },
  {
    question: 'Do I need any writing experience?',
    answer:
      'No writing experience is required. Verseo helps you go from a rough idea to polished content with simple prompts. The AI handles structure, tone, and clarity so you can focus on your message.',
  },
  {
    question: 'Can I customize the generated content?',
    answer:
      'Yes. You can adjust tone, rewrite sections, regenerate variations, and fine-tune every piece of content before publishing. Brand voice controls ensure consistency across all your channels.',
  },
  {
    question: 'What types of content can I create?',
    answer:
      'You can create ads, emails, landing pages, social posts, product descriptions, blog outlines, and more. Ready-made templates help you start faster for any use case.',
  },
  {
    question: 'How fast can I generate content?',
    answer:
      'Most content is generated in seconds. Simply describe what you need, and Verseo delivers structured, ready-to-use copy that you can refine and publish immediately.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeader
          label="faq"
          title={
            <>
              Everything you need
              <br />
              to know
            </>
          }
          description="Whether you're creating content solo or collaborating with a team, there's a plan designed for your workflow."
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={faq.question} delay={i * 0.05}>
              <div className="overflow-hidden rounded-xl border border-border bg-surface">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="pr-4 text-sm font-medium md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-muted transition-transform duration-200 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="border-t border-border px-6 py-4 text-sm leading-relaxed text-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
