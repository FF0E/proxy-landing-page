import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config'
import { locales } from '@/lib/i18n/config'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.site.url

    // Base routes
    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ]

    // Define page routes with their priorities and change frequencies
    const pageRoutes = [
        { path: '', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
        { path: '/network', priority: 0.7, changeFrequency: 'monthly' as const },
        { path: '/faq', priority: 0.6, changeFrequency: 'monthly' as const },
        { path: '/privacy', priority: 0.4, changeFrequency: 'yearly' as const },
        { path: '/terms', priority: 0.4, changeFrequency: 'yearly' as const },
    ]

    // Add locale-specific routes
    const localeRoutes = locales.flatMap((locale) =>
        pageRoutes.map((route) => ({
            url: `${baseUrl}/${locale}${route.path}`,
            lastModified: new Date(),
            changeFrequency: route.changeFrequency,
            priority: route.priority,
        }))
    )

    return [...routes, ...localeRoutes]
}
