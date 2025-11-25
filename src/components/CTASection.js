"use client";
import Link from 'next/link';
import useTranslation from '@/translations/useTranslation';
import { usePathname } from 'next/navigation';

export default function CTASection() {
  const { t } = useTranslation();
  const pathname = usePathname();
  
  // Determina la lingua corrente dall'URL
  let currentLang = 'it';
  if (pathname.startsWith('/en')) {
    currentLang = 'en';
  } else if (pathname.startsWith('/zh')) {
    currentLang = 'zh';
  }
  
  // Genera i percorsi corretti in base alla lingua
  const productsPath = 
    currentLang === 'it' ? '/prodotti' : 
    `/${currentLang}/products`;
  
  const contactPath = 
    currentLang === 'it' ? '/contatti' : 
    `/${currentLang}/contact`;
  
  // Testi per i bottoni in base alla lingua
  const exploreProductsText = 
    currentLang === 'it' ? 'Esplora tutti i prodotti' :
    currentLang === 'en' ? 'Explore all products' :
    '探索所有产品';
  
  const contactUsText = 
    currentLang === 'it' ? 'Contattaci' :
    currentLang === 'en' ? 'Contact us' :
    '联系我们';
  
  // Titolo e sottotitolo in base alla lingua
  const title = 
    currentLang === 'it' ? 'Pronti a innovare?' :
    currentLang === 'en' ? 'Ready to innovate?' :
    '准备创新了吗?';
  
  const subtitle = 
    currentLang === 'it' ? 'Scopri come i nostri prodotti e soluzioni possono trasformare la tua esperienza quotidiana e aziendale.' :
    currentLang === 'en' ? 'Discover how our products and solutions can transform your daily and business experience.' :
    '了解我们的产品和解决方案如何能够改变您的日常和商业体验。';
  
  return (
    <section className="bg-yiketeck-red py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={productsPath}
            className="px-8 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
          >
            {exploreProductsText}
          </Link>
          <Link
            href={contactPath}
            className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
          >
            {contactUsText}
          </Link>
        </div>
      </div>
    </section>
  );
}