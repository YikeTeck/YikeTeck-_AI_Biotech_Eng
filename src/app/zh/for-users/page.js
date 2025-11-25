import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { featuredProducts } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export default function ForYouPage() {
  // 筛选消费者产品
  const consumerProducts = featuredProducts.filter(p => 
    p.category === "Software" || p.category === "Audio" || p.category === "IoT"
  );
  
  return (
    <main>
      <Navbar />
      
      {/* 页面标题 */}
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">用户专区</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            探索我们专为改善您日常生活而设计的产品，为家庭和休闲时光带来创新解决方案和前沿技术。
          </p>
        </div>
      </section>
      
      {/* 介绍 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">为您设计的技术</h2>
              <p className="text-lg text-gray-600 mb-6">
                在意科技术，我们相信技术应该让生活更简单，更丰富多彩。我们的产品专注于人们的实际需求，
                将优雅的设计、直观的功能和技术创新相结合。
              </p>
              <p className="text-lg text-gray-600 mb-6">
                无论是通过Flomindy提高您的认知表现，通过我们的超薄扬声器享受沉浸式音频体验，
                还是通过Smart Looker让您的家更智能，我们的使命是将未来技术带入您的日常生活。
              </p>
            </div>
            <div className="md:w-1/2 relative h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
              {/* 图片占位符 */}
              <div className="relative h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/user_tech.webp"
                  alt="生活方式"
                  width={600}
                  height={384}
                  className="w-full h-full object-cover"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 消费者产品 */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">我们为您提供的产品</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consumerProducts.map((product) => (
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
          
          <div className="mt-12 text-center">
            <Link 
              href="/zh/products" 
              className="px-8 py-3 bg-yiketeck-red text-white rounded-full hover:bg-red-700 transition duration-300 font-medium"
            >
              浏览所有产品
            </Link>
          </div>
        </div>
      </section>
      
      {/* 优势 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">为什么选择意科技术</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 优势 1 */}
            <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yiketeck-red text-white mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">创新</h3>
              <p className="text-gray-600">
                我们的产品使用最新技术和创新解决方案，确保您获得前沿体验。
              </p>
            </div>
            
            {/* 优势 2 */}
            <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yiketeck-red text-white mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">设计</h3>
              <p className="text-gray-600">
                我们相信技术不仅应该实用，还应该美观。我们的设计将美学与实用性相结合。
              </p>
            </div>
            
            {/* 优势 3 */}
            <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yiketeck-red text-white mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">质量</h3>
              <p className="text-gray-600">
                每件意科技术产品都采用高质量材料制成，并经过严格测试，确保可靠性和耐用性。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA 部分 */}
      <section className="py-16 bg-yiketeck-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">准备改善您的日常体验了吗？</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            探索我们的创新产品系列，今天就将未来科技带入您的生活。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/zh/products" 
              className="px-8 py-3 bg-white text-yiketeck-red rounded-full hover:bg-gray-100 transition duration-300 font-medium"
            >
              浏览产品
            </Link>
            <Link 
              href="/zh/contact" 
              className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-yiketeck-red transition duration-300 font-medium"
            >
              联系我们
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
