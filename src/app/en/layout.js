export const metadata = {
  title: {
    default: 'Yike Teck | Proprietary AI, Biotech & Advanced Robotics',
    template: '%s | Yike Teck',
  },
  description: 'Shaping the next decade with patented AI technologies, AI-driven biotechnology, and advanced robotics. Engineering tomorrow\'s solutions today. Headquartered in Dongguan, China.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.yiketeck.com/en',
    siteName: 'Yike Teck',
    title: 'Yike Teck | Proprietary AI, Biotech & Advanced Robotics',
    description: 'Shaping the next decade with patented AI technologies, AI-driven biotechnology, and advanced robotics. Engineering tomorrow\'s solutions today. Headquartered in Dongguan, China.',
    images: [
      {
        url: '/YikeTeck_A_poster.webp',
        width: 1200,
        height: 630,
        alt: 'Yike Teck - Proprietary AI, Biotech & Advanced Robotics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yike Teck | Proprietary AI, Biotech & Advanced Robotics',
    description: 'Shaping the next decade with patented AI technologies, AI-driven biotechnology, and advanced robotics. Engineering tomorrow\'s solutions today. Headquartered in Dongguan, China.',
    images: ['/YikeTeck_A_poster.webp'],
  },
  alternates: {
    canonical: 'https://www.yiketeck.com/en',
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

export default function EnLayout({ children }) {
  return <div lang="en">{children}</div>
}
