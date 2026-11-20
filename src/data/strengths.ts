import { HandHeart, Languages, Leaf, ListChecks, MessageCircleHeart, Stethoscope } from 'lucide-react'
import type { TranslationKey } from '../i18n/dictionary'

export type Strength = {
  id: string
  titleKey: TranslationKey
  bodyKey: TranslationKey
  icon: typeof Leaf
}

/*
  "Why choose us" content. These describe how the brand works — they are not
  certifications, statistics, awards or clinical claims. Edit freely.
*/
export const strengths: readonly Strength[] = [
  { id: 'advice', titleKey: 'why.item1.title', bodyKey: 'why.item1.body', icon: MessageCircleHeart },
  { id: 'curated', titleKey: 'why.item2.title', bodyKey: 'why.item2.body', icon: Leaf },
  { id: 'routine', titleKey: 'why.item3.title', bodyKey: 'why.item3.body', icon: ListChecks },
  { id: 'clinic', titleKey: 'why.item4.title', bodyKey: 'why.item4.body', icon: Stethoscope },
  { id: 'followup', titleKey: 'why.item5.title', bodyKey: 'why.item5.body', icon: HandHeart },
  { id: 'language', titleKey: 'why.item6.title', bodyKey: 'why.item6.body', icon: Languages },
]

export type ExperienceStep = {
  id: string
  titleKey: TranslationKey
  bodyKey: TranslationKey
}

export const experienceSteps: readonly ExperienceStep[] = [
  { id: 'understand', titleKey: 'exp.step1.title', bodyKey: 'exp.step1.body' },
  { id: 'choose', titleKey: 'exp.step2.title', bodyKey: 'exp.step2.body' },
  { id: 'continue', titleKey: 'exp.step3.title', bodyKey: 'exp.step3.body' },
]
