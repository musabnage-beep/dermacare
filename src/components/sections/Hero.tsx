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
      {/* Decorative backdrop for the headline column, so the copy sits on a
          tinted clinical field rather than bare white. Every layer is a tint of
          an existing token and stays far lighter than `ink`, so the text keeps
          its AA contrast. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-tint/70 via-mist/70 via-65% to-white lg:bg-gradient-to-br lg:from-teal-tint/80 lg:via-mist/70 lg:via-55% lg:to-white lg:rtl:bg-gradient-to-bl" />

        {/* Soft blooms give the field some depth without a photograph. */}
        <div className="absolute -top-28 -start-24 size-[26rem] rounded-full bg-teal-tint/70 blur-3xl sm:size-[34rem]" />
        <div className="absolute top-1/3 -end-24 size-[22rem] rounded-full bg-teal-muted/15 blur-3xl sm:size-[28rem]" />

        {/* Concentric rings echo the clinical mark; desktop only, where there is
            room for them to read as geometry rather than clutter. */}
        <div className="absolute top-[8%] start-[4%] hidden size-[32rem] rounded-full border border-line-teal/70 lg:block" />
        <div className="absolute top-[22%] start-[12%] hidden size-[20rem] rounded-full border border-line-teal/50 lg:block" />

        {/* Fine dot grid, faded out before it reaches the lower copy. */}
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(var(--color-teal-muted)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_65%)]" />
      </div>

      <div className="shell relative grid grid-cols-4 gap-x-6 gap-y-10 pt-10 pb-16 sm:pt-14 lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:gap-y-12 lg:pt-24 lg:pb-32">
        <div className="col-span-4 text-center lg:col-span-6 lg:text-start xl:col-span-6">
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
            className="mx-auto mt-5 max-w-[48ch] text-[0.9375rem] leading-[1.8] text-ink-soft sm:mt-6 sm:text-[1.0625rem] lg:mx-0"
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
              className="ring-1 ring-line-teal lg:aspect-[4/5]"
            />

            {/* Trust note — describes how the brand works, no claims invented.
                Rounded and inset to match the image panel it overlaps. */}
            <m.div
              initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease }}
              className="relative mx-4 -mt-10 flex items-start gap-4 rounded-2xl border border-line bg-white p-5 text-start shadow-[0_18px_48px_-24px_rgba(27,35,38,0.3)] sm:mx-10 sm:-mt-14 sm:p-6 lg:mx-0 lg:-mt-20 lg:me-12"
            >
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-mist text-teal">
                <ShieldCheck aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">{t('hero.badge.title')}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {t('hero.badge.body')}
                </p>
              </div>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  )
}
