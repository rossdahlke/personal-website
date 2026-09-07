import { NextRequest, NextResponse } from 'next/server'
import { track } from '@vercel/analytics/server'

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  if (path.endsWith('.pdf')) {
    try {
      await track('File', { path }, { headers: request.headers })
    } catch (error) {
      console.error('Failed to track file visit', path, error)
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/cv/:path*',
    '/codelab/:path*',
    '/papers/:path*',
    '/syllabi/:path*',
  ],
}
