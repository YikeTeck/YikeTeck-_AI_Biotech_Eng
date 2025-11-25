"use client";
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

export default function LangSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const getCookieLang = () => {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(/(?:^|; )preferredLanguage=([^;]+)/);
    return match ? decodeURIComponent(match[1]) : null;
  };

  // Determina la lingua corrente dall'URL
  let currentLang = 'it';
  if (pathname.startsWith('/en')) {
    currentLang = 'en';
  } else if (pathname.startsWith('/zh')) {
    currentLang = 'zh';
  }

  // Effetto per controllare la lingua preferita all'avvio
  useEffect(() => {
    // Controlla se c'è una lingua preferita salvata
    if (typeof window === 'undefined') return;

    const savedLang = localStorage.getItem('preferredLanguage') || getCookieLang();

    // Reindirizza alla homepage nella lingua preferita
    if (pathname === '/' || pathname === '/en' || pathname === '/zh') {
      if (savedLang) {
        router.push(`/${savedLang === 'it' ? '' : savedLang}`);
      } else {
        router.push('/zh');
      }
    }
  }, [pathname, router]);

  // URL delle bandiere
  const flags = {
    en: "https://flagicons.lipis.dev/flags/4x3/gb.svg",
    it: "https://flagicons.lipis.dev/flags/4x3/it.svg",
    zh: "https://flagicons.lipis.dev/flags/4x3/cn.svg"
  };

  const langNames = {
    en: "English",
    it: "Italiano",
    zh: "中文"
  };

  // Mappatura dei percorsi per le diverse lingue
  const pathMappings = {
    // Mapping base per directory principali
    'directory': {
      'it': 'prodotti',
      'en': 'products',
      'zh': 'products'
    },
    // Mapping per nomi specifici di prodotti e pagine
    'pages': {
      'smart-trash-bins': { 'en': 'smart-trash-bins', 'zh': 'smart-trash-bins', 'it': 'smart-trash-bins' },
      'kiosk-interattivi': { 'en': 'interactive-kiosks', 'zh': 'interactive-kiosks' },
      'interactive-kiosks': { 'it': 'kiosk-interattivi', 'zh': 'interactive-kiosks' },
      'lampade-stradali-intelligenti': { 'en': 'smart-street-lamps', 'zh': 'smart-street-lamps' },
      'smart-street-lamps': { 'it': 'lampade-stradali-intelligenti', 'zh': 'smart-street-lamps' },
      'smart-looker': { 'en': 'smart-looker', 'zh': 'smart-looker', 'it': 'smart-looker' },
      'flomindy': { 'en': 'flomindy', 'zh': 'flomindy', 'it': 'flomindy' },
      'super-flat-speakers': { 'en': 'super-flat-speakers', 'zh': 'super-flat-speakers', 'it': 'super-flat-speakers' },
      'chi-siamo': { 'en': 'about-us', 'zh': 'about-us' },
      'about-us': { 'it': 'chi-siamo', 'zh': 'about-us' },
      'contatti': { 'en': 'contact', 'zh': 'contact' },
      'contact': { 'it': 'contatti', 'zh': 'contact' },
      'per-aziende': { 'en': 'for-companies', 'zh': 'for-companies' },
      'for-companies': { 'it': 'per-aziende', 'zh': 'for-companies' },
      'per-eventi': { 'en': 'for-events', 'zh': 'for-events' },
      'for-events': { 'it': 'per-eventi', 'zh': 'for-events' },
      'per-te': { 'en': 'for-users', 'zh': 'for-users' },
      'for-users': { 'it': 'per-te', 'zh': 'for-users' },
      'collaborazioni': { 'en': 'collaborations', 'zh': 'collaborations' },
      'collaborations': { 'it': 'collaborazioni', 'zh': 'collaborations' },
      'progetti': { 'en': 'projects', 'zh': 'projects' },
'projects': { 'it': 'progetti', 'zh': 'projects' },
'sourcing': { 'en': 'sourcing', 'zh': 'sourcing', 'it': 'sourcing' },
'privacy': { 'en': 'privacy', 'zh': 'privacy', 'it': 'privacy' },
    }
  };

  // Determina il nuovo URL per la lingua selezionata
  const getUrlForLanguage = (lang) => {
    // Divide il percorso in segmenti
    const pathSegments = pathname.split('/').filter(segment => segment);
    
    // Determina la lingua attuale
    const currentLanguage = pathSegments[0] === 'en' || pathSegments[0] === 'zh' ? pathSegments[0] : 'it';
    
    // Rimuove la lingua dall'inizio se presente
    const segmentsWithoutLang = currentLanguage !== 'it' ? pathSegments.slice(1) : pathSegments;
    
    // Se stiamo cambiando in italiano, dobbiamo costruire il percorso senza prefisso di lingua
    if (lang === 'it') {
      let newSegments = [];
      
      // Traduci ogni segmento del percorso
      segmentsWithoutLang.forEach((segment, index) => {
        if (index === 0 && segment === pathMappings.directory[currentLanguage]) {
          // Se è la directory principale, traduci in italiano
          newSegments.push(pathMappings.directory.it);
        } else {
          // Altrimenti controlla se esiste una traduzione specifica per questo segmento
          let found = false;
          for (const [page, translations] of Object.entries(pathMappings.pages)) {
            if (segment === page && translations.it) {
              newSegments.push(translations.it);
              found = true;
              break;
            }
          }
          // Se non trovato, lascia invariato
          if (!found) {
            newSegments.push(segment);
          }
        }
      });
      
      return '/' + newSegments.join('/');
    } 
    // Altrimenti stiamo cambiando in inglese o cinese
    else {
      let newSegments = [];
      
      // Traduci ogni segmento del percorso
      segmentsWithoutLang.forEach((segment, index) => {
        if (index === 0 && segment === pathMappings.directory.it) {
          // Se è la directory principale, traduci nella lingua target
          newSegments.push(pathMappings.directory[lang]);
        } else {
          // Altrimenti controlla se esiste una traduzione specifica per questo segmento
          let found = false;
          for (const [page, translations] of Object.entries(pathMappings.pages)) {
            if (segment === page && translations[lang]) {
              newSegments.push(translations[lang]);
              found = true;
              break;
            }
          }
          // Se non trovato, lascia invariato
          if (!found) {
            newSegments.push(segment);
          }
        }
      });
      
      return '/' + lang + '/' + newSegments.join('/');
    }
  };

  // Funzione per cambiare lingua
  const handleChangeLang = (lang) => {
    // Salva la lingua preferita in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang);
      document.cookie = `preferredLanguage=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    }
    
    const newUrl = getUrlForLanguage(lang);
    router.push(newUrl);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2 text-yiketeck-dark hover:text-yiketeck-red transition duration-300 flex items-center"
      >
        <div className="w-5 h-5 mr-2 relative">
          <Image
            src={flags[currentLang]}
            alt={currentLang}
            width={20}
            height={20}
            className="w-full h-full object-cover"
          />
        </div>
        <span>{currentLang.toUpperCase()}</span>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            <button
              onClick={() => handleChangeLang('en')}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
            >
              <div className="w-5 h-5 mr-2 relative">
                <Image
                  src={flags['en']}
                  alt="en"
                  width={20}
                  height={20}
                  className="w-full h-full object-cover"
                />
              </div>
              {langNames['en']}
            </button>
            <button
              onClick={() => handleChangeLang('it')}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
            >
              <div className="w-5 h-5 mr-2 relative">
                <Image
                  src={flags['it']}
                  alt="it"
                  width={20}
                  height={20}
                  className="w-full h-full object-cover"
                />
              </div>
              {langNames['it']}
            </button>
            <button
              onClick={() => handleChangeLang('zh')}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
            >
              <div className="w-5 h-5 mr-2 relative">
                <Image
                  src={flags['zh']}
                  alt="zh"
                  width={20}
                  height={20}
                  className="w-full h-full object-cover"
                />
              </div>
              {langNames['zh']}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
