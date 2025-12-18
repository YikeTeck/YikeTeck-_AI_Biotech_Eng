import './globals.css'
import './force-light-mode.css'

export const metadata = {
  metadataBase: new URL('https://www.yiketeck.com'),
  title: {
    default: 'Yike Teck | AI, Biotech & Smart Engineering Solutions',
    template: '%s | Yike Teck',
  },
  description: 'Soluzioni innovative in AI, Biotech e Smart City. Speaker ultrasottili, IoT, robotica e prodotti tecnologici avanzati. Sede a Dongguan, Cina.',
  keywords: ['AI', 'Biotech', 'Smart City', 'IoT', 'Robotics', 'Speakers', 'Yike Teck', 'Dongguan', 'China'],
  authors: [{ name: 'Yike Teck' }],
  creator: 'Yike Teck',
  publisher: 'Yike Teck',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://www.yiketeck.com',
    siteName: 'Yike Teck',
    title: 'Yike Teck | AI, Biotech & Smart Engineering Solutions',
    description: 'Soluzioni innovative in AI, Biotech e Smart City. Speaker ultrasottili, IoT, robotica e prodotti tecnologici avanzati.',
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
    description: 'Soluzioni innovative in AI, Biotech e Smart City. Speaker ultrasottili, IoT, robotica e prodotti tecnologici avanzati.',
    images: ['/YikeTeck_A_poster.webp'],
  },
  alternates: {
    canonical: 'https://www.yiketeck.com',
    languages: {
      'it-IT': 'https://www.yiketeck.com',
      'en-US': 'https://www.yiketeck.com/en',
      'zh-CN': 'https://www.yiketeck.com/zh',
    },
  },
  verification: {
    google: '5hZMZBDM0Za9g7CzTZsHe98KmwUPAsy7VcSolzTNHzY',
  },
  other: {
    'color-scheme': 'light only',
    'apple-mobile-web-app-status-bar-style': 'light',
  },
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.yiketeck.com/#organization',
      name: 'Yike Teck',
      legalName: 'Yike Teck Co. LTD',
      url: 'https://www.yiketeck.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.yiketeck.com/images/logoYT.svg',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+86-133-1637-6169',
        contactType: 'customer service',
        email: 'info@yiketeck.com',
        availableLanguage: ['English', 'Italian', 'Chinese'],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No. 80 Shilong Section, Dongjiang Avenue, Shilong Town',
        addressLocality: 'Dongguan',
        addressRegion: 'Guangdong',
        postalCode: '523326',
        addressCountry: 'CN',
      },
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.yiketeck.com/#website',
      url: 'https://www.yiketeck.com',
      name: 'Yike Teck',
      description: 'Innovative solutions for a smarter future',
      publisher: {
        '@id': 'https://www.yiketeck.com/#organization',
      },
      inLanguage: ['it-IT', 'en-US', 'zh-CN'],
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="it" className="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-black">{children}</body>
    </html>
  )
}
