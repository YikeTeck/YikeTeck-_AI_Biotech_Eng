// File: src/translations/useTranslation.js
'use client';

import { useState, useEffect } from 'react';
import { getTranslation } from './translations';

export default function useTranslation() {
  const [language, setLanguage] = useState('en');
  
  // Carica la lingua preferita al caricamento del componente
  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);
  
  // Funzione per tradurre una chiave
  const t = (key) => {
    return getTranslation(language, key);
  };
  
  // Funzione per cambiare lingua
  const changeLang = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem('preferredLanguage', newLang);
  };
  
  return {
    language,
    t,
    changeLang
  };
}