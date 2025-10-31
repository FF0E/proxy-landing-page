import type { Config, NavigationItem } from "./i18n/types"
import enLocale from "./i18n/locales/en.json"

function loadConfig(): Config {
  const config = { ...enLocale.config } as Config

  // Apply environment variable overrides
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

export const siteConfig = loadConfig()

// For backward compatibility, export navigation separately
export const navigation: readonly NavigationItem[] = siteConfig.navigation