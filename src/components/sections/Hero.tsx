import { ArrowDown, ArrowRight, ShieldCheck } from 'lucide-react'
import { m, useReducedMotion } from 'motion/react'
import { useLanguage } from '../../i18n/useLanguage'
import { ButtonLink } from '../primitives/Button'
import { Figure } from '../primitives/Figure'
import { withBase } from '../../lib/asset'

const ease = [0.22, 1, 0.36, 1] as const

const BANNER = '/images/hero-banner.webp'

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
      {/* Tinted clinical field. On phones it is the whole backdrop; from `lg` it
          sits under the photograph and only shows through the scrim. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-tint/70 via-mist/70 via-65% to-white" />
        <div className="absolute -top-28 -start-24 size-[26rem] rounded-full bg-teal-tint/70 blur-3xl sm:size-[34rem]" />
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(var(--color-teal-muted)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_65%)]" />
      </div>

      {/* The banner photograph. From `lg` it is the backdrop of the whole hero,
          with the copy sitting on the scrim over it; on phones there is no room
          for that, so it becomes a rounded block above the copy instead.
          Both are the same file, so the browser fetches it once. */}
      <div aria-hidden="true" className="absolute inset-y-0 end-0 hidden w-[56%] lg:block xl:w-[54%]">
        <img
          src={withBase(BANNER)}
          alt=""
          fetchPriority="high"
          decoding="sync"
          className="h-full w-full object-cover object-[50%_40%] rtl:-scale-x-100"
        />
        {/* Soft inner edge so the photograph dissolves into the tinted field
            instead of butting against the copy with a hard seam. */}
        <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/45 via-12% to-transparent to-42% rtl:bg-gradient-to-l" />
      </div>

      <div className="shell relative pt-6 sm:pt-8 lg:hidden">
        <m.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 1.03 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease }}
        >
          <Figure
            src={BANNER}
            alt={t('hero.image.alt')}
            ratio="wide"
            priority
            sizes="100vw"
            className="ring-1 ring-line-teal sm:aspect-[16/9]"
            imgClassName="object-[50%_36%] rtl:-scale-x-100"
          />
        </m.div>
      </div>

      <div className="shell relative grid grid-cols-4 gap-x-6 pt-10 pb-16 sm:pt-12 lg:grid-cols-12 lg:gap-x-8 lg:pt-20 lg:pb-24">
        <div className="col-span-4 text-center lg:col-span-7 lg:text-start xl:col-span-6">
          {/* The leading rule is dropped while the column is centred: this
              eyebrow wraps to two lines in English, which would leave the rule
              hanging beside the first line only. */}
          <m.p {...rise(0.05)} className="eyebrow max-lg:before:hidden">
            {t('hero.eyebrow')}
          </m.p>

          <m.h1
            id="hero-title"
            {...rise(0.14)}
            className="mt-5 text-[2.125rem] leading-[1.14] font-extrabold tracking-[-0.03em] text-ink text-balance sm:mt-7 sm:text-[3rem] sm:leading-[1.08] lg:mt-8 lg:text-display"
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
            className="mt-5 text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase sm:mt-7 sm:text-sm sm:tracking-[0.2em]"
          >
            {t('hero.subtitle')}
          </m.p>

          <m.p
            {...rise(0.32)}
            className="mx-auto mt-5 max-w-[48ch] text-[0.9375rem] leading-[1.8] text-ink-soft sm:mt-6 sm:text-[1.0625rem] lg:mx-0 lg:max-w-[42ch]"
          >
            {t('hero.body')}
          </m.p>

          {/* Stacked, full-width pills on phones so the primary action is the
              obvious one; side by side from the small breakpoint up. */}
          <m.div
            {...rise(0.42)}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start"
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

          {/* Trust note — describes how the brand works, no claims invented. */}
          <m.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease }}
            className="mx-auto mt-8 flex max-w-[26rem] items-start gap-4 rounded-2xl border border-line bg-white p-5 text-start shadow-[0_18px_48px_-24px_rgba(27,35,38,0.3)] sm:mt-10 sm:p-6 lg:mx-0"
          >
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-mist text-teal">
              <ShieldCheck aria-hidden="true" className="size-5" strokeWidth={1.8} />
            </span>
            <div>
              <p className="text-sm font-bold text-ink">{t('hero.badge.title')}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{t('hero.badge.body')}</p>
            </div>
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
    </section>
  )
}
