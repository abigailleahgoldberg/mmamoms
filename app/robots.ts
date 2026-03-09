import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://mmamoms.com/sitemap.xml',
    host: 'https://mmamoms.com',
  }
}
