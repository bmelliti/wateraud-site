import { NextResponse } from 'next/server';

// Effectively disable middleware to prevent routing issues
export const config = {
  matcher: ['/__never_match'],
};

export function middleware() {
  return NextResponse.next();
}