import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FadeIn } from '../components/ui/Shared'

export default function LegalPage({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>
            <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
            <div className="prose prose-neutral mt-8 max-w-none space-y-4 text-sm leading-relaxed text-muted">
              {children}
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  )
}
