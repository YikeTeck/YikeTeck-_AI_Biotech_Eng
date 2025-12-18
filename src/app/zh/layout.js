export const metadata = {
  title: {
    default: 'Yike Teck | 专有人工智能、生物技术与先进机器人',
    template: '%s | Yike Teck',
  },
  description: '以专利AI技术、人工智能驱动的生物技术和先进机器人技术塑造未来十年。今天构建明天的解决方案。总部位于中国东莞。',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.yiketeck.com/zh',
    siteName: 'Yike Teck',
    title: 'Yike Teck | 专有人工智能、生物技术与先进机器人',
    description: '以专利AI技术、人工智能驱动的生物技术和先进机器人技术塑造未来十年。今天构建明天的解决方案。总部位于中国东莞。',
    images: [
      {
        url: '/YikeTeck_A_poster.webp',
        width: 1200,
        height: 630,
        alt: 'Yike Teck - 专有人工智能、生物技术与先进机器人',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yike Teck | 专有人工智能、生物技术与先进机器人',
    description: '以专利AI技术、人工智能驱动的生物技术和先进机器人技术塑造未来十年。今天构建明天的解决方案。总部位于中国东莞。',
    images: ['/YikeTeck_A_poster.webp'],
  },
  alternates: {
    canonical: 'https://www.yiketeck.com/zh',
    languages: {
      'it-IT': 'https://www.yiketeck.com',
      'en-US': 'https://www.yiketeck.com/en',
      'zh-CN': 'https://www.yiketeck.com/zh',
    },
  },
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function ZhLayout({ children }) {
  return <div lang="zh">{children}</div>
}
