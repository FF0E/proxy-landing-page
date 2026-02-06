'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative">
        <Sun className="h-4 w-4 opacity-0" />
        <span className="sr-only">Loading theme</span>
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} theme`}
    >
      <Sun
        className={`h-4 w-4 transition-all duration-300 ease-in-out ${
          resolvedTheme === 'light'
            ? 'rotate-0 scale-100 opacity-100'
            : 'rotate-90 scale-0 opacity-0'
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-300 ease-in-out ${
          resolvedTheme === 'dark'
            ? 'rotate-0 scale-100 opacity-100'
            : 'rotate-90 scale-0 opacity-0'
        }`}
      />
      <span className="sr-only">
        {resolvedTheme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      </span>
    </Button>
  )
}