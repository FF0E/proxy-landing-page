'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/lib/i18n/client"
import { useDynamicLink } from "@/lib/hooks/use-dynamic-link"

export function Hero() {
  const { t: tHero } = useTranslation('hero')
  const { t: tCommon } = useTranslation('common')
  const dynamicUrl = useDynamicLink()

  return (
    <section className="container mx-auto px-4 py-fluid-lg" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-4xl text-center">
        <h1
          id="hero-heading"
          className="text-balance text-fluid-5xl font-bold leading-tight tracking-tight lg:text-fluid-6xl"
        >
          {tHero('headline')}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-fluid-lg leading-relaxed text-muted-foreground">
          {tHero('description')}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" role="group" aria-label="Action buttons">
          <Button
            size="lg"
            className="w-full sm:w-auto touch-target focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            asChild
          >
            <Link href={dynamicUrl} aria-describedby="download-description">
              {tCommon('buttons.downloadNow')}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto bg-transparent touch-target focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            asChild
          >
            <Link href={dynamicUrl} aria-describedby="demo-description">
              {tCommon('buttons.viewDemo')}
            </Link>
          </Button>
        </div>

        <p className="mt-6 text-fluid-sm text-muted-foreground" role="note">
          {tHero('guarantee')}
        </p>

        <div className="sr-only">
          <p id="download-description">{tHero('downloadDescription')}</p>
          <p id="demo-description">{tHero('demoDescription')}</p>
        </div>
      </div>
    </section>
  )
}
