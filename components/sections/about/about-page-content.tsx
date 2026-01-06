import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { AboutTranslations } from "@/lib/i18n/types"

interface AboutPageContentProps {
    content: AboutTranslations
    signupLink: string
    contactLink: string
    siteName: string
    siteUrl: string
    locale: string
}

export function AboutPageContent({
    content,
    signupLink,
    contactLink,
    siteName,
    siteUrl,
    locale,
}: AboutPageContentProps) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteName,
        url: siteUrl,
        description: content.seo.description,
        areaServed: "Global",
        inLanguage: locale,
        serviceType: "VPN and secure proxy",
        brand: siteName,
        slogan: content.hero.title,
    }

    return (
        <div className="pb-16">
            <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 via-background to-background">
                <div className="container mx-auto px-4 py-20 lg:py-28">
                    <div className="mx-auto max-w-4xl text-center space-y-6">
                        <Badge variant="secondary" className="text-sm font-semibold tracking-wide">
                            {content.hero.tagline}
                        </Badge>
                        <h1 className="text-balance text-fluid-4xl font-bold leading-tight lg:text-fluid-5xl">
                            {content.hero.title}
                        </h1>
                        <p className="text-fluid-lg text-muted-foreground">
                            {content.hero.description}
                        </p>
                        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                            <Button size="lg" asChild className="touch-target">
                                <Link href={signupLink}>{content.hero.primaryCta}</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="touch-target">
                                <Link href={contactLink}>{content.hero.secondaryCta}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-fluid" aria-labelledby="mission-heading">
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <h2 id="mission-heading" className="text-fluid-3xl font-semibold lg:text-fluid-4xl">
                        {content.mission.heading}
                    </h2>
                    <p className="text-fluid-base text-muted-foreground">
                        {content.mission.description}
                    </p>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {content.mission.pillars.map((pillar) => (
                        <article
                            key={pillar.title}
                            className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            <h3 className="text-lg font-semibold">{pillar.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 py-fluid" aria-labelledby="highlights-heading">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-2xl space-y-3">
                        <h2 id="highlights-heading" className="text-fluid-3xl font-semibold lg:text-fluid-4xl">
                            {content.highlights.heading}
                        </h2>
                        <p className="text-fluid-base text-muted-foreground">
                            {content.highlights.description}
                        </p>
                    </div>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {content.highlights.items.map((item) => (
                        <article
                            key={item.title}
                            className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 py-fluid" aria-labelledby="trust-heading">
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <h2 id="trust-heading" className="text-fluid-3xl font-semibold lg:text-fluid-4xl">
                        {content.trust.heading}
                    </h2>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {content.trust.stats.map((stat) => (
                        <article
                            key={stat.label}
                            className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            <p className="text-sm font-semibold text-primary/80">{stat.label}</p>
                            <p className="mt-3 text-3xl font-bold tracking-tight">{stat.value}</p>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stat.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 py-fluid" aria-labelledby="cta-heading">
                <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-gradient-to-r from-primary/10 via-background to-background p-8 shadow-lg sm:p-12">
                    <div className="space-y-4 text-center">
                        <Badge variant="outline" className="text-xs uppercase tracking-[0.2em]">
                            {content.callToAction.note}
                        </Badge>
                        <h2 id="cta-heading" className="text-fluid-3xl font-semibold lg:text-fluid-4xl">
                            {content.callToAction.heading}
                        </h2>
                        <p className="text-fluid-base text-muted-foreground">
                            {content.callToAction.description}
                        </p>
                        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                            <Button size="lg" asChild className="touch-target">
                                <Link href={signupLink}>{content.callToAction.primaryCta}</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="touch-target">
                                <Link href={contactLink}>{content.callToAction.secondaryCta}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
        </div>
    )
}
