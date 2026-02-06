import type React from "react"
import type { Metadata } from "next"
import { cookies } from "next/headers"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { ErrorBoundary } from "@/components/error-boundary"
import { DomainProvider } from "@/lib/domain-context"
import { getCurrentDomain } from "@/lib/domain"
import { siteConfig } from "@/lib/config"
import { defaultLocale, locales, type Locale } from "@/lib/i18n/config"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export async function generateMetadata(): Promise<Metadata> {
  const siteName = siteConfig.site.name
  const siteDescription = siteConfig.site.description
  const siteUrl = siteConfig.site.url

  return {
    title: {
      default: `${siteName} - 安全VPN服务 | 军用级加密保护您的隐私`,
      template: `%s | ${siteName}`,
    },
    description: siteDescription,
    generator: "Next.js",
    keywords: [
      "VPN",
      "代理服务",
      "网络安全",
      "隐私保护",
      "军用级加密",
      "翻墙",
      "科学上网",
      "proxy",
      "vpn",
      "security",
      "privacy",
      "encryption",
      "internet freedom",
    ],
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: siteUrl,
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
      locale: "zh_CN",
      alternateLocale: ["en_US"],
      url: siteUrl,
      title: `${siteName} - 安全VPN服务 | 军用级加密保护您的隐私`,
      description: siteDescription,
      siteName: siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteName} - 安全VPN服务`,
      description: siteDescription,
      creator: `@${siteName}`,
    },
    other: {
      'telegram:channel': '@' + siteName.toLowerCase().replace(/\s/g, ''),
    },
    verification: {
      // Add your verification codes here when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const cookieLocale = cookieStore.get("locale")?.value as Locale | undefined
  const lang = locales.includes(cookieLocale as Locale) ? (cookieLocale as Locale) : defaultLocale
  const domain = await getCurrentDomain()

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${geist.className} font-sans antialiased`}>
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange={false}
            themes={['light', 'dark', 'system']}
          >
            <DomainProvider domain={domain}>
              {children}
            </DomainProvider>
          </ThemeProvider>
        </ErrorBoundary>
        {siteConfig.analytics.enabled && <Analytics />}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: siteConfig.site.name,
              url: siteConfig.site.url,
              logo: `${siteConfig.site.url}/favicon.svg`,
              description: siteConfig.site.description,
            }),
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: siteConfig.site.name,
              applicationCategory: 'SecurityApplication',
              operatingSystem: 'Windows, macOS, Linux, iOS, Android',
              description: siteConfig.site.description,
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: siteConfig.pricing.plans.basic.price,
                highPrice: siteConfig.pricing.plans.enterprise.price,
                priceCurrency: 'CNY',
                offerCount: 3,
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
