import { Header } from "@/components/header"
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Stats } from "@/components/sections/stats"
import { Pricing } from "@/components/sections/pricing"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/footer"
import type { Locale } from "@/lib/i18n/config"

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale
  const networkHref = `/${locale}/network`

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <Header />
      <Hero networkHref={networkHref} />
      <Stats />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}