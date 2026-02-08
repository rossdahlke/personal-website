import './globals.css'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navigation } from '@/components/Navigation'
import { Analytics } from '@vercel/analytics/react'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata = {
  title: 'Ross Dahlke',
  description: 'Assistant Professor at UW-Madison School of Journalism and Mass Communication',
  openGraph: {
    title: 'Ross Dahlke',
    description: 'Assistant Professor at UW-Madison School of Journalism and Mass Communication',
    url: 'https://rossdalke.com',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ross Dahlke - Assistant Professor at UW-Madison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ross Dahlke',
    description: 'Assistant Professor at UW-Madison School of Journalism and Mass Communication',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <ThemeProvider>
          <Navigation />
          <main className="container mx-auto py-8">
            {children}
          </main>
          <footer className="container mx-auto py-12 border-t border-[var(--border-color)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-[var(--muted)]">
              <div className="space-y-1">
                <p className="mb-0 text-sm">University of Wisconsin–Madison</p>
                <p className="mb-0 text-sm">School of Journalism and Mass Communication</p>
                <p className="mb-0 text-sm">ross.dahlke@wisc.edu</p>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/rossdahlke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://scholar.google.com/citations?user=y2g0vNwAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200"
                  aria-label="Google Scholar"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/ross_dahlke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200"
                  aria-label="X"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://bsky.app/profile/did:plc:tpjypws5r3t3xvjqswqnxnf6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200"
                  aria-label="Bluesky"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 19H6.5C4.29086 19 2.5 17.2091 2.5 15C2.5 13.1858 3.66389 11.6332 5.28107 11.1599C5.27493 11.0417 5.27165 10.9222 5.27165 10.8015C5.27165 7.32925 8.09339 4.5 11.5575 4.5C14.5134 4.5 17.0003 6.50245 17.6514 9.23952C19.5417 9.66062 21 11.3789 21 13.4C21 16.0346 19.4346 18 17.5 18V19Z"/>
                  </svg>
                </a>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-[var(--muted)] mb-0">
              &copy; {new Date().getFullYear()} Ross Dahlke
            </p>
          </footer>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
