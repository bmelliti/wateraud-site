// middleware.ts (repo root)
import { NextResponse } from 'next/server';
export const config = { matcher: ['/__never_match'] };
export function middleware() { return NextResponse.next(); }
