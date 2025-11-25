import ProductLayout from '@/components/ProductLayout';

const features = [
  '基于自研协议的 AI 系统',
  '精选数据集与训练/上线（MLOps）流水线',
  '视觉与音频 AI 用于质检和技术分析',
  '与固件、传感器和工业设备的原生集成',
  '专注端到端项目的团队'
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
  title: 'AI 设计：从愿景到系统',
  paragraphs: [
    'Yike Teck 将 AI 架构设计为产品、服务和工厂的核心基础设施。我们不仅仅是模型：还构建协议、专有数据集与 MLOps 流水线，为速度、精度和安全带来真实优势。',
    '我们在全球制造中心广东工作，将软件、电子、机器人和生物科技结合，把 AI 带入传感器、固件、产线和实验室设备。',
    '由此诞生了我们的平台：ComplexDot 用于复杂数据和决策编排，Clevidot 面向技术与科研流程，Flomindy 帮助使用这些系统的人保持专注和精神能量。',
    '最终交付是端到端的：自研模型、硬件和软件可直接生产，快速上手并具备清晰的数据治理。'
  ]
};

const mainSections = [
  {
    title: '能力与交付',
    paragraphs: [
      '定制架构结合语义 AI、视觉、音频与硬件集成，并配备面向企业的服务和文档。'
    ],
    cards: [
      {
        title: 'AI 架构',
        items: [
          '本体、知识图谱与语义协议',
          '定制 LLM、提示工程与智能体流水线',
          '视觉/音频 AI 用于技术分析和质检',
          '与固件、传感器和工业系统的集成'
        ]
      },
      {
        title: '交付',
        items: [
          '精选数据集与可复现流水线',
          '模型训练、文档化与版本管理',
          '仪表盘、API 与现有系统集成',
          '专注原型与量产的团队'
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
          '用于复杂数据与运营决策的语义引擎：知识图谱、智能体编排及与工业系统的集成。'
      },
      {
        title: 'Clevidot',
        text:
          '面向技术和科研流程的平台：实验管理、自动质检、报告与实验室设备集成。'
      },
      {
        title: 'Flomindy',
        text:
          '认知提升套件：短流程、音频旅程和生物反馈，保护团队的专注和精神能量。'
      }
    ]
  },
  {
    title: '选择 Yike Teck 的原因',
    cols: 2,
    cards: [
      {
        title: '真实集成',
        items: [
          '从模型到固件：AI 运行在产品和设备内部',
          '在华供应链与生产，直接把控'
        ]
      },
      {
        title: '治理与安全',
        items: [
          '专有数据集与访问控制协议',
          '文档与交接支持内部团队'
        ]
      },
      {
        title: '快速上手',
        items: [
          '流程与数据的启动研讨',
          '数周内交付 MVP，路线图共创'
        ]
      },
      {
        title: '持续支持',
        items: [
          '模型监控与漂移控制',
          '按冲刺节奏迭代更新'
        ]
      }
    ]
  }
];

export default function AIDesignPage() {
  return (
    <ProductLayout
      title="AI 系统与协议设计"
      subtitle="我们构建语义模型、专有数据集和认知应用，以应对复杂数据。"
      features={features}
      featuresTitle="主要特性"
      images={images}
      intro={intro}
      mainSections={mainSections}
      logos={logos}
      headerPaddingClass="pt-32 pb-10"
    />
  );
}
