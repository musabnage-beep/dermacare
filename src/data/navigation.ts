import { Heart, Home, Mail, Package, ShoppingBag } from 'lucide-react'
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
  Mobile bottom bar — five destinations. Three of them scroll the page; the
  other two open the shop sheet, which is why they name a panel instead of an
  href. The `kind` discriminant lets the bar render each as the right element:
  an anchor stays an anchor, a sheet trigger stays a button.
*/
export type BottomNavItem =
  | { kind: 'link'; href: string; labelKey: TranslationKey; icon: typeof Home }
  | {
      kind: 'panel'
      panel: 'favourites' | 'cart'
      labelKey: TranslationKey
      icon: typeof Home
    }

export const bottomNavItems: readonly BottomNavItem[] = [
  { kind: 'link', href: '#home', labelKey: 'nav.home', icon: Home },
  { kind: 'link', href: '#products', labelKey: 'nav.products', icon: Package },
  { kind: 'panel', panel: 'favourites', labelKey: 'shop.favourites', icon: Heart },
  { kind: 'panel', panel: 'cart', labelKey: 'shop.cart', icon: ShoppingBag },
  { kind: 'link', href: '#contact', labelKey: 'nav.contactShort', icon: Mail },
]
