'use client'

import { Check, Star } from "lucide-react"
import Link from "next/link"
import { useTranslation, useConfig } from "@/lib/i18n/client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function PricingCard({ planKey, isPopular }: {
  planKey: string
  isPopular: boolean
}) {
  const { t } = useTranslation('pricing')
  const config = useConfig()

  const plan = config.pricing.plans[planKey]
  if (!plan) {
    console.error(`Plan ${planKey} not found in site configuration`)
    return null
  }

  const badge = plan.badge
  const hasBadge = badge && badge.trim() !== ''

  return (
    <div className={cn(
      "relative group h-full",
      isPopular && "sm:scale-105 z-10"
    )}>
      {hasBadge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 sm:-top-4">
          <div className="flex items-center gap-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            <Star className="h-3 w-3 fill-current" />
            {badge}
          </div>
        </div>
      )}

      <Card className={cn(
        "relative overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col",
        isPopular
          ? "border-gray-400/50 bg-gradient-to-b from-gray-50/50 to-gray-100/50 dark:from-gray-900/20 dark:to-gray-800/20"
          : "border-border hover:border-gray-300 dark:hover:border-gray-600"
      )}>
        {isPopular && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-400/5 to-gray-500/5 dark:from-gray-400/10 dark:to-gray-500/10 pointer-events-none" />
        )}

        <CardHeader className="text-center pb-4 px-4 pt-6 sm:px-6">
          <CardTitle className="text-xl font-bold sm:text-2xl">{plan.name}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground mt-2">
            {plan.description}
          </CardDescription>

          <div className="mt-4">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-sm text-muted-foreground">{config.pricing.currency}</span>
              <span className="text-3xl font-bold sm:text-4xl">{plan.price}</span>
              <span className="text-sm text-muted-foreground">{config.pricing.period}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0 flex-grow flex flex-col px-4 pb-6 sm:px-6">
          <ul className="space-y-3 mb-6 flex-grow">
            {plan.features.map((featureKey, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-green-500" />
                </div>
                <span className="text-sm leading-relaxed">{t(`features.${featureKey}`)}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            className={cn(
              "w-full transition-all duration-200 h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isPopular
                ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-900 hover:to-black shadow-lg hover:shadow-xl"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            <Link href={plan.buttonLink}>
              {plan.buttonText}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export function Pricing() {
  const { t } = useTranslation('pricing')
  const config = useConfig()

  const planKeys = Object.keys(config.pricing.plans)

  return (
    <section
      className="container mx-auto px-4 py-fluid"
      aria-labelledby="pricing-heading"
      id="pricing"
    >
      <header className="mx-auto max-w-3xl text-center">
        <h2 id="pricing-heading" className="text-balance text-fluid-3xl font-bold lg:text-fluid-4xl">
          {t('heading')}
        </h2>
        <p className="mt-4 text-fluid-base leading-relaxed text-muted-foreground lg:text-pretty">
          {t('description')}
        </p>
      </header>

      <div className="mt-12 grid gap-fluid sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-8 xl:gap-12">
        {planKeys.map((planKey) => (
          <div key={planKey} className="h-full">
            <PricingCard
              planKey={planKey}
              isPopular={planKey === 'pro'}
            />
          </div>
        ))}
      </div>
    </section>
  )
}