import ProductLayout from '@/components/ProductLayout';

export default function SmartLookerPage() {
  const features = [
    'Accessibilità 24/7 per ritiri e consegne',
    'Sistema di sicurezza avanzato con codici univoci',
    'Design personalizzabile e modulare',
    'Notifiche automatiche via SMS o email',
    'Interfaccia intuitiva e facile da usare'
  ];

  const images = [
    { src: '/SmartL_1.webp', alt: 'smart-looker 1' },
    { src: '/SmartL_2.webp', alt: 'smart-looker 2' }
  ];

  const intro = {
    title: 'Smart Looker - Semplifica le consegne',
    paragraphs: [
      'Gli Smart Locker, chiamati anche Parcel Locker, sono armadietti intelligenti e automatizzati per il ritiro e la consegna di pacchi o documenti. Posizionati in spazi pubblici o privati, permettono ai clienti di ritirare o restituire pacchi e documenti in modo sicuro e indipendente, utilizzando un codice univoco inviato via messaggio o email.',
      'Questi armadi intelligenti semplificano le consegne, riducendo i tempi di attesa e offrendo maggiore flessibilità ai clienti, che possono ritirare i pacchi 24/7 senza interazioni dirette con il personale. Anche in questo caso i nostri prodotti sono progettati interamente da noi, curando ogni dettaglio sia di design sia di usabilità.'
    ]
  };

  const quote =
    'Il mondo della logistica ed e-commerce si sta adattando alle nuove esigenze tecnologiche e al cambiamento del comportamento sociale legato agli acquisti di prodotti o fruizione di servizi.';

  const mainSections = [
    {
      title: 'Funzionalità avanzate',
      cards: [
        {
          title: 'Per i gestori',
          items: [
            'Monitoraggio in tempo reale dello stato di ogni locker',
            'Generazione automatica di report e statistiche',
            'Gestione remota dell\'intero sistema',
            'Integrazione con sistemi di tracciamento esistenti',
            'Possibilità di personalizzazione del brand'
          ]
        },
        {
          title: 'Per gli utenti',
          items: [
            'Ritiro pacchi in qualsiasi momento, 24/7',
            'Notifiche istantanee per consegne e ritiri',
            'Processo sicuro con autenticazione a più fattori',
            'Interfaccia utente multilingue e intuitiva',
            'Possibilità di effettuare pagamenti in loco'
          ]
        }
      ]
    },
    {
      title: 'Settori di applicazione',
      paragraphs: [
        'Gli Smart Looker di Yike Teck sono progettati per adattarsi a molteplici contesti, offrendo soluzioni su misura per diversi settori:'
      ],
      cols: 3,
      cards: [
        {
          title: 'E-commerce',
          text: 'Soluzione ideale per la consegna dell\'ultimo miglio, riducendo i costi di consegna e aumentando la soddisfazione del cliente.'
        },
        {
          title: 'Uffici aziendali',
          text: 'Gestione efficiente di posta interna, pacchi e documenti, con accesso controllato e tracciabilità completa.'
        },
        {
          title: 'Condomini residenziali',
          text: 'Soluzione per ricevere pacchi anche quando non si è in casa, aumentando la sicurezza e la comodità.'
        },
        {
          title: 'Università e campus',
          text: 'Gestione semplificata di materiale didattico e consegne per studenti e personale in un ambiente sicuro.'
        },
        {
          title: 'Hotel e strutture ricettive',
          text: 'Possibilità di ritiro e consegna di articoli anche in orari in cui la reception non è operativa.'
        },
        {
          title: 'Centri commerciali',
          text: 'Hub centralizzato per ritiro acquisti da diversi negozi, migliorando l\'esperienza di shopping.'
        }
      ]
    }
  ];

  return (
    <ProductLayout
      title="Smart Looker"
      subtitle="Armadietti intelligenti e automatizzati per la gestione innovativa di pacchi e documenti."
      features={features}
      images={images}
      intro={intro}
      quote={quote}
      mainSections={mainSections}
    />
  );
}
