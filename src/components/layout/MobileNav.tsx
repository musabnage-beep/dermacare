import { bottomNavItems } from '../../data/navigation'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useLanguage } from '../../i18n/useLanguage'
import { useShop } from '../../shop/useShop'

const sectionIds = bottomNavItems
  .filter((item) => item.kind === 'link')
  .map((item) => item.href.slice(1))

/** Home is the raised disc in the middle of the bar, as the mockup has it. */
const HOME_INDEX = bottomNavItems.findIndex(
  (item) => item.kind === 'link' && item.href === '#home',
)

/*
  Mobile bottom navigation: five destinations, each one real. Two scroll the
  page and three open a sheet, so the saved list, the order list and the local
  preferences are all reachable by thumb from anywhere on the page.
*/
export function MobileNav() {
  const { t } = useLanguage()
  const active = useActiveSection(sectionIds)
  const { panel, openPanel, favouriteCount, cartCount } = useShop()

  return (
    <nav
      aria-label={t('nav.mobile')}
      className="fixed inset-x-0 bottom-0 z-50 md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {/* Tighter gutters and padding below 360px so five tap targets still fit
          without the labels truncating. */}
      <ul className="mx-2.5 mb-2.5 flex items-stretch rounded-[1.75rem] border border-line bg-white/95 p-1.5 shadow-[0_8px_40px_-8px_rgba(27,35,38,0.28)] backdrop-blur-xl sm:mx-4 sm:mb-4 sm:p-2">
        {bottomNavItems.map((item, index) => {
          const Icon = item.icon
          const label = t(item.labelKey)
          const isHome = index === HOME_INDEX

          const count =
            item.kind === 'panel' && item.panel === 'favourites'
              ? favouriteCount
              : item.kind === 'panel' && item.panel === 'cart'
                ? cartCount
                : 0

          // A sheet, while open, owns the active state: the section underneath
          // is no longer what the visitor is looking at.
          const isActive =
            item.kind === 'panel'
              ? panel === item.panel
              : panel === null && active === item.href.slice(1)

          const tabClass = isHome
            ? 'flex h-14 w-full flex-col items-center justify-end gap-1 rounded-[1.25rem]'
            : `flex h-14 w-full flex-col items-center justify-center gap-1 rounded-[1.25rem] transition-colors duration-250 ${
                isActive ? 'bg-mist text-teal' : 'text-ink-faint active:bg-ivory'
              }`

          const face = (
            <>
              <span
                className={
                  isHome
                    ? /* Lifted clear of the bar and sized a little larger, so
                         the middle tab reads as the primary one. */
                      `-mt-7 inline-flex size-13 items-center justify-center rounded-full border-4 border-white shadow-[0_8px_20px_-6px_rgba(15,111,120,0.55)] transition-colors duration-250 ${
                        isActive ? 'bg-teal text-white' : 'bg-teal-bright text-white'
                      }`
                    : 'relative'
                }
              >
                <Icon
                  aria-hidden="true"
                  className={isHome ? 'size-5.5' : 'size-5'}
                  strokeWidth={isActive ? 2.2 : 1.8}
                />
                {count > 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute -top-1.5 -end-2 min-w-4 rounded-full bg-red-500 px-1 text-center text-[0.5625rem] leading-4 font-bold text-white tabular-nums"
                  >
                    {count > 9 ? '9+' : count}
                  </span>
                )}
              </span>
              <span
                className={`max-w-full truncate px-0.5 text-[0.625rem] leading-none font-semibold ${
                  isHome ? 'text-teal' : ''
                }`}
              >
                {label}
              </span>
            </>
          )

          return (
            <li key={item.kind === 'panel' ? item.panel : item.href} className="min-w-0 flex-1">
              {item.kind === 'panel' ? (
                <button
                  type="button"
                  onClick={() => openPanel(item.panel)}
                  aria-expanded={isActive}
                  aria-label={count > 0 ? `${label} (${count})` : label}
                  className={tabClass}
                >
                  {face}
                </button>
              ) : (
                <a
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={tabClass}
                >
                  {face}
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
