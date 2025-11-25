import ProductLayout from '@/components/ProductLayout';

const features = [
  'Clevidot: AI workspace for biotech decisions',
  'Suspended thinking: keep multiple hypotheses open under control',
  'Papers, protocols and experiments in a single operating flow',
  'Bridge between AI, embedded electronics and bioengineering',
  'End-to-end delivery: from prototype to field with a clear roadmap'
];

const images = [
  { src: '/Biotech_AA.webp', alt: 'Spectral analysis in a lab', quality: 90 },
  { src: '/Bioteck_AB.webp', alt: 'Microscope work with culture plate', quality: 85 },
  { src: '/Biotech_ABC.webp', alt: 'Reagents and samples for biotech experiments', quality: 85 }
];

const intro = {
  title: 'Biotech with Clevidot',
  paragraphs: [
    'Yike Teck believes the next biotech revolution lies between data, intuition and AI. That’s where we work: when technology stops being a tool and becomes a research companion.',
    'In our platform ecosystem, Clevidot is the heart for biotechnology. It’s built for people making lab decisions from experimental results, papers, protocols, failures and sudden insights.',
    'Clevidot doesn’t just answer: it organizes thinking, explores alternatives and builds work plans that balance scientific rigor and creativity.'
  ]
};

const quote =
  'Suspended thinking: instead of collapsing on the first “likely” answer, Clevidot keeps multiple paths open and protects the researcher’s intuition.';

const mainSections = [
  {
    title: 'Clevidot for lab teams',
    paragraphs: [
      'An AI environment designed for decisions on real data: papers, protocols, results and lab notes become a living memory that suggests alternatives, combinations and next steps.'
    ],
    cols: 3,
    cards: [
      {
        title: 'Decisions on complex data',
        items: [
          'Papers, protocols and failures captured and connected',
          'Compare experiments and conditions',
          'Work plans respecting constraints and safety'
        ]
      },
      {
        title: 'Suspended thinking',
        items: [
          'Keeps hypotheses and scenarios open in parallel',
          'Avoids collapse on the first response',
          'Documents the rationale behind choices'
        ]
      },
      {
        title: 'Research companion',
        items: [
          'Suggests alternatives and hidden risks',
          'Generates checklists and adaptive protocols',
          'Integrates with lab tools and routines'
        ]
      }
    ]
  },
  {
    title: 'Yike Teck approach',
    paragraphs: [
      'Experience in electronics, embedded systems and AI gives us a concrete angle on bioengineering: hardware, critical software and operational data speaking the same language.'
    ],
    cols: 3,
    cards: [
      {
        title: 'Real integration',
        items: [
          'AI inside firmware, sensors and lab instruments',
          'Biological patterns monitored with dedicated data pipelines'
        ]
      },
      {
        title: 'Pipelines and QA',
        items: [
          'Curated and versioned datasets',
          'Access control and data governance',
          'Validation and technical reports ready for teams'
        ]
      },
      {
        title: 'Delivery',
        items: [
          'Prototyping and supply chain directly managed',
          'Team organized for moving from prototype to production'
        ]
      }
    ]
  },
  {
    title: 'Delivery and partnerships',
    paragraphs: [
      'We work with those who see biotech as strategic: from designing new experimental protocols to defining AI-guided analysis pipelines, with clear responsibility on data and results.'
    ],
    cols: 2,
    cards: [
      {
        title: 'Co-design with teams',
        items: [
          'Kick-off workshops on processes and data',
          'MVP in weeks with a shared roadmap'
        ]
      },
      {
        title: 'Continuous support',
        items: [
          'Model monitoring and drift',
          'Updates and new features on planned sprints'
        ]
      },
      {
        title: 'Documentation and training',
        items: [
          'Handover with clear playbooks',
          'Operational checklists and updatable protocols'
        ]
      }
    ]
  },
  {
    title: 'What we can share now',
    paragraphs: [
      'Some projects stay reserved, under validation and protection. What we can say: if you need a partner combining AI, engineering and biotech vision, Yike Teck and Clevidot are the right place to start.'
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
      title="Applied Biotechnology"
      subtitle="AI that protects scientific intuition and organizes lab decisions."
      features={features}
      featuresTitle="Key features"
      images={images}
      intro={intro}
      quote={quote}
      mainSections={mainSections}
      logos={logos}
      headerPaddingClass="pt-28 pb-8"
    />
  );
}
