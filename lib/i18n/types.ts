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