import { useContext } from 'react'
import { ShopContext, type ShopValue } from './ShopContext'

export function useShop(): ShopValue {
  const value = useContext(ShopContext)
  if (value === null) throw new Error('useShop must be used inside <ShopProvider>')
  return value
}
