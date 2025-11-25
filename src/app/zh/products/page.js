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
      title: '设计与工程',
      description:
        '架构、固件与完整原型：融合电子、机械和 AI，把产品带到量产。',
      image: '/ENG_B1.webp',
      href: '/zh/for-companies/projects'
    },
    {
      title: '技术采购',
      description:
        '多年在中国的供应链探索：供应商网络、认证组件与每日可控的交付。',
      image: '/So_B1.webp',
      href: '/zh/for-companies/sourcing'
    },
    {
      title: '合作共建',
      description:
        '与客户团队共同开发：共享路线图、知识转移与联合交付。',
      image: '/Coop_B1.webp',
      href: '/zh/for-companies/collaborations'
    }
  ];

  return (
    <main>
      <Navbar />

      <section className="pt-16 pb-4 bg-yiketeck-light" />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">工程与机器人</h2>
            <p className="text-lg text-gray-700 max-w-none">
              我们凭借多层次能力，开发并量产硬件与固件，负责在中国的技术采购，并陪伴客户从原型到生产。
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
              <p className="text-base sm:text-lg font-semibold uppercase tracking-[0.22em] text-gray-700">我们的设计产品</p>
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
          <h2 className="text-3xl font-bold mb-6">需要定制方案？</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            联系我们，讨论你的需求，看看我们如何帮你找到合适的技术方案。
          </p>
          <a
            href="/zh/contact"
            className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
          >
            联系我们
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
