import ProductLayout from '@/components/ProductLayout';

const features = [
  'Ultra-slim: only 39mm thick',
  'Frequency response: 46Hz - 21kHz',
  'Active and passive versions',
  'Two patented technologies',
  'Wi-Fi and Bluetooth (active version)'
];

const images = [
  { src: '/SuperFlatSpeaker_1.webp', alt: 'Super Flat Speaker', quality: 85 },
  { src: '/SuperFlatSpeaker_2.webp', alt: 'Super Flat Speaker design', quality: 85 }
];

const intro = {
  title: 'Super Flat Speakers',
  paragraphs: [
    'Premium ultra-thin speakers with outstanding acoustic performance for a refined listening experience.',
    'A unique design: 600x390x39 mm, delivering performance that seems impossible for such a small footprint, enriched by Italian design.'
  ]
};

const quote =
  '"A 600x390x39 mm acoustic speaker, only 39 mm thick, with impressive performance: frequency response down to 46 Hz and up to 21 kHz."';

const mainSections = [
  {
    title: 'Evolution and innovation',
    paragraphs: [
      'The first generation launched under the "deeversa" brand in 2019. With the second generation we further reduced size while boosting audio quality, protected by two patents.',
      'Innovative design solutions make these speakers almost defy physics: slim form factor, extended response and premium sound.'
    ]
  },
  {
    title: 'Versions',
    cols: 2,
    cards: [
      {
        title: 'Active',
        items: [
          'Wireless with Wi-Fi and Bluetooth',
          'Power: 100W',
          'Control via dedicated app',
          'Multi-room audio streaming'
        ]
      },
      {
        title: 'Passive',
        items: [
          'Works with dedicated amplifier',
          'Optimized impedance',
          'High-quality connectors',
          'Minimal design'
        ]
      }
    ]
  },
  {
    title: 'Patented technology',
    paragraphs: [
      'Active version delivers high-end sound, satisfying demanding listeners. Passive version is ready for hi-fi and custom installs.'
    ]
  },
  {
    title: 'Italian design',
    paragraphs: [
      'Beyond performance, Super Flat Speakers feature Italian design that fits any environment—home, professional or hospitality—without compromising space or aesthetics.'
    ]
  },
  {
    title: 'Applications',
    cols: 2,
    cards: [
      {
        title: 'Use cases',
        items: [
          'High-quality home theater',
          'Audio installs in small spaces',
          'Hi-fi systems',
          'Design-driven environments',
          'Showrooms, galleries and exhibit spaces',
          'Restaurants and hotels'
        ]
      }
    ]
  }
];

export default function SuperFlatSpeakersPage() {
  return (
    <ProductLayout
      title="Super Flat Speakers"
      subtitle="Ultra-thin speakers with premium sound for a refined listening experience."
      features={features}
      featuresTitle="Key features"
      images={images}
      intro={intro}
      quote={quote}
      mainSections={mainSections}
      logos={[]}
      headerPaddingClass="pt-28 pb-8"
    />
  );
}
