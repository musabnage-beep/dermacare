import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../../i18n/useLanguage'
import { Figure } from '../primitives/Figure'
import { ButtonLink } from '../primitives/Button'
import { Reveal } from '../primitives/Reveal'
import { Section } from '../primitives/Section'

export function About() {
  const { t } = useLanguage()

  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid grid-cols-4 gap-x-6 gap-y-12 lg:grid-cols-12 lg:gap-x-8">
        <div className="col-span-4 lg:col-span-6">
          <Reveal>
            <p className="eyebrow">{t('about.eyebrow')}</p>
            <h2
              id="about-title"
              className="mt-4 text-[1.75rem] leading-[1.18] font-extrabold tracking-[-0.02em] text-ink text-balance sm:mt-6 sm:text-[2.25rem] sm:leading-[1.16] lg:text-[2.5rem]"
            >
              {t('about.title')}
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="mt-5 space-y-5 sm:mt-8 sm:space-y-6">
            <p className="text-[0.9375rem] leading-[1.8] text-ink-soft sm:text-[1.0625rem]">
              {t('about.body1')}
            </p>
            <p className="text-[0.9375rem] leading-[1.8] text-ink-soft sm:text-[1.0625rem]">
              {t('about.body2')}
            </p>
            <p className="text-[0.9375rem] leading-[1.8] text-ink-soft sm:text-[1.0625rem]">
              {t('about.body3')}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <blockquote className="mt-8 border-s-2 border-teal ps-5 sm:mt-10 sm:ps-6">
              <p className="text-[1.125rem] leading-[1.6] font-semibold text-ink text-balance sm:text-[1.25rem]">
                {t('about.quote')}
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.24}>
            <ButtonLink href="#contact" className="mt-8 w-full sm:mt-10 sm:w-auto">
              {t('about.cta')}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-1 rtl:-scale-x-100"
              />
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="col-span-4 lg:col-span-5 lg:col-start-8 lg:self-start">
          <Figure
            src="/images/about.webp"
            alt={t('about.image.alt')}
            ratio="tall"
            sizes="(min-width: 1024px) 440px, 100vw"
          />
        </Reveal>
      </div>
    </Section>
  )
}
