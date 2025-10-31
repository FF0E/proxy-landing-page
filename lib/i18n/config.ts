export type Locale = 'en' | 'zh'

export const locales: readonly Locale[] = ['en', 'zh'] as const
export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
}

export const i18nConfig = {
  locales,
  defaultLocale,
  localeNames,
} as const