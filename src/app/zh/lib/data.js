// 首页特色产品
export const featuredProducts = [
    {
      id: 1,
      title: "Flomindy",
      description: "通过个性化练习提高认知表现和注意力的应用程序。",
      category: "软件",
      imageUrl: "/flomindy_home_.webp",
      slug: "flomindy"
    },
    {
      id: 2,
      title: "超薄扬声器",
      description: "超薄音频扬声器，具有高级音质，带来完美的聆听体验。",
      category: "音频",
      imageUrl: "/Super Flat Speaker_Home.webp",
      slug: "super-flat-speakers"
    },
    {
      id: 3,
      title: "智能观察者",
      description: "智能技术，通过创新和直观的解决方案监控和管理您的家。",
      category: "物联网",
      imageUrl: "/Smart_looker_home.webp",
      slug: "smart-looker"
    },
    {
      id: 4,
      title: "智能路灯",
      description: "低能耗城市照明，配备运动传感器和远程控制。",
      category: "智慧城市",
      imageUrl: "/Smart Street lamps_home.webp",
      slug: "smart-street-lamps"
    }
  ];
  
  // 首页目标细分市场
  export const targetSegments = [
    {
      id: 1,
      title: "用户专区",
      description: "发现我们设计用来改善您日常生活的产品",
      imageUrl: "/users_home.webp",
      linkUrl: "/zh/for-users"
    },
    {
      id: 2,
      title: "企业专区",
      description: "为您的业务提供先进的技术解决方案",
      imageUrl: "/Company_home.webp",
      linkUrl: "/zh/for-companies"
    },
    {
      id: 3,
      title: "活动专区",
      description: "技术演讲和参与展会及活动",
      imageUrl: "/AI_conference_Home.webp",
      linkUrl: "/zh/for-events"
    }
  ];
  
  // 完整产品列表
  export const allProducts = [
    // 包括特色产品并添加其他产品
    {
      id: 5,
      title: "智能垃圾箱",
      description: "智能城市垃圾管理创新，具有分析和优化功能。",
      category: "智慧城市",
      imageUrl: "/Smart Trash_home.webp",
      slug: "smart-trash-bins"
    },
    {
      id: 6,
      title: "交互式信息亭",
      description: "自主直观的终端，用于在公共和商业空间进行高级数字交互。",
      category: "显示",
      imageUrl: "/Kiosk_Home_.webp",
      slug: "interactive-kiosks"
    },
  ];
  
  // 获取所有产品的函数
  export function getAllProducts() {
    return [...featuredProducts, ...allProducts.filter(p => !featuredProducts.some(fp => fp.id === p.id))];
  }
