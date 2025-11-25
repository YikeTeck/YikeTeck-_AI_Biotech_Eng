import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getAllProducts } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  const products = getAllProducts();
  const services = [
    {
      title: 'Design and engineering',
      description:
        'Architecture, firmware and complete prototypes: we merge electronics, mechanics and AI to bring products into production.',
      image: '/ENG_B1.webp',
      href: '/en/for-companies/projects'
    },
    {
      title: 'Technology sourcing',
      description:
        'Years of scouting in China: supplier network, certified components and daily-controlled supply chain.',
      image: '/So_B1.webp',
      href: '/en/for-companies/sourcing'
    },
    {
      title: 'Cooperation',
      description:
        'Co-development with client teams: shared roadmaps, know-how transfer and joint delivery.',
      image: '/Coop_B1.webp',
      href: '/en/for-companies/collaborations'
    }
  ];

  return (
    <main>
      <Navbar />

      <section className="pt-16 pb-4 bg-yiketeck-light" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Engineering &amp; Robotics</h2>
            <p className="text-lg text-gray-700 max-w-none">
              With multi-level skills we develop and industrialize hardware and firmware products, manage technology sourcing
              in China and support clients from prototype to production.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 block"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                  <span className="inline-flex h-[2px] w-10 bg-yiketeck-red" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3">
              <span className="block self-center h-[4px] w-16 bg-yiketeck-red" aria-hidden="true" />
              <p className="text-base sm:text-lg font-semibold uppercase tracking-[0.22em] text-gray-700">Our design products</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                category={product.category}
                imageUrl={product.imageUrl}
                slug={product.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-yiketeck-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a customized solution?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us to discuss your needs and discover how we can help you find the right technological solution.
          </p>
          <a
            href="/en/contact"
            className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
          >
            Contact us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
