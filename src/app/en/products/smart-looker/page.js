import ProductLayout from '@/components/ProductLayout';

export default function SmartLookerPage() {
  const features = [
    '24/7 access for drop-off and pick-up',
    'Advanced security with unique codes',
    'Customizable, modular design',
    'Automatic SMS/email notifications',
    'Intuitive, easy-to-use interface'
  ];

  const images = [
    { src: '/SmartL_1.webp', alt: 'Smart Looker 1' },
    { src: '/SmartL_2.webp', alt: 'Smart Looker 2' }
  ];

  const intro = {
    title: 'Smart Looker – Simplify deliveries',
    paragraphs: [
      'Smart Lockers, also called Parcel Lockers, are intelligent automated cabinets for picking up and dropping off parcels or documents. Placed in public or private spaces, they let customers retrieve or return items securely and independently using a unique code sent via message or email.',
      'These smart cabinets streamline deliveries, cut waiting times, and give customers more flexibility: they can collect parcels 24/7 without direct interaction with staff. Our products are fully designed in-house, with meticulous attention to both design and usability.'
    ]
  };

  const quote =
    'Logistics and e-commerce are adapting to new technological needs and to changing behaviors around purchasing products and consuming services.';

  const mainSections = [
    {
      title: 'Advanced features',
      cards: [
        {
          title: 'For operators',
          items: [
            'Real-time monitoring of each locker',
            'Automatic generation of reports and stats',
            'Remote management of the entire system',
            'Integration with existing tracking systems',
            'Brand customization options'
          ]
        },
        {
          title: 'For users',
          items: [
            'Pick up parcels anytime, 24/7',
            'Instant notifications for deliveries and pickups',
            'Secure flow with multi-factor authentication',
            'Multilingual, intuitive UI',
            'On-site payment options'
          ]
        }
      ]
    },
    {
      title: 'Use cases',
      paragraphs: ['Yike Teck Smart Lookers adapt to many contexts, offering tailored solutions across industries:'],
      cols: 3,
      cards: [
        {
          title: 'E-commerce',
          text: 'Ideal for last-mile delivery, cutting delivery costs and boosting customer satisfaction.'
        },
        {
          title: 'Corporate offices',
          text: 'Efficient handling of internal mail, parcels, and documents with controlled access and full traceability.'
        },
        {
          title: 'Residential buildings',
          text: 'Receive parcels even when away, increasing security and convenience.'
        },
        {
          title: 'Universities and campuses',
          text: 'Streamlined delivery of educational materials and parcels in a secure environment for students and staff.'
        },
        {
          title: 'Hotels and hospitality',
          text: 'Pick up or drop off items even when the front desk is closed.'
        },
        {
          title: 'Shopping malls',
          text: 'Central hub to collect purchases from multiple stores, enhancing the shopping experience.'
        }
      ]
    }
  ];

  return (
    <ProductLayout
      title="Smart Looker"
      subtitle="Smart, automated lockers for innovative parcel and document management."
      features={features}
      images={images}
      intro={intro}
      quote={quote}
      mainSections={mainSections}
      featuresTitle="Key features"
    />
  );
}
