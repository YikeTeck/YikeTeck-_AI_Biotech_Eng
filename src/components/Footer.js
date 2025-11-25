"use client";
import Link from 'next/link';
import useTranslation from '@/translations/useTranslation';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const { t } = useTranslation();
  const pathname = usePathname();
  
  let currentLang = 'it';
  if (pathname.startsWith('/en')) {
    currentLang = 'en';
  } else if (pathname.startsWith('/zh')) {
    currentLang = 'zh';
  }

  const privacyLink = currentLang === 'it' ? '/privacy' : `/${currentLang}/privacy`;
  const contactPath = currentLang === 'it' ? '/contatti' : `/${currentLang}/contact`;

  const companyName = currentLang === 'zh' ? '亿科科技' : 'Yike Teck';
  const email = currentLang === 'zh' ? '邮箱' : currentLang === 'en' ? 'Email' : 'Email';
  const tel = currentLang === 'zh' ? '电话' : currentLang === 'en' ? 'Tel' : 'Tel';

  const langPrefix = currentLang === 'it' ? '' : `/${currentLang}`;

  const getLocalizedPath = (itPath) => {
    if (currentLang === 'it') return itPath;
    const map = {
      '/ai-design': {
        en: '/en/ai-design',
        zh: '/zh/ai-design'
      },
      '/biotech': {
        en: '/en/biotech',
        zh: '/zh/biotech'
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
      },
      '/': {
        en: '/en',
        zh: '/zh'
      }
    };
    return map[itPath]?.[currentLang] || `${langPrefix}${itPath}`;
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

  const navLinks = navBase.map((item) => {
    return {
      href: getLocalizedPath(item.href),
      label: labels[currentLang]?.[item.key] || labels.it[item.key]
    };
  });

  return (
    <footer className="bg-yiketeck-dark text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">{companyName}</h3>
            <p className="text-gray-400 mb-4">{t('home.hero.subtitle')}</p>
            <div className="flex space-x-4">{/* Social icons */}</div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Navigazione</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-yiketeck-dark"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t('navbar.contacts')}</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">{email}: info @ yiketeck.com</li>
              <li className="text-gray-400">{tel}: +86 133 16376169</li>
              <li className="text-gray-400">{tel}: +86 133 60874140</li>
              <li>
                <Link href={contactPath} className="text-gray-400 hover:text-yiketeck-dark">
                  {t('navbar.contacts')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            {currentLang === 'it' && '© 2025-2026 Yike Teck. Tutti i diritti riservati.'}
            {currentLang === 'en' && '© 2025-2026 Yike Teck. All rights reserved.'}
            {currentLang === 'zh' && '© 2025-2026 亿科科技。版权所有。'}
          </p>
          <div className="mt-4 md:mt-0">
            <Link href={privacyLink} className="text-sm text-gray-400 hover:text-white">
              {t('footer.privacyPolicy')}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
