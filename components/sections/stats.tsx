'use client'

import { useTranslation } from "@/lib/i18n/client"
import { MotionWrapper } from "@/components/animations/motion-wrapper"
import { AnimatedCounter } from "@/components/animations/animated-counter"

const statsKeys = ['servers', 'uptime', 'speed', 'users']

export function Stats() {
  const { t } = useTranslation('stats')

  return (
    <section className="relative border-y border-border bg-card/50 backdrop-blur-sm py-fluid overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-chart-1/5 animate-gradient bg-[length:200%_100%]" />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 gap-fluid sm:gap-8 md:grid-cols-4 lg:gap-12">
          {statsKeys.map((statKey, index) => (
            <MotionWrapper
              key={statKey}
              animation="fade-up"
              delay={index * 0.1}
              className="text-center group"
            >
              <div className="relative">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative text-fluid-3xl font-bold lg:text-fluid-4xl text-gradient-animate">
                  <AnimatedCounter
                    end={t(`items.${statKey}.value`)}
                    duration={2.5}
                  />
                </div>
              </div>
              <div className="mt-2 text-fluid-sm font-medium lg:text-fluid-base">
                {t(`items.${statKey}.label`)}
              </div>
              <div className="mt-1 text-fluid-xs text-muted-foreground">
                {t(`items.${statKey}.description`)}
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
