import ProductLayout from '@/components/ProductLayout';

const features = [
  '超薄：厚度仅 39 毫米',
  '频响范围：46Hz - 21kHz',
  '有源和无源版本可选',
  '两项专利保护的技术',
  'Wi-Fi 和蓝牙连接（有源版）'
];

const images = [
  { src: '/SuperFlatSpeaker_1.webp', alt: '超薄扬声器', quality: 85 },
  { src: '/SuperFlatSpeaker_2.webp', alt: '超薄扬声器设计', quality: 85 }
];

const intro = {
  title: '超薄扬声器',
  paragraphs: [
    '具有高级音质的超薄扬声器，带来精致的聆听体验。',
    '独特设计：600x390x39 毫米，在极小尺寸下提供出色表现，并有意大利设计加持。'
  ]
};

const quote =
  '“一款尺寸为 600x390x39 毫米的声学扬声器，厚度仅 39 毫米，却提供出色性能：频率响应低至 46 Hz，高达 21 kHz。”';

const mainSections = [
  {
    title: '演变与创新',
    paragraphs: [
      '第一代于 2019 年以 “deeversa” 品牌推出。第二代进一步缩小尺寸并提升音质，拥有两项专利保护。',
      '创新的设计方案让它几乎挑战物理定律：纤薄外形、拓展的频响和高品质声音。'
    ]
  },
  {
    title: '版本',
    cols: 2,
    cards: [
      {
        title: '有源版',
        items: [
          '无线：Wi-Fi 与蓝牙',
          '功率：100W',
          '专用应用控制',
          '多房间音频流'
        ]
      },
      {
        title: '无源版',
        items: [
          '配合专用功放',
          '优化阻抗',
          '高品质接头',
          '简约设计'
        ]
      }
    ]
  },
  {
    title: '专利技术',
    paragraphs: [
      '有源版提供高端音质，满足挑剔的听众；无源版适用于 Hi-Fi 与定制安装。'
    ]
  },
  {
    title: '意大利设计',
    paragraphs: [
      '除了卓越性能，Super Flat Speakers 具备意大利设计，可融入家庭、专业或酒店空间，不占空间且兼顾美感。'
    ]
  },
  {
    title: '应用场景',
    cols: 2,
    cards: [
      {
        title: '适用场景',
        items: [
          '高品质家庭影院',
          '小空间的音频安装',
          'Hi-Fi 系统',
          '注重美学的设计空间',
          '展厅、画廊与展览空间',
          '餐厅和酒店'
        ]
      }
    ]
  }
];

export default function SuperFlatSpeakersPage() {
  return (
    <ProductLayout
      title="超薄扬声器"
      subtitle="超薄设计与卓越音质，带来精致的聆听体验。"
      features={features}
      featuresTitle="主要特性"
      images={images}
      intro={intro}
      quote={quote}
      mainSections={mainSections}
      logos={[]}
      headerPaddingClass="pt-28 pb-8"
    />
  );
}
