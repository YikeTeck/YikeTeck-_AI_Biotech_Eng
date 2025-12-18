export const metadata = {
  title: {
    default: 'Yike Teck | AI, Biotech & Smart Engineering Solutions',
    template: '%s | Yike Teck',
  },
  description: 'Innovative AI, Biotech and Smart City solutions. Ultra-thin speakers, IoT devices, robotics and advanced tech products. Based in Dongguan, China.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.yiketeck.com/en',
    siteName: 'Yike Teck',
    title: 'Yike Teck | AI, Biotech & Smart Engineering Solutions',
    description: 'Innovative AI, Biotech and Smart City solutions. Ultra-thin speakers, IoT devices, robotics and advanced tech products.',
    images: [
      {
        url: '/YikeTeck_A_poster.webp',
        width: 1200,
        height: 630,
        alt: 'Yike Teck - Innovative Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yike Teck | AI, Biotech & Smart Engineering Solutions',
    description: 'Innovative AI, Biotech and Smart City solutions. Ultra-thin speakers, IoT devices, robotics and advanced tech products.',
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
