import { useLanguage } from '../../i18n/useLanguage'
import { Figure } from '../primitives/Figure'
import { Reveal } from '../primitives/Reveal'
import { Section } from '../primitives/Section'
import type { TranslationKey } from '../../i18n/dictionary'

const pillars: readonly { id: string; titleKey: TranslationKey; bodyKey: TranslationKey }[] = [
  { id: 'expertise', titleKey: 'intro.pillar1.title', bodyKey: 'intro.pillar1.body' },
  { id: 'quality', titleKey: 'intro.pillar2.title', bodyKey: 'intro.pillar2.body' },
  { id: 'trust', titleKey: 'intro.pillar3.title', bodyKey: 'intro.pillar3.body' },
]

export function BrandIntro() {
  const { t } = useLanguage()

  return (
    <Section id="intro" tone="ivory" labelledBy="intro-title">
      <div className="grid grid-cols-4 gap-x-6 gap-y-12 lg:grid-cols-12 lg:gap-x-8">
        <Reveal className="col-span-4 lg:col-span-5">
          <Figure
            src="/images/brand-intro.webp"
            alt={t('intro.image.alt')}
            ratio="portrait"
            sizes="(min-width: 1024px) 460px, 100vw"
          />
        </Reveal>

        <div className="col-span-4 lg:col-span-6 lg:col-start-7 lg:self-center">
          <Reveal>
            <p className="eyebrow">{t('intro.eyebrow')}</p>
            <h2
              id="intro-title"
              className="mt-4 text-[1.75rem] leading-[1.18] font-extrabold tracking-[-0.02em] text-ink text-balance sm:mt-6 sm:text-[2.25rem] lg:text-[2.5rem]"
            >
              {t('intro.title')}
            </h2>
            <p className="mt-4 text-[0.9375rem] leading-[1.8] text-ink-soft sm:mt-8 sm:text-[1.0625rem]">
              {t('intro.body1')}
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.8] text-ink-soft sm:mt-6 sm:text-[1.0625rem]">
              {t('intro.body2')}
            </p>
          </Reveal>

          <ul className="mt-10 divide-y divide-line border-t border-line sm:mt-12">
            {pillars.map((pillar, index) => (
              <Reveal as="li" key={pillar.id} delay={index * 0.08} className="py-6">
                <div className="flex items-baseline gap-5">
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xs font-bold tabular-nums text-teal"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink">{t(pillar.titleKey)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {t(pillar.bodyKey)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
