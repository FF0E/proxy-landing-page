'use client'

import { Check, Star, Sparkles } from "lucide-react"
import Link from "next/link"
import { useTranslation, useConfig } from "@/lib/i18n/client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useDynamicLink } from "@/lib/hooks/use-dynamic-link"
import { MotionWrapper } from "@/components/animations/motion-wrapper"

function PricingCard({ planKey, isPopular, index }: {
  planKey: string
  isPopular: boolean
  index: number
}) {
  const { t } = useTranslation('pricing')
  const config = useConfig()
  const dynamicUrl = useDynamicLink()

  const plan = config.pricing.plans[planKey]
  if (!plan) {
    console.error(`Plan ${planKey} not found in site configuration`)
    return null
  }

  const badge = plan.badge
  const hasBadge = badge && badge.trim() !== ''

  return (
    <MotionWrapper animation="fade-up" delay={index * 0.15}>
      <div className={cn(
        "relative group h-full",
        isPopular && "sm:scale-105 z-10"
      )}>
        {hasBadge && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 sm:-top-4">
            <div className="flex items-center gap-1.5 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-100 dark:to-white dark:text-gray-900 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg animate-pulse-glow">
              <Sparkles className="h-3.5 w-3.5" />
              {badge}
            </div>
          </div>
        )}

        <Card className={cn(
          "relative overflow-hidden border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col group",
          isPopular
            ? "border-primary/50 bg-gradient-to-b from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 shadow-lg shadow-primary/10"
            : "border-border/50 hover:border-primary/30 dark:hover:border-primary/30 bg-card/50 backdrop-blur-sm"
        )}>
          {/* Animated gradient overlay */}
          {isPopular && (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-chart-1/10 opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </>
          )}

          {/* Corner glow for popular */}
          {isPopular && (
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          )}

          <CardHeader className="relative text-center pb-4 px-4 pt-6 sm:px-6">
            <CardTitle className="text-xl font-bold sm:text-2xl">{plan.name}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground mt-2">
              {plan.description}
            </CardDescription>

            <div className="mt-6">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-sm text-muted-foreground">{config.pricing.currency}</span>
                <span className={cn(
                  "text-4xl font-bold sm:text-5xl transition-all duration-300",
                  isPopular && "text-gradient-animate"
                )}>
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">{config.pricing.period}</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative pt-0 flex-grow flex flex-col px-4 pb-6 sm:px-6">
            <ul className="space-y-3 mb-6 flex-grow">
              {plan.features.map((featureKey, featureIndex) => (
                <li
                  key={featureIndex}
                  className="flex items-start gap-3 opacity-0 animate-slide-up"
                  style={{ animationDelay: `${0.3 + featureIndex * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="p-0.5 rounded-full bg-green-500/20">
                      <Check className="h-3.5 w-3.5 text-green-500" />
                    </div>
                  </div>
                  <span className="text-sm leading-relaxed">{t(`features.${featureKey}`)}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className={cn(
                "w-full transition-all duration-300 h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group/btn relative overflow-hidden",
                isPopular
                  ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl hover:shadow-primary/25"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              <Link href={dynamicUrl}>
                <span className="relative z-10">{plan.buttonText}</span>
                {isPopular && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500" />
                )}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </MotionWrapper>
  )
}

export function Pricing() {
  const { t } = useTranslation('pricing')
  const config = useConfig()

  const planKeys = Object.keys(config.pricing.plans)

  return (
    <section
      className="relative container mx-auto px-4 py-fluid overflow-hidden"
      aria-labelledby="pricing-heading"
      id="pricing"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl animate-orb-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-orb-float" style={{ animationDelay: '-7s' }} />
      </div>

      <header className="mx-auto max-w-3xl text-center">
        <MotionWrapper animation="fade-up">
          <h2 id="pricing-heading" className="text-balance text-fluid-3xl font-bold lg:text-fluid-4xl">
            {t('heading')}
          </h2>
        </MotionWrapper>
        <MotionWrapper animation="fade-up" delay={0.1}>
          <p className="mt-4 text-fluid-base leading-relaxed text-muted-foreground lg:text-pretty">
            {t('description')}
          </p>
        </MotionWrapper>
      </header>

      <div className="mt-12 grid gap-fluid sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-8 xl:gap-12">
        {planKeys.map((planKey, index) => (
          <div key={planKey} className="h-full">
            <PricingCard
              planKey={planKey}
              isPopular={planKey === 'pro'}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  )
}