import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { featuredProducts } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';


export default function ForYouPage() {
  // Filtriamo i prodotti per i consumatori (puoi modificare questa logica in base alle tue esigenze)
  const consumerProducts = featuredProducts.filter(p => 
    p.category === "Software" || p.category === "Audio" || p.category === "IoT"
  );
  
  return (
    <main>
      <Navbar />
      
      {/* Header della pagina */}
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Per Te</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Scopri i nostri prodotti progettati per migliorare la tua vita quotidiana con soluzioni
            innovative e tecnologie all'avanguardia per la casa e il tempo libero.
          </p>
        </div>
      </section>
      
      {/* Introduzione */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Tecnologia pensata per te</h2>
              <p className="text-lg text-gray-600 mb-6">
                Da Yike Teck, crediamo che la tecnologia debba rendere la vita più semplice e più ricca di 
                esperienze positive. I nostri prodotti sono progettati con un focus sulle reali esigenze 
                delle persone, combinando design elegante, funzionalità intuitive e innovazione tecnologica.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Che si tratti di migliorare le tue performance cognitive con Flomindy, godere di un'esperienza 
                audio immersiva con i nostri Super Flat Speakers o rendere la tua casa più intelligente con 
                Smart Looker, la nostra missione è portare il futuro della tecnologia nella tua vita quotidiana.
              </p>
            </div>
            <div className="md:w-1/2 relative h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder per l'immagine */}
              <div className="relative h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
  <Image 
  src="/user_tech.webp" 
  alt="Lifestyle" 
  width={800} 
  height={600}
  quality={90} 
  className="w-full h-full object-cover"
/>
</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Prodotti per consumatori */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">I Nostri Prodotti per Te</h2>
          
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
              href="/prodotti" 
              className="px-8 py-3 bg-yiketeck-red text-white rounded-full hover:bg-red-700 transition duration-300 font-medium"
            >
              Esplora tutti i prodotti
            </Link>
          </div>
        </div>
      </section>
      
      {/* Vantaggi */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Perché scegliere Yike Teck</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vantaggio 1 */}
            <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yiketeck-red text-white mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovazione</h3>
              <p className="text-gray-600">
                I nostri prodotti utilizzano le tecnologie più recenti e soluzioni innovative per
                garantirti un'esperienza all'avanguardia.
              </p>
            </div>
            
            {/* Vantaggio 2 */}
            <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yiketeck-red text-white mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Design</h3>
              <p className="text-gray-600">
                Crediamo che la tecnologia debba essere bella da vedere oltre che funzionale.
                Il nostro design unisce estetica e praticità.
              </p>
            </div>
            
            {/* Vantaggio 3 */}
            <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yiketeck-red text-white mb-6">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Qualità</h3>
              <p className="text-gray-600">
                Ogni prodotto Yike Teck è realizzato con materiali di alta qualità e sottoposto
                a rigorosi controlli per garantire affidabilità e durata.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-yiketeck-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto a migliorare la tua esperienza quotidiana?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Scopri la nostra gamma di prodotti innovativi e porta la tecnologia del futuro nella tua vita oggi stesso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/prodotti" 
              className="px-8 py-3 bg-white text-yiketeck-red rounded-full hover:bg-gray-100 transition duration-300 font-medium"
            >
              Esplora i prodotti
            </Link>
            <Link 
              href="/contatti" 
              className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-yiketeck-red transition duration-300 font-medium"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
