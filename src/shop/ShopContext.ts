import { createContext } from 'react'

/** The two panels the bottom bar can open. `null` = everything closed. */
export type ShopPanel = 'favourites' | 'cart' | null

export type ShopValue = {
  /** Product ids the visitor has saved, newest last. */
  favourites: readonly string[]
  /** Product id → quantity. Only ids with a quantity above zero are kept. */
  cart: Readonly<Record<string, number>>
  favouriteCount: number
  cartCount: number
  isFavourite: (id: string) => boolean
  toggleFavourite: (id: string) => void
  addToCart: (id: string) => void
  setQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  panel: ShopPanel
  openPanel: (panel: Exclude<ShopPanel, null>) => void
  closePanel: () => void
}

export const ShopContext = createContext<ShopValue | null>(null)
