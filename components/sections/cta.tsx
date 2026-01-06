'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useTranslation, useConfig } from "@/lib/i18n/client"
import { useDynamicLink } from "@/lib/hooks/use-dynamic-link"
import { MotionWrapper } from "@/components/animations/motion-wrapper"
import { GlowingOrbs } from "@/components/animations/floating-particles"

export function CTA() {
  const { t: tCta } = useTranslation('cta')
  const config = useConfig()
  const dynamicUrl = useDynamicLink()

  return (
    <section className="relative border-y border-border bg-gradient-to-b from-card/50 to-card py-fluid overflow-hidden">
      {/* Animated background */}
      <GlowingOrbs className="opacity-30" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />

      <div className="container mx-auto px-4 relative">
        <div className="mx-auto max-w-3xl text-center">
          <MotionWrapper animation="scale">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                {tCta('badge') || 'Limited Time Offer'}
              </span>
            </div>
          </MotionWrapper>

          <MotionWrapper animation="fade-up" delay={0.1}>
            <h2 className="text-balance text-fluid-3xl font-bold lg:text-fluid-4xl">
              <span className="text-gradient-animate">{tCta('heading')}</span>
            </h2>
          </MotionWrapper>

          <MotionWrapper animation="fade-up" delay={0.2}>
            <p className="mt-4 text-pretty text-fluid-base leading-relaxed text-muted-foreground">
              {tCta('description')}
            </p>
          </MotionWrapper>

          <MotionWrapper animation="fade-up" delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="w-full sm:w-auto touch-target relative overflow-hidden group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-primary/25 transition-all duration-300"
                asChild
              >
                <Link href={dynamicUrl}>
                  <span className="relative z-10 flex items-center gap-2">
                    {config.cta.primaryButton.text}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent touch-target border-border/50 hover:bg-card/50 backdrop-blur-sm transition-all duration-300 group"
                asChild
              >
                <Link href={dynamicUrl}>
                  {config.cta.secondaryButton.text}
                </Link>
              </Button>
            </div>
          </MotionWrapper>

          {/* Trust indicators */}
          <MotionWrapper animation="fade-up" delay={0.4}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span>{tCta('trustIndicator1') || 'No credit card required'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span>{tCta('trustIndicator2') || 'Cancel anytime'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '1s' }} />
                <span>{tCta('trustIndicator3') || '24/7 Support'}</span>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}
