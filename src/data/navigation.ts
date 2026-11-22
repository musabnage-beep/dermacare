import { Heart, Home, Package, ShoppingBag, UserRound } from 'lucide-react'
import type { TranslationKey } from '../i18n/dictionary'

export type NavItem = {
  /** In-page anchor target. */
  href: string
  labelKey: TranslationKey
}

/** Desktop header links. */
export const navItems: readonly NavItem[] = [
  { href: '#home', labelKey: 'nav.home' },
  { href: '#products', labelKey: 'nav.products' },
  { href: '#about', labelKey: 'nav.about' },
  { href: '#contact', labelKey: 'nav.contact' },
]

/*
  Mobile bottom bar — five destinations. Two of them scroll the page; the other
  three open a sheet, which is why they name a panel instead of an href. The
  `kind` discriminant lets the bar render each as the right element: an anchor
  stays an anchor, a sheet trigger stays a button.

  The order is the mockup's, not the reading order: home sits at index 2 so it
  lands in the middle of the bar, where the design raises it into a disc.
*/
type BottomNavBase = { labelKey: TranslationKey; icon: typeof Home }

export type BottomNavItem =
  | (BottomNavBase & { kind: 'link'; href: string })
  | (BottomNavBase & { kind: 'panel'; panel: 'favourites' | 'cart' | 'account' })

export const bottomNavItems: readonly BottomNavItem[] = [
  { kind: 'panel', panel: 'cart', labelKey: 'shop.cart', icon: ShoppingBag },
  { kind: 'link', href: '#products', labelKey: 'nav.products', icon: Package },
  { kind: 'link', href: '#home', labelKey: 'nav.home', icon: Home },
  { kind: 'panel', panel: 'favourites', labelKey: 'shop.favourites', icon: Heart },
  { kind: 'panel', panel: 'account', labelKey: 'account', icon: UserRound },
]
