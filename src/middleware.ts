// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const LOCALES = ['en', 'fr'] as const;
const DEFAULT_LOCALE = 'en';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip static files, Next internals, and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // If path already has a locale, continue
  const hasLocale = LOCALES.some(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  );
  if (hasLocale) return NextResponse.next();

  // Redirect to default locale
  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Apply to everything except _next, files, and api (double safety)
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
