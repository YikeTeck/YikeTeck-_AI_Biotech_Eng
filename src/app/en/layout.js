export const metadata = {
  title: 'Yike Teck',
  description: 'Innovative solutions for a smarter future'
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff'
}

export default function EnLayout({ children }) {
  return (
    <div lang="en">{children}</div>
  )
}
