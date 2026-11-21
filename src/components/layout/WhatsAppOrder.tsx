import { whatsappLink } from '../../config/business'
import { useLanguage } from '../../i18n/useLanguage'
import { BrandIcon } from './BrandIcons'

/*
  Floating WhatsApp order action. Renders only once a real number is set in
  `business.contact.whatsapp` — until then `whatsappLink()` returns an empty
  string and nothing is shown, so no dead CTA ever reaches the page.

  On mobile it clears the bottom navigation pill (56px bar + 8px padding +
  16px margin) plus the safe-area inset.
*/
export function WhatsAppOrder() {
  const { t } = useLanguage()
  const href = whatsappLink(t('order.prefill'))

  if (href === '') return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('order.cta')}
      className="fixed end-4 bottom-[calc(6.5rem+env(safe-area-inset-bottom))] z-50 inline-flex items-center gap-2 rounded-full bg-teal px-4 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-6px_rgba(27,35,38,0.45)] transition-colors duration-250 hover:bg-teal-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal md:end-8 md:bottom-8"
    >
      <BrandIcon name="whatsapp" className="size-5" />
      {/* The label collapses to the icon on narrow screens; the accessible
          name comes from `aria-label` so it never disappears. */}
      <span className="hidden sm:inline">{t('order.cta')}</span>
    </a>
  )
}
