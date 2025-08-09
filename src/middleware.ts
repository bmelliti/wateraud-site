// middleware.ts — ensure NO middleware runs
import { NextResponse } from 'next/server';
export const config = { matcher: ['/__never_match'] };
export function middleware() { return NextResponse.next(); }
