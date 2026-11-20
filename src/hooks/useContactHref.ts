import { business, whatsappLink } from '../config/business'
import { useLanguage } from '../i18n/useLanguage'

export type ContactTarget = { href: string; channel: 'whatsapp' | 'email' | 'phone' }

/*
  Resolves the best available contact link from the verified channels in
  `business.ts`. Returns `null` when none is configured, so callers can hide
  the CTA rather than render a dead link.
*/
export function useContactHref(): ContactTarget | null {
  const { t } = useLanguage()

  const wa = whatsappLink(t('contact.whatsapp.prefill'))
  if (wa !== '') return { href: wa, channel: 'whatsapp' }
  if (business.contact.email !== '') {
    return { href: `mailto:${business.contact.email}`, channel: 'email' }
  }
  if (business.contact.phone !== '') {
    return { href: `tel:${business.contact.phone.replace(/\s+/g, '')}`, channel: 'phone' }
  }
  return null
}
