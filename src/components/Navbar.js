"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LangSelector from './LangSelector';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Determina la lingua corrente dall'URL
  const currentLang = 
    pathname.startsWith('/en') ? 'en' : 
    pathname.startsWith('/zh') ? 'zh' : 
    'it';
  
  // Base path per i link in base alla lingua corrente
  const langPrefix = currentLang === 'it' ? '' : `/${currentLang}`;
  
  // Funzione per generare link corretti in base alla lingua
  const getLocalizedPath = (itPath) => {
    if (currentLang === 'it') return itPath;

    const pathMap = {
      '/ai-design': {
        en: '/en/ai-design',
        zh: '/zh/ai-design'
      },
      '/biotech': {
        en: '/en/biotech',
        zh: '/zh/biotech'
      },
      '/prodotti/robotics': {
        en: '/en/products/robotics',
        zh: '/zh/products/robotics'
      },
      '/prodotti': {
        en: '/en/products',
        zh: '/zh/products'
      },
      '/per-eventi': {
        en: '/en/for-events',
        zh: '/zh/for-events'
      },
      '/chi-siamo': {
        en: '/en/about-us',
        zh: '/zh/about-us'
      },
      '/contatti': {
        en: '/en/contact',
        zh: '/zh/contact'
      }
    };

    return pathMap[itPath]?.[currentLang] || `${langPrefix}${itPath}`;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navBase = [
    { key: 'home', href: '/' },
    { key: 'ai', href: '/ai-design' },
    { key: 'biotech', href: '/biotech' },
    { key: 'eng', href: '/prodotti' },
    { key: 'events', href: '/per-eventi' },
    { key: 'about', href: '/chi-siamo' },
    { key: 'contact', href: '/contatti' }
  ];

  const labels = {
    it: {
      home: 'Home',
      ai: 'Sistemi AI',
      biotech: 'Biotecnologia',
      eng: 'Engineering',
      events: 'Eventi',
      about: 'Chi siamo',
      contact: 'Contatti'
    },
    en: {
      home: 'Home',
      ai: 'AI Systems',
      biotech: 'Biotechnology',
      eng: 'Engineering',
      events: 'Events',
      about: 'About us',
      contact: 'Contact'
    },
    zh: {
      home: '首页',
      ai: 'AI 系统',
      biotech: '生物技术',
      eng: '工程',
      events: '活动',
      about: '关于我们',
      contact: '联系我们'
    }
  };

  const navLinks = navBase.map((item) => ({
    href: item.href,
    label: labels[currentLang]?.[item.key] || labels.it[item.key]
  }));

  const normalizePath = (p) => {
    if (!p) return '/';
    const withoutTrailing = p.replace(/\/+$/, '');
    return withoutTrailing === '' ? '/' : withoutTrailing;
  };

  const isActive = (path) => {
    const target = normalizePath(getLocalizedPath(path));
    const current = normalizePath(pathname);
    if (target === '/' || target === '/en' || target === '/zh') {
      return current === target;
    }
    return current === target || current.startsWith(`${target}/`);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center mt-5">
            <Link 
              href={currentLang === 'it' ? '/' : `/${currentLang}`}
              className="flex items-center"
            >
              <Image 
                src="/images/logoYT.svg" 
                alt="Yike Teck Logo" 
                width={330} 
                height={190} 
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center">
            {navLinks.map((link, idx) => (
              <div key={link.href} className="flex items-center">
                {idx !== 0 && <span className="h-[9px] w-[2px] bg-[#c22a2a]" aria-hidden="true" />}
                <Link
                  href={getLocalizedPath(link.href)}
                  className={`px-3 py-[7px] transition duration-300 ${
                    isActive(link.href)
                      ? 'text-[#c22a2a] font-bold'
                      : 'text-yiketeck-dark hover:text-yiketeck-red'
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
            <LangSelector />
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-yiketeck-dark hover:text-yiketeck-red focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getLocalizedPath(link.href)}
                className={`block px-3 py-2 text-base ${
                  isActive(link.href)
                    ? 'text-[#c22a2a] font-bold'
                    : 'text-yiketeck-dark hover:text-yiketeck-red'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LangSelector />
          </div>
        </div>
      )}
    </nav>
  );
}
