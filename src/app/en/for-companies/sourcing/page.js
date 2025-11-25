import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function SourcingPage() {
  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Technology sourcing</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Access cutting-edge technologies for your business through our global partner network and on-the-ground presence in key production hubs.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Your ideal tech sourcing partner</h2>
              <p className="text-lg text-gray-700 mb-6">
                Looking for innovative technologies? Our global network lets us identify and supply the most advanced solutions for your needs—ensuring quality, reliability, and competitive pricing.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With direct presence in China—especially Dongguan, one of the world’s top tech and manufacturing hubs—you get privileged access to components, technologies, and cutting-edge solutions, removing middlemen and keeping procurement efficient and transparent.
              </p>
            </div>

            <div className="md:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/Dongguan_sourcing.webp"
                alt="Technology sourcing"
                width={800}
                height={600}
                quality={90}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center mb-12">Our sourcing services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Supplier research and selection',
                text: 'We identify the best tech and component suppliers via a rigorous evaluation on quality, reliability, capacity, compliance, and sustainability.',
                bullets: ['Full supplier due diligence', 'Technical assessment of solutions', 'Multi-supplier comparative analysis'],
              },
              {
                title: 'Procurement management',
                text: 'We manage the entire purchasing process—from contract negotiation to order handling—optimizing costs and ensuring full transparency in every step.',
                bullets: ['Contracts and price negotiations', 'Order management and planning', 'Procurement cost optimization'],
              },
              {
                title: 'Quality control',
                text: 'We apply strict QC across the supply chain, ensuring components and technologies meet the highest standards and specs.',
                bullets: ['Pre-shipment inspections', 'Compliance and performance tests', 'Audits of production processes'],
              },
              {
                title: 'Logistics and storage',
                text: 'We offer end-to-end logistics: packaging, shipping, and temporary storage, guaranteeing on-time deliveries and efficient inventory.',
                bullets: ['Full supply-chain management', 'Custom packaging solutions', 'Real-time shipment tracking'],
              },
            ].map((card) => (
              <div key={card.title} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/5 space-y-4">
                <h3 className="text-xl font-bold text-yiketeck-dark">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.text}</p>
                <ul className="space-y-2 text-gray-700">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 text-lg leading-none select-none text-[#c22a2a]" aria-hidden="true">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Strategic partnership</h2>
              <h3 className="text-xl font-bold text-yiketeck-dark mb-4">Shamana – our logistics and procurement partner</h3>
              <p className="text-lg text-gray-700 mb-6">
                For sourcing, logistics, and storage we work closely with Shamana (
                <a
                  href="https://www.shamana-china.com"
                  className="text-yiketeck-dark underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.shamana-china.com
                </a>
                ), a renowned company based in Dongguan just steps from our offices.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This strategic collaboration lets us offer a complete, integrated service—from supplier scouting and selection to logistics and warehousing—ensuring efficiency, reliability, and faster delivery times.
              </p>

              <ul className="space-y-3 mb-8">
                {['Strategic warehouses in Dongguan', 'Advanced inventory management', 'Global logistics solutions', 'Customs and documentation handling'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-lg leading-none select-none text-[#c22a2a]" aria-hidden="true">
                      •
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://www.shamana-china.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-700 transition duration-300"
              >
                Visit Shamana website
              </a>
            </div>

            <div className="md:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/Shamana_1__.webp"
                alt="Shamana partner"
                width={800}
                height={600}
                quality={90}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center mb-12">Benefits of our tech sourcing</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Shorter timelines',
                text: 'Local presence in major production hubs and partnership with Shamana let us cut lead times, eliminate intermediaries, and simplify processes.',
              },
              {
                title: 'Cost optimization',
                text: 'Our global network and strategic partnerships secure advantageous terms and optimized procurement costs, ensuring the best value for money.',
              },
              {
                title: 'Quality assurance',
                text: 'Strict supplier selection and quality checks across the supply chain ensure every component meets the highest standards.',
              },
              {
                title: 'Global access',
                text: 'An international network grants access to innovative technologies and advanced components worldwide, regardless of origin.',
              },
              {
                title: 'Flexibility and scalability',
                text: 'Solutions scale with your business size and needs, adjusting to volumes and keeping flexibility at every stage.',
              },
              {
                title: 'Local technical support',
                text: 'We provide full technical support with skilled staff to help you choose the best-fitting technologies for your needs.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/5">
                <h3 className="text-xl font-bold text-yiketeck-dark mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center">Our sourcing process</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Requirements analysis', text: 'We understand your specific needs and jointly define technical specs and volumes.' },
              { step: '2', title: 'Supplier scouting', text: 'We identify the best-suited suppliers through our global network and assess their capabilities.' },
              { step: '3', title: 'Evaluation and selection', text: 'We run comparative analysis to pick suppliers that best meet quality, price, and timing.' },
              { step: '4', title: 'Negotiation', text: 'We negotiate terms, pricing, and delivery planning to optimize cost and time.' },
              { step: '5', title: 'Logistics', text: 'We manage end-to-end logistics—from shipping to storage—ensuring punctual, efficient delivery.' },
            ].map((item) => (
              <div key={item.step} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/10 text-left space-y-3">
                <div className="h-10 w-10 rounded-full border-2 border-yiketeck-dark text-yiketeck-dark font-bold flex items-center justify-center bg-white">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-yiketeck-dark">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yiketeck-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to optimize your tech sourcing?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discover how we can help you find the most innovative and competitive tech solutions for your business, with full service from scouting to delivery.
          </p>
          <Link
            href="/en/contact"
            className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
          >
            Request a consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
