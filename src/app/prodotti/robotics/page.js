import ProductLayout from '@/components/ProductLayout';

const features = [
  'Ingegneria elettronica, meccanica e controllo intelligente',
  'Mani robotiche: destrezza, sensibilità e affidabilità',
  'Articolazioni e attuatori leggeri ma potenti',
  'Controllo di equilibrio, locomozione e terreni irregolari',
  'AI per previsione, correzione e sicurezza in tempo reale'
];

const images = [
  { src: '/Robotic_C1.webp', alt: 'Mano robotica con attuatori e circuiti a vista', quality: 90 },
  { src: '/Robotic_C2.webp', alt: 'Robot umanoide che lavora su rack elettronici', quality: 90 },
  { src: '/Robotic_C3.webp', alt: 'Componenti meccanici e attuatori robotici in dettaglio', quality: 90 }
];

const intro = {
  title: 'Robotica applicata',
  paragraphs: [
    'La robotica è il terreno dove l’ingegneria viene messa davvero alla prova. Yike Teck porta progettazione elettronica, meccanica e controllo intelligente sui punti più difficili: precisione estrema, materiali giusti e soluzioni fuori dagli schemi.',
    'La mano robotica è la sfida simbolo: serve gestire molte articolazioni, micro-movimenti e pressioni su oggetti fragili o pesanti senza perdere sensibilità. Equilibrio delicatissimo tra forza e delicatezza: esattamente ciò che ci piace risolvere.',
    'Articolazioni e attuatori (mani, ginocchia, caviglie, anche) devono essere forti ma leggeri, compatti ma potenti, veloci ma stabili. Dietro ogni giunto: meccanica di precisione, attuatori elettrici o idraulici e sensori fitti per il controllo in tempo reale.'
  ]
};

const quote =
  'Una mano robotica deve afferrare, ruotare, stringere e rilasciare con controllo millimetrico: forza e delicatezza nello stesso gesto.';

const mainSections = [
  {
    title: 'Mani robotiche e destrezza',
    paragraphs: [
      'Riprodurre la destrezza umana significa orchestrare molteplici gradi di libertà, pressioni e feedback sensoriali. Progettiamo mani che lavorano su oggetti fragili e pesanti senza perdere sensibilità.'
    ],
    cols: 3,
    cards: [
      {
        title: 'Multi-articolazioni',
        items: [
          'Controllo fine di dita e pollice per presa e rotazione',
          'Micro-movimenti e grip adattivo',
          'Feedback tattile per non perdere sensibilità'
        ]
      },
      {
        title: 'Forza + delicatezza',
        items: [
          'Pressione calibrata su oggetti fragili o pesanti',
          'Materiali e cinematismi per evitare slittamento',
          'Riduzione usura con soluzioni robuste'
        ]
      },
      {
        title: 'Affidabilità operativa',
        items: [
          'Sensori distribuiti per controllo in tempo reale',
          'Ridondanze meccaniche e software di sicurezza',
          'Test su cicli ripetitivi e stress meccanico'
        ]
      }
    ]
  },
  {
    title: 'Articolazioni e attuatori critici',
    paragraphs: [
      'Ginocchia, caviglie e anche sono nodi di stabilità: devono sostenere peso, assorbire urti e mantenere reattività. Progettiamo attuatori compatti e leggeri con coppia elevata.'
    ],
    cols: 3,
    cards: [
      {
        title: 'Meccanica di precisione',
        items: [
          'Riduttori e leveraggi a basso gioco',
          'Materiali leggeri con alta resistenza',
          'Packaging compatto per densità di potenza'
        ]
      },
      {
        title: 'Attuazione elettrica/idr',
        items: [
          'Motori e attuatori selezionati per coppia/peso',
          'Opzioni idrauliche dove serve forza concentrata',
          'Integrazione termica e gestione dissipazione'
        ]
      },
      {
        title: 'Sensori integrati',
        items: [
          'Forza, coppia e posizione su ogni giunto',
          'Monitoraggio continuo per manutenzione predittiva',
          'Segnali puliti per loop di controllo rapidi'
        ]
      }
    ]
  },
  {
    title: 'Controllo del movimento',
    paragraphs: [
      'Equilibrio, locomozione, adattamento a superfici irregolari e spinte improvvise richiedono modelli di controllo evoluti. Anticipiamo, correggiamo e compensiamo in tempo reale.'
    ],
    cols: 3,
    cards: [
      {
        title: 'Equilibrio dinamico',
        items: [
          'Baricentro controllato in scenari variabili',
          'Stabilità durante cammino e cambi di direzione'
        ]
      },
      {
        title: 'Sensor fusion',
        items: [
          'IMU, forza/coppia e visione per anticipare perturbazioni',
          'Riconoscimento di spinte o ostacoli e reazione rapida'
        ]
      },
      {
        title: 'AI nel loop',
        items: [
          'Previsione e correzione in tempo reale',
          'Apprendimento dai dati di campo per migliorare il controllo'
        ]
      }
    ]
  },
  {
    title: 'Approccio Yike Teck',
    paragraphs: [
      'Unire meccanica, elettronica e AI per soluzioni pratiche, scalabili e accessibili nei costi. Lavoriamo su ciò che altri evitano, trasformando problemi difficili in sistemi affidabili.'
    ],
    cols: 2,
    cards: [
      {
        title: 'Prototipi e industrializzazione',
        items: [
          'Dal concept al prototipo con test iterativi',
          'Documentazione e piani di produzione'
        ]
      },
      {
        title: 'Affidabilità e sicurezza',
        items: [
          'Controlli ridondanti e fallback sicuri',
          'Checklist operative e manutenzione programmata'
        ]
      },
      {
        title: 'Costi e scala',
        items: [
          'Scelte di materiali e componenti per sostenibilità economica',
          'Roadmap per produzione e supporto post-deployment'
        ]
      }
    ]
  },
  {
    title: 'Perché',
    paragraphs: [
      'Che si tratti di mani più sensibili, articolazioni stabili o controllo più intelligente, l’obiettivo è uno: trasformare le sfide della robotica in opportunità reali per nuovi prodotti e modi di interagire con il mondo fisico.'
    ]
  }
];

export default function RoboticsPage() {
  return (
    <ProductLayout
      title="Robotica applicata"
      subtitle="Dalle mani robotiche alle articolazioni critiche: controllo intelligente, sensibilità e affidabilità sul campo."
      features={features}
      images={images}
      intro={intro}
      quote={quote}
      mainSections={mainSections}
      logos={[]}
      headerPaddingClass="pt-28 pb-8"
    />
  );
}
