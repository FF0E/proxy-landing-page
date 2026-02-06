import type React from "react"
import type { Metadata } from "next"
import { I18nProvider } from "@/lib/i18n/client"
import { getServerLocaleData, getServerConfig } from "@/lib/i18n/server"
import { locales, type Locale } from "@/lib/i18n/config"
import "../globals.css"

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale
  const config = await getServerConfig(locale)

  const siteName = config.site.name
  const siteDescription = config.site.description
  const siteUrl = config.site.url
  const isEnglish = locale === 'en'

  const title = isEnglish
    ? `${siteName} - Secure VPN Service | Military-Grade Encryption`
    : `${siteName} - 安全VPN服务 | 军用级加密保护您的隐私`

  const keywords = isEnglish
    ? [
      "VPN",
      "proxy service",
      "cybersecurity",
      "privacy protection",
      "military-grade encryption",
      "secure browsing",
      "internet freedom",
      "online privacy",
    ]
    : [
      "VPN",
      "代理服务",
      "网络安全",
      "隐私保护",
      "军用级加密",
      "翻墙",
      "科学上网",
      "安全上网",
    ]

  return {
    title: {
      default: title,
      template: `%s | ${siteName}`,
    },
    description: siteDescription,
    generator: "Next.js",
    keywords,
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        'en': `${siteUrl}/en`,
        'zh': `${siteUrl}/zh`,
      },
    },
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
      apple: '/favicon.svg',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === 'zh' ? "zh_CN" : "en_US",
      alternateLocale: locale === 'zh' ? ["en_US"] : ["zh_CN"],
      url: `${siteUrl}/${locale}`,
      title,
      description: siteDescription,
      siteName: siteName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: siteDescription,
      creator: `@${siteName}`,
    },
    other: {
      'telegram:channel': '@' + siteName.toLowerCase().replace(/\s/g, ''),
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale
  const localeData = await getServerLocaleData(locale)

  return (
    <I18nProvider locale={locale} localeData={localeData}>
      {children}
    </I18nProvider>
  )
}
