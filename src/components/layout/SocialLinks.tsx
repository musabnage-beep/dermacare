import { socialLinks, type SocialNetwork } from '../../config/business'
import { BrandIcon } from './BrandIcons'

const labels: Record<SocialNetwork, string> = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  tiktok: 'TikTok',
  snapchat: 'Snapchat',
}

type SocialLinksProps = {
  label?: string
  tone?: 'dark' | 'light'
}

/*
  Renders only the social profiles that have been verified in `business.ts`.
  Returns nothing when none are configured, so no dead icons are shown.
*/
export function SocialLinks({ label, tone = 'dark' }: SocialLinksProps) {
  if (socialLinks.length === 0) return null

  const isLight = tone === 'light'

  return (
    <div>
      {label !== undefined && (
        <p
          className={`text-xs font-semibold tracking-[0.16em] uppercase ${
            isLight ? 'text-white/50' : 'text-ink-faint'
          }`}
        >
          {label}
        </p>
      )}
      <ul className={`flex items-center gap-3 ${label !== undefined ? 'mt-4' : ''}`}>
        {socialLinks.map(({ network, href }) => (
          <li key={network}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={labels[network]}
              className={`inline-flex size-11 items-center justify-center rounded-full border transition-colors duration-300 ${
                isLight
                  ? 'border-white/20 text-white/70 hover:border-white hover:text-white'
                  : 'border-line text-ink-soft hover:border-teal hover:bg-mist hover:text-teal'
              }`}
            >
              <BrandIcon name={network} className="size-4" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
