import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { products } from '../data/products'
import { ShopContext, type ShopPanel, type ShopValue } from './ShopContext'

const FAVOURITES_KEY = 'dcb-favourites'
const CART_KEY = 'dcb-cart'

const productIds = new Set(products.map((product) => product.id))

/*
  Both lists are filtered against the live catalogue on read: a product that has
  been renamed or withdrawn since the visitor's last visit disappears from their
  saved items instead of rendering an empty row.
*/
function readFavourites(): string[] {
  try {
    const raw = localStorage.getItem(FAVOURITES_KEY)
    if (raw === null) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((id): id is string => typeof id === 'string' && productIds.has(id))
  } catch {
    return []
  }
}

function readCart(): Record<string, number> {
  try {
    const raw = localStorage.getItem(CART_KEY)
    if (raw === null) return {}
    const parsed: unknown = JSON.parse(raw)
    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) return {}
    const entries = Object.entries(parsed as Record<string, unknown>).filter(
      (entry): entry is [string, number] =>
        productIds.has(entry[0]) && typeof entry[1] === 'number' && entry[1] > 0,
    )
    return Object.fromEntries(entries.map(([id, qty]) => [id, Math.min(Math.round(qty), 99)]))
  } catch {
    return {}
  }
}

function persist(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Private modes can refuse storage; the session still works in memory.
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [favourites, setFavourites] = useState<string[]>(readFavourites)
  const [cart, setCart] = useState<Record<string, number>>(readCart)
  const [panel, setPanel] = useState<ShopPanel>(null)

  useEffect(() => persist(FAVOURITES_KEY, favourites), [favourites])
  useEffect(() => persist(CART_KEY, cart), [cart])

  // The panels are modal on phones, so the page behind them must not scroll.
  useEffect(() => {
    if (panel === null) return
    const { body } = document
    const previous = body.style.overflow
    body.style.overflow = 'hidden'
    return () => {
      body.style.overflow = previous
    }
  }, [panel])

  useEffect(() => {
    if (panel === null) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPanel(null)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [panel])

  const toggleFavourite = useCallback((id: string) => {
    setFavourites((current) =>
      current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id],
    )
  }, [])

  const setQuantity = useCallback((id: string, quantity: number) => {
    setCart((current) => {
      const next = { ...current }
      if (quantity <= 0) delete next[id]
      else next[id] = Math.min(quantity, 99)
      return next
    })
  }, [])

  const addToCart = useCallback((id: string) => {
    setCart((current) => ({ ...current, [id]: Math.min((current[id] ?? 0) + 1, 99) }))
  }, [])

  const clearCart = useCallback(() => setCart({}), [])

  const value = useMemo<ShopValue>(() => {
    const cartCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0)
    return {
      favourites,
      cart,
      favouriteCount: favourites.length,
      cartCount,
      isFavourite: (id) => favourites.includes(id),
      toggleFavourite,
      addToCart,
      setQuantity,
      clearCart,
      panel,
      openPanel: (next) => setPanel(next),
      closePanel: () => setPanel(null),
    }
  }, [favourites, cart, panel, toggleFavourite, addToCart, setQuantity, clearCart])

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
