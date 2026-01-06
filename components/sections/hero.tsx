'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight, Shield, Zap, Globe } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/lib/i18n/client"
import { useDynamicLink } from "@/lib/hooks/use-dynamic-link"
import { MotionWrapper } from "@/components/animations/motion-wrapper"
import { GlowingOrbs, FloatingParticles } from "@/components/animations/floating-particles"
import { GradientText } from "@/components/animations/text-reveal"
import { HeroBackground, AnimatedBeams, FloatingShapes } from "@/components/backgrounds/hero-background"

interface HeroProps {
  networkHref?: string
}

export function Hero({ networkHref }: HeroProps) {
  const { t: tHero } = useTranslation('hero')
  const { t: tCommon } = useTranslation('common')
  const dynamicUrl = useDynamicLink()

  return (
    <section className="relative container mx-auto px-4 py-fluid-lg overflow-hidden" aria-labelledby="hero-heading">
      {/* New Animated Background */}
      <HeroBackground />
      <AnimatedBeams className="opacity-70" />
      <FloatingShapes className="opacity-90" />

      {/* Animated Background Effects */}
      <GlowingOrbs className="opacity-60" />
      <FloatingParticles count={35} className="opacity-50" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Badge */}
        <MotionWrapper animation="fade-down" delay={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm px-4 py-2 mb-8 shine">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {tHero('badge') || '99.9% Uptime Guaranteed'}
            </span>
          </div>
        </MotionWrapper>

        {/* Main Headline */}
        <MotionWrapper animation="fade-up" delay={0.1}>
          <h1
            id="hero-heading"
            className="text-balance text-fluid-5xl font-bold leading-tight tracking-tight lg:text-fluid-6xl"
          >
            <span className="block">{tHero('headline').split(' ').slice(0, 3).join(' ')}</span>
            <GradientText
              from="from-foreground"
              via="via-primary"
              to="to-foreground"
              className="block mt-2"
            >
              {tHero('headline').split(' ').slice(3).join(' ') || tHero('headline')}
            </GradientText>
          </h1>
        </MotionWrapper>

        {/* Description */}
        <MotionWrapper animation="fade-up" delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-fluid-lg leading-relaxed text-muted-foreground">
            {tHero('description')}
          </p>
        </MotionWrapper>

        {/* Action Buttons */}
        <MotionWrapper animation="fade-up" delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" role="group" aria-label="Action buttons">
            <Button
              size="lg"
              className="w-full sm:w-auto touch-target relative overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-primary/25 transition-all duration-300"
              asChild
            >
              <Link href={dynamicUrl} aria-describedby="download-description">
                <span className="relative z-10 flex items-center">
                  {tCommon('buttons.downloadNow')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent touch-target focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group border-border/50 hover:bg-card/50 backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <Link href={dynamicUrl} aria-describedby="demo-description">
                {tCommon('buttons.viewDemo')}
              </Link>
            </Button>
            {networkHref && (
              <Button
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto text-primary hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
                asChild
              >
                <Link href={networkHref} aria-describedby="network-description">
                  {tCommon('buttons.viewNetwork')}
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
              </Button>
            )}
          </div>
        </MotionWrapper>

        {/* Trust Badges */}
        <MotionWrapper animation="fade-up" delay={0.4}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">{tHero('trustBadge1') || 'AES-256 Encryption'}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium">{tHero('trustBadge2') || 'Ultra Fast'}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Globe className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">{tHero('trustBadge3') || 'Global Network'}</span>
            </div>
          </div>
        </MotionWrapper>

        {/* Guarantee */}
        <MotionWrapper animation="fade-up" delay={0.5}>
          <p className="mt-6 text-fluid-sm text-muted-foreground" role="note">
            {tHero('guarantee')}
          </p>
        </MotionWrapper>

        <div className="sr-only">
          <p id="download-description">{tHero('downloadDescription')}</p>
          <p id="demo-description">{tHero('demoDescription')}</p>
          {networkHref && <p id="network-description">{tCommon('buttons.viewNetwork')}</p>}
        </div>
      </div>
    </section>
  )
}
