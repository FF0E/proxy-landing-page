import type { Metadata } from "next"
import { AboutPageContent } from "@/components/sections/about/about-page-content"
import { getServerConfig, getServerTranslations } from "@/lib/i18n/server"
import type { Locale } from "@/lib/i18n/config"
import { getCurrentDomain } from "@/lib/domain"
import { buildDynamicUrl, getFallbackUrl, resolveDynamicHref } from "@/lib/url-builder"

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

    const about = translations.pages.about
    const canonical = new URL(`/${locale}/about`, config.site.url).toString()

    return {
        title: about.seo.title,
        description: about.seo.description,
        keywords: about.seo.keywords,
        alternates: {
            canonical,
        },
        openGraph: {
            type: "website",
            locale: locale === "zh" ? "zh_CN" : "en_US",
            url: canonical,
            title: about.seo.title,
            description: about.seo.description,
            siteName: config.site.name,
        },
        twitter: {
            card: "summary_large_image",
            title: about.seo.title,
            description: about.seo.description,
        },
    }
}

export default async function AboutPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const resolvedParams = await params
    const locale = resolvedParams.locale as Locale

    const [config, translations, domain] = await Promise.all([
        getServerConfig(locale),
        getServerTranslations(locale),
        getCurrentDomain(),
    ])

    const dynamicBase = buildDynamicUrl(domain, getFallbackUrl())
    const signupLink = resolveDynamicHref(dynamicBase, config.links.signup)
    const contactLink = resolveDynamicHref(dynamicBase, config.links.contact)

    return (
        <main className="min-h-screen bg-background">
            <AboutPageContent
                content={translations.pages.about}
                signupLink={signupLink}
                contactLink={contactLink}
                siteName={config.site.name}
                siteUrl={config.site.url}
                locale={locale}
            />
        </main>
    )
}
