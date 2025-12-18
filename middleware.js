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

  // Default language on root - Chinese (ZH) is default for new users
  if (pathname === '/') {
    const url = request.nextUrl.clone();

    // User explicitly chose Italian - stay on root
    if (savedLang === 'it') {
      return NextResponse.next();
    }

    // User explicitly chose English
    if (savedLang === 'en') {
      url.pathname = '/en';
      return NextResponse.redirect(url);
    }

    // Default (new users or zh preference) → Chinese
    url.pathname = '/zh';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
