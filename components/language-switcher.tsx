'use client'

import { Languages, Check } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { useId } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslation } from "@/lib/i18n/client"
import { locales, localeNames, type Locale } from "@/lib/i18n/config"

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const { locale } = useTranslation('common')
  const triggerId = useId()

  const switchLanguage = (newLocale: Locale) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/'

    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild id={triggerId}>
        <Button
          variant="ghost"
          size="sm"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Select language"
        >
          <Languages className="h-4 w-4" aria-hidden="true" />
          <span className="ml-1 hidden sm:inline">{localeNames[locale]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        {locales.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => switchLanguage(lang)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span>{localeNames[lang]}</span>
            {locale === lang && (
              <Check className="h-4 w-4" aria-hidden="true" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}