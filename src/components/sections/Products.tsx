import { ArrowUpRight, Check, Heart, MessageCircle, ShoppingBag } from 'lucide-react'
import { business, whatsappLink } from '../../config/business'
import { products, type Product } from '../../data/products'
import { useLanguage } from '../../i18n/useLanguage'
import { useShop } from '../../shop/useShop'
import { ButtonLink } from '../primitives/Button'
import { Figure } from '../primitives/Figure'
import { Reveal } from '../primitives/Reveal'
import { Section, SectionHeading } from '../primitives/Section'

export function Products() {
  const { t, pick } = useLanguage()

  return (
    <Section id="products" labelledBy="products-title">
      <SectionHeading
        id="products-title"
        eyebrow={t('products.eyebrow')}
        title={t('products.title')}
        lead={t('products.lead')}
      />

      <ul className="mt-10 grid grid-cols-4 gap-x-4 gap-y-10 sm:mt-16 sm:gap-x-6 sm:gap-y-12 lg:mt-20 lg:grid-cols-12 lg:gap-x-8">
        {products.map((product, index) => (
          <Reveal
            as="li"
            key={product.id}
            delay={(index % 3) * 0.08}
            className="col-span-4 sm:col-span-2 lg:col-span-4"
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
          className={`absolute top-3 end-3 inline-flex size-10 items-center justify-center rounded-full shadow-[0_6px_18px_-8px_rgba(27,35,38,0.4)] backdrop-blur-sm transition-colors duration-250 ${
            saved ? 'bg-white text-teal' : 'bg-white/75 text-ink-faint hover:bg-white hover:text-ink'
          }`}
        >
          <Heart
            aria-hidden="true"
            className={`size-4.5 ${saved ? 'fill-current' : ''}`}
            strokeWidth={1.9}
          />
        </button>
      </div>

      <h3 className="mt-6 text-title font-bold text-ink">{t(product.nameKey)}</h3>
      <p className="mt-3 flex-1 text-sm leading-[1.7] text-ink-soft">{t(product.bodyKey)}</p>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-5">
        <span className="text-sm font-semibold text-ink">
          {product.price === null
            ? t('products.priceOnRequest')
            : `${product.price.toLocaleString()} ${pick(business.commerce.currency)}`}
        </span>

        {/* Each card links somewhere real: its own page, a WhatsApp enquiry,
            or the contact section. No inert buttons are rendered. */}
        {hasOwnPage ? (
          <a
            href={product.url}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-teal transition-colors duration-250 hover:text-teal-deep"
          >
            {t('products.view')}
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100"
            />
          </a>
        ) : inquiryLink !== '' ? (
          <a
            href={inquiryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-teal transition-colors duration-250 hover:text-teal-deep"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            {t('products.inquire')}
          </a>
        ) : (
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-teal transition-colors duration-250 hover:text-teal-deep"
          >
            {t('products.inquire')}
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100"
            />
          </a>
        )}
      </div>

      {/* Builds the order list that the sheet hands to WhatsApp. It carries no
          price, so it promises nothing the business has not confirmed. */}
      <button
        type="button"
        onClick={() => addToCart(product.id)}
        className={`mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border text-sm font-bold transition-colors duration-250 active:scale-[0.98] ${
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
        {queued ? t('shop.added') : t('shop.add')}
      </button>
    </article>
  )
}
