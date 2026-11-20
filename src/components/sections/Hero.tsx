import { ArrowDown, ArrowRight, ShieldCheck } from 'lucide-react'
import { m, useReducedMotion } from 'motion/react'
import { useLanguage } from '../../i18n/useLanguage'
import { ButtonLink } from '../primitives/Button'
import { Figure } from '../primitives/Figure'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const { t, lang } = useLanguage()
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
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      {/* Soft clinical wash behind the headline column. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 start-0 w-[62%] bg-gradient-to-b from-mist/70 to-transparent"
      />

      <div className="shell relative grid grid-cols-4 gap-x-6 gap-y-12 pt-16 pb-20 lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:pt-24 lg:pb-32">
        <div className="col-span-4 lg:col-span-6 xl:col-span-6">
          <m.p {...rise(0.05)} className="eyebrow">
            {t('hero.eyebrow')}
          </m.p>

          <m.h1
            id="hero-title"
            {...rise(0.14)}
            className="mt-8 text-[2.625rem] leading-[1.08] font-extrabold tracking-[-0.03em] text-ink text-balance sm:text-[3.5rem] lg:text-display"
          >
            {t('hero.title.line1')}
            <br />
            {t('hero.title.line2')}{' '}
            <span className="relative inline-block text-teal">
              {t('hero.title.accent')}
              <m.span
                aria-hidden="true"
                initial={reduceMotion ? undefined : { scaleX: 0 }}
                animate={reduceMotion ? undefined : { scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.7, ease }}
                className="absolute inset-x-0 -bottom-1 h-[3px] origin-[var(--origin,left)] rounded-full bg-teal-muted rtl:[--origin:right]"
              />
            </span>
          </m.h1>

          <m.p
            {...rise(0.24)}
            lang={lang === 'ar' ? 'en' : 'ar'}
            className="mt-8 text-sm font-semibold tracking-[0.2em] text-ink-faint uppercase"
          >
            {t('hero.subtitle')}
          </m.p>

          <m.p
            {...rise(0.32)}
            className="mt-6 max-w-[48ch] text-base leading-[1.8] text-ink-soft sm:text-[1.0625rem]"
          >
            {t('hero.body')}
          </m.p>

          <m.div {...rise(0.42)} className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href="#products" size="lg">
              {t('hero.cta.primary')}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-1 rtl:-scale-x-100"
              />
            </ButtonLink>
            <ButtonLink href="#about" variant="secondary" size="lg">
              {t('hero.cta.secondary')}
            </ButtonLink>
          </m.div>

          <m.a
            {...rise(0.56)}
            href="#intro"
            className="mt-14 hidden items-center gap-3 text-xs font-semibold tracking-[0.18em] text-ink-faint uppercase transition-colors duration-250 hover:text-teal lg:inline-flex"
          >
            <ArrowDown aria-hidden="true" className="size-4 animate-bounce" />
            {t('hero.scroll')}
          </m.a>
        </div>

        <m.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 1.04 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.18, ease }}
          className="col-span-4 lg:col-span-6 xl:col-start-7"
        >
          <div className="relative">
            <Figure
              src="/images/hero.webp"
              alt={t('hero.image.alt')}
              ratio="portrait"
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="lg:aspect-[4/5]"
            />

            {/* Trust note — describes how the brand works, no claims invented. */}
            <m.div
              initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease }}
              className="mx-4 -mt-12 flex items-start gap-4 border-s-2 border-teal bg-white p-6 shadow-[0_18px_48px_-24px_rgba(27,35,38,0.3)] sm:mx-8 sm:-mt-16 lg:mx-0 lg:-mt-20 lg:me-12"
            >
              <ShieldCheck aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-teal" />
              <div>
                <p className="text-sm font-bold text-ink">{t('hero.badge.title')}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t('hero.badge.body')}</p>
              </div>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  )
}
