import ProductLayout from '@/components/ProductLayout';

const features = [
  'AI systems based on proprietary protocols',
  'Curated datasets and training/serving pipelines (MLOps)',
  'Computer vision and audio AI for quality control and technical analysis',
  'Native integration with firmware, sensors and industrial plants',
  'Specialized team for end-to-end projects'
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
  title: 'AI Design - From vision to systems',
  paragraphs: [
    'Yike Teck designs AI architectures as the core infrastructure for products, services and factories. We do more than models: we build protocols, proprietary datasets and MLOps pipelines to deliver real advantages in speed, accuracy and safety.',
    'We work from Guangdong, the heart of global manufacturing. We combine software, electronics, robotics and biotech to bring AI inside sensors, firmware, production lines and lab instruments.',
    'From this experience come our platforms: ComplexDot to orchestrate knowledge and decisions on complex data, Clevidot for technical and scientific flows, Flomindy to train focus and mental energy for people using these systems.',
    'The result is end-to-end delivery: proprietary models, hardware and software ready for production, with fast onboarding and clear data governance.'
  ]
};

const mainSections = [
  {
    title: 'Skills and delivery',
    paragraphs: [
      'Custom architectures that combine semantic AI, vision, audio and hardware integration, with services and documentation ready for enterprise adoption.'
    ],
    cards: [
      {
        title: 'AI architectures',
        items: [
          'Ontologies, knowledge graphs and semantic protocols',
          'Custom LLMs, prompt engineering and agent pipelines',
          'Vision & audio AI for technical analysis and QA',
          'Integration with firmware, sensors and industrial systems'
        ]
      },
      {
        title: 'Delivery',
        items: [
          'Curated datasets and reproducible pipelines',
          'Models trained, documented and versioned',
          'Dashboards, APIs and integrations with your systems',
          'Specialized team for prototypes and production'
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
          'Semantic engine for complex data and operational decisions: knowledge graph, agent orchestration and integration with industrial systems.'
      },
      {
        title: 'Clevidot',
        text:
          'Platform for technical and scientific flows: experiment management, automated QA, reporting and integration with lab instruments.'
      },
      {
        title: 'Flomindy',
        text:
          'Suite for cognitive enhancement: short routines, audio journeys and biofeedback to protect focus and mental energy of teams.'
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
          'From models to firmware: AI living inside products and machines',
          'Supply chain and production in China with direct control'
        ]
      },
      {
        title: 'Governance and security',
        items: [
          'Proprietary datasets and access control protocols',
          'Documentation and handover to your internal team'
        ]
      },
      {
        title: 'Fast onboarding',
        items: [
          'Kick-off workshop on processes and data',
          'MVP in weeks, scaling with a shared roadmap'
        ]
      },
      {
        title: 'Continuous support',
        items: [
          'Model monitoring and drift control',
          'Updates and new features on agreed sprints'
        ]
      }
    ]
  }
];

export default function AIDesignPage() {
  return (
    <ProductLayout
      title="AI Systems & Protocol Design"
      subtitle="We build semantic models, proprietary datasets and cognitive applications for complex data."
      features={features}
      featuresTitle="Key features"
      images={images}
      intro={intro}
      mainSections={mainSections}
      logos={logos}
      headerPaddingClass="pt-32 pb-10"
    />
  );
}
