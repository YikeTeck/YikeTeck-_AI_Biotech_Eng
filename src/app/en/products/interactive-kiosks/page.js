import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function InteractiveKiosksPage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h1 className="text-4xl font-bold">Interactive Kiosks</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Standalone, intuitive terminals for advanced digital interactions in public and commercial spaces.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-6">
                <div className="bg-[#f5f5f5] rounded-2xl shadow-sm overflow-hidden border border-black/5">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-yiketeck-dark flex items-center gap-2">
                      <span className="h-[2px] w-8 bg-[#c22a2a]" aria-hidden="true" />
                      Key features
                    </h2>
                    <ul className="space-y-4">
                      {[
                        '32" high-brightness display',
                        'Built-in QR code reader',
                        'High-speed thermal printer',
                        'Intuitive, customizable UI',
                        'Robust, elegant design',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#c22a2a] flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-black/5">
                  <Image
                    src="/Kiosk_1.webp"
                    alt="interactive-kiosks"
                    width={600}
                    height={256}
                    className="w-full h-full object-cover"
                    quality={85}
                  />
                </div>

                <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-black/5">
                  <Image
                    src="/Kiosk_2.webp"
                    alt="interactive-kiosks"
                    width={600}
                    height={256}
                    className="w-full h-full object-cover"
                    quality={85}
                  />
                </div>
              </div>
            </div>

            {/* Article */}
            <div className="lg:w-2/3">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Interactive kiosks – intuitive user experience</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Interactive kiosks are standalone digital devices with a display, QR reader, printer, and other peripherals to enable direct interaction. Used in stores, quick-service restaurants, airports, and public offices, they let users complete quick tasks like buying tickets, checking info, and printing receipts or labels.
                </p>

                <div className="bg-[#f5f5f5] p-6 rounded-2xl my-8 border border-black/5">
                  <p className="text-gray-700 italic border-l-4 border-yiketeck-red pl-4">
                    “Thanks to their versatility, these kiosks boost service efficiency and deliver a modern, intuitive user experience.”
                  </p>
                </div>

                <p className="mb-6 text-gray-700 leading-relaxed">
                  Designed entirely in-house, our products use a 32-inch high-brightness display to suit any installation, including brightly lit locations. Every design detail is crafted to ensure robustness, elegance, and ease of use.
                </p>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Cutting-edge technology</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Advanced hardware</h3>
                    <ul className="space-y-2">
                      <li>• High-performance multi-core processor</li>
                      <li>• Capacitive touchscreen with protective glass</li>
                      <li>• Quiet, efficient cooling system</li>
                      <li>• Wi-Fi, Ethernet, and 4G/5G connectivity</li>
                      <li>• Energy-efficient power design</li>
                    </ul>
                  </div>
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Customizable software</h3>
                    <ul className="space-y-2">
                      <li>• Intuitive, responsive UI</li>
                      <li>• Multilanguage support</li>
                      <li>• Compatibility with multiple payment systems</li>
                      <li>• Remote management dashboard</li>
                      <li>• Data analytics and advanced reporting</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Integrated peripherals</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Our interactive kiosks include peripherals that extend functionality and fit many usage contexts:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  {[
                    {
                      title: 'Thermal printer',
                      text: 'Quickly prints receipts, tickets, and labels with high quality and low maintenance.',
                    },
                    {
                      title: 'QR/Barcode reader',
                      text: 'Scans 1D/2D codes at speed, ideal for check-ins and coupon validation.',
                    },
                    {
                      title: 'Integrated POS',
                      text: 'Enables secure payments with credit cards, NFC, and other contactless methods.',
                    },
                    {
                      title: 'HD camera',
                      text: 'Supports video calls, facial recognition, and other vision-based use cases.',
                    },
                    {
                      title: 'Document scanner',
                      text: 'Digitizes IDs, passports, and certificates needed for various operations.',
                    },
                    {
                      title: 'RFID/NFC reader',
                      text: 'Works with loyalty cards, corporate badges, and other RFID-based apps.',
                    },
                  ].map((card) => (
                    <div key={card.title} className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                      <h3 className="text-lg font-bold text-yiketeck-dark mb-3">{card.title}</h3>
                      <p className="text-gray-700">{card.text}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Application sectors</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Interactive kiosks span many sectors, boosting operational efficiency and user experience:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Retail and GDO</h3>
                    <p className="text-gray-700 mb-3">In retail and large distribution, kiosks enable:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Self-checkout to cut queues</li>
                      <li>• Interactive product catalog</li>
                      <li>• Loyalty program management</li>
                      <li>• Custom order management</li>
                    </ul>
                  </div>

                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Food service</h3>
                    <p className="text-gray-700 mb-3">In restaurants and QSR:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Self-ordering with customization</li>
                      <li>• Pay directly, skip the cashier line</li>
                      <li>• Detailed menus and ingredients</li>
                      <li>• Combo suggestions and promos</li>
                    </ul>
                  </div>

                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Transport and tourism</h3>
                    <p className="text-gray-700 mb-3">For mobility and travel, kiosks support:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Check-in and boarding-pass printing</li>
                      <li>• Ticketing for public transport</li>
                      <li>• Interactive tourist info</li>
                      <li>• Booking tours and experiences</li>
                    </ul>
                  </div>

                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Healthcare</h3>
                    <p className="text-gray-700 mb-3">In healthcare, kiosks help with:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Patient check-in and visit registration</li>
                      <li>• Filling forms and questionnaires</li>
                      <li>• Paying health tickets</li>
                      <li>• Viewing reports and bookings</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Customizable design</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Each kiosk can be customized aesthetically and functionally to fit your brand identity and operational needs:
                </p>

                <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm mb-8 border border-black/5">
                  <h3 className="text-xl font-bold mb-3">Customization options:</h3>
                  <ul className="space-y-2">
                    <li>• Tailored colors and finishes</li>
                    <li>• Mounting options: floor, wall, or tabletop</li>
                    <li>• Hardware configuration based on required functions</li>
                    <li>• Personalized, intuitive software UI</li>
                    <li>• Integration with existing enterprise systems</li>
                    <li>• Accessibility for users with disabilities</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Competitive advantages</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Our interactive kiosks deliver benefits that set them apart:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-2">Lower operating costs</h3>
                    <p className="text-gray-700">
                      They automate repetitive processes, cut queues, and free staff for higher-value tasks.
                    </p>
                  </div>
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-2">Better user experience</h3>
                    <p className="text-gray-700">
                      Clear interfaces, fast payments, customizable content, and analytics to iterate on flows.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
