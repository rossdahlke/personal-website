import './globals.css'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navigation } from '@/components/Navigation'

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-mono">
        <ThemeProvider>
          <Navigation />
          <main className="container mx-auto py-8">
            {children}
          </main>
          <footer className="container mx-auto py-8 text-center text-[var(--muted)]">
            © {new Date().getFullYear()} Ross Dahlke
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
