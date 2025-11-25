import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function SmartTrashBinsPage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h1 className="text-4xl font-bold">Smart Trash Bins</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Intelligent bins for optimized urban waste management with integrated IoT technology.
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
                        'Real-time monitoring of fill level',
                        'Sensors to detect type of waste',
                        'IoT connectivity to central systems',
                        'Solar power with backup battery',
                        'Robust, weather-resistant design',
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
                    src="/urban-trash_1.webp"
                    alt="smart-trash-bins"
                    width={600}
                    height={256}
                    className="w-full h-full object-cover"
                    quality={85}
                  />
                </div>

                <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-black/5">
                  <Image
                    src="/urban-trash_2.webp"
                    alt="smart-trash-bins"
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
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Revolutionizing urban waste management</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Smart trash bins are IoT-enabled containers that monitor fill levels and the type of waste collected. With built-in sensors and the ability to communicate with central systems, they optimize collection routes, cutting costs and environmental impact while improving urban hygiene by avoiding overflow.
                </p>

                <div className="bg-[#f5f5f5] p-6 rounded-2xl my-8 border border-black/5">
                  <p className="text-gray-700 italic border-l-4 border-yiketeck-red pl-4">
                    “Useful for both private users and public administrations, smart bins keep public spaces cleaner and tidier, raising the quality of urban life.”
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Advanced tech for cleaner cities</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Monitoring system</h3>
                    <ul className="space-y-2">
                      <li>• Ultrasonic sensors to detect fill level</li>
                      <li>• Optical recognition to identify waste types</li>
                      <li>• Temperature monitoring to prevent fires</li>
                      <li>• Weight sensors for precise quantification</li>
                      <li>• Real-time alerts for abnormal conditions</li>
                    </ul>
                  </div>
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Communication and connectivity</h3>
                    <ul className="space-y-2">
                      <li>• Wireless links via LoRaWAN or NB-IoT</li>
                      <li>• Encrypted data transmission for security</li>
                      <li>• Integration with existing urban management platforms</li>
                      <li>• Web dashboard for centralized monitoring</li>
                      <li>• Mobile app for operators and citizens</li>
                    </ul>
                  </div>
                </div>

                <p className="mb-6 text-gray-700 leading-relaxed">
                  Our R&D team is developing new smart trash bin models with even more advanced features, like improved energy efficiency and greater adaptability to diverse city needs. We will soon launch these solutions to offer sustainable, high-performance waste-management technology.
                </p>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Innovative features in development</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  {[
                    { title: 'Automatic compaction', text: 'Integrated compression boosts effective capacity up to 8x, reducing collection frequency.' },
                    { title: 'AI recognition', text: 'AI algorithms automatically identify materials to improve separate collection quality.' },
                    { title: 'UV sanitization', text: 'Ultraviolet disinfection removes bacteria and reduces odors, improving hygiene.' },
                    { title: 'Self-cleaning', text: 'Automatic cleaning keeps the container sanitary without manual work.' },
                    { title: 'User-friendly interface', text: 'Interactive touch display with recycling info and citizen rewards.' },
                    { title: 'Hybrid power', text: 'Power system combining solar, grid, and battery for continuous uptime.' },
                  ].map((card) => (
                    <div key={card.title} className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                      <h3 className="text-lg font-bold text-yiketeck-dark mb-3">{card.title}</h3>
                      <p className="text-gray-700">{card.text}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Benefits and applications</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">For public administrations</h3>
                    <p className="text-gray-700 mb-3">City governments gain multiple advantages:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Up to 30% lower collection costs thanks to optimized routes</li>
                      <li>• Lower CO₂ emissions from transport</li>
                      <li>• Better hygiene and urban aesthetics</li>
                      <li>• Analytics to plan services more effectively</li>
                      <li>• Greater citizen participation</li>
                    </ul>
                  </div>

                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">For companies and commercial spaces</h3>
                    <p className="text-gray-700 mb-3">Malls, companies, and private public spaces benefit from:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• More efficient management of internal waste</li>
                      <li>• Lower disposal costs</li>
                      <li>• Better public image through sustainability</li>
                      <li>• Cleaner, more hygienic environments for customers and staff</li>
                      <li>• Easier compliance with environmental regulations</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm mb-8 border border-black/5">
                  <h3 className="text-xl font-bold mb-3">Environmental impact of Smart Trash Bins:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Reduced CO₂ emissions thanks to optimized collection</li>
                    <li>• Better waste handling, lowering environmental contamination</li>
                    <li>• Promotion of sorting and recycling</li>
                    <li>• Less traffic from waste collection vehicles</li>
                    <li>• Lower energy use thanks to solar power</li>
                    <li>• Sustainable design with recyclable or biodegradable components</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Software and management platform</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Every Smart Trash Bin connects to our dedicated cloud platform, offering advanced capabilities for full-system management:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-5 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-2">Centralized dashboard</h3>
                    <p className="text-gray-700">Intuitive interface showing device status on an interactive map with real-time fill indicators.</p>
                  </div>
                  <div className="bg-[#f5f5f5] p-5 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-2">Route optimization</h3>
                    <p className="text-gray-700">Advanced algorithms compute the most efficient collection routes considering priority, traffic, and capacity.</p>
                  </div>
                  <div className="bg-[#f5f5f5] p-5 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-2">Predictive analytics</h3>
                    <p className="text-gray-700">Fill-rate forecasting based on historical data and local events enables proactive planning.</p>
                  </div>
                  <div className="bg-[#f5f5f5] p-5 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-2">Advanced reporting</h3>
                    <p className="text-gray-700">Automatic reports on collection, efficiency, savings, and environmental impact, customizable for different needs.</p>
                  </div>
                </div>

                <p className="mb-6 text-gray-700 leading-relaxed">
                  Yike Teck Smart Trash Bins are a major step toward cleaner, more efficient, and more sustainable cities. By combining quality hardware, smart software, and functional design, we deliver a full solution for modern urban waste management aligned with circular-economy and smart-city principles.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Contact us today to see how our Smart Trash Bins can transform waste management in your city or company, driving a more sustainable future and more livable urban spaces.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
