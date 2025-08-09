// middleware.ts (repo root) — fully disabled
import { NextResponse } from 'next/server';
export const config = { matcher: ['/__never_match'] };
export function middleware() { return NextResponse.next(); }
