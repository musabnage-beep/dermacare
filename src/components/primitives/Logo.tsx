import { business } from '../../config/business'
import { useLanguage } from '../../i18n/useLanguage'

type LogoProps = {
  /** `light` renders for dark backgrounds (footer). */
  tone?: 'dark' | 'light'
  className?: string
}

/*
  The brand mark as printed on the packaging: two leaves either side of a
  raised head. Redrawn as vectors from the product photography — the printed
  original only exists on a curved, low-resolution label — so it stays crisp
  at every size and inherits its colour from the surrounding text.
*/
export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="2 4 60 52" fill="currentColor" aria-hidden="true" className={className}>
      <circle cx="32" cy="13" r="6.5" />
      <g>
        <path d="M36 52C29 42 37 20 52 13C62 25 49 46 36 52Z" />
        <path d="M39 50C46 40 56 34 62 40C60 51 47 54 39 50Z" />
      </g>
      <g transform="translate(64,0) scale(-1,1)">
        <path d="M36 52C29 42 37 20 52 13C62 25 49 46 36 52Z" />
        <path d="M39 50C46 40 56 34 62 40C60 51 47 54 39 50Z" />
      </g>
    </svg>
  )
}

/*
  Renders the ORIGINAL brand logo when `business.logo.src` is configured.
  Until then it falls back to a typographic wordmark in the brand fonts —
  no logo mark is invented, and no missing-asset request is fired.
*/
export function Logo({ tone = 'dark', className = '' }: LogoProps) {
  const { lang } = useLanguage()
  const name = business.name[lang]

  if (business.logo.src !== '') {
    return (
      <img
        src={business.logo.src}
        alt={name}
        width={business.logo.width}
        height={40}
        className={`h-10 w-auto object-contain ${className}`}
      />
    )
  }

  const primary = tone === 'light' ? 'text-white' : 'text-ink'
  const secondary = tone === 'light' ? 'text-teal-muted' : 'text-teal'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label={name}>
      <LogoMark className={`h-9 w-auto shrink-0 sm:h-10 ${secondary}`} />
      <span className="inline-flex flex-col leading-none">
        <span
          className={`text-[1.0625rem] font-extrabold tracking-[0.02em] sm:text-[1.1875rem] ${primary}`}
        >
          {lang === 'ar' ? 'ديرما كير' : 'DERMACARE'}
        </span>
        <span
          className={`mt-1 text-[0.5625rem] font-semibold tracking-[0.42em] uppercase sm:text-[0.625rem] ${secondary}`}
        >
          {lang === 'ar' ? 'بيوتي كلينك' : 'Beauty Clinic'}
        </span>
      </span>
    </span>
  )
}
