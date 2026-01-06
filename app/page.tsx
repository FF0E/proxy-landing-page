import { Header } from "@/components/header"
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Stats } from "@/components/sections/stats"
import { Pricing } from "@/components/sections/pricing"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/footer"
import { DepthBackground } from "@/components/backgrounds/depth-background"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <DepthBackground />
      <div className="relative z-10">
        <Header />
        <Hero networkHref="/zh/network" />
        <Stats />
        <Features />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </main>
  )
}
