import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getServerConfig, getServerTranslations } from "@/lib/i18n/server"
import type { Locale } from "@/lib/i18n/config"
import { getCurrentDomain } from "@/lib/domain"
import { buildDynamicUrl, getFallbackUrl, resolveDynamicHref } from "@/lib/url-builder"
import { HelpCircle, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const resolvedParams = await params
    const locale = resolvedParams.locale as Locale

    const [config, translations, domain] = await Promise.all([
        getServerConfig(locale),
        getServerTranslations(locale),
        getCurrentDomain(),
    ])

    const faq = translations.pages.faq
    const dynamicBase = buildDynamicUrl(domain, getFallbackUrl())
    const signupLink = resolveDynamicHref(dynamicBase, config.links.signup)
    const contactLink = resolveDynamicHref(dynamicBase, config.links.contact)
    const canonical = new URL(`/${locale}/faq`, config.site.url).toString()

    return {
        title: faq.seo.title,
        description: faq.seo.description,
        keywords: faq.seo.keywords,
        alternates: {
            canonical,
        },
        openGraph: {
            type: "website",
            locale: locale === "zh" ? "zh_CN" : "en_US",
            url: canonical,
            title: faq.seo.title,
            description: faq.seo.description,
            siteName: config.site.name,
        },
        twitter: {
            card: "summary_large_image",
            title: faq.seo.title,
            description: faq.seo.description,
        },
    }
}

export default async function FAQPage({
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

    const faq = translations.pages.faq
    const dynamicBase = buildDynamicUrl(domain, getFallbackUrl())
    const signupLink = resolveDynamicHref(dynamicBase, config.links.signup)
    const contactLink = resolveDynamicHref(dynamicBase, config.links.contact)

    return (
        <main className="min-h-screen bg-background">
            <Header />

            <div className="container mx-auto px-4 py-16 pt-28">
                <div className="max-w-4xl mx-auto">
                    {/* Back link */}
                    <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
                        <ArrowLeft className="h-4 w-4" />
                        <span>{faq.backLink}</span>
                    </Link>

                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-6">
                            <HelpCircle className="h-8 w-8" />
                        </div>
                        <h1 className="text-3xl font-bold sm:text-4xl mb-4">{faq.title}</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {faq.description}
                        </p>
                    </div>

                    {/* FAQ Categories */}
                    {faq.categories.map((category: { title: string; items: { question: string; answer: string }[] }, categoryIndex: number) => (
                        <section key={categoryIndex} className="mb-12">
                            <h2 className="text-xl font-semibold mb-6 text-foreground">{category.title}</h2>
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {category.items.map((item: { question: string; answer: string }, itemIndex: number) => (
                                    <AccordionItem
                                        key={itemIndex}
                                        value={`${categoryIndex}-${itemIndex}`}
                                        className="border border-border rounded-xl px-6 data-[state=open]:bg-card/50"
                                    >
                                        <AccordionTrigger className="text-left hover:no-underline py-4">
                                            <span className="font-medium">{item.question}</span>
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground pb-4">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </section>
                    ))}

                    {/* CTA Section */}
                    <section className="mt-16 p-8 rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-transparent to-transparent text-center">
                        <h2 className="text-2xl font-bold mb-4">{faq.cta.title}</h2>
                        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">{faq.cta.description}</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg">
                                <a href={signupLink} className="flex items-center gap-2">
                                    {faq.cta.primaryButton}
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </Button>
                            <Button variant="outline" asChild size="lg">
                                <a href={contactLink}>{faq.cta.secondaryButton}</a>
                            </Button>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    )
}
