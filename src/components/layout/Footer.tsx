import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react'
import { business, hasContactChannel } from '../../config/business'
import { navItems } from '../../data/navigation'
import { useLanguage } from '../../i18n/useLanguage'
import { LanguageSwitcher } from '../primitives/LanguageSwitcher'
import { Logo } from '../primitives/Logo'
import { SocialLinks } from './SocialLinks'

/* Resolved once at module load — the copyright year is not reactive state. */
const year = new Date().getFullYear()

export function Footer() {
  const { t, pick, lang } = useLanguage()
  const { phone, email, address } = business.contact

  return (
    <footer className="bg-ink pb-safe-nav text-white">
      <div className="shell grid grid-cols-4 gap-x-6 gap-y-12 py-16 lg:grid-cols-12 lg:gap-x-8 lg:py-20">
        <div className="col-span-4 lg:col-span-5">
          <Logo tone="light" />
          <p className="mt-6 max-w-[34ch] text-sm leading-[1.75] text-white/60">
            {t('footer.tagline')}
          </p>
          <div className="mt-8">
            <SocialLinks tone="light" />
          </div>
        </div>

        <nav aria-label={t('footer.explore')} className="col-span-2 lg:col-span-3">
          <h2 className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">
            {t('footer.explore')}
          </h2>
          <ul className="mt-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-white/75 transition-colors duration-250 hover:text-white"
                >
                  {t(item.labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-2 lg:col-span-4">
          <h2 className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">
            {t('footer.reach')}
          </h2>
          {hasContactChannel || pick(address) !== '' ? (
            <ul className="mt-6 space-y-4 text-sm">
              {phone !== '' && (
                <li className="flex items-start gap-3 text-white/75">
                  <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-teal-muted" />
                  <a
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    dir="ltr"
                    className="transition-colors duration-250 hover:text-white"
                  >
                    {phone}
                  </a>
                </li>
              )}
              {email !== '' && (
                <li className="flex items-start gap-3 text-white/75">
                  <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-teal-muted" />
                  <a
                    href={`mailto:${email}`}
                    dir="ltr"
                    className="break-all transition-colors duration-250 hover:text-white"
                  >
                    {email}
                  </a>
                </li>
              )}
              {pick(address) !== '' && (
                <li className="flex items-start gap-3 text-white/75">
                  <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-teal-muted" />
                  <span>{pick(address)}</span>
                </li>
              )}
            </ul>
          ) : (
            <p className="mt-6 max-w-[30ch] text-sm leading-relaxed text-white/50">
              {t('contact.pending.title')}
            </p>
          )}

          <div className="mt-8">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">
              {t('footer.language')}
            </h2>
            <LanguageSwitcher tone="light" className="mt-4" />
          </div>
        </div>
      </div>

      <div className="shell flex flex-col-reverse items-start gap-6 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/55">
          © {year} {business.name[lang]}. {t('footer.rights')}
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-white/60 transition-colors duration-250 hover:text-white"
        >
          <ArrowUp aria-hidden="true" className="size-4" />
          {t('footer.backToTop')}
        </a>
      </div>
    </footer>
  )
}
