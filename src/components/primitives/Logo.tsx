import { business } from '../../config/business'
import { useLanguage } from '../../i18n/useLanguage'

type LogoProps = {
  /** `light` renders for dark backgrounds (footer). */
  tone?: 'dark' | 'light'
  className?: string
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
    <span className={`inline-flex flex-col leading-none ${className}`} aria-label={name}>
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
  )
}
