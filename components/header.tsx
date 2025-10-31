'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Menu } from "lucide-react"
import { useTranslation, useConfig } from "@/lib/i18n/client"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const { t } = useTranslation('common')
  const config = useConfig()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 min-w-0">
        <Link
          href="/"
          className="flex items-center gap-2 flex-shrink-0"
          aria-label={`${config.site.name} homepage`}
        >
          <Shield className="h-6 w-6" aria-hidden="true" />
          <span className="text-xl font-semibold truncate">{config.site.name}</span>
        </Link>

        <div className="flex-1" />

        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring touch-target-sm"
            >
              <Link href={config.links.login}>{t('buttons.signIn')}</Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring touch-target-sm whitespace-nowrap"
            >
              <Link href={config.links.signup}>{t('buttons.getStarted')}</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring touch-area"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[280px] p-4">
                {/* Action Buttons - Side by Side */}
                <div className="flex gap-2 mb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 h-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Link href={config.links.login}>{t('buttons.signIn')}</Link>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="flex-1 h-10 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Link href={config.links.signup}>{t('buttons.getStarted')}</Link>
                  </Button>
                </div>

                {/* Language and Theme Toggles */}
                <div className="flex items-center justify-center gap-3 pt-3 border-t border-border">
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
