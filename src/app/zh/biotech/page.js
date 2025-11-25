import ProductLayout from '@/components/ProductLayout';

const features = [
  'Clevidot：面向生物科技决策的 AI 工作空间',
  '“悬置思维”：并行保留多种假设且可控',
  '论文、协议与实验记录整合为单一流程',
  '连接 AI、嵌入式电子与生物工程',
  '端到端交付：从原型到现场，路线清晰'
];

const images = [
  { src: '/Biotech_AA.webp', alt: '实验室中的谱分析', quality: 90 },
  { src: '/Bioteck_AB.webp', alt: '显微镜下的培养皿操作', quality: 85 },
  { src: '/Biotech_ABC.webp', alt: '生物实验用的试剂与样品', quality: 85 }
];

const intro = {
  title: 'Clevidot 与生物科技',
  paragraphs: [
    'Yike Teck 认为下一波生物科技革命在数据、直觉与 AI 之间。我们正是在那里工作：技术不再只是工具，而是科研伙伴。',
    '在我们的平台体系中，Clevidot 是面向生物科技的核心。它为实验室决策而生：基于实验结果、论文、协议、失败与突发灵感。',
    'Clevidot 不只是回答问题：它组织思路、探索备选方案，并构建兼具科学严谨和创造性的工作计划。'
  ]
};

const quote =
  '“悬置思维”：Clevidot 不会在第一个“可能”答案上折叠，而是并行保持多种路径，保护研究者的直觉。';

const mainSections = [
  {
    title: 'Clevidot 面向实验室团队',
    paragraphs: [
      '一个为真实数据决策而设计的 AI 环境：论文、协议、结果与实验记录变成活的记忆，提示备选、组合与下一步行动。'
    ],
    cols: 3,
    cards: [
      {
        title: '复杂数据决策',
        items: [
          '论文、协议和失败案例被收集并关联',
          '实验与条件的对比分析',
          '兼顾约束与安全的工作计划'
        ]
      },
      {
        title: '悬置思维',
        items: [
          '并行保留假设与场景',
          '避免在首个答案上折叠',
          '记录每个决策的依据'
        ]
      },
      {
        title: '科研伙伴',
        items: [
          '提示备选方案与潜在风险',
          '生成检查清单与可适应的协议',
          '与实验室设备和流程整合'
        ]
      }
    ]
  },
  {
    title: 'Yike Teck 的方法',
    paragraphs: [
      '电子、嵌入式与 AI 经验让我们以更实的视角看待生物工程：硬件、关键软件与运营数据用同一种语言沟通。'
    ],
    cols: 3,
    cards: [
      {
        title: '真实集成',
        items: [
          'AI 深入固件、传感器与实验室设备',
          '生物模式通过专用数据管线监测'
        ]
      },
      {
        title: '流水线与质控',
        items: [
          '精选并版本化的数据集',
          '访问控制与数据治理',
          '面向团队的验证与技术报告'
        ]
      },
      {
        title: '交付',
        items: [
          '直接管理原型与供应链',
          '团队组织支持从原型到量产'
        ]
      }
    ]
  },
  {
    title: '交付与合作',
    paragraphs: [
      '我们服务那些将生物科技视为战略的人：从设计新实验协议到定义 AI 驱动的分析管线，对数据和结果负责。'
    ],
    cols: 2,
    cards: [
      {
        title: '与团队共创',
        items: [
          '流程与数据的启动研讨',
          '数周内完成 MVP，共享路线图'
        ]
      },
      {
        title: '持续支持',
        items: [
          '模型监控与漂移管理',
          '按计划冲刺迭代更新'
        ]
      },
      {
        title: '文档与培训',
        items: [
          '清晰的移交与操作手册',
          '可更新的检查清单与协议'
        ]
      }
    ]
  },
  {
    title: '我们现在能分享的',
    paragraphs: [
      '部分项目因验证与保护仍保持保密。可以明确的是：如果你需要将 AI、工程与生物科技视野结合的伙伴，Yike Teck 与 Clevidot 是开始对话的正确地方。'
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
      title="应用生物科技"
      subtitle="AI 保护科研直觉，组织实验决策。"
      features={features}
      featuresTitle="主要特性"
      images={images}
      intro={intro}
      quote={quote}
      mainSections={mainSections}
      logos={logos}
      headerPaddingClass="pt-28 pb-8"
    />
  );
}
