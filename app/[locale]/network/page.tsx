"use client"

import { ArrowRight, ArrowUpRight, Globe2, Home, RadioTower, Server, Shield, ShieldCheck, Signal, Sparkles, Video } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedEarth } from "@/components/animated-earth"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/lib/i18n/client"
import { useDynamicLink } from "@/lib/hooks/use-dynamic-link"

const heroStatKeys = ["latency", "success", "downtime"] as const
const nodeTypeKeys = ["cnPremium", "streaming", "residential", "static"] as const
const featureKeys = ["transports", "automation", "resilience"] as const
const metricKeys = ["probes", "failover", "loss"] as const
const assuranceKeys = ["killswitch", "telemetry", "watchdesk"] as const

const nodeIcons: Record<(typeof nodeTypeKeys)[number], any> = {
    cnPremium: RadioTower,
    streaming: Video,
    residential: Home,
    static: Server,
}

const featureIcons: Record<(typeof featureKeys)[number], any> = {
    transports: ShieldCheck,
    automation: RadioTower,
    resilience: Sparkles,
}

const metricIcons: Record<(typeof metricKeys)[number], any> = {
    probes: Globe2,
    failover: ArrowRight,
    loss: Signal,
}

const assuranceIcons: Record<(typeof assuranceKeys)[number], any> = {
    killswitch: ShieldCheck,
    telemetry: Shield,
    watchdesk: RadioTower,
}

export default function NetworkPage() {
    const { t, section: network } = useTranslation("network")
    const dynamicUrl = useDynamicLink()

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white px-4 pt-28 pb-20 sm:pt-32">
                <AnimatedEarth />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.18),transparent_40%),radial-gradient(circle_at_60%_20%,rgba(56,189,248,0.18),transparent_32%)]" aria-hidden="true" />

                <div className="container relative mx-auto max-w-6xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80 shadow-sm backdrop-blur">
                        <Sparkles className="h-4 w-4" aria-hidden="true" />
                        <span>{t("hero.eyebrow")}</span>
                    </div>

                    <div className="mt-6 max-w-3xl space-y-4">
                        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            {t("hero.title")}
                        </h1>
                        <p className="text-lg text-white/80 sm:text-xl">
                            {t("hero.description")}
                        </p>
                        <p className="text-sm text-white/60">{t("hero.note")}</p>
                    </div>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                        <Button size="lg" asChild className="h-12 px-6 text-base shadow-lg">
                            <a href={dynamicUrl} className="flex items-center gap-2">
                                {t("hero.primaryCta")}
                                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="h-12 px-6 text-base border-white/30 bg-white/5 text-white hover:bg-white/10">
                            <a href={dynamicUrl} className="flex items-center gap-2">
                                {t("hero.secondaryCta")}
                                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                            </a>
                        </Button>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-3">
                        {heroStatKeys.map((key) => (
                            <div
                                key={key}
                                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-lg shadow-slate-950/30 backdrop-blur"
                            >
                                <div className="text-3xl font-bold sm:text-4xl">{t(`heroStats.${key}.value`)}</div>
                                <div className="mt-1 text-sm font-semibold text-white/80">{t(`heroStats.${key}.label`)}</div>
                                <p className="mt-1 text-xs text-white/60">{t(`heroStats.${key}.helper`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-3xl space-y-2">
                    <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        <Shield className="h-4 w-4" aria-hidden="true" />
                        {t("hero.eyebrow")}
                    </p>
                    <h2 className="text-3xl font-bold sm:text-4xl">{t("nodeTypes.heading")}</h2>
                    <p className="text-lg text-muted-foreground">{t("nodeTypes.description")}</p>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                    {nodeTypeKeys.map((key) => {
                        const Icon = nodeIcons[key]
                        const node = network?.nodeTypes?.items?.[key]
                        if (!node) return null

                        return (
                            <article
                                key={key}
                                className="group relative overflow-hidden rounded-2xl border border-border bg-card/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                                <div className="relative flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <div className="flex-1 space-y-3">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <h3 className="text-xl font-semibold">{node.title}</h3>
                                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                                                {node.badge}
                                            </Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            {node.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {node.chips?.map((chip) => (
                                                <Badge key={chip} variant="outline" className="border-primary/30 bg-primary/5 text-primary">
                                                    {chip}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-foreground">
                                            <Signal className="h-4 w-4 text-primary" aria-hidden="true" />
                                            <span className="text-muted-foreground">{node.metricLabel}</span>
                                            <span className="text-primary">{node.metricValue}</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground">{node.footnote}</p>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>

            <section className="border-y border-border bg-card/70 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl space-y-3">
                        <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                            <RadioTower className="h-4 w-4" aria-hidden="true" />
                            {t("china.heading")}
                        </p>
                        <h2 className="text-3xl font-bold sm:text-4xl">{t("china.heading")}</h2>
                        <p className="text-lg text-muted-foreground">{t("china.description")}</p>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {featureKeys.map((key) => {
                            const feature = network?.china?.features?.[key]
                            const Icon = featureIcons[key]
                            if (!feature) return null
                            return (
                                <div key={key} className="rounded-2xl border border-border bg-background/60 p-6 shadow-sm">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        {metricKeys.map((key) => {
                            const metric = network?.china?.metrics?.[key]
                            const Icon = metricIcons[key]
                            if (!metric) return null
                            return (
                                <div key={key} className="flex items-start gap-3 rounded-2xl border border-border bg-background/80 p-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <Icon className="h-5 w-5" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <div className="text-xl font-semibold">{metric.value}</div>
                                        <div className="text-sm font-medium text-muted-foreground">{metric.label}</div>
                                        <p className="text-xs text-muted-foreground">{metric.caption}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-3xl space-y-3">
                    <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                        {t("assurance.heading")}
                    </p>
                    <h2 className="text-3xl font-bold sm:text-4xl">{t("assurance.heading")}</h2>
                    <p className="text-lg text-muted-foreground">{t("assurance.description")}</p>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {assuranceKeys.map((key) => {
                        const assurance = network?.assurance?.items?.[key]
                        const Icon = assuranceIcons[key]
                        if (!assurance) return null
                        return (
                            <div key={key} className="rounded-2xl border border-border bg-card/80 p-6 shadow-sm">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Icon className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold">{assurance.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground">{assurance.description}</p>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section className="relative overflow-hidden px-4 pb-16">
                <div className="container mx-auto">
                    <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/90 via-indigo-600 to-slate-900 px-6 py-12 text-white shadow-xl sm:px-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(125,211,252,0.08),transparent_35%)]" aria-hidden="true" />
                        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold sm:text-4xl">{t("cta.heading")}</h2>
                                <p className="text-lg text-white/80">{t("cta.description")}</p>
                                <p className="text-sm text-white/70">{t("cta.note")}</p>
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                    <Button size="lg" asChild className="h-11 px-6 text-base bg-white text-slate-900 hover:bg-slate-100">
                                        <a href={dynamicUrl}>{t("cta.primaryCta")}</a>
                                    </Button>
                                    <Button size="lg" variant="outline" asChild className="h-11 px-6 text-base border-white/50 text-white hover:bg-white/10">
                                        <a href={dynamicUrl}>{t("cta.secondaryCta")}</a>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-4 rounded-2xl border border-white/20 bg-white/5 p-4 shadow-inner">
                                {nodeTypeKeys.map((key) => {
                                    const node = network?.nodeTypes?.items?.[key]
                                    if (!node) return null
                                    return (
                                        <div key={key} className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                                            <div>
                                                <p className="text-sm text-white/70">{node.badge}</p>
                                                <p className="text-base font-semibold">{node.title}</p>
                                            </div>
                                            <ArrowRight className="h-4 w-4 text-white/70" aria-hidden="true" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
