import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            We combine human sensoriality, science and AI to build systems used every day.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-yiketeck-dark">Key points</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-yiketeck-red mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Founded in 2018</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-yiketeck-red mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Based in Dongguan, Guangdong</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-yiketeck-red mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">AI-first: proprietary platforms and protocols</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-yiketeck-red mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Support and technology sourcing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-yiketeck-red mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Portfolio of patented products</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-64 bg-gray-200">
                    <Image 
                      src="/Yike_Teck_company1.webp" 
                      alt="Yike Teck Headquarters" 
                      width={800} 
                      height={600}
                      quality={90} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/AI_B1.webp" 
                    alt="Interfaces and code" 
                    width={800} 
                    height={600}
                    quality={90} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md mt-6">
                  <Image
                    src="/Who_A.png.webp"
                    alt="Yike Teck Team"
                    width={800}
                    height={600}
                    quality={90}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Our story</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Founded in 2018, Yike Teck was born with a simple, ambitious idea: combine human sensoriality, science and AI into concrete systems used every day. From strong roots in technology and design, we worked on audio engineering, HMI, and progressively on proprietary AI architectures that connect these domains coherently.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Based in Dongguan, in Guangdong’s tech hub, close to Shenzhen, Guangzhou, Guzhen and Hong Kong. This location and our European background make a natural bridge between Western R&D, Eastern manufacturing and AI systems living inside real products: embedded devices, smart city solutions, biotech and robotics applications.
                </p>
                
                <div className="bg-yiketeck-light p-6 rounded-lg my-8">
                  <p className="text-gray-700 italic border-l-4 border-yiketeck-red pl-4">
                    "At Yike Teck we create value by building proprietary AI systems and platforms. We listen to your challenges and turn them into concrete solutions where engineering and AI work together."
                  </p>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Technological innovation</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Our portfolio includes advanced electronics, intelligent systems and software for cognitive enhancement. We work on IoT for smart cities, evolved audio systems, next-generation AI platforms and applications like Flomindy to boost mental performance and quality of work. Many technologies are patented or under protection, reflecting our continuous R&D effort.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  We invest in proprietary AI: protocols, platforms and advanced software to increase decision and operational effectiveness. Solutions like ComplexDot and Clevidot have one goal: use AI to amplify human capabilities, reduce complexity and create work contexts that are efficient, sustainable and rewarding. Technology only matters if it truly improves how we think, design and build the future.
                </p>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Our skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-yiketeck-red mb-3">Artificial Intelligence</h3>
                    <p className="text-gray-700">
                      Proprietary algorithms and platforms to optimize processes, predictive analysis and human-machine interaction.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-yiketeck-red mb-3">Audio Engineering</h3>
                    <p className="text-gray-700">
                      Innovative audio solutions, from ultra-thin speakers to advanced systems for commercial and residential spaces, with focus on quality and design.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-yiketeck-red mb-3">Smart Cities & IoT</h3>
                    <p className="text-gray-700">
                      Intelligent devices and systems for the cities of the future: lighting, waste management, and urban efficiency.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-yiketeck-red mb-3">Cognitive Enhancement</h3>
                    <p className="text-gray-700">
                      Software and applications to improve focus, memory and performance, based on solid scientific principles.
                    </p>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Our services</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  With our experience in China and a strong network of tech partners, we provide support to global companies in:
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-yiketeck-red">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Technical consulting and design:</strong> from idea to working prototype.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Strategic sourcing:</strong> find and qualify components and semi-finished parts with quality and lead times under control.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Product development and design:</strong> advanced functionality with distinctive design and proper documentation.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Production support and quality control:</strong> oversight of the full manufacturing process to meet the highest standards.</span>
                    </li>
                  </ul>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Strategic partnerships</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  For procurement, logistics and storage we closely collaborate with Shamana (<a href="https://www.shamana-china.com" className="text-yiketeck-red hover:underline" target="_blank" rel="noopener noreferrer">www.shamana-china.com</a>), also in Dongguan.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  This partnership lets us deliver end-to-end service to our clients, ensuring efficiency and quality from design to final delivery.
                </p>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Our commitment to AI</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  We believe AI is one of the most promising frontiers to improve work performance and human-machine interaction.
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Our R&D team works on new AI protocols to:
                </p>
                <div className="bg-yiketeck-light p-6 rounded-lg mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Optimize decision processes in complex environments</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Enhance cognitive capabilities with adaptive software</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Create more intuitive and responsive human-machine interfaces</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Develop predictive systems for resource optimization</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Implement intelligent automation for smart cities</span>
                    </li>
                  </ul>
                </div>
                
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Our philosophy: technology must amplify human abilities, not replace them. Products and services are designed with deep understanding of human needs and with the goal of creating a positive, lasting impact.
                </p>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Our vision</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  The future is deeper integration between humans and technology. We aim to be protagonists, with products and services that make this integration natural and beneficial.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  We offer our solutions and expertise to create tangible, lasting results—ready to face tomorrow’s challenges with cutting-edge tools today.
                </p>
                
                <hr className="border-t-2 border-yiketeck-red w-24 my-8" />
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">The meaning of our name</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  In Chinese, <strong>"Yi Ke" (意科)</strong> combines <em>meaning/intent</em> (意) and <em>science/technology</em> (科), conveying “technology with purpose.” It matches our philosophy: tech with real meaning in people’s lives.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  The final <strong>K</strong> in "Teck" is intentional: balancing the K in "Yike" and evoking the <strong>transistor symbol</strong> in our logo, built by mirroring and integrating the initials <strong>Y</strong> and <strong>T</strong>. The transistor, invented in 1947, revolutionized electronics and underpins modern tech.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  This reference underlines our bond with innovation’s history and our commitment to continue along that path, making technology the core of our solutions.
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
