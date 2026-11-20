import { strengths } from '../../data/strengths'
import { useLanguage } from '../../i18n/useLanguage'
import { Reveal } from '../primitives/Reveal'
import { Section, SectionHeading } from '../primitives/Section'

export function WhyUs() {
  const { t } = useLanguage()

  return (
    <Section id="why" tone="mist" labelledBy="why-title">
      <SectionHeading
        id="why-title"
        eyebrow={t('why.eyebrow')}
        title={t('why.title')}
        lead={t('why.lead')}
        align="center"
      />

      <ul className="mt-16 grid grid-cols-4 gap-6 lg:mt-20 lg:grid-cols-12 lg:gap-8">
        {strengths.map((strength, index) => {
          const Icon = strength.icon
          return (
            <Reveal
              as="li"
              key={strength.id}
              delay={(index % 3) * 0.08}
              className="col-span-4 sm:col-span-2 lg:col-span-4"
            >
              <div className="group h-full border border-line-teal bg-white p-8 transition-[border-color,box-shadow,transform] duration-400 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:border-teal-muted hover:shadow-[0_20px_44px_-28px_rgba(10,84,92,0.4)]">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-mist text-teal transition-colors duration-400 group-hover:bg-teal group-hover:text-white">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 text-[1.0625rem] font-bold text-ink">
                  {t(strength.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-ink-soft">{t(strength.bodyKey)}</p>
              </div>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
