import ProductLayout from '@/components/ProductLayout';

const features = [
  '自研AI协议 — 内部设计并申请专利',
  '自主运行的结构化知识系统',
  '用于工业分析的计算机视觉和音频AI',
  '与固件、传感器和生产线的深度集成',
  '从原型到工厂：一个团队，全面把控'
];

const images = [
  { src: '/AI_B.webp', alt: 'AI 网络' },
  { src: '/AI_B11.webp', alt: 'AI 编码' },
  { src: '/AI_B2.jpg.webp', alt: 'AI 原理图' }
];

const logos = [
  { src: '/complexdot_logo_beta27.svg', alt: 'ComplexDot', width: 200, height: 72 },
  { src: '/CLEVIDOT_LOGO_BLACK.svg', alt: 'Clevidot', width: 200, height: 72 },
  { src: '/Flomindy.webp', alt: 'Flomindy', width: 200, height: 72 }
];

const intro = {
  title: '自研技术与生产的交汇点',
  paragraphs: [
    "Yike Teck不组装现成的AI。我们从零开始设计自研架构——协议、语义格式和生产系统，全部受专利保护。这不是咨询服务，这是工程。",
    "我们的工作涵盖多个领域：工业自动化、生物技术、科学知识系统、认知性能。我们构建解决真实问题的模型——不是演示，不是概念验证。是能运行、能扩展、能承受生产负载的系统。",
    "我们在全球制造中心广东运营。我们的AI运行在固件、传感器、生产线和实验室设备内部。我们理解供应链，因为我们身处其中。",
    "您在这里看到的是可见层。我们展示的平台——ComplexDot、Clevidot、Flomindy——是通往更深层架构的入口。完整技术栈受专利保护，仅向精选合作伙伴开放。",
    "如果您亲眼见过我们的工作，您会明白我们的意思。如果还没有，这是一份邀请。"
  ]
};

const mainSections = [
  {
    title: '我们真正构建的',
    paragraphs: [
      '结合语义AI、视觉、音频和硬件的架构——不是演示，不是概念验证。是生产系统。'
    ],
    cards: [
      {
        title: 'AI架构',
        items: [
          '自研语义协议和知识格式',
          '定制模型、智能体系统和决策引擎',
          '用于技术和工业用途的视觉和音频AI',
          '与硬件和生产系统的原生集成'
        ]
      },
      {
        title: '交付',
        items: [
          '为您的领域结构化的数据集',
          '文档化、版本化、生产就绪的模型',
          'API、仪表盘和系统集成',
          '从原型到部署的统一团队'
        ]
      }
    ]
  },
  {
    title: '自研平台',
    cols: 3,
    cards: [
      {
        title: 'ComplexDot',
        text:
          '自主知识生产。专利语义格式。从复杂数据中提取结构化智能。'
      },
      {
        title: 'Clevidot',
        text:
          '科学和技术工作流自动化。从实验到可审计报告。与实验室系统集成。'
      },
      {
        title: 'Flomindy',
        text:
          '认知性能平台。专注力训练、音频协议、生物反馈。为操控机器的人而设计。'
      }
    ]
  },
  {
    title: '为什么选择 Yike Teck',
    cols: 2,
    cards: [
      {
        title: '真实集成',
        items: [
          'AI运行在产品和机器内部——不仅仅是API',
          '在中国的供应链和生产，直接把控'
        ]
      },
      {
        title: '受保护的知识产权',
        items: [
          '专利格式和自研协议',
          '完整文档和技术转让支持'
        ]
      },
      {
        title: '快速投产',
        items: [
          '数周内交付可运行系统，而非数月',
          '共同制定扩展路线图'
        ]
      },
      {
        title: '长期合作',
        items: [
          '持续监控和模型更新',
          '直接对接构建团队'
        ]
      }
    ]
  }
];

export default function AIDesignPage() {
  return (
    <ProductLayout
      title="AI系统与协议设计"
      subtitle="自研架构。专利格式。生产系统——已在运行。"
      features={features}
      featuresTitle="我们带来的"
      images={images}
      intro={intro}
      mainSections={mainSections}
      logos={logos}
      headerPaddingClass="pt-32 pb-10"
    />
  );
}
