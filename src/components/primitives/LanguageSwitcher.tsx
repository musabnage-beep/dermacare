import type { Lang } from '../../i18n/LanguageContext'
import { useLanguage } from '../../i18n/useLanguage'

const options: readonly { value: Lang; label: string }[] = [
  { value: 'ar', label: 'AR' },
  { value: 'en', label: 'EN' },
]

type LanguageSwitcherProps = {
  tone?: 'dark' | 'light'
  className?: string
}

/*
  Segmented AR / EN control. Uses a radiogroup so keyboard and screen-reader
  users get the same two-state affordance as the visual design.
*/
export function LanguageSwitcher({ tone = 'dark', className = '' }: LanguageSwitcherProps) {
  const { lang, setLang, t } = useLanguage()
  const isLight = tone === 'light'

  return (
    <div
      role="radiogroup"
      aria-label={t('lang.label')}
      className={`inline-flex items-center rounded-full border p-0.5 ${
        isLight ? 'border-white/20 bg-white/5' : 'border-line bg-white'
      } ${className}`}
    >
      {options.map((option) => {
        const active = option.value === lang
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            lang={option.value}
            onClick={() => setLang(option.value)}
            className={`h-8 min-w-11 rounded-full px-3 text-xs font-bold tracking-wider transition-colors duration-250 ${
              active
                ? isLight
                  ? 'bg-white text-ink'
                  : 'bg-teal text-white'
                : isLight
                  ? 'text-white/60 hover:text-white'
                  : 'text-ink-soft hover:text-teal'
            }`}
          >
            {option.label}
            <span className="sr-only"> — {t(option.value === 'ar' ? 'lang.ar' : 'lang.en')}</span>
          </button>
        )
      })}
    </div>
  )
}
