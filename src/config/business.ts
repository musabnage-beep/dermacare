/*
  ============================================================================
  DERMACARE BEAUTY CLINIC — single source of truth for business information.
  ============================================================================
  Every factual claim on the site is read from this file so non-developers can
  update it without touching components.

  RULE: leave a field as an empty string until it has been verified with the
  business. The UI conditionally renders each channel, so empty values are
  simply hidden instead of showing invented details.
  ============================================================================
*/

export type L10n = { ar: string; en: string }

export type SocialNetwork = 'instagram' | 'facebook' | 'tiktok' | 'snapchat'

type BusinessConfig = {
  name: L10n
  shortName: L10n
  /** The brand's own strapline, exactly as printed on the packaging. */
  tagline: string
  descriptor: L10n
  country: L10n
  siteUrl: string
  logo: { src: string; width: number }
  contact: {
    whatsapp: string
    phone: string
    email: string
    address: L10n
    hours: L10n
  }
  social: Record<SocialNetwork, string>
  commerce: { enabled: boolean; shopUrl: string; currency: L10n }
}

export const business: BusinessConfig = {
  // Spelling taken from the product packaging.
  name: { ar: 'ديرما كير بيوتي كلينك', en: 'Dermacare Beauty Clinic' },
  shortName: { ar: 'ديرما كير', en: 'Dermacare' },
  tagline: 'your beauty is our duty.',

  /** Short descriptor used in the document title and structured data. */
  descriptor: {
    ar: 'عيادة تجميل ومنتجات عناية بالبشرة',
    en: 'Beauty clinic & skincare products',
  } satisfies L10n,

  country: { ar: 'السودان', en: 'Sudan' } satisfies L10n,

  /**
   * Canonical origin, no trailing slash. Feeds the canonical URL, Open Graph
   * tags and JSON-LD. Currently the GitHub Pages address — change this (and
   * `VITE_BASE` at build time) once a custom domain is pointed at the site.
   */
  siteUrl: 'https://musabnage-beep.github.io/dermacare',

  /**
   * Original brand logo. Drop the official file into `public/brand/` and point
   * `src` at it (e.g. '/brand/logo.svg'). While `src` is empty the typographic
   * wordmark is used — no placeholder graphic is invented and no 404 is fired.
   */
  logo: {
    src: '',
    /** Rendered width in px at desktop sizes; height stays automatic. */
    width: 168,
  },

  /** Verified contact channels only. Empty string = hidden in the UI. */
  contact: {
    /** International format, digits only, no '+'. Example: '2499XXXXXXX'. */
    whatsapp: '',
    /** Display + tel: link. Example: '+249 9XX XXX XXX'. */
    phone: '',
    email: '',
    address: { ar: '', en: '' } satisfies L10n,
    hours: { ar: '', en: '' } satisfies L10n,
  },

  /** Full profile URLs, e.g. 'https://instagram.com/…'. Empty = hidden. */
  social: {
    instagram: '',
    facebook: '',
    tiktok: '',
    snapchat: '',
  },

  /**
   * Turn on only when a real catalogue with verified prices and a working
   * checkout exists. While false the product cards stay a showcase: no prices
   * and no non-functional "add to cart" buttons are rendered.
   */
  commerce: {
    enabled: false,
    /** Absolute or relative URL of the live shop, used by "Shop Now". */
    shopUrl: '',
    currency: { ar: 'ج.س', en: 'SDG' },
  },
}

/** `true` when at least one contact channel has been filled in. */
export const hasContactChannel =
  business.contact.whatsapp !== '' ||
  business.contact.phone !== '' ||
  business.contact.email !== ''

/** Verified social profiles as an iterable list, in display order. */
export const socialLinks: readonly { network: SocialNetwork; href: string }[] = (
  ['instagram', 'facebook', 'tiktok', 'snapchat'] as const
)
  .map((network) => ({ network, href: business.social[network] }))
  .filter((entry) => entry.href !== '')

/** WhatsApp deep link with an optional prefilled message. */
export function whatsappLink(message?: string): string {
  if (business.contact.whatsapp === '') return ''
  const base = `https://wa.me/${business.contact.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
