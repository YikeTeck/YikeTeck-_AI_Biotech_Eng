"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import useTranslation from '@/translations/useTranslation';

export default function ProductCard({ title, description, category, imageUrl, slug }) {
  const pathname = usePathname();
  const { t } = useTranslation();
  
  // Determina la lingua dal pathname
  let productsPath = '/prodotti';
  let learnMoreText = 'Scopri di più';
  let currentLang = 'it';
  
  if (pathname.startsWith('/en')) {
    productsPath = '/en/products';
    currentLang = 'en';
  } else if (pathname.startsWith('/zh')) {
    productsPath = '/zh/products';
    currentLang = 'zh';
  }
  
  // Mappa gli slug alle chiavi di traduzione
  const slugToTranslationKey = {
    'flomindy': 'flomindy',
    'super-flat-speakers': 'superFlatSpeakers',
    'smart-looker': 'smartLooker',
    'lampade-stradali-intelligenti': 'lampadeStradali',
    'smart-street-lamps': 'lampadeStradali',
    'smart-trash-bins': 'smartTrashBins',
    'kiosk-interattivi': 'kioskInterattivi',
    'interactive-kiosks': 'kioskInterattivi'
  };
  
  // Mappatura degli slug per ogni lingua
  const slugMappings = {
    'it': {
      'smart-street-lamps': 'lampade-stradali-intelligenti',
      'interactive-kiosks': 'kiosk-interattivi'
    },
    'en': {
      'lampade-stradali-intelligenti': 'smart-street-lamps',
      'kiosk-interattivi': 'interactive-kiosks'
    },
    'zh': {
      'lampade-stradali-intelligenti': 'smart-street-lamps',
      'kiosk-interattivi': 'interactive-kiosks'
    }
  };
  
  // Usa lo slug mappato se disponibile, altrimenti usa quello originale
  const localizedSlug = currentLang !== 'it' && slugMappings[currentLang][slug] 
    ? slugMappings[currentLang][slug] 
    : slug;
  
  // Determina quale descrizione tradotta usare in base allo slug
  let translatedTitle = title;
  let translatedDescription = description;
  
  // Se lo slug è mappato, usa le traduzioni corrispondenti
  if (slugToTranslationKey[slug]) {
    const key = slugToTranslationKey[slug];
    translatedDescription = t(`productDescriptions.${key}`);
    translatedTitle = t(`productNames.${key}`);
  }
  
  return (
    <Link
      href={`${productsPath}/${localizedSlug}`}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 block"
    >
      <div className="relative h-48 bg-gray-200">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={translatedTitle}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            {translatedTitle}
          </div>
        )}
        {category && (
          <span className="absolute top-4 left-4 bg-yiketeck-red text-white text-xs px-2 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>
      <div className="p-6 space-y-2">
        <h3 className="text-xl font-bold">{translatedTitle}</h3>
        <p className="text-gray-600">{translatedDescription}</p>
      </div>
    </Link>
  );
}
