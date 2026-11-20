import { m, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Stagger offset in seconds. */
  delay?: number
  /** Travel distance in px along the block axis. */
  y?: number
  as?: 'div' | 'li' | 'section' | 'article' | 'span'
  className?: string
}

/*
  Scroll-reveal wrapper. Restrained by design: a short fade with a small rise,
  played once, and fully disabled when the user prefers reduced motion.
*/
export function Reveal({
  children,
  delay = 0,
  y = 18,
  as = 'div',
  className = '',
}: RevealProps) {
  const reduceMotion = useReducedMotion()
  const Component = m[as]

  if (reduceMotion) {
    return <Component className={className}>{children}</Component>
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
