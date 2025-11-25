// Prodotti in evidenza per la homepage
export const featuredProducts = [
  {
    id: 1,
    title: "Robotics",
    description: "Sistemi robotici, prototipi hardware e integrazione meccatronica pronti per la produzione.",
    category: "Robotics",
    imageUrl: "/Robot_H_B.webp",
    slug: "robotics"
  },
    {
      id: 2,
      title: "Super Flat Speakers",
      description: "Diffusori audio ultrasottili con qualità sonora premium per un'esperienza di ascolto perfetta.",
      category: "Audio",
      imageUrl: "/Super Flat Speaker_Home.webp",
      slug: "super-flat-speakers"
    },
    {
      id: 3,
      title: "Smart Looker",
      description: "Tecnologia smart per monitorare e gestire la tua casa con soluzioni innovative e intuitive.",
      category: "IoT",
      imageUrl: "/Smart_looker_home.webp",
      slug: "smart-looker"
    },
    {
      id: 4,
      title: "Lampade Stradali Intelligenti",
      description: "Illuminazione urbana a basso consumo con sensori di movimento e controllo remoto.",
      category: "Smart City",
      imageUrl: "/Smart Street lamps_home.webp",
      slug: "lampade-stradali-intelligenti"
    }
  ];
  
  // Segmenti target per la homepage
  export const targetSegments = [
    {
      id: 1,
      title: "Per Utenti",
      description: "Scopri i nostri prodotti pensati per migliorare la tua vita quotidiana",
      imageUrl: "/users_home.webp",
      linkUrl: "/per-te"
    },
    {
      id: 2,
      title: "Per Aziende",
      description: "Soluzioni tecnologiche avanzate per il tuo business",
      imageUrl: "/Company_home.webp",
      linkUrl: "/per-aziende"
    },
    {
      id: 3,
      title: "Per Eventi",
      description: "Speech tecnici e partecipazioni a fiere ed eventi",
      imageUrl: "/AI_conference_Home.webp",
      linkUrl: "/per-eventi"
    }
  ];
  
  // Prodotti completi
export const allProducts = [
    // Include i prodotti in evidenza e aggiunge altri
    {
    id: 5,
    title: "Smart Trash Bins",
    description: "Innovazioni per la gestione intelligente dei rifiuti urbani con analisi e ottimizzazione.",
    category: "Smart City",
    imageUrl: "/Smart Trash_home.webp",
    slug: "smart-trash-bins"
  },
  {
    id: 6,
    title: "Kiosk Interattivi",
    description: "Terminali autonomi e intuitivi per interazioni digitali avanzate in spazi pubblici e commerciali.",
    category: "Display",
    imageUrl: "/Kiosk_Home_.webp",
    slug: "kiosk-interattivi"
  },
  {
    id: 7,
    title: "Flomindy",
    description: "App di cognitive training che usa il flickering dello schermo per sincronizzare le onde cerebrali, migliorando focus ed energia mentale senza dispositivi aggiuntivi.",
    category: "Software",
    imageUrl: "/flomindy_home_.webp",
    slug: "flomindy"
  },
  ];
  
  // Funzione per ottenere tutti i prodotti
  export function getAllProducts() {
    return [...featuredProducts, ...allProducts.filter(p => !featuredProducts.some(fp => fp.id === p.id))];
  }
