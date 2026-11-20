import { useState } from 'react'
import { useLanguage } from '../../i18n/useLanguage'

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

/*
  Image paths are authored from the site root (`/images/…`). Vite rewrites such
  paths in HTML and CSS but NOT in string literals, so they must be resolved
  against `BASE_URL` by hand or they 404 when the site is served from a
  sub-path (e.g. GitHub Pages).
*/
function withBase(src: string): string {
  if (!src.startsWith('/')) return src
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}${src}`
}

type FigureProps = {
  src: string
  alt: string
  ratio?: Ratio
  className?: string
  imgClassName?: string
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
  priority = false,
  sizes = '(min-width: 1024px) 50vw, 100vw',
}: FigureProps) {
  const { t } = useLanguage()
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-ivory-deep ${ratioClass[ratio]} ${className}`}>
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
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  )
}
