import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../../config/business'
import { useLanguage } from '../../i18n/useLanguage'
import { ButtonLink } from '../primitives/Button'
import { Logo } from '../primitives/Logo'
import { Reveal } from '../primitives/Reveal'

/*
  The turquoise closing band from the mockup. It links to WhatsApp when the
  number is configured and falls back to the contact section otherwise, so the
  button never points nowhere.
*/
export function ContactBand() {
  const { t } = useLanguage()

  const wa = whatsappLink(t('contact.whatsapp.prefill'))
  const isWhatsApp = wa !== ''

  return (
    <section aria-labelledby="band-title" className="bg-white pb-14 sm:pb-20 lg:pb-28">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col items-center gap-7 rounded-[1.75rem] bg-gradient-to-br from-teal-bright via-teal to-teal-deep px-6 py-9 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-10 sm:py-12 sm:text-start lg:rounded-[2.5rem] lg:px-16">
            <Logo tone="light" className="shrink-0" />

            <div className="sm:flex-1">
              <h2 id="band-title" className="text-[1.25rem] font-extrabold text-white sm:text-[1.5rem]">
                {t('band.title')}
              </h2>
              <p className="mt-2 text-sm leading-[1.7] text-white/80 sm:mt-3">{t('band.body')}</p>
            </div>

            <ButtonLink
              href={isWhatsApp ? wa : '#contact'}
              target={isWhatsApp ? '_blank' : undefined}
              rel={isWhatsApp ? 'noopener noreferrer' : undefined}
              variant="onDark"
              className="w-full shrink-0 sm:w-auto"
            >
              {isWhatsApp && <MessageCircle aria-hidden="true" className="size-4" />}
              {t('band.cta')}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
