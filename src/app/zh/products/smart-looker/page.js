import ProductLayout from '@/components/ProductLayout';

export default function SmartLookerPage() {
  const features = [
    '24/7 可取件/寄件',
    '唯一验证码的高级安全系统',
    '可定制的模块化设计',
    '短信或邮件自动通知',
    '直观易用的界面'
  ];

  const images = [
    { src: '/SmartL_1.webp', alt: 'Smart Looker 1' },
    { src: '/SmartL_2.webp', alt: 'Smart Looker 2' }
  ];

  const intro = {
    title: 'Smart Looker - 简化交付',
    paragraphs: [
      'Smart Locker（又称 Parcel Locker）是用于取件和寄件的智能自动柜，可放置在公共或私有空间。用户通过短信或邮件收到的唯一验证码即可安全、自主地取还包裹或文件。',
      '这些智能柜大幅简化交付，减少等待时间，让用户 24/7 灵活取件，无需与工作人员直接互动。我们的产品由团队自主设计，兼顾外观与可用性，每个细节都精心打磨。'
    ]
  };

  const quote =
    '物流和电商领域正在适应新技术需求，以及人们在购买产品或使用服务时的行为变化。';

  const mainSections = [
    {
      title: '高级功能',
      cards: [
        {
          title: '面向管理方',
          items: [
            '实时监控每个柜子的状态',
            '自动生成报告与统计',
            '远程管理整套系统',
            '可与现有追踪系统集成',
            '品牌外观可定制'
          ]
        },
        {
          title: '面向用户',
          items: [
            '任意时间取件，24/7 全天候',
            '交付与取件的即时通知',
            '多因素认证的安全流程',
            '多语言且直观的界面',
            '可现场完成支付'
          ]
        }
      ]
    },
    {
      title: '应用场景',
      paragraphs: ['Yike Teck 的 Smart Looker 适配多种场景，为不同行业提供定制化方案：'],
      cols: 3,
      cards: [
        {
          title: '电商',
          text: '末端交付的理想方案，降低配送成本并提升客户满意度。'
        },
        {
          title: '企业办公',
          text: '高效管理内部邮件、包裹和文件，访问受控且可追踪。'
        },
        {
          title: '住宅公寓',
          text: '即使不在家也能安全收件，提升安全性与便利性。'
        },
        {
          title: '大学与校园',
          text: '简化教学资料与包裹的交付，在安全环境中服务学生与教职员工。'
        },
        {
          title: '酒店与住宿',
          text: '即便前台未开放时也可取还物品。'
        },
        {
          title: '购物中心',
          text: '集中式枢纽，可取多个商店的订单，改善购物体验。'
        }
      ]
    }
  ];

  return (
    <ProductLayout
      title="Smart Looker"
      subtitle="用于创新管理包裹与文件的智能自动柜。"
      features={features}
      featuresTitle="主要特性"
      images={images}
      intro={intro}
      quote={quote}
      mainSections={mainSections}
    />
  );
}
