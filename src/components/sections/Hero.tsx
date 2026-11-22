import { ArrowDown, ArrowRight } from 'lucide-react'
import { m, useReducedMotion } from 'motion/react'
import { useLanguage } from '../../i18n/useLanguage'
import { ButtonLink } from '../primitives/Button'
import { withBase } from '../../lib/asset'

const ease = [0.22, 1, 0.36, 1] as const

const BANNER = '/images/hero-banner.webp'

export function Hero() {
  const { t } = useLanguage()
  const reduceMotion = useReducedMotion()

  // Staggered entrance; skipped entirely for reduced-motion users.
  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease },
        }

  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      {/* The photograph is the backdrop at every width. The copy sits on the
          scrim over it, so there is one image, one fetch and no second crop. */}
      <div aria-hidden="true" className="absolute inset-0">
        <img
          src={withBase(BANNER)}
          alt=""
          fetchPriority="high"
          decoding="sync"
          className="h-full w-full object-cover object-[76%_26%] rtl:-scale-x-100 sm:object-[68%_32%] lg:object-[60%_36%]"
        />
      </div>

      {/* Two scrims: one sweeps the brand turquoise in from the copy side, the
          other settles the base into white so the trust strip can overlap it. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-teal-tint from-20% via-teal-tint/85 via-48% to-teal-tint/10 rtl:bg-gradient-to-l"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-mist/70 via-transparent via-40% to-white"
      />

      <div className="shell relative pt-10 pb-24 sm:pt-14 sm:pb-32 lg:pt-24 lg:pb-44">
        <div className="max-w-[17rem] sm:max-w-[30rem] lg:max-w-[34rem]">
          <m.p
            {...rise(0.05)}
            className="text-[0.6875rem] leading-[1.6] font-semibold tracking-[0.1em] text-teal-deep uppercase sm:text-xs sm:tracking-[0.18em]"
          >
            {t('hero.eyebrow')}
          </m.p>

          <m.h1
            id="hero-title"
            {...rise(0.14)}
            className="mt-4 text-[1.75rem] leading-[1.2] font-extrabold tracking-[-0.02em] text-ink text-balance sm:mt-6 sm:text-[2.75rem] sm:leading-[1.12] lg:text-[3.5rem]"
          >
            {t('hero.title.line1')}
          </m.h1>

          <m.p
            {...rise(0.2)}
            className="mt-2 text-[1.0625rem] leading-[1.5] font-bold text-teal text-balance sm:mt-3 sm:text-[1.5rem] lg:text-[1.875rem]"
          >
            {t('hero.title.line2')}
          </m.p>

          <m.p
            {...rise(0.3)}
            className="mt-5 max-w-[34ch] text-[0.875rem] leading-[1.8] text-ink-soft sm:mt-7 sm:text-base"
          >
            {t('hero.body')}
          </m.p>

          {/* Stacked, full-width pills on phones so the primary action is the
              obvious one; side by side from the small breakpoint up. */}
          <m.div
            {...rise(0.4)}
            className="mt-7 flex w-[min(100%,20rem)] flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
          >
            <ButtonLink href="#products" size="lg" className="w-full sm:w-auto">
              {t('hero.cta.primary')}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-1 rtl:-scale-x-100"
              />
            </ButtonLink>
            <ButtonLink href="#about" variant="secondary" size="lg" className="w-full sm:w-auto">
              {t('hero.cta.secondary')}
            </ButtonLink>
          </m.div>

          <m.a
            {...rise(0.7)}
            href="#intro"
            className="mt-12 hidden items-center gap-3 text-xs font-semibold tracking-[0.18em] text-ink-faint uppercase transition-colors duration-250 hover:text-teal lg:inline-flex"
          >
            <ArrowDown aria-hidden="true" className="size-4 animate-bounce" />
            {t('hero.scroll')}
          </m.a>
        </div>
      </div>

      {/* The curve the mockup ends the hero on. An over-wide ellipse keeps the
          arc shallow instead of bowing into a half-circle on phones. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-[-25%] -bottom-px h-10 rounded-t-[100%] bg-white sm:h-16 lg:h-24"
      />
    </section>
  )
}
