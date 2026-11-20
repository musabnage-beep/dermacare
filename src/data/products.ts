import type { TranslationKey } from '../i18n/dictionary'

export type Product = {
  id: string
  nameKey: TranslationKey
  bodyKey: TranslationKey
  image: string
  altKey: TranslationKey
  /**
   * Verified retail price. Keep `null` until the business confirms it — the
   * card then shows "price on request" instead of an invented figure.
   */
  price: number | null
  /** Set once a real product page or shop listing exists. */
  url: string
}

/*
  The brand's actual range, photographed by the brand. Every name is read
  straight off the packaging; the descriptions only restate what the label or
  the brand's own posts say. Nothing about ingredients, results or price is
  invented — fill `price` and `url` once the shop confirms them.
*/
export const products: readonly Product[] = [
  {
    id: 'vitamin-c',
    nameKey: 'product.vitaminC.name',
    bodyKey: 'product.vitaminC.body',
    image: '/images/products/vitamin-c.webp',
    altKey: 'product.vitaminC.alt',
    price: null,
    url: '',
  },
  {
    id: 'pigmentation',
    nameKey: 'product.pigmentation.name',
    bodyKey: 'product.pigmentation.body',
    image: '/images/products/pigmentation.webp',
    altKey: 'product.pigmentation.alt',
    price: null,
    url: '',
  },
  {
    id: 'caffeine-gel',
    nameKey: 'product.caffeineGel.name',
    bodyKey: 'product.caffeineGel.body',
    image: '/images/products/caffeine-gel.webp',
    altKey: 'product.caffeineGel.alt',
    price: null,
    url: '',
  },
  {
    id: 'mango-exfoliant',
    nameKey: 'product.mangoExfoliant.name',
    bodyKey: 'product.mangoExfoliant.body',
    image: '/images/products/mango-exfoliant.webp',
    altKey: 'product.mangoExfoliant.alt',
    price: null,
    url: '',
  },
  {
    id: 'body-exfoliant',
    nameKey: 'product.bodyExfoliant.name',
    bodyKey: 'product.bodyExfoliant.body',
    image: '/images/products/body-exfoliant.webp',
    altKey: 'product.bodyExfoliant.alt',
    price: null,
    url: '',
  },
]
