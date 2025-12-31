import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of known routes that should not be redirected
const knownRoutes = [
  '/',
  '/about',
  '/agents',
  '/blog',
  '/buyers',
  '/sellers',
  '/contact',
  '/listings',
  '/properties',
  '/privacy-policy',
  '/terms-and-conditions',
  '/accessibility',
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Valid blog categories that should pass through
  const validCategories = ['uncategorized', 'guide', 'areas', 'buyer', 'seller', 'news'];
  const pathSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0]?.toLowerCase();

  // Skip if it's a known route or starts with /api, /_next, or has multiple segments
  // Also allow category routes (/{category} or /{category}/{slug})
  if (
    knownRoutes.includes(pathname) ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/agents/') ||
    pathname.startsWith('/communities/') ||
    pathname.startsWith('/blog/') ||
    pathname.startsWith('/listing/') ||
    pathname.startsWith('/property/') ||
    validCategories.includes(firstSegment) || // Allow category routes
    (pathname.includes('/') && pathSegments.length > 1) // Allow any multi-segment routes
  ) {
    return NextResponse.next();
  }

  // Extract the slug (remove leading slash)
  const slug = pathname.slice(1);

  // If it's a single-segment path, check if it's an agent
  // We'll let the catch-all route handle the actual agent lookup
  // This middleware just ensures we don't interfere with other routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};



