import { domAnimation, LazyMotion } from 'motion/react'
import type { ReactNode } from 'react'

/*
  Loads only the DOM animation feature set instead of the full `motion`
  runtime. `strict` makes the heavyweight `motion.*` components throw, which
  keeps every call site on the lightweight `m.*` components.
*/
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}
