import { NextRequest, NextResponse } from 'next/server'
import { locales, defaultLocale } from './lib/i18n/config'

function getLocaleFromHeaders(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language')

  if (!acceptLanguage) {
    return defaultLocale
  }

  // Parse the Accept-Language header
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [code, priority = '1'] = lang.trim().split(';q=')
      return { code: code.toLowerCase(), priority: parseFloat(priority) }
    })
    .sort((a, b) => b.priority - a.priority)

  // Find the best matching locale
  for (const { code } of languages) {
    // Check for exact match
    if (locales.includes(code as any)) {
      return code
    }

    // Check for language code only (e.g., 'zh' from 'zh-CN')
    const langCode = code.split('-')[0]
    if (locales.includes(langCode as any)) {
      return langCode
    }
  }

  return defaultLocale
}

export default function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip proxy for API routes, static files, and Next.js internals
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/robots.txt') ||
    pathname.startsWith('/sitemap.xml') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Get locale from cookie or headers
  const cookieLocale = request.cookies.get('locale')?.value
  const headerLocale = getLocaleFromHeaders(request)

  const locale = (cookieLocale && locales.includes(cookieLocale as any))
    ? cookieLocale
    : headerLocale

  // Redirect to locale-prefixed path
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url)
  const response = NextResponse.redirect(redirectUrl)

  // Set locale cookie
  response.cookies.set('locale', locale, {
    maxAge: 365 * 24 * 60 * 60, // 1 year
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  })

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, robots.txt, sitemap.xml (SEO files)
     * - public files with extensions
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.).*)',
  ],
}