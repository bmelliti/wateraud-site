import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const LOCALES = new Set(['en', 'fr']);
const DEFAULT_LOCALE = 'en';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip static and API
  if (pathname.startsWith('/api') || pathname.startsWith('/_next') || pathname.includes('.')) return;

  const first = pathname.split('/')[1];
  if (LOCALES.has(first)) return;

  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.redirect(url);
}
