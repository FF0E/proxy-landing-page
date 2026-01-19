"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PhoneMockup, PhoneMockupSmall } from "@/components/ui/phone-mockup"
import { MotionWrapper } from "@/components/animations/motion-wrapper"
import type { DownloadTranslations } from "@/lib/i18n/types"
import {
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
  // Apple,
  // Monitor,
} from "lucide-react"

interface DownloadPageContentProps {
  content: DownloadTranslations
  locale: string
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

export function DownloadPageContent({ content, locale }: DownloadPageContentProps) {
  const downloadPath = "/downloads/tuitui-0.0.56-universal-release.apk"

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6 text-center lg:text-left">
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

              <MotionWrapper animation="fade-up" delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  {/* Android Download - Active */}
                  <Button size="lg" asChild className="touch-target gap-2">
                    <Link href={downloadPath} download>
                      <Smartphone className="h-5 w-5" />
                      {content.hero.downloadButton}
                      <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-primary-foreground/20 text-primary-foreground">
                        {content.hero.version}
                      </span>
                    </Link>
                  </Button>

                  {/* Commented out for future platforms */}
                  {/* <Button size="lg" variant="outline" disabled className="touch-target gap-2 opacity-60">
                    <Apple className="h-5 w-5" />
                    {content.platforms.ios.name}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {content.platforms.ios.badge}
                    </Badge>
                  </Button> */}
                </div>
              </MotionWrapper>
            </div>

            {/* Right: Phone Mockup */}
            <MotionWrapper animation="fade-left" delay={0.2}>
              <div className="flex justify-center lg:justify-end">
                <PhoneMockup
                  src={screenshots.dashboard}
                  alt="TUITUI App Dashboard"
                  priority
                />
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
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Button size="lg" asChild className="touch-target gap-2">
                  <Link href={downloadPath} download>
                    <Download className="h-5 w-5" />
                    {content.cta.button}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </section>
    </div>
  )
}
