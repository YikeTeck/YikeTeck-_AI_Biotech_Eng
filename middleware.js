import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const savedLang = request.cookies.get('preferredLanguage')?.value;

  // Skip assets and API
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Default language on root
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    if (savedLang === 'en') {
      url.pathname = '/en';
      return NextResponse.redirect(url);
    }
    if (savedLang === 'it') {
      return NextResponse.next();
    }
    // default zh
    url.pathname = '/zh';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
