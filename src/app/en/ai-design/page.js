import ProductLayout from '@/components/ProductLayout';

const features = [
  'Proprietary AI protocols — designed and patented in-house',
  'Structured knowledge systems that run autonomously',
  'Computer vision and audio AI for industrial analysis',
  'Deep integration with firmware, sensors and production lines',
  'From prototype to factory: one team, full control'
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
  title: 'Where proprietary meets production.',
  paragraphs: [
    "Yike Teck doesn't assemble off-the-shelf AI. We design proprietary architectures from scratch — protocols, semantic formats and production systems, all protected by patents. This is not consulting. This is engineering.",
    "Our work spans multiple fronts: industrial automation, biotechnology, scientific knowledge systems, cognitive performance. We build models that solve real problems — not demos, not proofs of concept. Systems that run, that scale, that hold up under production load.",
    "We operate from Guangdong, the heart of global manufacturing. Our AI lives inside firmware, sensors, production lines and laboratory instruments. We understand supply chains because we work inside them.",
    "What you see here is the visible layer. The platforms we show — ComplexDot, Clevidot, Flomindy — are entry points into a deeper architecture. The full stack is protected by patents and available to selected partners.",
    "If you've seen our work in person, you know what we mean. If you haven't, this is an invitation to find out."
  ]
};

const mainSections = [
  {
    title: 'What we actually build',
    paragraphs: [
      'Architectures that combine semantic AI, vision, audio and hardware — not demos, not proofs of concept. Production systems.'
    ],
    cards: [
      {
        title: 'AI architectures',
        items: [
          'Proprietary semantic protocols and knowledge formats',
          'Custom models, agent systems and decision engines',
          'Vision and audio AI for technical and industrial use',
          'Native integration with hardware and production systems'
        ]
      },
      {
        title: 'Delivery',
        items: [
          'Datasets structured for your domain',
          'Models documented, versioned, production-ready',
          'APIs, dashboards and system integrations',
          'One team from prototype to deployment'
        ]
      }
    ]
  },
  {
    title: 'Proprietary platforms',
    cols: 3,
    cards: [
      {
        title: 'ComplexDot',
        text:
          'Autonomous knowledge production. Patented semantic format. Structured intelligence from complex data.'
      },
      {
        title: 'Clevidot',
        text:
          'Scientific and technical workflow automation. From experiment to auditable report. Integrated with laboratory systems.'
      },
      {
        title: 'Flomindy',
        text:
          'Cognitive performance platform. Focus training, audio protocols, biofeedback. For the humans running the machines.'
      }
    ]
  },
  {
    title: 'Why Yike Teck',
    cols: 2,
    cards: [
      {
        title: 'Real integration',
        items: [
          'AI that lives inside products and machines — not just APIs',
          'Supply chain and production in China, under direct control'
        ]
      },
      {
        title: 'Protected IP',
        items: [
          'Patented formats and proprietary protocols',
          'Full documentation and technology transfer available'
        ]
      },
      {
        title: 'Fast to production',
        items: [
          'Working systems in weeks, not months',
          'Scaling roadmap defined together'
        ]
      },
      {
        title: 'Long-term partnership',
        items: [
          'Continuous monitoring and model updates',
          'Direct access to the team that built it'
        ]
      }
    ]
  }
];

export default function AIDesignPage() {
  return (
    <ProductLayout
      title="AI Systems & Protocol Design"
      subtitle="Proprietary architectures. Patented formats. Production systems — already running."
      features={features}
      featuresTitle="What we bring"
      images={images}
      intro={intro}
      mainSections={mainSections}
      logos={logos}
      headerPaddingClass="pt-32 pb-10"
    />
  );
}
