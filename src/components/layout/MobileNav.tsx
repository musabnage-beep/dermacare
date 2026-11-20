import { ShoppingBag } from 'lucide-react'
import { business } from '../../config/business'
import { bottomNavItems } from '../../data/navigation'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useLanguage } from '../../i18n/useLanguage'

const sectionIds = bottomNavItems.map((item) => item.href.slice(1))

/*
  Mobile bottom navigation. Floating, full-width pill with a raised "Shop"
  action in the middle-right so the primary CTA stays reachable by thumb.
*/
export function MobileNav() {
  const { t } = useLanguage()
  const active = useActiveSection(sectionIds)

  const shopHref =
    business.commerce.enabled && business.commerce.shopUrl !== ''
      ? business.commerce.shopUrl
      : '#products'
  const isExternalShop = shopHref.startsWith('http')

  return (
    <nav
      aria-label={t('nav.mobile')}
      className="fixed inset-x-0 bottom-0 z-50 md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="mx-4 mb-4 flex items-stretch gap-2 rounded-[1.75rem] border border-line bg-white/95 p-2 shadow-[0_8px_40px_-8px_rgba(27,35,38,0.28)] backdrop-blur-xl">
        {/* `min-w-0` keeps the labels from forcing the bar past the viewport. */}
        <ul className="flex min-w-0 flex-1 items-stretch">
          {bottomNavItems.map((item) => {
            const isActive = active === item.href.slice(1)
            const Icon = item.icon
            return (
              <li key={item.href} className="min-w-0 flex-1">
                <a
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`flex h-14 flex-col items-center justify-center gap-1 rounded-[1.25rem] transition-colors duration-250 ${
                    isActive ? 'bg-mist text-teal' : 'text-ink-faint active:bg-ivory'
                  }`}
                >
                  <Icon aria-hidden="true" className="size-5" strokeWidth={isActive ? 2.2 : 1.8} />
                  <span className="max-w-full truncate px-1 text-[0.625rem] leading-none font-semibold">
                    {t(item.labelKey)}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href={shopHref}
          target={isExternalShop ? '_blank' : undefined}
          rel={isExternalShop ? 'noopener noreferrer' : undefined}
          className="flex h-14 w-14 shrink-0 flex-col items-center justify-center gap-1 rounded-[1.25rem] bg-teal text-white transition-colors duration-250 active:bg-teal-deep"
        >
          <ShoppingBag aria-hidden="true" className="size-5" strokeWidth={1.9} />
          <span className="sr-only">{t('nav.shopNow')}</span>
        </a>
      </div>
    </nav>
  )
}
