import { cache } from 'react'
import type { Locale } from './config'
import type { LocaleData, Config, Translations } from './types'

const getLocaleData = cache(async (locale: Locale): Promise<LocaleData> => {
  try {
    const localeData = await import(`./locales/${locale}.json`)
    return localeData.default as LocaleData
  } catch (error) {
    console.warn(`Locale data not found: ${locale}.json, falling back to English`)
    try {
      const fallback = await import(`./locales/en.json`)
      return fallback.default as LocaleData
    } catch (fallbackError) {
      console.error(`Fallback locale data also failed for ${locale}`)
      throw new Error(`Could not load locale data for ${locale}`)
    }
  }
})

export async function getServerLocaleData(locale: Locale): Promise<LocaleData> {
  return await getLocaleData(locale)
}

export async function getServerConfig(locale: Locale): Promise<Config> {
  const localeData = await getLocaleData(locale)

  // Apply environment variable overrides
  const config = { ...localeData.config }

  if (process.env.NEXT_PUBLIC_SITE_NAME) {
    config.site.name = process.env.NEXT_PUBLIC_SITE_NAME
  }
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    config.site.url = process.env.NEXT_PUBLIC_SITE_URL
  }
  if (process.env.NEXT_PUBLIC_SITE_DESCRIPTION) {
    config.site.description = process.env.NEXT_PUBLIC_SITE_DESCRIPTION
  }
  if (process.env.NEXT_PUBLIC_DOWNLOAD_URL) {
    config.links.download = process.env.NEXT_PUBLIC_DOWNLOAD_URL
  }
  if (process.env.NEXT_PUBLIC_DEMO_URL) {
    config.links.demo = process.env.NEXT_PUBLIC_DEMO_URL
  }
  if (process.env.NEXT_PUBLIC_LOGIN_URL) {
    config.links.login = process.env.NEXT_PUBLIC_LOGIN_URL
  }
  if (process.env.NEXT_PUBLIC_SIGNUP_URL) {
    config.links.signup = process.env.NEXT_PUBLIC_SIGNUP_URL
  }
  if (process.env.NEXT_PUBLIC_ANALYTICS_ENABLED) {
    config.analytics.enabled = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true"
  }

  return config
}

export async function getServerTranslations(locale: Locale): Promise<Translations> {
  const localeData = await getLocaleData(locale)
  return localeData.translations
}

export function createServerTranslator(translations: Translations) {
  return function t(key: string, section: 'common' | 'hero' | 'features' | 'pricing' | 'cta' | 'footer' | 'stats' | 'about' | 'network' = 'common'): string {
    const keys = key.split('.')
    let value: any

    // Determine the correct source based on section
    if (section === 'common') {
      value = translations.common
    } else {
      value = translations.pages[section]
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
}