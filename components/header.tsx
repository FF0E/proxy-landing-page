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
      <div className="container mx-auto grid h-16 items-center grid-cols-3 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 justify-self-start"
          aria-label={`${config.site.name} homepage`}
        >
          <Shield className="h-6 w-6" aria-hidden="true" />
          <span className="text-xl font-semibold">{config.site.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex justify-self-center" aria-label="Main navigation">
          {config.navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 justify-self-end">
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Link href={config.links.login}>{t('buttons.signIn')}</Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
                className="md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring p-2"
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  {config.site.name}
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6 mt-6">
                {/* Navigation Links */}
                <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
                  {config.navigation.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className="text-lg font-medium transition-colors hover:text-foreground text-muted-foreground py-2 px-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 pt-4 border-t border-border">
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="lg"
                      asChild
                      className="justify-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Link href={config.links.login}>{t('buttons.signIn')}</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button
                      size="lg"
                      asChild
                      className="justify-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Link href={config.links.signup}>{t('buttons.getStarted')}</Link>
                    </Button>
                  </SheetClose>
                </div>

                {/* Settings */}
                <div className="flex flex-col gap-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Language</span>
                    <LanguageSwitcher />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Theme</span>
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
