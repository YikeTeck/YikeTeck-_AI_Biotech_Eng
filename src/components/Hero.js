"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import useTranslation from '@/translations/useTranslation';
import { usePathname } from 'next/navigation';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(-1); // -1 significa "mostra solo grigio"
  const { t } = useTranslation();
  const pathname = usePathname();
  
  // Array delle immagini di sfondo
  const backgroundImages = [
    '/images/hero-bg-1.webp',
    '/images/hero-bg-2.webp',
    '/images/hero-bg-3.webp',
    '/images/hero-bg-4.webp',
    '/images/hero-bg-5.webp',
  ];
  
  // Effetto per gestire il carosello
  useEffect(() => {
    // Prima mostra solo il grigio per 5 secondi
    const initialDelay = setTimeout(() => {
      setCurrentImageIndex(0); // Passa alla prima immagine
    }, 1900);
    
    // Imposta un intervallo per cambiare le immagini, ma solo dopo che è passato il grigio
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => {
        // Se ancora sul grigio, non fare nulla
        if (prevIndex === -1) return prevIndex;
        // Altrimenti passa all'immagine successiva
        return (prevIndex + 1) % backgroundImages.length;
      });
    }, 5000);
    
    // Pulizia
    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);
  
  return (
    <section className="relative h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background grigio di base - sempre visibile */}
      <div className="absolute inset-0 bg-zinc-800 z-0"></div>
      
      {/* Immagini di sfondo con transizione */}
      {backgroundImages.map((imgSrc, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${imgSrc})`,
            opacity: index === currentImageIndex ? 0.21 : 0,
            zIndex: 1
          }}
        />
      ))}
      
      {/* Contenuto Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          {t('home.hero.title.part1')}<br />
          <span className="text-yiketeck-red">{t('home.hero.title.part2')}</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto">
          {t('home.hero.subtitle')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {pathname.startsWith('/en') ? (
            <Link href="/en/products" className="px-8 py-3 bg-yiketeck-red text-white rounded-full hover:bg-red-700 transition duration-300 font-medium">
              {t('buttons.exploreProducts')}
            </Link>
          ) : pathname.startsWith('/zh') ? (
            <Link href="/zh/products" className="px-8 py-3 bg-yiketeck-red text-white rounded-full hover:bg-red-700 transition duration-300 font-medium">
              {t('buttons.exploreProducts')}
            </Link>
          ) : (
            <Link href="/prodotti" className="px-8 py-3 bg-yiketeck-red text-white rounded-full hover:bg-red-700 transition duration-300 font-medium">
              {t('buttons.exploreProducts')}
            </Link>
          )}
          
          {pathname.startsWith('/en') ? (
            <Link href="/en/about-us" className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-zinc-800 transition duration-300 font-medium">
              {t('buttons.discoverYikeTeck')}
            </Link>
          ) : pathname.startsWith('/zh') ? (
            <Link href="/zh/about-us" className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-zinc-800 transition duration-300 font-medium">
              {t('buttons.discoverYikeTeck')}
            </Link>
          ) : (
            <Link href="/chi-siamo" className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-zinc-800 transition duration-300 font-medium">
              {t('buttons.discoverYikeTeck')}
            </Link>
          )}
        </div>
      </div>
      
      {/* Indicatore di scroll */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
