'use client'

import { Shield, Zap, Globe, Lock, Server, Eye } from "lucide-react"
import { useTranslation } from "@/lib/i18n/client"

const featureKeys = [
  { key: 'encryption', icon: Shield },
  { key: 'speed', icon: Zap },
  { key: 'network', icon: Globe },
  { key: 'privacy', icon: Lock },
  { key: 'bandwidth', icon: Server },
  { key: 'anonymity', icon: Eye },
]

function FeatureCard({ featureKey, icon: Icon, index }: { featureKey: string; icon: any; index: number }) {
  const { t } = useTranslation('features')

  const isLarge = index === 0
  const isMedium = index === 1 || index === 2

  const cardClasses = isLarge
    ? "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-foreground hover:-translate-y-1 hover:shadow-lg md:col-span-3 md:row-span-2 md:p-8 lg:p-12"
    : isMedium
    ? "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-foreground hover:-translate-y-1 hover:shadow-lg md:col-span-3 lg:p-8"
    : "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-foreground hover:-translate-y-1 hover:shadow-lg md:col-span-2"

  const iconClasses = isLarge
    ? "h-10 w-10 transition-transform group-hover:scale-110 md:h-12 md:w-12 lg:h-16 lg:w-16"
    : "h-8 w-8 transition-transform group-hover:scale-110 md:h-10 md:w-10 lg:h-12 lg:w-12"

  const titleClasses = isLarge
    ? "mt-4 text-xl font-semibold md:mt-6 md:text-2xl lg:text-3xl"
    : isMedium
    ? "mt-4 text-lg font-semibold md:text-xl lg:text-2xl"
    : "mt-4 text-lg font-semibold"

  const descriptionClasses = isLarge
    ? "mt-2 text-sm leading-relaxed text-muted-foreground md:mt-3 md:text-base lg:text-lg"
    : isMedium
    ? "mt-2 text-sm leading-relaxed text-muted-foreground md:text-base"
    : "mt-2 text-sm leading-relaxed text-muted-foreground"

  return (
    <article className={cardClasses}>
      <Icon className={iconClasses} aria-hidden="true" />
      <h3 className={titleClasses}>{t(`items.${featureKey}.title`)}</h3>
      <p className={descriptionClasses}>{t(`items.${featureKey}.description`)}</p>
    </article>
  )
}

export function Features() {
  const { t } = useTranslation('features')

  return (
    <section
      className="container mx-auto px-4 py-fluid"
      aria-labelledby="features-heading"
      id="features"
    >
      <header className="mx-auto max-w-3xl text-center">
        <h2 id="features-heading" className="text-balance text-fluid-3xl font-bold lg:text-fluid-4xl">
          {t('heading')}
        </h2>
        <p className="mt-4 text-fluid-base leading-relaxed text-muted-foreground lg:text-pretty">
          {t('description')}
        </p>
      </header>

      <div className="mt-12 grid auto-rows-fr gap-fluid sm:grid-cols-2 md:mt-16 md:grid-cols-6 lg:gap-6">
        {featureKeys.map((feature, index) => (
          <FeatureCard
            key={feature.key}
            featureKey={feature.key}
            icon={feature.icon}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
