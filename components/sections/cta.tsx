'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslation, useConfig } from "@/lib/i18n/client"
import { useDynamicLink } from "@/lib/hooks/use-dynamic-link"

export function CTA() {
  const { t: tCta } = useTranslation('cta')
  const config = useConfig()
  const dynamicUrl = useDynamicLink()

  return (
    <section className="border-y border-border bg-card py-fluid">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-fluid-3xl font-bold lg:text-fluid-4xl">{tCta('heading')}</h2>
          <p className="mt-4 text-pretty text-fluid-base leading-relaxed text-muted-foreground">
            {tCta('description')}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto touch-target" asChild>
              <Link href={dynamicUrl}>{config.cta.primaryButton.text}</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent touch-target" asChild>
              <Link href={dynamicUrl}>{config.cta.secondaryButton.text}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
