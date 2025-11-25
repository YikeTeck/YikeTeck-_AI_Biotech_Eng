import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { featuredProducts } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export default function ForYouPage() {
  // Filter products for consumers (you can modify this logic based on your needs)
  const consumerProducts = featuredProducts.filter(p => 
    p.category === "Software" || p.category === "Audio" || p.category === "IoT"
  );
  
  return (
    <main>
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">For You</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Discover our products designed to improve your daily life with
            innovative solutions and cutting-edge technologies for home and leisure.
          </p>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Technology designed for you</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Yike Teck, we believe that technology should make life simpler and richer with
                positive experiences. Our products are designed with a focus on people's real needs,
                combining elegant design, intuitive functionality, and technological innovation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether it's improving your cognitive performance with Flomindy, enjoying an immersive
                audio experience with our Super Flat Speakers, or making your home smarter with
                Smart Looker, our mission is to bring the future of technology into your daily life.
              </p>
            </div>
            <div className="md:w-1/2 relative h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
              {/* Image placeholder */}
              <div className="relative h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/user_tech.webp"
                  alt="Lifestyle"
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
      
      {/* Consumer Products */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Products for You</h2>
          
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
              href="/en/products" 
              className="px-8 py-3 bg-yiketeck-red text-white rounded-full hover:bg-red-700 transition duration-300 font-medium"
            >
              Explore all products
            </Link>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why choose Yike Teck</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yiketeck-red text-white mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Our products use the latest technologies and innovative solutions to
                ensure you a cutting-edge experience.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yiketeck-red text-white mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Design</h3>
              <p className="text-gray-600">
                We believe that technology should be beautiful to look at as well as functional.
                Our design combines aesthetics and practicality.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yiketeck-red text-white mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                Every Yike Teck product is made with high-quality materials and undergoes
                rigorous testing to ensure reliability and durability.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-yiketeck-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to improve your daily experience?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover our range of innovative products and bring the technology of the future into your life today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/en/products" 
              className="px-8 py-3 bg-white text-yiketeck-red rounded-full hover:bg-gray-100 transition duration-300 font-medium"
            >
              Explore products
            </Link>
            <Link 
              href="/en/contact" 
              className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-yiketeck-red transition duration-300 font-medium"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
