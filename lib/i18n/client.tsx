'use client'

import { createContext, useContext, ReactNode } from 'react'
import type { Locale } from './config'
import type {
  LocaleData,
  Config,
  Translations,
  CommonTranslations,
  HeroTranslations,
  FeaturesTranslations,
  PricingTranslations,
  CtaTranslations,
  FooterTranslations,
  StatsTranslations,
  AboutTranslations,
  NetworkTranslations,
  PrivacyTranslations,
  TermsTranslations,
  FAQTranslations,
} from './types'

interface I18nContextType {
  locale: Locale
  config: Config
  translations: Translations
}

const I18nContext = createContext<I18nContextType | null>(null)

interface I18nProviderProps {
  locale: Locale
  localeData: LocaleData
  children: ReactNode
}

export function I18nProvider({ locale, localeData, children }: I18nProviderProps) {
  return (
    <I18nContext.Provider value={{
      locale,
      config: localeData.config,
      translations: localeData.translations
    }}>
      {children}
    </I18nContext.Provider>
  )
}

// Map section names to their translation types
type SectionTypeMap = {
  common: CommonTranslations
  hero: HeroTranslations
  features: FeaturesTranslations
  pricing: PricingTranslations
  cta: CtaTranslations
  footer: FooterTranslations
  stats: StatsTranslations
  about: AboutTranslations
  network: NetworkTranslations
  privacy: PrivacyTranslations
  terms: TermsTranslations
  faq: FAQTranslations
}

type SectionName = keyof SectionTypeMap

export function useTranslation<T extends SectionName>(section: T): {
  t: (key: string) => string
  locale: Locale
  section: SectionTypeMap[T]
} {
  const context = useContext(I18nContext)

  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider')
  }

  const { locale, translations } = context

  const sectionData = (section === 'common' ? translations.common : translations.pages[section as keyof typeof translations.pages]) as SectionTypeMap[T]

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any

    // Determine the correct source based on section
    if (section === 'common') {
      value = translations.common
    } else {
      value = translations.pages[section as keyof typeof translations.pages]
    }

    // Navigate through the key path
    for (const k of keys) {
      value = value?.[k]
    }

    if (typeof value === 'string') {
      return value
    }

    console.warn(`Translation missing: ${section}.${key}`)
    return key
  }

  return { t, locale, section: sectionData }
}

export function useConfig() {
  const context = useContext(I18nContext)

  if (!context) {
    throw new Error('useConfig must be used within an I18nProvider')
  }

  return context.config
}