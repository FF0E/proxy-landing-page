import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getServerConfig, getServerTranslations } from "@/lib/i18n/server"
import type { Locale } from "@/lib/i18n/config"
import { FileText, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

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

    const terms = translations.pages.terms
    const canonical = new URL(`/${locale}/terms`, config.site.url).toString()

    return {
        title: terms.seo.title,
        description: terms.seo.description,
        keywords: terms.seo.keywords,
        alternates: {
            canonical,
        },
        openGraph: {
            type: "website",
            locale: locale === "zh" ? "zh_CN" : "en_US",
            url: canonical,
            title: terms.seo.title,
            description: terms.seo.description,
            siteName: config.site.name,
        },
        twitter: {
            card: "summary_large_image",
            title: terms.seo.title,
            description: terms.seo.description,
        },
    }
}

export default async function TermsPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const resolvedParams = await params
    const locale = resolvedParams.locale as Locale

    const [config, translations] = await Promise.all([
        getServerConfig(locale),
        getServerTranslations(locale),
    ])

    const terms = translations.pages.terms

    return (
        <main className="min-h-screen bg-background">
            <Header />

            <div className="container mx-auto px-4 py-16 pt-28">
                <div className="max-w-4xl mx-auto">
                    {/* Back link */}
                    <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
                        <ArrowLeft className="h-4 w-4" />
                        <span>{terms.backLink}</span>
                    </Link>

                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <FileText className="h-7 w-7" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold sm:text-4xl">{terms.title}</h1>
                            <p className="text-muted-foreground mt-1">{terms.lastUpdated}</p>
                        </div>
                    </div>

                    {/* Introduction */}
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            {terms.introduction}
                        </p>

                        {/* Sections */}
                        {terms.sections.map((section: { title: string; content: string[] }, index: number) => (
                            <section key={index} className="mb-10">
                                <h2 className="text-xl font-semibold mb-4 text-foreground">{section.title}</h2>
                                {section.content.map((paragraph: string, pIndex: number) => (
                                    <p key={pIndex} className="text-muted-foreground leading-relaxed mb-4">
                                        {paragraph}
                                    </p>
                                ))}
                            </section>
                        ))}

                        {/* Contact */}
                        <section className="mt-12 p-6 rounded-2xl border border-border bg-card/50">
                            <h2 className="text-xl font-semibold mb-4">{terms.contact.title}</h2>
                            <p className="text-muted-foreground mb-4">{terms.contact.description}</p>
                            <Button asChild>
                                <a href={config.links.contact}>{terms.contact.button}</a>
                            </Button>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
