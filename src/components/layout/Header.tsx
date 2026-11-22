import { ArrowUpRight, Heart, ShoppingBag } from 'lucide-react'
import { business } from '../../config/business'
import { navItems } from '../../data/navigation'
import { useLanguage } from '../../i18n/useLanguage'
import { useActiveSection, useScrolled } from '../../hooks/useActiveSection'
import { useShop } from '../../shop/useShop'
import { ButtonLink } from '../primitives/Button'
import { LanguageSwitcher } from '../primitives/LanguageSwitcher'
import { Logo } from '../primitives/Logo'

const sectionIds = navItems.map((item) => item.href.slice(1))

export function Header() {
  const { t } = useLanguage()
  const scrolled = useScrolled(16)
  const active = useActiveSection(sectionIds)
  const { openPanel, favouriteCount, cartCount } = useShop()

  // "Shop Now" points at the live shop when one exists, otherwise at the
  // on-page product showcase — never at a dead link.
  const shopHref =
    business.commerce.enabled && business.commerce.shopUrl !== ''
      ? business.commerce.shopUrl
      : '#products'
  const isExternalShop = shopHref.startsWith('http')

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-400 ease-[var(--ease-out-soft)] ${
        scrolled
          ? 'border-line bg-white/92 backdrop-blur-md supports-[backdrop-filter]:bg-white/80'
          : 'border-transparent bg-white'
      }`}
    >
      <div className="shell flex h-18 items-center justify-between gap-6 lg:h-20">
        <a
          href="#home"
          aria-label={t('nav.home.aria')}
          className="shrink-0 transition-opacity duration-250 hover:opacity-70"
        >
          <Logo />
        </a>

        <nav aria-label={t('nav.primary')} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1)
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative inline-flex h-10 items-center rounded-full px-4 text-sm font-semibold transition-colors duration-250 ${
                      isActive ? 'text-teal' : 'text-ink-soft hover:text-ink'
                    }`}
                  >
                    {t(item.labelKey)}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 bottom-1 h-0.5 origin-center rounded-full bg-teal transition-transform duration-350 ease-[var(--ease-out-soft)] ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* `max-sm:hidden`, not `hidden sm:inline-flex`: both components
              already carry `inline-flex`, and two plain display utilities on
              one element are decided by stylesheet order — `inline-flex` wins,
              so the phone header would show every control at once. A variant
              always outranks a plain utility, so this hides reliably. */}
          <LanguageSwitcher className="max-sm:hidden" />

          {/* Parity with the phone bottom bar, which owns these two from `md`
              down: anything saved on a phone is still reachable on a laptop. */}
          <ShopButton
            icon={Heart}
            label={t('shop.favourites')}
            count={favouriteCount}
            onClick={() => openPanel('favourites')}
          />
          <ShopButton
            icon={ShoppingBag}
            label={t('shop.cart')}
            count={cartCount}
            onClick={() => openPanel('cart')}
          />

          <ButtonLink
            href={shopHref}
            target={isExternalShop ? '_blank' : undefined}
            rel={isExternalShop ? 'noopener noreferrer' : undefined}
            className="max-sm:hidden"
          >
            {t('nav.shopNow')}
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100"
            />
          </ButtonLink>
          {/* On the smallest screens the bottom bar owns navigation, so the
              header keeps only the language control. */}
          <LanguageSwitcher className="sm:hidden" />
        </div>
      </div>
    </header>
  )
}

/*
  Icon trigger for the shop sheets. Hidden below `md`, where the bottom bar
  already carries both as full-size tap targets.
*/
function ShopButton({
  icon: Icon,
  label,
  count,
  onClick,
}: {
  icon: typeof Heart
  label: string
  count: number
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={count > 0 ? `${label} (${count})` : label}
      className="relative hidden size-10 items-center justify-center rounded-full text-ink-soft transition-colors duration-250 hover:bg-ivory hover:text-ink md:inline-flex"
    >
      <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
      {count > 0 && (
        <span
          aria-hidden="true"
          className="absolute top-1 end-1 min-w-4 rounded-full bg-teal px-1 text-center text-[0.5625rem] leading-4 font-bold text-white tabular-nums"
        >
          {count > 9 ? '9+' : count}
        </span>
      )}
    </button>
  )
}
