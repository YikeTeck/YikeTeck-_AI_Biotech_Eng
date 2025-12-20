import ProductLayout from '@/components/ProductLayout';

const features = [
  'Protocolli AI proprietari — progettati e brevettati internamente',
  'Sistemi di conoscenza strutturata che operano in autonomia',
  'Computer vision e audio AI per analisi industriale',
  'Integrazione profonda con firmware, sensori e linee produttive',
  'Dal prototipo alla fabbrica: un solo team, controllo totale'
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
  title: 'Dove il proprietario incontra la produzione.',
  paragraphs: [
    "Yike Teck non assembla AI preconfezionata. Progettiamo architetture proprietarie da zero — protocolli, formati semantici e sistemi di produzione, tutti protetti da brevetti. Questa non è consulenza. Questa è ingegneria.",
    "Il nostro lavoro si estende su più fronti: automazione industriale, biotecnologie, sistemi di conoscenza scientifica, performance cognitiva. Costruiamo modelli che risolvono problemi reali — non demo, non proof of concept. Sistemi che funzionano, che scalano, che reggono sotto carico produttivo.",
    "Operiamo dal Guangdong, il cuore della manifattura globale. La nostra AI vive dentro firmware, sensori, linee produttive e strumenti di laboratorio. Capiamo le supply chain perché ci lavoriamo dentro.",
    "Quello che vedete qui è lo strato visibile. Le piattaforme che mostriamo — ComplexDot, Clevidot, Flomindy — sono punti di ingresso verso un'architettura più profonda. Lo stack completo è protetto da brevetti e disponibile per partner selezionati.",
    "Se avete visto il nostro lavoro di persona, sapete cosa intendiamo. Se non lo avete visto, questo è un invito a scoprirlo."
  ]
};

const mainSections = [
  {
    title: 'Cosa costruiamo davvero',
    paragraphs: [
      'Architetture che combinano AI semantica, vision, audio e hardware — non demo, non proof of concept. Sistemi di produzione.'
    ],
    cards: [
      {
        title: 'Architetture AI',
        items: [
          'Protocolli semantici proprietari e formati di conoscenza',
          'Modelli custom, sistemi ad agenti e motori decisionali',
          'Vision e audio AI per uso tecnico e industriale',
          'Integrazione nativa con hardware e sistemi produttivi'
        ]
      },
      {
        title: 'Delivery',
        items: [
          'Dataset strutturati per il vostro dominio',
          'Modelli documentati, versionati, pronti per la produzione',
          'API, dashboard e integrazioni con i vostri sistemi',
          'Un solo team dal prototipo al deployment'
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
          'Produzione autonoma di conoscenza. Formato semantico brevettato. Intelligenza strutturata da dati complessi.'
      },
      {
        title: 'Clevidot',
        text:
          "Automazione di workflow scientifici e tecnici. Dall'esperimento al report verificabile. Integrato con sistemi di laboratorio."
      },
      {
        title: 'Flomindy',
        text:
          'Piattaforma per la performance cognitiva. Training del focus, protocolli audio, biofeedback. Per gli umani che gestiscono le macchine.'
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
          'AI che vive dentro prodotti e macchine — non solo API',
          'Supply chain e produzione in Cina, sotto controllo diretto'
        ]
      },
      {
        title: 'IP protetta',
        items: [
          'Formati brevettati e protocolli proprietari',
          'Documentazione completa e technology transfer disponibile'
        ]
      },
      {
        title: 'Veloci in produzione',
        items: [
          'Sistemi funzionanti in settimane, non mesi',
          'Roadmap di scaling definita insieme'
        ]
      },
      {
        title: 'Partnership a lungo termine',
        items: [
          'Monitoraggio continuo e aggiornamenti dei modelli',
          'Accesso diretto al team che lo ha costruito'
        ]
      }
    ]
  }
];

export default function AIDesignPage() {
  return (
    <ProductLayout
      title="Sistemi AI & Protocol Design"
      subtitle="Architetture proprietarie. Formati brevettati. Sistemi di produzione — già operativi."
      features={features}
      featuresTitle="Cosa portiamo"
      images={images}
      intro={intro}
      mainSections={mainSections}
      logos={logos}
      headerPaddingClass="pt-32 pb-10"
    />
  );
}
