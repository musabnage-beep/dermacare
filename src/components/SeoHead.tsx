import { useEffect } from 'react'
import { business, socialLinks } from '../config/business'
import { useLanguage } from '../i18n/useLanguage'

const descriptions = {
  ar: 'ديرما كير بيوتي كلينك — عيادة تجميل ومنتجات عناية بالبشرة في السودان. تحضيرات نعدّها في العيادة مع نصيحة واضحة ومتابعة بعد الشراء.',
  en: 'Dermacare Beauty Clinic — a Sudanese beauty clinic and skincare range. Preparations made at the clinic, with clear advice and follow-up after purchase.',
} as const

/** Upserts a `<meta>` tag by `name` or `property`. */
function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (tag === null) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.append(tag)
  }
  tag.content = content
}

/** Upserts a `<link rel>` tag. */
function setLink(rel: string, href: string, hreflang?: string) {
  const selector =
    hreflang === undefined ? `link[rel="${rel}"]` : `link[rel="${rel}"][hreflang="${hreflang}"]`
  let tag = document.head.querySelector<HTMLLinkElement>(selector)
  if (tag === null) {
    tag = document.createElement('link')
    tag.rel = rel
    if (hreflang !== undefined) tag.hreflang = hreflang
    document.head.append(tag)
  }
  tag.href = href
}

/*
  Keeps SEO metadata in sync with the active language. The static fallbacks in
  index.html cover crawlers that do not execute JavaScript.
*/
export function SeoHead() {
  const { lang } = useLanguage()

  useEffect(() => {
    const title = `${business.name[lang]} — ${business.descriptor[lang]}`
    const description = descriptions[lang]
    // Arabic lives on the bare URL; English is addressable via `?lang=en`.
    const arUrl = `${business.siteUrl}/`
    const enUrl = `${business.siteUrl}/?lang=en`
    const url = lang === 'ar' ? arUrl : enUrl
    const image = `${business.siteUrl}/images/og-cover.jpg`

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', image)
    setMeta('property', 'og:locale', lang === 'ar' ? 'ar_SD' : 'en_US')
    setMeta('property', 'og:site_name', business.name[lang])
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', image)

    setLink('canonical', url)
    setLink('alternate', arUrl, 'ar')
    setLink('alternate', enUrl, 'en')
    setLink('alternate', arUrl, 'x-default')

    // Structured data limited to verified facts only.
    const jsonLd: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'HealthAndBeautyBusiness',
      name: business.name[lang],
      description,
      url,
      address: { '@type': 'PostalAddress', addressCountry: 'SD' },
    }
    if (business.contact.phone !== '') jsonLd.telephone = business.contact.phone
    if (business.contact.email !== '') jsonLd.email = business.contact.email
    if (socialLinks.length > 0) jsonLd.sameAs = socialLinks.map((entry) => entry.href)

    const scriptId = 'dcb-structured-data'
    let script = document.getElementById(scriptId) as HTMLScriptElement | null
    if (script === null) {
      script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      document.head.append(script)
    }
    script.textContent = JSON.stringify(jsonLd)
  }, [lang])

  return null
}
