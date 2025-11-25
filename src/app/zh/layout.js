export const metadata = {
  title: 'Yike Teck',
  description: '为更智能的未来提供创新解决方案'
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff'
}

export default function ZhLayout({ children }) {
  return (
    <div lang="zh">{children}</div>
  )
}
