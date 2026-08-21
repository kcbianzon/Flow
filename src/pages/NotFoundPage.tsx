import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '../components/ui/Shared'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-muted">[ 404 ]</p>
      <h1 className="mt-4 text-6xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/" variant="primary" size="md">
          <ArrowLeft size={16} />
          Back to home
        </Button>
        <Link
          to="/contact-us"
          className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-surface-muted"
        >
          Contact us
        </Link>
      </div>
    </div>
  )
}
