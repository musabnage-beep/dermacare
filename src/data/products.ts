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
  These entries describe the CARE CATEGORIES the brand stocks, not specific
  branded SKUs. No product names, prices, ingredients or benefit claims are
  invented. Replace an entry with real catalogue data by filling `price` and
  `url` and pointing `nameKey`/`bodyKey` at the official copy.
*/
export const products: readonly Product[] = [
  {
    id: 'cleanser',
    nameKey: 'product.cleanser.name',
    bodyKey: 'product.cleanser.body',
    image: '/images/product-cleanser.webp',
    altKey: 'product.cleanser.name',
    price: null,
    url: '',
  },
  {
    id: 'toner',
    nameKey: 'product.toner.name',
    bodyKey: 'product.toner.body',
    image: '/images/product-toner.webp',
    altKey: 'product.toner.name',
    price: null,
    url: '',
  },
  {
    id: 'serum',
    nameKey: 'product.serum.name',
    bodyKey: 'product.serum.body',
    image: '/images/product-serum.webp',
    altKey: 'product.serum.name',
    price: null,
    url: '',
  },
  {
    id: 'moisturizer',
    nameKey: 'product.moisturizer.name',
    bodyKey: 'product.moisturizer.body',
    image: '/images/product-moisturizer.webp',
    altKey: 'product.moisturizer.name',
    price: null,
    url: '',
  },
  {
    id: 'sunscreen',
    nameKey: 'product.sunscreen.name',
    bodyKey: 'product.sunscreen.body',
    image: '/images/product-sunscreen.webp',
    altKey: 'product.sunscreen.name',
    price: null,
    url: '',
  },
  {
    id: 'bodycare',
    nameKey: 'product.bodycare.name',
    bodyKey: 'product.bodycare.body',
    image: '/images/product-bodycare.webp',
    altKey: 'product.bodycare.name',
    price: null,
    url: '',
  },
]
