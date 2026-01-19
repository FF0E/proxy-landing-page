// Site Configuration Types
export interface SiteConfig {
  name: string
  url: string
  description: string
}

export interface SiteLinks {
  download: string
  demo: string
  login: string
  signup: string
  pricing: string
  contact: string
  support: string
  blog: string
  privacy: string
  terms: string
  security: string
}

export interface PricingPlan {
  name: string
  description: string
  price: string
  badge: string
  buttonText: string
  buttonLink: string
  features: string[]
}

export interface PricingConfig {
  currency: string
  period: string
  plans: {
    [key: string]: PricingPlan
  }
}

export interface NavigationItem {
  name: string
  href: string
}

export interface CTAConfig {
  primaryButton: {
    text: string
    link: string
  }
  secondaryButton: {
    text: string
    link: string
  }
}

export interface FooterConfig {
  sections: {
    product: {
      features: string
      pricing: string
      download: string
    }
    company: {
      about: string
      blog: string
      contact: string
    }
    legal: {
      privacy: string
      terms: string
      security: string
    }
  }
}

export interface AnalyticsConfig {
  enabled: boolean
}

// Configuration Container
export interface Config {
  site: SiteConfig
  links: SiteLinks
  pricing: PricingConfig
  navigation: NavigationItem[]
  cta: CTAConfig
  footer: FooterConfig
  analytics: AnalyticsConfig
}

// Translation Types
export interface CommonTranslations {
  buttons: {
    signIn: string
    getStarted: string
    downloadNow: string
    viewDemo: string
    startFreeTrial: string
    viewPricing: string
    viewNetwork: string
  }
}

export interface HeroTranslations {
  headline: string
  description: string
  guarantee: string
  downloadDescription: string
  demoDescription: string
}

export interface FeaturesTranslations {
  heading: string
  description: string
  items: {
    encryption: {
      title: string
      description: string
    }
    speed: {
      title: string
      description: string
    }
    network: {
      title: string
      description: string
    }
    privacy: {
      title: string
      description: string
    }
    bandwidth: {
      title: string
      description: string
    }
    anonymity: {
      title: string
      description: string
    }
  }
}

export interface StatsTranslations {
  items: {
    servers: {
      value: string
      label: string
      description: string
    }
    uptime: {
      value: string
      label: string
      description: string
    }
    speed: {
      value: string
      label: string
      description: string
    }
    users: {
      value: string
      label: string
      description: string
    }
  }
}

export interface CtaTranslations {
  heading: string
  description: string
}

export interface AboutTranslations {
  seo: {
    title: string
    description: string
    keywords: string[]
  }
  hero: {
    title: string
    tagline: string
    description: string
    primaryCta: string
    secondaryCta: string
  }
  mission: {
    heading: string
    description: string
    pillars: Array<{
      title: string
      description: string
    }>
  }
  highlights: {
    heading: string
    description: string
    items: Array<{
      title: string
      description: string
    }>
  }
  trust: {
    heading: string
    stats: Array<{
      label: string
      value: string
      description: string
    }>
  }
  callToAction: {
    heading: string
    description: string
    primaryCta: string
    secondaryCta: string
    note: string
  }
}

export interface NetworkTranslations {
  seo: {
    title: string
    description: string
    keywords: string[]
  }
  hero: {
    eyebrow: string
    title: string
    description: string
    note: string
    primaryCta: string
    secondaryCta: string
  }
  heroStats: Record<string, {
    label: string
    value: string
    helper: string
  }>
  nodeTypes: {
    heading: string
    description: string
    items: Record<string, {
      title: string
      badge: string
      description: string
      chips: string[]
      metricLabel: string
      metricValue: string
      footnote: string
    }>
  }
  china: {
    heading: string
    description: string
    features: Record<string, {
      title: string
      description: string
    }>
    metrics: Record<string, {
      label: string
      value: string
      caption: string
    }>
  }
  assurance: {
    heading: string
    description: string
    items: Record<string, {
      title: string
      description: string
    }>
  }
  cta: {
    heading: string
    description: string
    primaryCta: string
    secondaryCta: string
    note: string
  }
}

export interface PrivacyTranslations {
  seo: {
    title: string
    description: string
    keywords: string[]
  }
  backLink: string
  title: string
  lastUpdated: string
  introduction: string
  sections: Array<{
    title: string
    content: string[]
  }>
  contact: {
    title: string
    description: string
    button: string
  }
}

export interface TermsTranslations {
  seo: {
    title: string
    description: string
    keywords: string[]
  }
  backLink: string
  title: string
  lastUpdated: string
  introduction: string
  sections: Array<{
    title: string
    content: string[]
  }>
  contact: {
    title: string
    description: string
    button: string
  }
}

export interface FAQTranslations {
  seo: {
    title: string
    description: string
    keywords: string[]
  }
  backLink: string
  title: string
  description: string
  categories: Array<{
    title: string
    items: Array<{
      question: string
      answer: string
    }>
  }>
  cta: {
    title: string
    description: string
    primaryButton: string
    secondaryButton: string
  }
}

export interface DownloadTranslations {
  seo: {
    title: string
    description: string
    keywords: string[]
  }
  hero: {
    badge: string
    title: string
    description: string
    downloadButton: string
    version: string
  }
  platforms: {
    android: {
      name: string
      badge: string
    }
    ios: {
      name: string
      badge: string
    }
    windows: {
      name: string
      badge: string
    }
    macos: {
      name: string
      badge: string
    }
  }
  sections: {
    overview: {
      title: string
      description: string
      features: string[]
    }
    features: {
      title: string
      description: string
      items: Array<{
        title: string
        description: string
      }>
    }
    moreFeatures: {
      title: string
      items: Array<{
        title: string
        description: string
      }>
    }
    support: {
      title: string
      description: string
      features: string[]
    }
  }
  cta: {
    title: string
    description: string
    button: string
    note: string
  }
}

export interface PricingTranslations {
  heading: string
  description: string
  features: {
    connections: string
    connections_pro: string
    connections_enterprise: string
    servers: string
    servers_pro: string
    servers_enterprise: string
    encryption: string
    encryption_pro: string
    encryption_enterprise: string
    support: string
    support_pro: string
    support_enterprise: string
    guarantee: string
    nologs: string
    adblocker: string
    bandwidth: string
    tunneling: string
    dashboard: string
    sso: string
    api: string
  }
}

export interface FooterTranslations {
  brandDescription: string
  sections: {
    product: {
      title: string
      links: {
        features: string
        pricing: string
        download: string
        network: string
      }
    }
    company: {
      title: string
      links: {
        aboutUs: string
        blog: string
        contact: string
      }
    }
    resources: {
      title: string
      links: {
        faq: string
        support: string
      }
    }
    legal: {
      title: string
      links: {
        privacyPolicy: string
        termsOfService: string
        security: string
      }
    }
  }
  copyright: string
}

export interface PageTranslations {
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
  download: DownloadTranslations
}

export interface Translations {
  common: CommonTranslations
  pages: PageTranslations
}

// Unified Locale Data Structure
export interface LocaleData {
  config: Config
  translations: Translations
}