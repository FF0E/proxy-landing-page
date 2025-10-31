'use client'

import { useTranslation } from "@/lib/i18n/client"

const statsKeys = ['servers', 'uptime', 'speed', 'users']

export function Stats() {
  const { t } = useTranslation('stats')

  return (
    <section className="border-y border-border bg-card py-fluid">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-fluid sm:gap-8 md:grid-cols-4 lg:gap-12">
          {statsKeys.map((statKey, index) => (
            <div key={statKey} className="text-center">
              <div className="text-fluid-3xl font-bold lg:text-fluid-4xl">
                {t(`items.${statKey}.value`)}
              </div>
              <div className="mt-2 text-fluid-sm font-medium lg:text-fluid-base">
                {t(`items.${statKey}.label`)}
              </div>
              <div className="mt-1 text-fluid-xs text-muted-foreground">
                {t(`items.${statKey}.description`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
