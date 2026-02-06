"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { PhoneMockup, PhoneMockupSmall } from "@/components/ui/phone-mockup"
import { MotionWrapper } from "@/components/animations/motion-wrapper"
import type { DownloadTranslations } from "@/lib/i18n/types"
import { useDynamicLink } from "@/lib/hooks/use-dynamic-link"
import { resolveDynamicHref } from "@/lib/url-builder"
import {
  Apple,
  MonitorDown,
  Download,
  Smartphone,
  Check,
  ShoppingCart,
  BarChart3,
  Gift,
  Users,
  Receipt,
  Settings,
  Headphones,
  // Commented out for future platforms
  // Monitor,
} from "lucide-react"

interface DownloadPageContentProps {
  content: DownloadTranslations
  locale: string
  authLinks: {
    signup: string
    login: string
  }
}

// App screenshots in logical order
const screenshots = {
  dashboard: "/images/app/3.jpg",
  about: "/images/app/8.jpg",
  plans: "/images/app/4.jpg",
  usage: "/images/app/2.jpg",
  checkin: "/images/app/6.jpg",
  referral: "/images/app/5.jpg",
  orders: "/images/app/7.jpg",
  settings: "/images/app/1.jpg",
  support: "/images/app/9.jpg",
}

function WindowsDownloadButton({
  href,
  label,
  badge,
  className,
}: {
  href: string
  label: string
  badge: string
  className?: string
}) {
  return (
    <Button
      size="lg"
      asChild
      className={[
        "touch-target gap-2 bg-blue-600 text-white hover:bg-blue-500",
        "disabled:opacity-80 disabled:bg-blue-600",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <a href={href} download>
        <MonitorDown className="h-5 w-5" />
        {label}
        <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-white/20 text-white/90">
          {badge}
        </span>
      </a>
    </Button>
  )
}

function DesktopMockup({ label, badge }: { label: string; badge: string }) {
  const windowsScreens = [
    { key: "main", src: "/images/windows/pc-main.png" },
    { key: "shop", src: "/images/windows/pc-shop.png" },
    { key: "account", src: "/images/windows/pc-account.png" },
  ] as const

  const [activeIndex, setActiveIndex] = useState(0)
  const active = windowsScreens[activeIndex] ?? windowsScreens[0]

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % windowsScreens.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [windowsScreens.length])

  return (
    <div
      className="relative w-[420px] sm:w-[560px] lg:w-[760px] aspect-[16/9]"
    >
      <div className="absolute inset-0 rounded-2xl border border-border/70 bg-gradient-to-br from-background/80 via-background/60 to-card/60 shadow-2xl backdrop-blur-sm" />
      <div className="absolute inset-2 rounded-xl border border-border/60 bg-background/40 shadow-inner overflow-hidden">
        {windowsScreens.map((screen, index) => (
          <Image
            key={screen.key}
            src={screen.src}
            alt={index === activeIndex ? `${label} preview` : ""}
            aria-hidden={index === activeIndex ? undefined : true}
            fill
            className={[
              "object-cover object-center transition-opacity duration-1000 ease-out",
              index === activeIndex ? "opacity-100" : "opacity-0",
            ].join(" ")}
            sizes="(max-width: 640px) 420px, (max-width: 1024px) 560px, 760px"
            unoptimized
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/0 via-black/0 to-black/5 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-background/70 to-transparent pointer-events-none" />
      </div>

      <div className="absolute top-3 right-3 flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-2 py-1 shadow-sm backdrop-blur">
        {windowsScreens.map((screen, index) => (
          <button
            key={screen.key}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={[
              "relative h-7 w-10 overflow-hidden rounded-md border transition",
              index === activeIndex
                ? "border-primary/60 ring-2 ring-primary/20"
                : "border-border/60 hover:border-foreground/20",
            ].join(" ")}
            aria-label={`${label} screenshot ${index + 1}`}
          >
            <Image
              src={screen.src}
              alt=""
              fill
              className="object-cover object-center"
              sizes="40px"
              unoptimized
            />
          </button>
        ))}
      </div>

      <div className="absolute -bottom-4 left-1/2 h-2 w-24 -translate-x-1/2 rounded-full bg-foreground/10 shadow-md" />
      <div className="absolute -bottom-8 left-1/2 h-4 w-36 -translate-x-1/2 rounded-full bg-foreground/5 blur-sm" />
    </div>
  )
}

export function DownloadPageContent({ content, locale, authLinks }: DownloadPageContentProps) {
  // Download paths for different architectures
  const downloadArm64 = "/downloads/cmfa-0.0.56-alpha-arm64-v8a-release.apk"
  const downloadX86 = "/downloads/cmfa-0.0.56-alpha-x86_64-release.apk"
  const downloadWindows = "/downloads/tuitui-client.exe"
  const dynamicBase = useDynamicLink()
  const signupLink = resolveDynamicHref(dynamicBase, authLinks.signup)
  const loginLink = resolveDynamicHref(dynamicBase, authLinks.login)

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="relative z-20 isolate text-center lg:text-left before:pointer-events-none before:absolute before:-inset-x-4 before:-inset-y-6 before:rounded-3xl before:bg-background/90 before:shadow-[0_8px_30px_rgba(0,0,0,0.08)] lg:before:-inset-x-6 lg:before:-inset-y-8 before:content-['']">
              <div className="relative z-10 space-y-6">
                <MotionWrapper animation="fade-down" delay={0}>
                  <Badge variant="secondary" className="text-sm font-semibold tracking-wide">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    {content.hero.badge}
                  </Badge>
                </MotionWrapper>

                <MotionWrapper animation="fade-up" delay={0.1}>
                  <h1 className="text-balance text-fluid-4xl font-bold leading-tight lg:text-fluid-5xl">
                    {content.hero.title}
                  </h1>
                </MotionWrapper>

                <MotionWrapper animation="fade-up" delay={0.2}>
                  <p className="text-fluid-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                    {content.hero.description}
                  </p>
                </MotionWrapper>

                <MotionWrapper animation="fade-up" delay={0.25}>
                  <Alert className="mx-auto max-w-xl border-primary/20 bg-primary/5 text-left lg:mx-0">
                    <Apple className="text-primary" />
                    <AlertTitle>{content.notice.title}</AlertTitle>
                    <AlertDescription>
                      <p>{content.notice.description}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Button size="sm" variant="secondary" asChild>
                          <Link href={signupLink}>{content.notice.signupLabel}</Link>
                        </Button>
                        <Button size="sm" variant="ghost" asChild>
                          <Link href={loginLink}>{content.notice.loginLabel}</Link>
                        </Button>
                      </div>
                    </AlertDescription>
                  </Alert>
                </MotionWrapper>

                <MotionWrapper animation="fade-up" delay={0.3}>
                  <div className="flex flex-col gap-4 justify-center lg:justify-start">
                    {/* ARM64 Download - Recommended */}
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                        <Button size="lg" asChild className="touch-target gap-2">
                          <a href={downloadArm64} download>
                            <Smartphone className="h-5 w-5" />
                            {content.hero.downloadButton}
                            <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-primary-foreground/20 text-primary-foreground">
                              {content.platforms.android.recommended}
                            </span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-primary-foreground/20 text-primary-foreground">
                              ARM64
                            </span>
                          </a>
                        </Button>
                        <WindowsDownloadButton
                          href={downloadWindows}
                          label={content.platforms.windows.downloadButton}
                          badge={content.platforms.windows.badge}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground text-center lg:text-left">
                        {content.platforms.android.arm64Hint}
                      </p>
                      <p className="text-xs text-muted-foreground text-center lg:text-left">
                        <a
                          href={downloadX86}
                          download
                          className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
                        >
                          <Smartphone className="h-3 w-3" />
                          {content.platforms.android.x86Label}
                        </a>
                        <span className="text-muted-foreground"> · {content.platforms.android.x86Hint}</span>
                      </p>
                    </div>
                  </div>
                </MotionWrapper>
              </div>
            </div>

            {/* Right: Phone Mockup */}
            <MotionWrapper animation="fade-left" delay={0.2} className="relative z-0">
              <div className="relative flex justify-center lg:justify-end">
                <div className="absolute inset-0 hidden sm:flex items-start justify-center lg:justify-end z-0 sm:pt-2 lg:pt-4">
                  <div className="sm:-translate-x-4 lg:-translate-x-8">
                    <DesktopMockup
                      label={content.platforms.windows.name}
                      badge={content.platforms.windows.badge}
                    />
                  </div>
                </div>
                <div className="relative z-10 translate-y-8 sm:translate-y-10 lg:translate-y-12 translate-x-2 sm:translate-x-3 lg:translate-x-4">
                  <PhoneMockup
                    src={screenshots.dashboard}
                    alt="TUITUI App Dashboard"
                    priority
                    className="scale-[0.45] sm:scale-[0.5] lg:scale-[0.55]"
                  />
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* App Overview Section */}
      <section className="container mx-auto px-4 py-fluid" aria-labelledby="overview-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Phone Mockup */}
          <MotionWrapper animation="fade-right" delay={0.1}>
            <div className="flex justify-center lg:justify-start">
              <PhoneMockup
                src={screenshots.about}
                alt="TUITUI App About"
              />
            </div>
          </MotionWrapper>

          {/* Right: Content */}
          <div className="space-y-6">
            <MotionWrapper animation="fade-up" delay={0.1}>
              <h2 id="overview-heading" className="text-fluid-3xl font-semibold lg:text-fluid-4xl">
                {content.sections.overview.title}
              </h2>
            </MotionWrapper>

            <MotionWrapper animation="fade-up" delay={0.2}>
              <p className="text-fluid-base text-muted-foreground">
                {content.sections.overview.description}
              </p>
            </MotionWrapper>

            <MotionWrapper animation="fade-up" delay={0.3}>
              <ul className="space-y-3">
                {content.sections.overview.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Features Gallery - First Row */}
      <section className="container mx-auto px-4 py-fluid" aria-labelledby="features-heading">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <MotionWrapper animation="fade-up" delay={0}>
            <h2 id="features-heading" className="text-fluid-3xl font-semibold lg:text-fluid-4xl">
              {content.sections.features.title}
            </h2>
          </MotionWrapper>
          <MotionWrapper animation="fade-up" delay={0.1}>
            <p className="text-fluid-base text-muted-foreground">
              {content.sections.features.description}
            </p>
          </MotionWrapper>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Plans */}
          <MotionWrapper animation="fade-up" delay={0.1}>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10">
                  <ShoppingCart className="h-5 w-5 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold">{content.sections.features.items[0].title}</h3>
              </div>
              <PhoneMockupSmall src={screenshots.plans} alt="Subscription Plans" className="mb-4" />
              <p className="text-sm text-muted-foreground">{content.sections.features.items[0].description}</p>
            </article>
          </MotionWrapper>

          {/* Usage Tracking */}
          <MotionWrapper animation="fade-up" delay={0.2}>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                  <BarChart3 className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold">{content.sections.features.items[1].title}</h3>
              </div>
              <PhoneMockupSmall src={screenshots.usage} alt="Data Usage Tracking" className="mb-4" />
              <p className="text-sm text-muted-foreground">{content.sections.features.items[1].description}</p>
            </article>
          </MotionWrapper>

          {/* Daily Rewards */}
          <MotionWrapper animation="fade-up" delay={0.3}>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
                  <Gift className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold">{content.sections.features.items[2].title}</h3>
              </div>
              <PhoneMockupSmall src={screenshots.checkin} alt="Daily Check-in Rewards" className="mb-4" />
              <p className="text-sm text-muted-foreground">{content.sections.features.items[2].description}</p>
            </article>
          </MotionWrapper>
        </div>
      </section>

      {/* More Features - Second Row */}
      <section className="container mx-auto px-4 py-fluid" aria-labelledby="more-features-heading">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <MotionWrapper animation="fade-up" delay={0}>
            <h2 id="more-features-heading" className="text-fluid-3xl font-semibold lg:text-fluid-4xl">
              {content.sections.moreFeatures.title}
            </h2>
          </MotionWrapper>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Referral Program */}
          <MotionWrapper animation="fade-up" delay={0.1}>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
                  <Users className="h-5 w-5 text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold">{content.sections.moreFeatures.items[0].title}</h3>
              </div>
              <PhoneMockupSmall src={screenshots.referral} alt="Referral Program" className="mb-4" />
              <p className="text-sm text-muted-foreground">{content.sections.moreFeatures.items[0].description}</p>
            </article>
          </MotionWrapper>

          {/* Order Management */}
          <MotionWrapper animation="fade-up" delay={0.2}>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10">
                  <Receipt className="h-5 w-5 text-yellow-500" />
                </div>
                <h3 className="text-lg font-semibold">{content.sections.moreFeatures.items[1].title}</h3>
              </div>
              <PhoneMockupSmall src={screenshots.orders} alt="Order History" className="mb-4" />
              <p className="text-sm text-muted-foreground">{content.sections.moreFeatures.items[1].description}</p>
            </article>
          </MotionWrapper>

          {/* Settings */}
          <MotionWrapper animation="fade-up" delay={0.3}>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-500/10">
                  <Settings className="h-5 w-5 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold">{content.sections.moreFeatures.items[2].title}</h3>
              </div>
              <PhoneMockupSmall src={screenshots.settings} alt="App Settings" className="mb-4" />
              <p className="text-sm text-muted-foreground">{content.sections.moreFeatures.items[2].description}</p>
            </article>
          </MotionWrapper>
        </div>
      </section>

      {/* Support Section */}
      <section className="container mx-auto px-4 py-fluid" aria-labelledby="support-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <MotionWrapper animation="fade-up" delay={0.1}>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Headphones className="h-6 w-6 text-cyan-500" />
                </div>
              </div>
              <h2 id="support-heading" className="text-fluid-3xl font-semibold lg:text-fluid-4xl">
                {content.sections.support.title}
              </h2>
            </MotionWrapper>

            <MotionWrapper animation="fade-up" delay={0.2}>
              <p className="text-fluid-base text-muted-foreground">
                {content.sections.support.description}
              </p>
            </MotionWrapper>

            <MotionWrapper animation="fade-up" delay={0.3}>
              <ul className="space-y-3">
                {content.sections.support.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10">
                      <Check className="h-4 w-4 text-cyan-500" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </MotionWrapper>
          </div>

          {/* Right: Phone Mockup */}
          <MotionWrapper animation="fade-left" delay={0.1}>
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <PhoneMockup
                src={screenshots.support}
                alt="Support Tickets"
              />
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-fluid" aria-labelledby="cta-heading">
        <MotionWrapper animation="fade-up" delay={0}>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-gradient-to-r from-primary/10 via-background to-background p-8 shadow-lg sm:p-12">
            <div className="space-y-4 text-center">
              <Badge variant="outline" className="text-xs uppercase tracking-[0.2em]">
                {content.cta.note}
              </Badge>
              <h2 id="cta-heading" className="text-fluid-3xl font-semibold lg:text-fluid-4xl">
                {content.cta.title}
              </h2>
              <p className="text-fluid-base text-muted-foreground max-w-xl mx-auto">
                {content.cta.description}
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3">
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                  <Button size="lg" asChild className="touch-target gap-2">
                    <a href={downloadArm64} download>
                      <Download className="h-5 w-5" />
                      {content.cta.button}
                      <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-primary-foreground/20 text-primary-foreground">
                        {content.platforms.android.recommended}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary-foreground/20 text-primary-foreground">
                        ARM64
                      </span>
                    </a>
                  </Button>
                  <WindowsDownloadButton
                    href={downloadWindows}
                    label={content.platforms.windows.downloadButton}
                    badge={content.platforms.windows.badge}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  <a
                    href={downloadX86}
                    download
                    className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
                  >
                    <Smartphone className="h-3 w-3" />
                    {content.platforms.android.x86Label}
                  </a>
                  <span className="text-muted-foreground"> · {content.platforms.android.x86Hint}</span>
                </p>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </section>
    </div>
  )
}
