'use client'

import Link from "next/link"
import { Shield } from "lucide-react"
import { useTranslation, useConfig } from "@/lib/i18n/client"
import { useDynamicLink } from "@/lib/hooks/use-dynamic-link"

export function Footer() {
  const { t: tFooter } = useTranslation('footer')
  const config = useConfig()
  const dynamicUrl = useDynamicLink()

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
    <footer className="border-t border-border py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <span className="text-xl font-semibold">{config.site.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
              {tFooter('brandDescription')}
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base lg:text-lg">{tFooter('sections.product.title')}</h3>
            <ul className="space-y-3 text-sm lg:text-base">
              <li>
                <Link
                  href={getHref(config.footer.sections.product.features)}
                  className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.product.links.features')}
                </Link>
              </li>
              <li>
                <Link
                  href={getHref(config.footer.sections.product.pricing)}
                  className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.product.links.pricing')}
                </Link>
              </li>
              <li>
                <Link
                  href={getHref(config.footer.sections.product.download)}
                  className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.product.links.download')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base lg:text-lg">{tFooter('sections.company.title')}</h3>
            <ul className="space-y-3 text-sm lg:text-base">
              <li>
                <Link
                  href={getHref(config.footer.sections.company.about)}
                  className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.company.links.aboutUs')}
                </Link>
              </li>
              <li>
                <Link
                  href={getHref(config.footer.sections.company.blog)}
                  className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.company.links.blog')}
                </Link>
              </li>
              <li>
                <Link
                  href={getHref(config.footer.sections.company.contact)}
                  className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.company.links.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base lg:text-lg">{tFooter('sections.legal.title')}</h3>
            <ul className="space-y-3 text-sm lg:text-base">
              <li>
                <Link
                  href={getHref(config.footer.sections.legal.privacy)}
                  className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.legal.links.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link
                  href={getHref(config.footer.sections.legal.terms)}
                  className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.legal.links.termsOfService')}
                </Link>
              </li>
              <li>
                <Link
                  href={getHref(config.footer.sections.legal.security)}
                  className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {tFooter('sections.legal.links.security')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground lg:pt-8 lg:text-base">
          <p>{tFooter('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
