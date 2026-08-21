import { motion, type HTMLMotionProps } from 'framer-motion'
import { forwardRef, type ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="mb-4 flex items-center justify-center gap-2 font-mono text-xs tracking-wide text-muted uppercase">
      <span className="text-muted">[</span>
      <span>{children}</span>
      <span className="text-muted">]</span>
    </div>
  )
}

interface SectionHeaderProps {
  label?: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 max-w-3xl ${alignClass}`}
    >
      {label && <SectionLabel>{label}</SectionLabel>}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[42px] lg:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  )
}

interface ButtonProps extends HTMLMotionProps<'a'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  function Button(
    { variant = 'primary', size = 'md', className = '', children, ...props },
    ref,
  ) {
    const base =
      'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200'

    const variants = {
      primary:
        'bg-foreground text-white hover:bg-dark shadow-sm hover:shadow-md',
      secondary:
        'bg-surface text-foreground border border-border hover:border-border-strong hover:bg-surface-muted',
      ghost: 'text-foreground hover:bg-surface-muted',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-3.5 text-base',
    }

    return (
      <motion.a
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </motion.a>
    )
  },
)

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface p-6 ${
        hover ? 'transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export function FadeIn({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
