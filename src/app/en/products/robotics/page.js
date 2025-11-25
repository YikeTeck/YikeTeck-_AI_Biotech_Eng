import ProductLayout from '@/components/ProductLayout';

const features = [
  'Electronic, mechanical and intelligent control engineering',
  'Robotic hands: dexterity, sensitivity and reliability',
  'Joints and actuators that are light but powerful',
  'Control of balance, locomotion and uneven terrain',
  'AI for prediction, correction and real-time safety'
];

const images = [
  { src: '/Robotic_C1.webp', alt: 'Robotic hand with actuators and circuits exposed', quality: 90 },
  { src: '/Robotic_C2.webp', alt: 'Humanoid robot working on electronic racks', quality: 90 },
  { src: '/Robotic_C3.webp', alt: 'Mechanical components and actuators in detail', quality: 90 }
];

const intro = {
  title: 'Applied robotics',
  paragraphs: [
    'Robotics is where engineering is truly tested. Yike Teck brings electronics, mechanics and intelligent control to the hardest parts: extreme precision, the right materials and unconventional solutions.',
    'The robotic hand is the emblematic challenge: many joints, micro-movements and pressure on fragile or heavy objects without losing sensitivity. A delicate balance between strength and finesse—exactly what we like to solve.',
    'Joints and actuators (hands, knees, ankles, hips) must be strong yet light, compact yet powerful, fast yet stable. Behind each joint: precision mechanics, electric or hydraulic actuators and dense sensing for real-time control.'
  ]
};

const quote =
  'A robotic hand must grasp, rotate, squeeze and release with millimetric control: strength and delicacy in the same gesture.';

const mainSections = [
  {
    title: 'Robotic hands and dexterity',
    paragraphs: [
      'Reproducing human dexterity means orchestrating multiple degrees of freedom, pressure and sensory feedback. We design hands that handle fragile and heavy objects without losing sensitivity.'
    ],
    cols: 3,
    cards: [
      {
        title: 'Multi-joint control',
        items: [
          'Fine control of fingers and thumb for grasp and rotation',
          'Micro-movements and adaptive grip',
          'Tactile feedback to preserve sensitivity'
        ]
      },
      {
        title: 'Strength + delicacy',
        items: [
          'Calibrated pressure on fragile or heavy objects',
          'Materials and kinematics to avoid slipping',
          'Reduced wear with robust solutions'
        ]
      },
      {
        title: 'Operational reliability',
        items: [
          'Distributed sensors for real-time control',
          'Mechanical redundancies and safety software',
          'Stress and cycle testing for endurance'
        ]
      }
    ]
  },
  {
    title: 'Critical joints and actuators',
    paragraphs: [
      'Knees, ankles and hips are stability nodes: they must carry weight, absorb shocks and stay responsive. We design compact, light actuators with high torque.'
    ],
    cols: 3,
    cards: [
      {
        title: 'Precision mechanics',
        items: [
          'Low-backlash reducers and linkages',
          'Lightweight materials with high strength',
          'Compact packaging for power density'
        ]
      },
      {
        title: 'Electric/hydraulic actuation',
        items: [
          'Motors/actuators selected for torque-to-weight',
          'Hydraulics where concentrated force is needed',
          'Thermal integration and dissipation management'
        ]
      },
      {
        title: 'Integrated sensing',
        items: [
          'Force, torque and position on every joint',
          'Continuous monitoring for predictive maintenance',
          'Clean signals for fast control loops'
        ]
      }
    ]
  },
  {
    title: 'Motion control',
    paragraphs: [
      'Balance, locomotion, adaptation to uneven surfaces and sudden pushes require advanced control models. We anticipate, correct and compensate in real time.'
    ],
    cols: 3,
    cards: [
      {
        title: 'Dynamic balance',
        items: [
          'Center of mass control in varying scenarios',
          'Stability during walking and direction changes'
        ]
      },
      {
        title: 'Sensor fusion',
        items: [
          'IMU, force/torque and vision to anticipate disturbances',
          'Detect pushes or obstacles and react quickly'
        ]
      },
      {
        title: 'AI in the loop',
        items: [
          'Real-time prediction and correction',
          'Learning from field data to improve control'
        ]
      }
    ]
  },
  {
    title: 'Yike Teck approach',
    paragraphs: [
      'Unite mechanics, electronics and AI for practical, scalable and cost-conscious solutions. We tackle what others avoid, turning hard problems into reliable systems.'
    ],
    cols: 2,
    cards: [
      {
        title: 'Prototypes and industrialization',
        items: [
          'From concept to prototype with iterative tests',
          'Documentation and production plans'
        ]
      },
      {
        title: 'Reliability and safety',
        items: [
          'Redundant controls and safe fallbacks',
          'Operational checklists and scheduled maintenance'
        ]
      },
      {
        title: 'Cost and scale',
        items: [
          'Material/component choices for economic sustainability',
          'Roadmap to production and post-deployment support'
        ]
      }
    ]
  },
  {
    title: 'Why',
    paragraphs: [
      'Whether more sensitive hands, stable joints or smarter control, the goal is one: turn robotics challenges into real opportunities for new products and ways to interact with the physical world.'
    ]
  }
];

export default function RoboticsPage() {
  return (
    <ProductLayout
      title="Applied Robotics"
      subtitle="From robotic hands to critical joints: intelligent control, sensitivity and field reliability."
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
