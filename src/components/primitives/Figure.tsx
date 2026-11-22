import { useState } from 'react'
import { useLanguage } from '../../i18n/useLanguage'
import { withBase } from '../../lib/asset'

export type Ratio = 'portrait' | 'tall' | 'landscape' | 'square' | 'wide'

/*
  Aspect contract — exported images MUST match these ratios, otherwise
  `object-fit: cover` silently crops the subject.
*/
const ratioClass: Record<Ratio, string> = {
  tall: 'aspect-[3/4]',
  portrait: 'aspect-[4/5]',
  square: 'aspect-square',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[3/2]',
}

type FigureProps = {
  src: string
  alt: string
  ratio?: Ratio
  className?: string
  imgClassName?: string
  /**
   * `contain` for packaging shots, where cropping the label would
   * misrepresent the product. A prop rather than a class because
   * `object-cover` and `object-contain` are both plain utilities — stacking
   * them would leave the winner to stylesheet order.
   */
  fit?: 'cover' | 'contain'
  /** Hero imagery only — everything else lazy-loads. */
  priority?: boolean
  sizes?: string
}

export function Figure({
  src,
  alt,
  ratio = 'portrait',
  className = '',
  imgClassName = '',
  fit = 'cover',
  priority = false,
  sizes = '(min-width: 1024px) 50vw, 100vw',
}: FigureProps) {
  const { t } = useLanguage()
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-ivory-deep ${ratioClass[ratio]} ${className}`}
    >
      {failed ? (
        <div className="absolute inset-0 grid place-items-center bg-mist px-6 text-center text-xs font-medium tracking-wide text-teal">
          {t('common.imageUnavailable')}
        </div>
      ) : (
        <img
          src={withBase(src)}
          alt={alt}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full ${
            fit === 'contain' ? 'object-contain' : 'object-cover'
          } ${imgClassName}`}
        />
      )}
    </div>
  )
}
