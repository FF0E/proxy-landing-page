'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Menu, ArrowRight } from "lucide-react"
import { useTranslation, useConfig } from "@/lib/i18n/client"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { useDynamicLink } from "@/lib/hooks/use-dynamic-link"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const { t } = useTranslation('common')
  const config = useConfig()
  const dynamicUrl = useDynamicLink()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 min-w-0">
        <Link
          href="/"
          className="flex items-center gap-2 flex-shrink-0 group"
          aria-label={`${config.site.name} homepage`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Shield className="h-6 w-6 relative transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
          </div>
          <span className="text-xl font-semibold truncate bg-gradient-to-r from-foreground to-foreground bg-clip-text group-hover:from-primary group-hover:to-foreground transition-all duration-300">{config.site.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 mx-8" aria-label="Main navigation">
          {config.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex-1" />

        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring touch-target-sm transition-all duration-300 hover:bg-primary/10"
            >
              <Link href={dynamicUrl}>{t('buttons.signIn')}</Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring touch-target-sm whitespace-nowrap group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-300"
            >
              <Link href={dynamicUrl} className="flex items-center gap-1">
                {t('buttons.getStarted')}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring touch-area hover:bg-primary/10 transition-colors duration-300"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[280px] p-4 backdrop-blur-xl bg-background/95 border-border/50">
                {/* Mobile Navigation Links */}
                <nav className="mb-4 space-y-2" aria-label="Mobile navigation">
                  {config.navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-md transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Action Buttons - Side by Side */}
                <div className="flex gap-2 mb-4 pt-4 border-t border-border/50">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 h-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border-border/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    <Link href={dynamicUrl}>{t('buttons.signIn')}</Link>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="flex-1 h-10 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-gradient-to-r from-primary to-primary/80 transition-all duration-300"
                  >
                    <Link href={dynamicUrl}>{t('buttons.getStarted')}</Link>
                  </Button>
                </div>

                {/* Language and Theme Toggles */}
                <div className="flex items-center justify-center gap-3 pt-3 border-t border-border/50">
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
