import { Heart, MessageCircle, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { AnimatePresence, m, useReducedMotion } from 'motion/react'
import { whatsappLink } from '../../config/business'
import { products, type Product } from '../../data/products'
import { useLanguage } from '../../i18n/useLanguage'
import { useShop } from '../../shop/useShop'
import { Figure } from '../primitives/Figure'
import { LanguageSwitcher } from '../primitives/LanguageSwitcher'

const ease = [0.22, 1, 0.36, 1] as const

const byId = new Map(products.map((product) => [product.id, product]))

/*
  One sheet, three modes. It slides up from the bottom bar on phones and settles
  into a centred dialog once there is room for one.
*/
export function ShopPanel() {
  const { t } = useLanguage()
  const { panel, closePanel } = useShop()
  const reduceMotion = useReducedMotion()

  const isOpen = panel !== null
  const title =
    panel === 'cart' ? t('shop.cart') : panel === 'account' ? t('account') : t('shop.favourites')

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          className="fixed inset-0 z-90 flex items-end justify-center sm:items-center"
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25, ease }}
        >
          <button
            type="button"
            aria-label={t('shop.close')}
            onClick={closePanel}
            className="absolute inset-0 bg-ink/35 backdrop-blur-[2px]"
          />

          <m.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={reduceMotion ? undefined : { y: 32, opacity: 0 }}
            animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
            exit={reduceMotion ? undefined : { y: 32, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="relative flex max-h-[82vh] w-full flex-col rounded-t-[1.75rem] bg-white shadow-[0_-12px_48px_-16px_rgba(27,35,38,0.35)] sm:max-h-[78vh] sm:max-w-[30rem] sm:rounded-[1.75rem]"
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
          >
            <header className="flex items-center justify-between gap-4 border-b border-line px-4 py-4 sm:px-6">
              <h2 className="text-title font-bold text-ink">{title}</h2>
              <button
                type="button"
                onClick={closePanel}
                aria-label={t('shop.close')}
                className="inline-flex size-10 items-center justify-center rounded-full text-ink-faint transition-colors duration-250 hover:bg-ivory hover:text-ink"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </header>

            {panel === 'cart' ? (
              <CartBody />
            ) : panel === 'account' ? (
              <AccountBody />
            ) : (
              <FavouritesBody />
            )}
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  )
}

function EmptyState({ message }: { message: string }) {
  const { t } = useLanguage()
  const { closePanel } = useShop()

  return (
    <div className="px-5 py-12 text-center sm:px-6">
      <p className="mx-auto max-w-[32ch] text-sm leading-[1.8] text-ink-soft">{message}</p>
      <a
        href="#products"
        onClick={closePanel}
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal transition-colors duration-250 hover:text-teal-deep"
      >
        {t('shop.browse')}
      </a>
    </div>
  )
}

function ItemThumb({ product }: { product: Product }) {
  const { t } = useLanguage()
  return (
    <Figure
      src={product.image}
      alt={t(product.altKey)}
      ratio="square"
      fit="contain"
      sizes="72px"
      className="w-16 shrink-0 bg-ivory"
    />
  )
}

function FavouritesBody() {
  const { t } = useLanguage()
  const { favourites, toggleFavourite, addToCart, cart, closePanel } = useShop()

  const saved = favourites.map((id) => byId.get(id)).filter((p): p is Product => p !== undefined)

  if (saved.length === 0) return <EmptyState message={t('shop.favourites.empty')} />

  return (
    <ul className="divide-y divide-line overflow-y-auto overscroll-contain px-4 sm:px-6">
      {saved.map((product) => (
        <li key={product.id} className="flex items-center gap-3 py-4 sm:gap-4">
          <ItemThumb product={product} />
          <div className="min-w-0 flex-1">
            <p className="line-clamp-2 text-sm leading-snug font-bold text-ink">
              {t(product.nameKey)}
            </p>
            <a
              href="#products"
              onClick={closePanel}
              className="mt-1 inline-block text-xs font-semibold text-teal"
            >
              {t('products.view')}
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={() => addToCart(product.id)}
              aria-label={t('shop.add')}
              className={`inline-flex size-10 items-center justify-center rounded-full transition-colors duration-250 ${
                cart[product.id] ? 'bg-mist text-teal' : 'text-ink-faint hover:bg-ivory'
              }`}
            >
              <ShoppingBag aria-hidden="true" className="size-4.5" strokeWidth={1.9} />
            </button>
            <button
              type="button"
              onClick={() => toggleFavourite(product.id)}
              aria-label={t('shop.unsave')}
              className="inline-flex size-10 items-center justify-center rounded-full text-teal transition-colors duration-250 hover:bg-ivory"
            >
              <Heart aria-hidden="true" className="size-4.5 fill-current" strokeWidth={1.9} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

/*
  There is no sign-in and no server behind this site, so "my account" is what it
  honestly can be: the two local lists, the language preference, and a way to
  reach a human. It states where the data lives rather than implying an account.
*/
function AccountBody() {
  const { t } = useLanguage()
  const { favouriteCount, cartCount, openPanel } = useShop()

  const help = whatsappLink(t('contact.whatsapp.prefill'))

  return (
    <div className="overflow-y-auto overscroll-contain px-4 py-5 sm:px-6 sm:py-6">
      <p className="text-sm leading-[1.8] text-ink-soft">{t('account.intro')}</p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <AccountStat
          label={t('account.saved')}
          value={favouriteCount}
          onClick={() => openPanel('favourites')}
        />
        <AccountStat
          label={t('account.listed')}
          value={cartCount}
          onClick={() => openPanel('cart')}
        />
      </div>

      <div className="mt-5 flex items-center justify-between gap-4 border-t border-line pt-5">
        <span className="text-sm font-semibold text-ink">{t('account.language')}</span>
        <LanguageSwitcher />
      </div>

      {help !== '' && (
        <div className="mt-5 border-t border-line pt-5">
          <p className="text-sm font-semibold text-ink">{t('account.help')}</p>
          <a
            href={help}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-teal text-sm font-bold text-white transition-colors duration-250 hover:bg-teal-deep active:scale-[0.98]"
          >
            <MessageCircle aria-hidden="true" className="size-4.5" strokeWidth={1.9} />
            {t('account.help.action')}
          </a>
        </div>
      )}
    </div>
  )
}

function AccountStat({
  label,
  value,
  onClick,
}: {
  label: string
  value: number
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-2xl border border-line-teal bg-mist px-4 py-4 text-start transition-colors duration-250 hover:border-teal"
    >
      <span className="block text-[1.5rem] leading-none font-extrabold text-teal tabular-nums">
        {value}
      </span>
      <span className="mt-2 block text-xs leading-snug font-semibold text-ink-soft">{label}</span>
    </button>
  )
}

function CartBody() {
  const { t } = useLanguage()
  const { cart, cartCount, setQuantity, clearCart } = useShop()

  const lines = Object.entries(cart)
    .map(([id, quantity]) => ({ product: byId.get(id), quantity }))
    .filter((line): line is { product: Product; quantity: number } => line.product !== undefined)

  if (lines.length === 0) return <EmptyState message={t('shop.cart.empty')} />

  /*
    The order is handed over on WhatsApp, which is how this business actually
    sells. Nothing is priced here: the message asks for confirmation instead of
    quoting a total the site cannot verify.
  */
  const message = [
    t('shop.order.intro'),
    ...lines.map((line) => `• ${t(line.product.nameKey)} ×${line.quantity}`),
    '',
    t('shop.order.outro'),
  ].join('\n')
  const orderHref = whatsappLink(message)

  return (
    <>
      <ul className="divide-y divide-line overflow-y-auto overscroll-contain px-4 sm:px-6">
        {lines.map(({ product, quantity }) => (
          <li key={product.id} className="flex items-center gap-3 py-4 sm:gap-4">
            <ItemThumb product={product} />
            <div className="min-w-0 flex-1">
              <p className="line-clamp-2 text-sm leading-snug font-bold text-ink">
              {t(product.nameKey)}
            </p>
              <p className="mt-1 text-xs text-ink-faint">{t('products.priceOnRequest')}</p>
            </div>

            <div className="flex shrink-0 items-center gap-1 rounded-full border border-line p-1">
              <button
                type="button"
                onClick={() => setQuantity(product.id, quantity - 1)}
                aria-label={quantity === 1 ? t('shop.remove') : t('shop.decrease')}
                className="inline-flex size-8 items-center justify-center rounded-full text-ink-soft transition-colors duration-250 hover:bg-ivory"
              >
                {quantity === 1 ? (
                  <Trash2 aria-hidden="true" className="size-4" />
                ) : (
                  <Minus aria-hidden="true" className="size-4" />
                )}
              </button>
              <span
                aria-label={t('shop.quantity')}
                className="min-w-6 text-center text-sm font-bold text-ink tabular-nums"
              >
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(product.id, quantity + 1)}
                aria-label={t('shop.increase')}
                className="inline-flex size-8 items-center justify-center rounded-full text-ink-soft transition-colors duration-250 hover:bg-ivory"
              >
                <Plus aria-hidden="true" className="size-4" />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <footer className="border-t border-line px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-ink-soft">
            {t('shop.cart.items')}: <strong className="text-ink tabular-nums">{cartCount}</strong>
          </span>
          <button
            type="button"
            onClick={clearCart}
            className="text-xs font-semibold text-ink-faint underline-offset-4 transition-colors duration-250 hover:text-ink hover:underline"
          >
            {t('shop.clear')}
          </button>
        </div>

        <p className="mt-3 text-xs leading-[1.7] text-ink-faint">{t('shop.cart.note')}</p>

        {orderHref !== '' && (
          <a
            href={orderHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-teal text-[0.9375rem] font-semibold text-white transition-colors duration-250 hover:bg-teal-deep active:scale-[0.98]"
          >
            <ShoppingBag aria-hidden="true" className="size-4.5" strokeWidth={1.9} />
            {t('shop.cart.send')}
          </a>
        )}
      </footer>
    </>
  )
}
