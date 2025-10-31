export interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface StatItem {
  value: string
  label: string
}

export type Theme = "light" | "dark" | "system"

// Re-export types from i18n/types for convenience
export type {
  LocaleData,
  Config,
  SiteConfig,
  SiteLinks,
  PricingPlan,
  PricingConfig,
  NavigationItem,
  CTAConfig,
  FooterConfig,
  AnalyticsConfig,
  Translations,
  CommonTranslations,
  HeroTranslations,
  FeaturesTranslations,
  StatsTranslations,
  CtaTranslations,
  PricingTranslations,
  FooterTranslations,
  PageTranslations
} from "./i18n/types"