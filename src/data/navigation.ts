import { Home, Mail, Package, Sparkles } from 'lucide-react'
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

/** Mobile bottom-bar links — four targets keep the tap areas generous. */
export const bottomNavItems = [
  { href: '#home', labelKey: 'nav.home', icon: Home },
  { href: '#products', labelKey: 'nav.products', icon: Package },
  { href: '#about', labelKey: 'nav.about', icon: Sparkles },
  { href: '#contact', labelKey: 'nav.contact', icon: Mail },
] as const satisfies readonly (NavItem & { icon: typeof Home })[]
