import { ArrowUpRight, MessageCircle, ShoppingBag } from 'lucide-react'
import { business, whatsappLink } from '../../config/business'
import { products, type Product } from '../../data/products'
import { useLanguage } from '../../i18n/useLanguage'
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

      <ul className="mt-16 grid grid-cols-4 gap-x-6 gap-y-12 lg:mt-20 lg:grid-cols-12 lg:gap-x-8">
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

      <Reveal delay={0.1} className="mt-16 flex flex-col items-start gap-8 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
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

  const inquiryLink = whatsappLink(
    `${t('contact.whatsapp.prefill')} — ${t(product.nameKey)}`,
  )
  const hasOwnPage = product.url !== ''
  const canAddToCart = business.commerce.enabled && product.price !== null

  return (
    <article className="group flex h-full flex-col">
      <div className="relative overflow-hidden">
        <Figure
          src={product.image}
          alt={t(product.altKey)}
          ratio="square"
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
          imgClassName="transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.045]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/[0.04]"
        />
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

      {canAddToCart && (
        <ButtonLink href={product.url} className="mt-4 w-full">
          <ShoppingBag aria-hidden="true" className="size-4" />
          {t('products.addToCart')}
        </ButtonLink>
      )}
    </article>
  )
}
