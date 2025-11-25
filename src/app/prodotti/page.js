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
      title: 'Progettazione e ingegnerizzazione',
      description: 'Architettura, firmware e prototipi completi: uniamo elettronica, meccanica e AI per portare i prodotti in produzione.',
      image: '/ENG_B1.webp',
      href: '/per-aziende/progetti'
    },
    {
      title: 'Sourcing tecnologico',
      description: 'Anni di scouting in Cina: rete di fornitori, componenti certificati e supply chain sotto controllo quotidiano.',
      image: '/So_B1.webp',
      href: '/per-aziende/sourcing'
    },
    {
      title: 'Cooperation',
      description: 'Co-sviluppo con i team dei clienti: roadmap condivise, trasferimento know-how e delivery congiunto.',
      image: '/Coop_B1.webp',
      href: '/per-aziende/collaborazioni'
    }
  ];
  
  return (
    <main>
      <Navbar />
      
      {/* Header della pagina */}
      <section className="pt-16 pb-4 bg-yiketeck-light" />

      {/* Soluzioni Engineering & Robotics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Engineering & Robotics</h2>
            <p className="text-lg text-gray-700 max-w-none">
              Attraverso competenze a più livelli sviluppiamo e industrializziamo prodotti hardware e firmware, gestiamo il sourcing tecnologico in Cina e affianchiamo il cliente dal prototipo alla produzione.
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
      
      {/* Griglia prodotti */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-3">
              <span className="block self-center h-[4px] w-16 bg-yiketeck-red" aria-hidden="true" />
              <p className="text-base sm:text-lg font-semibold uppercase tracking-[0.22em] text-gray-700">I nostri prodotti di design</p>
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
      
      {/* CTA Section */}
      <section className="py-16 bg-yiketeck-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Hai bisogno di una soluzione personalizzata?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contattaci per discutere delle tue esigenze specifiche e scoprire come possiamo aiutarti
            a trovare la soluzione tecnologica perfetta.
          </p>
          <a 
            href="/contatti" 
            className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
          >
            Contattaci ora
          </a>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
