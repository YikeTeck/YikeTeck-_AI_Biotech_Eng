import ProductLayout from '@/components/ProductLayout';

const features = [
  'Sistemi di AI basati su protocolli proprietari',
  'Dataset curati e pipeline di addestramento/serving (MLOps)',
  'Visione artificiale e AI audio per controllo qualità e analisi tecniche',
  'Integrazione nativa con firmware, sensori e impianti industriali',
  'Team specializzato per progetti end-to-end'
];

const images = [
  { src: '/AI_B.webp', alt: 'AI network' },
  { src: '/AI_B11.webp', alt: 'AI coding' },
  { src: '/AI_B2.jpg.webp', alt: 'AI schematic' }
];

const logos = [
  { src: '/complexdot_logo_beta27.svg', alt: 'ComplexDot', width: 200, height: 72 },
  { src: '/CLEVIDOT_LOGO_BLACK.svg', alt: 'Clevidot', width: 200, height: 72 },
  { src: '/Flomindy.webp', alt: 'Flomindy', width: 200, height: 72 }
];

const intro = {
  title: 'AI Design - Dalla visione ai sistemi',
  paragraphs: [
    'Yike Teck progetta architetture di AI come infrastruttura centrale di prodotti, servizi e fabbriche. Non ci limitiamo ai modelli: costruiamo protocolli, dataset proprietari e pipeline MLOps per dare vantaggio reale in velocità, precisione e sicurezza.',
    'Lavoriamo dal Guangdong, cuore della manifattura mondiale. Uniamo software, elettronica, robotica e biotech per portare l’AI dentro sensori, firmware, linee produttive e strumenti di laboratorio.',
    'Da questa esperienza nascono le nostre piattaforme: ComplexDot per orchestrare conoscenza e decisioni su dati complessi, Clevidot per flussi tecnici e scientifici, Flomindy per allenare attenzione ed energia mentale delle persone che usano questi sistemi.',
    'Il risultato è un delivery end-to-end: modelli proprietari, hardware e software pronti per la produzione, con onboarding rapido e governance dati chiara.'
  ]
};

const mainSections = [
  {
    title: 'Competenze e delivery',
    paragraphs: [
      'Architetture su misura che combinano AI semantica, visione, audio e integrazione hardware, con servizi e documentazione pronti per l’adozione enterprise.'
    ],
    cards: [
      {
        title: 'Architetture AI',
        items: [
          'Ontologie, knowledge graph e protocolli semantici',
          'LLM personalizzati, prompt engineering e agent pipeline',
          'Vision & audio AI per analisi tecniche e QA',
          'Integrazione con firmware, sensori e sistemi industriali'
        ]
      },
      {
        title: 'Delivery',
        items: [
          'Dataset curati e pipeline riproducibili',
          'Modelli addestrati, documentati e versionati',
          'Dashboard, API e integrazioni con i tuoi sistemi',
          'Team specializzato per prototipi e produzione'
        ]
      }
    ]
  },
  {
    title: 'Piattaforme proprietarie',
    cols: 3,
    cards: [
      {
        title: 'ComplexDot',
        text:
          'Motore semantico per dati complessi e decisioni operative: knowledge graph, orchestrazione di agenti e integrazione con sistemi industriali.'
      },
      {
        title: 'Clevidot',
        text:
          'Piattaforma per flussi tecnici e scientifici: gestione di esperimenti, QA automatizzato, reportistica e integrazione con strumenti di laboratorio.'
      },
      {
        title: 'Flomindy',
        text:
          'Suite per il potenziamento cognitivo: routine brevi, percorsi audio e biofeedback per proteggere focus ed energia mentale dei team.'
      }
    ]
  },
  {
    title: 'Perché Yike Teck',
    cols: 2,
    cards: [
      {
        title: 'Integrazione reale',
        items: [
          'Dai modelli al firmware: AI che vive dentro prodotti e macchinari',
          'Supply chain e produzione in Cina con controllo diretto'
        ]
      },
      {
        title: 'Governance e sicurezza',
        items: [
          'Dataset proprietari e protocolli di controllo accessi',
          'Documentazione e trasferimento al team interno'
        ]
      },
      {
        title: 'Onboarding rapido',
        items: [
          'Workshop iniziale su processi e dati',
          'MVP in settimane, scaling con roadmap condivisa'
        ]
      },
      {
        title: 'Supporto continuo',
        items: [
          'Monitoraggio modelli e drift',
          'Aggiornamenti e nuovi feature su sprint concordati'
        ]
      }
    ]
  }
];

export default function AIDesignPage() {
  return (
    <ProductLayout
      title="Sistemi AI & Protocol Design"
      subtitle="Sviluppiamo modelli semantici, dataset proprietari e applicazioni cognitive per dati complessi."
      features={features}
      images={images}
      intro={intro}
      mainSections={mainSections}
      logos={logos}
      headerPaddingClass="pt-32 pb-10"
    />
  );
}
