'use client'

import Link from "next/link"
import { useState, useId } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Menu, X } from "lucide-react"
import { useTranslation, useConfig } from "@/lib/i18n/client"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose
} from "@/components/ui/sheet"

export function Header() {
  const { t } = useTranslation('common')
  const config = useConfig()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const sheetTriggerId = useId()

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

        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center" aria-label="Main navigation">
          {config.navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
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
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild id={sheetTriggerId}>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring touch-area"
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[400px] max-w-md">
              <SheetHeader className="border-b border-border pb-4">
                <SheetTitle className="flex items-center gap-2 text-left">
                  <Shield className="h-5 w-5" />
                  {config.site.name}
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-8 mt-6">
                {/* Navigation Links */}
                <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                  {config.navigation.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base font-medium transition-colors hover:text-foreground text-muted-foreground py-3 px-3 rounded-lg hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 py-4 border-t border-border">
                  <SheetClose asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="justify-center h-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Link href={config.links.login}>{t('buttons.signIn')}</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button
                      size="lg"
                      asChild
                      className="justify-center h-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Link href={config.links.signup}>{t('buttons.getStarted')}</Link>
                    </Button>
                  </SheetClose>
                </div>

                {/* Settings */}
                <div className="flex flex-col gap-4 py-4 border-t border-border">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm font-medium text-muted-foreground">Language</span>
                    <LanguageSwitcher />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm font-medium text-muted-foreground">Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
