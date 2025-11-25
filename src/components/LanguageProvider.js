"use client";
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    // Controlla se è il primo accesso (localStorage è accessibile solo lato client)
    if (typeof window !== 'undefined') {
      // Controlla se c'è una lingua preferita salvata
      let preferredLanguage = localStorage.getItem('preferredLanguage');

      // Se non c'è una lingua preferita salvata, imposta inglese come predefinito
      if (!preferredLanguage) {
        preferredLanguage = 'en';
        localStorage.setItem('preferredLanguage', 'en');
      }

      // Determina la lingua corrente dell'URL
      let currentLang = 'it';
      if (pathname.startsWith('/en')) {
        currentLang = 'en';
      } else if (pathname.startsWith('/zh')) {
        currentLang = 'zh';
      }

      // Se siamo nella home, reindirizza a inglese di default o alla lingua preferita
      if (pathname === '/') {
        router.push(`/${preferredLanguage}`);
      }
    }
  }, [pathname, router]);
  
  return <>{children}</>;
}