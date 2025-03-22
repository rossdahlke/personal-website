'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from './ThemeProvider'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/teaching', label: 'Teaching' },
  { href: '/resources', label: 'Resources' },
]

export function Navigation() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[var(--background)] bg-opacity-80 border-b border-[var(--border-color)]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex items-center space-x-1 md:space-x-2 overflow-x-auto hide-scrollbar">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link whitespace-nowrap ${pathname === href ? 'active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </div>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-[var(--background-secondary)] transition-all duration-200 flex-shrink-0"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
} 