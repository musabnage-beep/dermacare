import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../../i18n/useLanguage'
import { ButtonLink } from '../primitives/Button'
import { Figure } from '../primitives/Figure'
import { Reveal } from '../primitives/Reveal'

/*
  The split banner from the mockup: a turquoise copy panel on the reading side
  and the clinic photograph on the other, fused into one rounded card.
*/
export function BeautyBanner() {
  const { t } = useLanguage()

  return (
    <section aria-labelledby="banner-title" className="bg-white pb-14 sm:pb-20 lg:pb-28">
      <div className="shell">
        <Reveal>
          {/* Side by side at every width, as the mockup has it. The copy column
              only yields width once there is enough of it to spare. */}
          <div className="grid grid-cols-2 overflow-hidden rounded-[1.75rem] border border-line-teal bg-mist sm:grid-cols-[0.85fr_1fr] lg:rounded-[2.5rem]">
            <div className="flex flex-col justify-center gap-4 px-3 py-5 sm:gap-7 sm:p-10 lg:p-14">
              <h2
                id="banner-title"
                className="text-[1.0625rem] leading-[1.4] font-extrabold tracking-[-0.01em] text-teal-deep text-balance sm:text-[1.75rem] lg:text-[2.25rem]"
              >
                {t('banner.title')}
              </h2>
              <ButtonLink
                href="#about"
                variant="secondary"
                className="h-10 w-full px-2 text-[0.6875rem] sm:h-11 sm:w-fit sm:px-6 sm:text-sm"
              >
                {t('banner.cta')}
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-1 rtl:-scale-x-100"
                />
              </ButtonLink>
            </div>

            {/* `!` beats the plain radius and ratio the figure ships with;
                two plain utilities would be settled by stylesheet order. */}
            <Figure
              src="/images/experience-main.webp"
              alt={t('exp.image1.alt')}
              ratio="landscape"
              sizes="(min-width: 640px) 50vw, 60vw"
              className="h-full rounded-none! aspect-auto!"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
