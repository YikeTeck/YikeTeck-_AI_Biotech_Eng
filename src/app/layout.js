import './globals.css'
import './force-light-mode.css'

export const metadata = {
  title: 'Yike Teck',
  description: 'Innovative solutions for a smarter future',
  other: {
    'color-scheme': 'light only',
    'apple-mobile-web-app-status-bar-style': 'light'
  }
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className="bg-white text-black">{children}</body>
    </html>
  )
}
