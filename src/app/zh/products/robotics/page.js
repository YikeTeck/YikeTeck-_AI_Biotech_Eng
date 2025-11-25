import ProductLayout from '@/components/ProductLayout';

const features = [
  '电子、机械与智能控制工程',
  '机器人手：灵巧、敏感且可靠',
  '轻量但强劲的关节与执行器',
  '平衡、行走与非平整地面的控制',
  'AI 用于实时预测、校正与安全'
];

const images = [
  { src: '/Robotic_C1.webp', alt: '暴露执行器与电路的机器人手', quality: 90 },
  { src: '/Robotic_C2.webp', alt: '在机架上工作的类人机器人', quality: 90 },
  { src: '/Robotic_C3.webp', alt: '机械组件与执行器细节', quality: 90 }
];

const intro = {
  title: '应用机器人',
  paragraphs: [
    '机器人是工程的试金石。Yike Teck 将电子、机械与智能控制带到最难的部分：极限精度、合适材料和非传统方案。',
    '机器人手是标志性挑战：大量关节、微动作，对脆弱或沉重物体施压而不失去灵敏度。力量与精细的微妙平衡——正是我们想解决的。',
    '关节与执行器（手、膝、踝、髋）必须既强又轻、既紧凑又有力、既快速又稳定。背后是精密机械、电/液执行器和密集传感，支撑实时控制。'
  ]
};

const quote =
  '机器人手必须能毫米级控制地抓取、旋转、夹紧和释放：力量与精细同在。';

const mainSections = [
  {
    title: '机器人手与灵巧度',
    paragraphs: [
      '要复现人类的灵巧，需要协同多自由度、压力与感知反馈。我们设计的手可在不失灵敏的情况下处理脆弱与沉重物体。'
    ],
    cols: 3,
    cards: [
      {
        title: '多关节控制',
        items: [
          '手指与拇指的精细抓取和旋转',
          '微动作与自适应握持',
          '触觉反馈以保持灵敏'
        ]
      },
      {
        title: '力量 + 精细',
        items: [
          '对脆弱或沉重物体施压可控',
          '材料与运动学防止打滑',
          '通过坚固方案减少磨损'
        ]
      },
      {
        title: '运行可靠性',
        items: [
          '分布式传感器支持实时控制',
          '机械冗余与安全软件',
          '疲劳与循环测试'
        ]
      }
    ]
  },
  {
    title: '关键关节与执行器',
    paragraphs: [
      '膝、踝、髋是稳定节点：需承重、吸收冲击并保持灵敏。我们设计紧凑、轻量且高扭矩的执行器。'
    ],
    cols: 3,
    cards: [
      {
        title: '精密机械',
        items: [
          '低回差减速器与连杆',
          '轻质高强材料',
          '紧凑封装实现功率密度'
        ]
      },
      {
        title: '电/液执行',
        items: [
          '依据扭矩/重量选择电机与执行器',
          '高力密度场景使用液压',
          '热管理与散热设计'
        ]
      },
      {
        title: '集成传感',
        items: [
          '每个关节的力、扭矩与位置',
          '持续监测助力预测性维护',
          '为快速控制循环提供干净信号'
        ]
      }
    ]
  },
  {
    title: '运动控制',
    paragraphs: [
      '平衡、行走、适应不平地面和突发推力，需要高级控制模型。我们实时预判、校正和补偿。'
    ],
    cols: 3,
    cards: [
      {
        title: '动态平衡',
        items: [
          '在多变场景下控制重心',
          '行走与转向中的稳定性'
        ]
      },
      {
        title: '传感融合',
        items: [
          'IMU、力/扭矩与视觉预判扰动',
          '识别推挤或障碍并快速反应'
        ]
      },
      {
        title: 'AI 闭环',
        items: [
          '实时预测与校正',
          '利用现场数据持续学习优化控制'
        ]
      }
    ]
  },
  {
    title: 'Yike Teck 的方法',
    paragraphs: [
      '将机械、电子与 AI 融合，打造务实、可扩展且关注成本的方案。我们攻克他人避开的难题，化复杂为可靠。'
    ],
    cols: 2,
    cards: [
      {
        title: '原型与量产',
        items: [
          '从概念到原型，迭代测试',
          '文档与量产计划'
        ]
      },
      {
        title: '可靠与安全',
        items: [
          '冗余控制与安全回退',
          '操作清单与计划维护'
        ]
      },
      {
        title: '成本与规模',
        items: [
          '材料/器件选择兼顾经济性',
          '量产路线与部署后支持'
        ]
      }
    ]
  },
  {
    title: '为什么',
    paragraphs: [
      '无论是更灵敏的手、更稳定的关节，还是更智能的控制，目标只有一个：把机器人的难题变成新产品和新交互方式的机会。'
    ]
  }
];

export default function RoboticsPage() {
  return (
    <ProductLayout
      title="应用机器人"
      subtitle="从机器人手到关键关节：智能控制、灵敏和现场可靠性。"
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
