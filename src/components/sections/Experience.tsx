import { experienceSteps } from '../../data/strengths'
import { useLanguage } from '../../i18n/useLanguage'
import { Figure } from '../primitives/Figure'
import { Reveal } from '../primitives/Reveal'

/*
  Editorial split section connecting the clinic side of the brand with the
  at-home product routine. No booking or reservation functionality.
*/
export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" aria-labelledby="experience-title" className="bg-ink text-white">
      <div className="shell grid grid-cols-4 gap-x-6 gap-y-12 py-14 sm:gap-y-16 sm:py-20 lg:grid-cols-12 lg:gap-x-8 lg:py-32">
        <div className="col-span-4 lg:col-span-5 lg:self-center">
          <Reveal>
            <p className="eyebrow !text-teal-muted">{t('exp.eyebrow')}</p>
            <h2
              id="experience-title"
              className="mt-4 text-[1.75rem] leading-[1.18] font-extrabold tracking-[-0.02em] text-balance sm:mt-6 sm:text-[2.25rem] sm:leading-[1.16] lg:text-[2.5rem]"
            >
              {t('exp.title')}
            </h2>
            <p className="mt-4 max-w-[46ch] text-[0.9375rem] leading-[1.8] text-white/65 sm:mt-8 sm:text-[1.0625rem]">
              {t('exp.body')}
            </p>
          </Reveal>

          <ol className="mt-10 space-y-8 sm:mt-12">
            {experienceSteps.map((step, index) => (
              <Reveal as="li" key={step.id} delay={index * 0.1}>
                <div className="flex gap-6">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-xs font-bold tabular-nums text-teal-muted"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-[1.0625rem] font-bold text-white">{t(step.titleKey)}</h3>
                    <p className="mt-2 max-w-[42ch] text-sm leading-[1.7] text-white/60">
                      {t(step.bodyKey)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Asymmetric image cluster keeps the composition editorial. */}
        <div className="col-span-4 grid grid-cols-2 gap-4 lg:col-span-6 lg:col-start-7 lg:gap-6">
          <Reveal className="col-span-2">
            <Figure
              src="/images/experience-main.webp"
              alt={t('exp.image1.alt')}
              ratio="wide"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Figure
              src="/images/experience-detail.webp"
              alt={t('exp.image2.alt')}
              ratio="square"
              sizes="(min-width: 1024px) 270px, 45vw"
            />
          </Reveal>
          <Reveal delay={0.18}>
            <Figure
              src="/images/experience-care.webp"
              alt={t('exp.image3.alt')}
              ratio="square"
              sizes="(min-width: 1024px) 270px, 45vw"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
