import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'ClaudeBot',
          'Claude-User',
          'Claude-SearchBot',
          'Google-Extended',
          'PerplexityBot',
          'Perplexity-User',
          'Applebot-Extended',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://rossdahlke.com/sitemap.xml',
  }
}
