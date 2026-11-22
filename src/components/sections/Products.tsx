import { ArrowUpRight, Check, Heart, MessageCircle, ShoppingBag } from 'lucide-react'
import { business, whatsappLink } from '../../config/business'
import { products, type Product } from '../../data/products'
import { useLanguage } from '../../i18n/useLanguage'
import { useShop } from '../../shop/useShop'
import { ButtonLink } from '../primitives/Button'
import { Figure } from '../primitives/Figure'
import { Reveal } from '../primitives/Reveal'
import { Section } from '../primitives/Section'

export function Products() {
  const { t, pick } = useLanguage()

  return (
    <Section id="products" labelledBy="products-title">
      {/* The mockup centres this title between two hairlines, so the heading is
          built here rather than through the shared start-aligned primitive. */}
      <Reveal className="flex flex-col items-center text-center">
        <div className="flex w-full items-center justify-center gap-3 sm:gap-5">
          <span aria-hidden="true" className="h-px w-7 shrink-0 bg-line-teal sm:w-14" />
          <h2
            id="products-title"
            className="text-[1.375rem] leading-[1.25] font-extrabold tracking-[-0.02em] text-ink text-balance sm:text-[2rem] lg:text-[2.5rem]"
          >
            {t('products.title')}
          </h2>
          <span aria-hidden="true" className="h-px w-7 shrink-0 bg-line-teal sm:w-14" />
        </div>
        <p className="mt-3 max-w-[46ch] text-[0.8125rem] leading-[1.75] text-ink-soft sm:mt-5 sm:text-[1.0625rem]">
          {t('products.lead')}
        </p>
      </Reveal>

      <ul className="mt-8 grid grid-cols-4 gap-x-3 gap-y-8 sm:mt-16 sm:gap-x-6 sm:gap-y-12 lg:mt-20 lg:grid-cols-12 lg:gap-x-8">
        {products.map((product, index) => (
          <Reveal
            as="li"
            key={product.id}
            delay={(index % 3) * 0.08}
            className="col-span-2 lg:col-span-4"
          >
            <ProductCard product={product} />
          </Reveal>
        ))}
      </ul>

      <Reveal
        delay={0.1}
        className="mt-10 flex flex-col items-start gap-6 border-t border-line pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:pt-10"
      >
        <p className="max-w-[60ch] text-sm leading-relaxed text-ink-faint">
          {t('products.note')}
        </p>
        <ButtonLink href="#contact" variant="secondary" className="shrink-0">
          {t('products.all')}
        </ButtonLink>
      </Reveal>

      {/* Currency is only surfaced once verified prices exist. */}
      {business.commerce.enabled && (
        <p className="sr-only">{pick(business.commerce.currency)}</p>
      )}
    </Section>
  )
}

function ProductCard({ product }: { product: Product }) {
  const { t, pick } = useLanguage()
  const { isFavourite, toggleFavourite, addToCart, cart } = useShop()

  const inquiryLink = whatsappLink(
    `${t('contact.whatsapp.prefill')} — ${t(product.nameKey)}`,
  )
  const hasOwnPage = product.url !== ''
  const saved = isFavourite(product.id)
  const queued = (cart[product.id] ?? 0) > 0

  /* The mockup's turquoise pill. Shared by all three destinations so the card
     looks identical whichever real link it ends up with. */
  const pillClass =
    /* `min-h` rather than a fixed height: the longest Arabic label wraps to two
       lines in a 320px two-up cell, and a fixed pill would spill its text. */
    'inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-full bg-teal px-3 py-2 text-center text-[0.75rem] leading-tight font-bold text-white transition-colors duration-250 hover:bg-teal-deep sm:min-h-11 sm:text-sm'

  return (
    <article className="group flex h-full flex-col">
      <div className="relative overflow-hidden rounded-2xl">
        <Figure
          src={product.image}
          alt={t(product.altKey)}
          ratio="square"
          fit="contain"
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
          className="bg-ivory"
          imgClassName="transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.045]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/[0.04]"
        />

        {/* Saving is local to the visitor's browser — no account required, and
            nothing is sent anywhere until they send the order themselves. */}
        <button
          type="button"
          onClick={() => toggleFavourite(product.id)}
          aria-pressed={saved}
          aria-label={`${saved ? t('shop.unsave') : t('shop.save')} — ${t(product.nameKey)}`}
          className={`absolute top-2 end-2 inline-flex size-9 items-center justify-center rounded-full shadow-[0_6px_18px_-8px_rgba(27,35,38,0.4)] backdrop-blur-sm transition-colors duration-250 sm:top-3 sm:end-3 sm:size-10 ${
            saved ? 'bg-white text-teal' : 'bg-white/75 text-ink-faint hover:bg-white hover:text-ink'
          }`}
        >
          <Heart
            aria-hidden="true"
            className={`size-4 sm:size-4.5 ${saved ? 'fill-current' : ''}`}
            strokeWidth={1.9}
          />
        </button>
      </div>

      <h3 className="mt-4 text-[0.9375rem] leading-snug font-bold text-ink sm:mt-6 sm:text-[1.1875rem] lg:text-title">
        {t(product.nameKey)}
      </h3>
      <p className="mt-2 flex-1 text-[0.75rem] leading-[1.7] text-ink-soft sm:mt-3 sm:text-sm">
        {t(product.bodyKey)}
      </p>

      <div className="mt-4 flex items-center justify-between gap-2 border-t border-line pt-4 sm:mt-6 sm:pt-5">
        <span className="min-w-0 text-[0.75rem] font-semibold text-ink sm:text-sm">
          {product.price === null
            ? t('products.priceOnRequest')
            : `${product.price.toLocaleString()} ${pick(business.commerce.currency)}`}
        </span>

        {/* Builds the order list that the sheet hands to WhatsApp. It carries no
            price, so it promises nothing the business has not confirmed. */}
        <button
          type="button"
          onClick={() => addToCart(product.id)}
          aria-pressed={queued}
          aria-label={`${queued ? t('shop.added') : t('shop.add')} — ${t(product.nameKey)}`}
          className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-250 active:scale-[0.94] sm:size-10 ${
            queued
              ? 'border-teal bg-teal text-white'
              : 'border-line-teal bg-mist text-teal hover:bg-teal hover:text-white'
          }`}
        >
          {queued ? (
            <Check aria-hidden="true" className="size-4" strokeWidth={2.4} />
          ) : (
            <ShoppingBag aria-hidden="true" className="size-4" strokeWidth={1.9} />
          )}
        </button>
      </div>

      <div className="mt-3">
        {/* Each card links somewhere real: its own page, a WhatsApp enquiry,
            or the contact section. No inert buttons are rendered. */}
        {hasOwnPage ? (
          <a href={product.url} className={pillClass}>
            {t('products.view')}
            <ArrowUpRight
              aria-hidden="true"
              className="size-3.5 transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 sm:size-4"
            />
          </a>
        ) : inquiryLink !== '' ? (
          <a
            href={inquiryLink}
            target="_blank"
            rel="noopener noreferrer"
            className={pillClass}
          >
            <MessageCircle aria-hidden="true" className="size-3.5 sm:size-4" />
            {t('products.inquire')}
          </a>
        ) : (
          <a href="#contact" className={pillClass}>
            {t('products.inquire')}
            <ArrowUpRight
              aria-hidden="true"
              className="size-3.5 transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 sm:size-4"
            />
          </a>
        )}
      </div>
    </article>
  )
}
