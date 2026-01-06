'use client'

import { Shield, Zap, Globe, Lock, Server, Eye } from "lucide-react"
import { useTranslation } from "@/lib/i18n/client"
import { MotionWrapper } from "@/components/animations/motion-wrapper"

const featureKeys = [
  { key: 'encryption', icon: Shield, gradient: 'from-green-500/20 to-emerald-500/20' },
  { key: 'speed', icon: Zap, gradient: 'from-yellow-500/20 to-orange-500/20' },
  { key: 'network', icon: Globe, gradient: 'from-blue-500/20 to-cyan-500/20' },
  { key: 'privacy', icon: Lock, gradient: 'from-purple-500/20 to-pink-500/20' },
  { key: 'bandwidth', icon: Server, gradient: 'from-red-500/20 to-rose-500/20' },
  { key: 'anonymity', icon: Eye, gradient: 'from-indigo-500/20 to-violet-500/20' },
]

function FeatureCard({ featureKey, icon: Icon, index, gradient }: { featureKey: string; icon: any; index: number; gradient: string }) {
  const { t } = useTranslation('features')

  const isLarge = index === 0
  const isMedium = index === 1 || index === 2

  const wrapperClasses = isLarge
    ? "md:col-span-3 md:row-span-2"
    : isMedium
      ? "md:col-span-3"
      : "md:col-span-2"

  const cardClasses = "group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 h-full"
    + (isLarge ? " md:p-8 lg:p-12" : isMedium ? " lg:p-8" : "")

  const iconClasses = isLarge
    ? "h-10 w-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 md:h-12 md:w-12 lg:h-16 lg:w-16"
    : "h-8 w-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 md:h-10 md:w-10 lg:h-12 lg:w-12"

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
    <MotionWrapper animation="fade-up" delay={index * 0.1} className={wrapperClasses}>
      <article className={cardClasses}>
        {/* Animated gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </div>

        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary/50 via-chart-1/50 to-primary/50 blur-sm animate-gradient bg-[length:200%_100%]" />
        </div>

        <div className="relative z-10">
          {/* Icon with glow */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Icon className={iconClasses} aria-hidden="true" />
          </div>

          <h3 className={titleClasses}>{t(`items.${featureKey}.title`)}</h3>
          <p className={descriptionClasses}>{t(`items.${featureKey}.description`)}</p>
        </div>
      </article>
    </MotionWrapper>
  )
}

export function Features() {
  const { t } = useTranslation('features')

  return (
    <section
      className="relative container mx-auto px-4 py-fluid overflow-hidden"
      aria-labelledby="features-heading"
      id="features"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-chart-1/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '-2s' }} />
      </div>

      <header className="mx-auto max-w-3xl text-center">
        <MotionWrapper animation="fade-up">
          <h2 id="features-heading" className="text-balance text-fluid-3xl font-bold lg:text-fluid-4xl">
            {t('heading')}
          </h2>
        </MotionWrapper>
        <MotionWrapper animation="fade-up" delay={0.1}>
          <p className="mt-4 text-fluid-base leading-relaxed text-muted-foreground lg:text-pretty">
            {t('description')}
          </p>
        </MotionWrapper>
      </header>

      <div className="mt-12 grid gap-fluid sm:grid-cols-2 md:mt-16 md:grid-cols-6 lg:gap-6">
        {featureKeys.map((feature, index) => (
          <FeatureCard
            key={feature.key}
            featureKey={feature.key}
            icon={feature.icon}
            index={index}
            gradient={feature.gradient}
          />
        ))}
      </div>
    </section>
  )
}
