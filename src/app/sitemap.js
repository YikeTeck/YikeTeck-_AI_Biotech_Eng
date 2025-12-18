export default function sitemap() {
  const baseUrl = 'https://www.yiketeck.com'
  const lastModified = new Date()

  // Italian routes (root)
  const itRoutes = [
    '',
    '/chi-siamo',
    '/contatti',
    '/privacy',
    '/per-te',
    '/per-eventi',
    '/per-aziende',
    '/per-aziende/collaborazioni',
    '/per-aziende/progetti',
    '/per-aziende/sourcing',
    '/prodotti',
    '/prodotti/flomindy',
    '/prodotti/super-flat-speakers',
    '/prodotti/smart-looker',
    '/prodotti/lampade-stradali-intelligenti',
    '/prodotti/smart-trash-bins',
    '/prodotti/kiosk-interattivi',
    '/prodotti/robotics',
    '/ai-design',
    '/biotech',
  ]

  // English routes
  const enRoutes = [
    '/en',
    '/en/about-us',
    '/en/contact',
    '/en/privacy',
    '/en/for-users',
    '/en/for-events',
    '/en/for-companies',
    '/en/for-companies/collaborations',
    '/en/for-companies/projects',
    '/en/for-companies/sourcing',
    '/en/products',
    '/en/products/flomindy',
    '/en/products/super-flat-speakers',
    '/en/products/smart-looker',
    '/en/products/smart-street-lamps',
    '/en/products/smart-trash-bins',
    '/en/products/interactive-kiosks',
    '/en/products/robotics',
    '/en/ai-design',
    '/en/biotech',
  ]

  // Chinese routes
  const zhRoutes = [
    '/zh',
    '/zh/about-us',
    '/zh/contact',
    '/zh/privacy',
    '/zh/for-users',
    '/zh/for-events',
    '/zh/for-companies',
    '/zh/for-companies/collaborations',
    '/zh/for-companies/projects',
    '/zh/for-companies/sourcing',
    '/zh/products',
    '/zh/products/flomindy',
    '/zh/products/super-flat-speakers',
    '/zh/products/smart-looker',
    '/zh/products/smart-street-lamps',
    '/zh/products/smart-trash-bins',
    '/zh/products/interactive-kiosks',
    '/zh/products/robotics',
    '/zh/ai-design',
    '/zh/biotech',
  ]

  const allRoutes = [...itRoutes, ...enRoutes, ...zhRoutes]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' || route === '/en' || route === '/zh' ? 'weekly' : 'monthly',
    priority: route === '' || route === '/en' || route === '/zh' ? 1.0 : 0.8,
  }))
}
