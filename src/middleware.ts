// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Example: Logging each request
  console.log(`Request made to: ${req.url}`);
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
