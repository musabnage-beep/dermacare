import { Leaf, ShieldCheck, Truck } from 'lucide-react'
import type { TranslationKey } from '../../i18n/dictionary'
import { useLanguage } from '../../i18n/useLanguage'
import { Reveal } from '../primitives/Reveal'

const promises: readonly {
  id: string
  icon: typeof ShieldCheck
  titleKey: TranslationKey
  bodyKey: TranslationKey
}[] = [
  { id: 'quality', icon: ShieldCheck, titleKey: 'trust.quality.title', bodyKey: 'trust.quality.body' },
  { id: 'safe', icon: Leaf, titleKey: 'trust.safe.title', bodyKey: 'trust.safe.body' },
  { id: 'delivery', icon: Truck, titleKey: 'trust.delivery.title', bodyKey: 'trust.delivery.body' },
]

/*
  The white card that straddles the hero curve. Three promises, hairline-ruled,
  each one describing how the business already works — nothing is claimed here
  that the clinic has not told us itself.
*/
export function TrustStrip() {
  const { t } = useLanguage()

  return (
    <div className="relative z-10 -mt-8 sm:-mt-12 lg:-mt-16">
      <div className="shell">
        <Reveal>
          <ul className="grid grid-cols-3 rounded-2xl border border-line-teal bg-white px-1 py-5 shadow-[0_18px_48px_-26px_rgba(27,35,38,0.35)] sm:rounded-[1.75rem] sm:px-4 sm:py-8">
            {promises.map((promise) => {
              const Icon = promise.icon
              return (
                <li
                  key={promise.id}
                  /* Logical border so the rules land between the columns in
                     both directions; `divide-x` is physical and would not. */
                  className="flex flex-col items-center gap-2 border-s border-line px-1.5 text-center first:border-s-0 sm:gap-3 sm:px-5"
                >
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-mist text-teal sm:size-11">
                    <Icon aria-hidden="true" className="size-4 sm:size-5" strokeWidth={1.8} />
                  </span>
                  <span className="text-[0.6875rem] leading-tight font-bold text-ink sm:text-sm">
                    {t(promise.titleKey)}
                  </span>
                  <span className="text-[0.625rem] leading-snug text-ink-faint sm:text-xs">
                    {t(promise.bodyKey)}
                  </span>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </div>
  )
}
