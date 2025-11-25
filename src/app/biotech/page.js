import ProductLayout from '@/components/ProductLayout';

const features = [
  'Clevidot: ambiente AI per decisioni biotech',
  'Pensiero sospeso: più ipotesi aperte senza perdere controllo',
  'Paper, protocolli ed esperimenti in un unico flusso operativo',
  'Bridge tra AI, elettronica embedded e bioingegneria',
  'Delivery end-to-end: dal prototipo al campo con roadmap chiara'
];

const images = [
  { src: '/Biotech_AA.webp', alt: 'Analisi spettrale in laboratorio', quality: 90 },
  { src: '/Bioteck_AB.webp', alt: 'Tecnico al microscopio con piastra di coltura', quality: 85 },
  { src: '/Biotech_ABC.webp', alt: 'Campioni e reagenti per esperimenti biotech', quality: 85 }
];

const intro = {
  title: 'Biotech con Clevidot',
  paragraphs: [
    'Yike Teck crede che la prossima rivoluzione biotecnologica nasca nello spazio tra dati, intuizione e intelligenza artificiale. È lì che lavoriamo: dove la tecnologia diventa compagno di ricerca e non solo strumento.',
    'Nel nostro ecosistema di piattaforme, Clevidot è il cuore dedicato alle biotecnologie. È pensato per chi decide in laboratorio partendo da risultati sperimentali, paper, protocolli, fallimenti e intuizioni improvvise.',
    'Clevidot non si limita a rispondere: organizza il pensiero, esplora alternative e costruisce piani di lavoro che tengono insieme rigore scientifico e creatività.'
  ]
};

const quote =
  'Pensiero sospeso: invece di collassare sulla prima soluzione probabile, Clevidot mantiene aperte più strade e protegge l’intuizione del ricercatore.';

const mainSections = [
  {
    title: 'Clevidot per chi lavora in laboratorio',
    paragraphs: [
      'Un ambiente AI progettato per decisioni su dati reali: paper, protocolli, risultati e note di banco diventano una memoria viva che ti suggerisce alternative, combinazioni e prossimi passi.'
    ],
    cols: 3,
    cards: [
      {
        title: 'Decisioni su dati complessi',
        items: [
          'Paper, protocolli e fallimenti raccolti e collegati',
          'Comparazione tra esperimenti e condizioni',
          'Piani di lavoro che rispettano vincoli e sicurezza'
        ]
      },
      {
        title: 'Pensiero sospeso',
        items: [
          'Mantiene aperte ipotesi e scenari paralleli',
          'Evita il “collasso” sulla prima risposta',
          'Documenta il perché delle scelte'
        ]
      },
      {
        title: 'Compagno di ricerca',
        items: [
          'Suggerisce alternative e rischi nascosti',
          'Genera checklist e protocolli adattivi',
          'Si integra con strumenti e routine di laboratorio'
        ]
      }
    ]
  },
  {
    title: 'Approccio Yike Teck',
    paragraphs: [
      'L’esperienza in ingegneria elettronica, sistemi embedded e AI ci permette di avvicinare la bioingegneria con una prospettiva concreta: hardware, software critico e dati operativi che parlano la stessa lingua.'
    ],
    cols: 3,
    cards: [
      {
        title: 'Integrazione reale',
        items: [
          'AI dentro firmware, sensori e strumenti di laboratorio',
          'Pattern biologici monitorati con pipeline dati dedicate'
        ]
      },
      {
        title: 'Pipeline e QA',
        items: [
          'Dataset curati e versionati',
          'Controllo accessi e governance dei dati',
          'Validazione e report tecnici pronti per il team'
        ]
      },
      {
        title: 'Delivery Cina/Europa',
        items: [
          'Supply chain e prototipazione locale in Cina',
          'Team distribuiti per passare da prototipo a produzione'
        ]
      }
    ]
  },
  {
    title: 'Delivery e partnership',
    paragraphs: [
      'Lavoriamo con chi vede il biotech come asse strategico: dal design di nuovi protocolli sperimentali alla definizione di pipeline di analisi guidate dall’AI, senza promesse magiche ma con responsabilità sui dati e sui risultati.'
    ],
    cols: 2,
    cards: [
      {
        title: 'Co-design con i team',
        items: [
          'Workshop iniziali su processi e dati',
          'MVP in settimane con roadmap condivisa'
        ]
      },
      {
        title: 'Supporto continuo',
        items: [
          'Monitoraggio modelli e drift',
          'Aggiornamenti e nuovi feature su sprint concordati'
        ]
      },
      {
        title: 'Documentazione e training',
        items: [
          'Trasferimento al team interno con playbook chiari',
          'Checklist operative e protocolli aggiornabili'
        ]
      }
    ]
  },
  {
    title: 'Cosa possiamo condividere ora',
    paragraphs: [
      'Alcuni progetti rimangono riservati, in fase di validazione e tutela. Ciò che possiamo dire è semplice: se cerchi un partner che unisca AI, ingegneria e visione biotecnologica, Yike Teck e Clevidot sono il luogo giusto per iniziare.'
    ]
  }
];

const logos = [
  { src: '/complexdot_logo_beta27.svg', alt: 'ComplexDot', width: 200, height: 72 },
  { src: '/CLEVIDOT_LOGO_BLACK.svg', alt: 'Clevidot', width: 200, height: 72 }
];

export default function BiotechPage() {
  return (
    <ProductLayout
      title="Biotecnologia applicata"
      subtitle="AI che protegge l’intuizione scientifica e organizza decisioni su dati di laboratorio."
      features={features}
      images={images}
      intro={intro}
      quote={quote}
      mainSections={mainSections}
      logos={logos}
      headerPaddingClass="pt-28 pb-8"
    />
  );
}
