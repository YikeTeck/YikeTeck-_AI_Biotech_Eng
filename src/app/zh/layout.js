export const metadata = {
  title: {
    default: 'Yike Teck | 人工智能、生物技术与智能工程解决方案',
    template: '%s | Yike Teck',
  },
  description: '创新的人工智能、生物技术和智慧城市解决方案。超薄扬声器、物联网设备、机器人技术和先进科技产品。总部位于中国东莞。',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.yiketeck.com/zh',
    siteName: 'Yike Teck',
    title: 'Yike Teck | 人工智能、生物技术与智能工程解决方案',
    description: '创新的人工智能、生物技术和智慧城市解决方案。超薄扬声器、物联网设备、机器人技术和先进科技产品。',
    images: [
      {
        url: '/YikeTeck_A_poster.webp',
        width: 1200,
        height: 630,
        alt: 'Yike Teck - 创新技术解决方案',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yike Teck | 人工智能、生物技术与智能工程解决方案',
    description: '创新的人工智能、生物技术和智慧城市解决方案。超薄扬声器、物联网设备、机器人技术和先进科技产品。',
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
