import { Clock, Info, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { business, hasContactChannel, whatsappLink } from '../../config/business'
import { useLanguage } from '../../i18n/useLanguage'
import { SocialLinks } from '../layout/SocialLinks'
import { ButtonLink } from '../primitives/Button'
import { Reveal } from '../primitives/Reveal'
import { Section, SectionHeading } from '../primitives/Section'

export function Contact() {
  const { t, pick } = useLanguage()

  const wa = whatsappLink(t('contact.whatsapp.prefill'))
  const { phone, email, address, hours } = business.contact

  return (
    <Section id="contact" tone="ivory" labelledBy="contact-title">
      <div className="grid grid-cols-4 gap-x-6 gap-y-12 lg:grid-cols-12 lg:gap-x-8">
        <div className="col-span-4 lg:col-span-5">
          <SectionHeading
            id="contact-title"
            eyebrow={t('contact.eyebrow')}
            title={t('contact.title')}
            lead={t('contact.lead')}
          />

          {wa !== '' && (
            <Reveal delay={0.12}>
              <ButtonLink
                href={wa}
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full sm:mt-10 sm:w-auto"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                {t('contact.whatsapp.action')}
              </ButtonLink>
            </Reveal>
          )}

          <Reveal delay={0.18} className="mt-10 sm:mt-12">
            <SocialLinks label={t('contact.social')} />
          </Reveal>
        </div>

        <div className="col-span-4 lg:col-span-6 lg:col-start-7">
          {hasContactChannel ? (
            <ul className="divide-y divide-line border-y border-line">
              {wa !== '' && (
                <ContactRow
                  icon={MessageCircle}
                  label={t('contact.whatsapp')}
                  value={t('contact.whatsapp.action')}
                  href={wa}
                  external
                  delay={0}
                />
              )}
              {phone !== '' && (
                <ContactRow
                  icon={Phone}
                  label={t('contact.phone')}
                  value={phone}
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  delay={0.06}
                />
              )}
              {email !== '' && (
                <ContactRow
                  icon={Mail}
                  label={t('contact.email')}
                  value={email}
                  href={`mailto:${email}`}
                  delay={0.12}
                />
              )}
              {pick(address) !== '' && (
                <ContactRow
                  icon={MapPin}
                  label={t('contact.address')}
                  value={pick(address)}
                  delay={0.18}
                />
              )}
              {pick(hours) !== '' && (
                <ContactRow
                  icon={Clock}
                  label={t('contact.hours')}
                  value={pick(hours)}
                  delay={0.24}
                />
              )}
            </ul>
          ) : (
            /* Nothing is invented: until the business confirms its channels
               the panel says so plainly in both languages. */
            <Reveal className="flex items-start gap-5 rounded-2xl border border-line-teal bg-white p-6 sm:p-8">
              <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-teal" />
              <div>
                <h3 className="text-[1.0625rem] font-bold text-ink">
                  {t('contact.pending.title')}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-ink-soft">
                  {t('contact.pending.body')}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </Section>
  )
}

type ContactRowProps = {
  icon: typeof Phone
  label: string
  value: string
  href?: string
  external?: boolean
  delay: number
}

function ContactRow({ icon: Icon, label, value, href, external, delay }: ContactRowProps) {
  const content = (
    <>
      <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-teal" />
      <span className="flex-1">
        <span className="block text-xs font-semibold tracking-wide text-ink-faint uppercase">
          {label}
        </span>
        <span className="mt-1.5 block text-[0.9375rem] font-semibold text-ink" dir="auto">
          {value}
        </span>
      </span>
    </>
  )

  return (
    <Reveal as="li" delay={delay}>
      {href === undefined ? (
        <div className="flex gap-5 py-6">{content}</div>
      ) : (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="group flex gap-5 py-6 transition-colors duration-250 hover:text-teal"
        >
          {content}
        </a>
      )}
    </Reveal>
  )
}
