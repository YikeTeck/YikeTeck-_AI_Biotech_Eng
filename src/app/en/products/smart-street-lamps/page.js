import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function SmartStreetLampsPage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h1 className="text-4xl font-bold">IoT Smart Public Lighting</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Solar-powered smart street lamps with IoT technology for more efficient, sustainable cities.
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
                        'IoT integration for remote control',
                        'Hybrid mode with battery and grid power',
                        'Energy savings up to 40%',
                        'Motion and ambient light sensors',
                        'Monitoring and predictive maintenance',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#c22a2a] flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative h-64 bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5">
                  <Image
                    src="/Smart_Iot_Light_1.webp"
                    alt="Smart street lamps"
                    width={600}
                    height={256}
                    className="w-full h-full object-contain"
                    quality={85}
                  />
                </div>

                <div className="relative h-64 bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5">
                  <Image
                    src="/Smart_Iot_Light2.webp"
                    alt="Smart street lamps"
                    width={600}
                    height={256}
                    className="w-full h-full object-contain"
                    quality={85}
                  />
                </div>
              </div>
            </div>

            {/* Article */}
            <div className="lg:w-2/3">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">The future of street lighting</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  IoT-based street lighting integrates sensors, communication networks, and management software to monitor and adjust street lamps in real time. Lamps become “smart,” adapting brightness automatically to environmental conditions, vehicles or pedestrians, and daylight—optimizing safety and energy efficiency.
                </p>

                <div className="bg-[#f5f5f5] p-6 rounded-2xl my-8 border border-black/5">
                  <p className="text-gray-700 italic border-l-4 border-yiketeck-red pl-4">
                    “A lighting system that adapts to the city’s real needs, cutting energy consumption and improving urban quality of life.”
                  </p>
                </div>

                <p className="mb-6 text-gray-700 leading-relaxed">
                  In case of faults, the system detects issues for timely maintenance and reduced downtime. Predictive maintenance lowers operating costs and ensures more reliable lighting for citizens.
                </p>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Innovative hybrid power</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  A distinctive point is hybrid operation leveraging <strong>energy storage</strong>: the lamp uses stored battery energy first, then falls back to the grid. This works in any urban context, regardless of grid accessibility, delivering major savings—cutting grid draw by 40%+ for public entities adopting the technology.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Energy benefits</h3>
                    <ul className="space-y-2">
                      <li>• Energy consumption reduced up to 40%</li>
                      <li>• Priority use of stored solar energy</li>
                      <li>• Less grid stress during peak hours</li>
                      <li>• Partial or full energy independence</li>
                      <li>• Lower CO₂ emissions</li>
                    </ul>
                  </div>
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Smart functions</h3>
                    <ul className="space-y-2">
                      <li>• Automatic brightness control</li>
                      <li>• Vehicle and pedestrian detection</li>
                      <li>• Remote diagnostics and predictive maintenance</li>
                      <li>• Integration with other urban IoT systems</li>
                      <li>• Centralized control dashboard</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Centralized management and IoT integration</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Centralized management lets you collect data for predictive analytics, boosting overall efficiency and integrating with other urban infrastructure such as air-quality monitoring. With motion and light sensors, lamps adjust illumination in line with local regulations, further optimizing energy consumption.
                </p>

                <p className="mb-6 text-gray-700 leading-relaxed">
                  Multiple mounting options and adjustable tilt make deployment easy across urban settings—from main roads to parks, residential zones to industrial areas—supporting any smart-city project.
                </p>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Available models</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Our smart streetlamp range offers several models to fit every public-lighting need, from small paths to large roads:
                </p>

                <div className="bg-[#f5f5f5] p-5 rounded-2xl shadow-sm border border-black/5 mb-8" style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#1f2937', color: '#fff', textAlign: 'left' }}>
                        {['Reference', 'Power (W)', 'Battery capacity', 'Color temp. (xx00K)', 'PCB LED number', 'Luminous flux (lm)', 'Working temperature', 'Dimensions AxBxC (mm)', 'Weight (Kg)'].map((h) => (
                          <th key={h} style={{ padding: '12px 16px', fontWeight: 600, borderBottom: '1px solid #374151' }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Solar street lamp IOTSOL030', '30W', '230.4Wh-18Ah', '30-40-50', '108', '6000', '0 to 50°C', '703x301x250', '7.3±0.3'],
                        ['Solar street lamp IOTSOL040', '40W', '307.2Wh-24Ah', '30-40-50', '216', '8000', '0 to 50°C', '910x429x291', '13.9±0.3'],
                        ['Solar street lamp IOTSOL050', '50W', '384W-30Ah', '30-40-50', '216', '10000', '0 to 50°C', '910x429x291', '14.4±0.3'],
                        ['Solar street lamp IOTSOL060', '60W', '460.8Wh-36Ah', '30-40-50', '216', '12000', '0 to 50°C', '910x429x291', '15.0±0.3'],
                      ].map((row, idx) => (
                        <tr key={row[0]} style={{ backgroundColor: idx % 2 === 0 ? '#fff' : '#f9fafb' }}>
                          {row.map((cell) => (
                            <td key={cell} style={{ padding: '12px 16px', borderBottom: '1px solid #e5e7eb' }}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Applications and use cases</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  {[
                    { title: 'Urban roads', text: 'Efficient lighting that adapts automatically to traffic intensity and weather.' },
                    { title: 'Parks and green areas', text: 'Ambient lighting that boosts safety and usability of green spaces at night.' },
                    { title: 'Residential zones', text: 'Visual comfort and safety for pedestrians and vehicles with reduced consumption.' },
                    { title: 'Industrial areas', text: 'Reliable lighting for production and logistics areas with remote monitoring.' },
                    { title: 'Parking and campuses', text: 'Intelligent management of parking lots and campuses with presence sensors.' },
                    { title: 'Bike lanes', text: 'Optimized lighting for cycling routes with activation on presence.' },
                  ].map((card) => (
                    <div key={card.title} className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                      <h3 className="text-lg font-bold text-yiketeck-dark mb-3">{card.title}</h3>
                      <p className="text-gray-700">{card.text}</p>
                    </div>
                  ))}
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
