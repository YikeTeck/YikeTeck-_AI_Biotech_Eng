"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LocalizedButton({ href, className }) {
  const pathname = usePathname();
  
  // Determina la lingua corrente dall'URL
  let currentLang = 'it';
  if (pathname.startsWith('/en')) {
    currentLang = 'en';
  } else if (pathname.startsWith('/zh')) {
    currentLang = 'zh';
  }
  
  // Testo localizzato per "Scopri di più"
  const buttonText = 
    currentLang === 'it' ? 'Scopri di più' :
    currentLang === 'en' ? 'Learn more' :
    '了解更多';
  
  return (
    <Link href={href} className={className}>
      {buttonText}
    </Link>
  );
}