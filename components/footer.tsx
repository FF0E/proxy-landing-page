'use client'

import Link from "next/link"
import { Shield, Heart } from "lucide-react"
import { useTranslation, useConfig } from "@/lib/i18n/client"
import { useDynamicLink } from "@/lib/hooks/use-dynamic-link"
import { MotionWrapper } from "@/components/animations/motion-wrapper"
import { useParams } from "next/navigation"

export function Footer() {
  const { t: tFooter } = useTranslation('footer')
  const config = useConfig()
  const dynamicUrl = useDynamicLink()
  const params = useParams()
  const locale = params?.locale || 'en'

  // Helper to determine if we should use dynamic URL
  const getHref = (configUrl: string) => {
    // If it's an internal link (starts with # or /), use as is
    if (configUrl.startsWith('#') || configUrl.startsWith('/')) {
      return configUrl
    }
    // If it's an external link, use dynamic URL
    return dynamicUrl
  }

  return (
    <footer className="relative border-t border-border/50 py-8 md:py-12 lg:py-16 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
          {/* Brand Section */}
          <MotionWrapper animation="fade-up" className="sm:col-span-2 md:col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Shield className="h-6 w-6 relative transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="text-xl font-semibold">{config.site.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
              {tFooter('brandDescription')}
            </p>
          </MotionWrapper>

          {/* Product Links */}
          <MotionWrapper animation="fade-up" delay={0.1} className="space-y-4">
            <h3 className="font-semibold text-base lg:text-lg">{tFooter('sections.product.title')}</h3>
            <ul className="space-y-3 text-sm lg:text-base">
              <li>
                <Link
                  href={getHref(config.footer.sections.product.features)}
                  className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.product.links.features')}
                </Link>
              </li>
              <li>
                <Link
                  href={getHref(config.footer.sections.product.pricing)}
                  className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.product.links.pricing')}
                </Link>
              </li>
              <li>
                <Link
                  href={getHref(config.footer.sections.product.download)}
                  className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.product.links.download')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/network`}
                  className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.product.links.network')}
                </Link>
              </li>
            </ul>
          </MotionWrapper>

          {/* Company Links */}
          <MotionWrapper animation="fade-up" delay={0.2} className="space-y-4">
            <h3 className="font-semibold text-base lg:text-lg">{tFooter('sections.company.title')}</h3>
            <ul className="space-y-3 text-sm lg:text-base">
              <li>
                <Link
                  href={getHref(config.footer.sections.company.about)}
                  className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.company.links.aboutUs')}
                </Link>
              </li>
              <li>
                <Link
                  href={getHref(config.footer.sections.company.blog)}
                  className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.company.links.blog')}
                </Link>
              </li>
              <li>
                <Link
                  href={getHref(config.footer.sections.company.contact)}
                  className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.company.links.contact')}
                </Link>
              </li>
            </ul>
          </MotionWrapper>

          {/* Resources Links */}
          <MotionWrapper animation="fade-up" delay={0.25} className="space-y-4">
            <h3 className="font-semibold text-base lg:text-lg">{tFooter('sections.resources.title')}</h3>
            <ul className="space-y-3 text-sm lg:text-base">
              <li>
                <Link
                  href={`/${locale}/faq`}
                  className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.resources.links.faq')}
                </Link>
              </li>
              <li>
                <Link
                  href={getHref(config.links.support)}
                  className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.resources.links.support')}
                </Link>
              </li>
            </ul>
          </MotionWrapper>

          {/* Legal Links */}
          <MotionWrapper animation="fade-up" delay={0.3} className="space-y-4">
            <h3 className="font-semibold text-base lg:text-lg">{tFooter('sections.legal.title')}</h3>
            <ul className="space-y-3 text-sm lg:text-base">
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.legal.links.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.legal.links.termsOfService')}
                </Link>
              </li>
              <li>
                <Link
                  href={getHref(config.footer.sections.legal.security)}
                  className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.legal.links.security')}
                </Link>
              </li>
            </ul>
          </MotionWrapper>
        </div>

        {/* Copyright */}
        <MotionWrapper animation="fade-up" delay={0.4}>
          <div className="mt-8 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground lg:pt-8 lg:text-base">
            <p className="flex items-center justify-center gap-1">
              {tFooter('copyright')}
              <span className="inline-flex items-center gap-1 ml-1">
                Made with <Heart className="h-3.5 w-3.5 text-red-500 animate-pulse" />
              </span>
            </p>
          </div>
        </MotionWrapper>
      </div>
    </footer>
  )
}
