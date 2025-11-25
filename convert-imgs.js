#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Lista dei file da elaborare
const files = [
  '/Users/andrewmario/yiketeck-site/src/app/en/products/super-flat-speakers/page.js',
  '/Users/andrewmario/yiketeck-site/src/app/zh/products/super-flat-speakers/page.js',
  '/Users/andrewmario/yiketeck-site/src/app/en/products/smart-street-lamps/page.js',
  '/Users/andrewmario/yiketeck-site/src/app/zh/products/smart-street-lamps/page.js',
  '/Users/andrewmario/yiketeck-site/src/app/en/products/smart-trash-bins/page.js',
  '/Users/andrewmario/yiketeck-site/src/app/zh/products/smart-trash-bins/page.js',
  '/Users/andrewmario/yiketeck-site/src/app/en/products/interactive-kiosks/page.js',
  '/Users/andrewmario/yiketeck-site/src/app/zh/products/interactive-kiosks/page.js',
  '/Users/andrewmario/yiketeck-site/src/app/en/for-events/page.js',
  '/Users/andrewmario/yiketeck-site/src/app/zh/for-events/page.js',
  '/Users/andrewmario/yiketeck-site/src/app/en/about-us/page.js',
  '/Users/andrewmario/yiketeck-site/src/app/zh/about-us/page.js',
  '/Users/andrewmario/yiketeck-site/src/app/per-aziende/progetti/page.js',
  '/Users/andrewmario/yiketeck-site/src/app/per-aziende/collaborazioni/page.js',
  '/Users/andrewmario/yiketeck-site/src/app/per-aziende/sourcing/page.js',
  '/Users/andrewmario/yiketeck-site/src/app/per-te/page.js',
  '/Users/andrewmario/yiketeck-site/src/app/per-eventi/page.js',
  '/Users/andrewmario/yiketeck-site/src/app/chi-siamo/page.js'
];

// Regex per trovare i tag <img>
const imgTagRegex = /<img\s+([^>]*)src="([^"]*)"([^>]*)alt="([^"]*)"([^>]*)className="([^"]*)"([^>]*)\/?>/g;

// Funzione per controllare se l'import di Image esiste già nel file
function hasImageImport(content) {
  return content.includes("import Image from 'next/image'") || content.includes('import Image from "next/image"');
}

// Funzione per aggiungere l'import di Image se manca
function addImageImport(content) {
  if (!hasImageImport(content)) {
    // Cerca il punto dopo gli import esistenti
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const endOfLastImport = content.indexOf(';', lastImportIndex);
      if (endOfLastImport !== -1) {
        return content.slice(0, endOfLastImport + 1) + 
               "\nimport Image from 'next/image';\n" + 
               content.slice(endOfLastImport + 1);
      }
    }
    // Se non troviamo un punto e virgola, aggiungiamo l'import all'inizio
    return "import Image from 'next/image';\n" + content;
  }
  return content;
}

// Funzione per convertire un tag <img> in un componente <Image>
function convertImgToImage(match, pre, src, mid, alt, end, className, last) {
  return `<Image \n  src="${src}" \n  alt="${alt}" \n  width={800} \n  height={600}\n  quality={90} \n  className="${className}"\n/>`;
}

// Elaborazione principale
files.forEach(filePath => {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File non trovato: ${filePath}`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Controlliamo se ci sono tag <img> nel file
    if (!imgTagRegex.test(content)) {
      console.log(`Nessun tag <img> trovato in: ${filePath}`);
      // Reset della regex per il prossimo file
      imgTagRegex.lastIndex = 0;
      return;
    }
    
    // Reset della regex
    imgTagRegex.lastIndex = 0;
    
    // Aggiungiamo l'import di Image se necessario
    content = addImageImport(content);
    
    // Convertiamo i tag <img> in componenti <Image>
    const newContent = content.replace(imgTagRegex, convertImgToImage);
    
    // Scriviamo il nuovo contenuto nel file
    fs.writeFileSync(filePath, newContent, 'utf8');
    
    console.log(`File elaborato con successo: ${filePath}`);
  } catch (error) {
    console.error(`Errore durante l'elaborazione di ${filePath}:`, error);
  }
});

console.log('Conversione completata!');
