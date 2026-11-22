import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  children: ReactNode
  /** Background surface. */
  tone?: 'white' | 'ivory' | 'mist' | 'ink'
  /** Accessible name source — the id of the section heading. */
  labelledBy?: string
  className?: string
}

const tones = {
  white: 'bg-white',
  ivory: 'bg-ivory',
  mist: 'bg-mist',
  ink: 'bg-ink text-white',
} as const

export function Section({
  id,
  children,
  tone = 'white',
  labelledBy,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-14 sm:py-20 lg:py-32 ${tones[tone]} ${className}`}
    >
      <div className="shell">{children}</div>
    </section>
  )
}

type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: string
  lead?: string
  align?: 'start' | 'center'
  tone?: 'dark' | 'light'
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  align = 'start',
  tone = 'dark',
}: SectionHeadingProps) {
  const alignment =
    align === 'center' ? 'mx-auto max-w-[720px] text-center items-center' : 'items-start'

  return (
    <Reveal className={`flex flex-col ${alignment}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        id={id}
        className={`mt-4 text-[1.75rem] leading-[1.18] font-extrabold tracking-[-0.02em] text-balance sm:mt-6 sm:text-[2.5rem] sm:leading-[1.14] lg:text-headline ${
          tone === 'light' ? 'text-white' : 'text-ink'
        } ${align === 'center' ? 'max-w-[24ch]' : 'max-w-[18ch]'}`}
      >
        {title}
      </h2>
      {lead !== undefined && (
        <p
          className={`mt-4 max-w-[52ch] text-[0.9375rem] leading-[1.75] sm:mt-6 sm:text-[1.0625rem] ${
            tone === 'light' ? 'text-white/70' : 'text-ink-soft'
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  )
}
