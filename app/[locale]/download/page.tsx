import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DownloadPageContent } from "@/components/sections/download/download-page-content"
import { getServerConfig, getServerTranslations } from "@/lib/i18n/server"
import { locales, type Locale } from "@/lib/i18n/config"

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

  const [config, translations] = await Promise.all([
    getServerConfig(locale),
    getServerTranslations(locale),
  ])

  const download = translations.pages.download
  const canonical = new URL(`/${locale}/download`, config.site.url).toString()

  return {
    title: download.seo.title,
    description: download.seo.description,
    keywords: download.seo.keywords,
    alternates: {
      canonical,
      languages: {
        en: `${config.site.url}/en/download`,
        zh: `${config.site.url}/zh/download`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      url: canonical,
      title: download.seo.title,
      description: download.seo.description,
      siteName: config.site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: download.seo.title,
      description: download.seo.description,
    },
  }
}

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale

  const translations = await getServerTranslations(locale)

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <Header />
      <DownloadPageContent
        content={translations.pages.download}
        locale={locale}
      />
      <Footer />
    </main>
  )
}
