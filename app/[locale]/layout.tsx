import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { ErrorBoundary } from "@/components/error-boundary"
import { I18nProvider } from "@/lib/i18n/client"
import { getServerLocaleData, getServerConfig } from "@/lib/i18n/server"
import { locales, type Locale } from "@/lib/i18n/config"
import "../globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

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

  return {
    title: `${siteName} - Secure Your Digital Freedom`,
    description: siteDescription,
    generator: "Next.js",
    keywords: ["proxy", "vpn", "security", "privacy", "encryption", "internet freedom"],
    authors: [{ name: "SecureNet Team" }],
    creator: "SecureNet Team",
    metadataBase: new URL(config.site.url),
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
      apple: '/favicon.svg',
    },
    openGraph: {
      type: "website",
      locale: locale === 'zh' ? "zh_CN" : "en_US",
      url: config.site.url,
      title: `${siteName} - Secure Your Digital Freedom`,
      description: siteDescription,
      siteName: siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteName} - Secure Your Digital Freedom`,
      description: siteDescription,
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
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geist.className} font-sans antialiased`}>
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange={false}
            themes={['light', 'dark', 'system']}
          >
            <I18nProvider locale={locale} localeData={localeData}>
              {children}
            </I18nProvider>
          </ThemeProvider>
        </ErrorBoundary>
        {localeData.config.analytics.enabled && <Analytics />}
      </body>
    </html>
  )
}