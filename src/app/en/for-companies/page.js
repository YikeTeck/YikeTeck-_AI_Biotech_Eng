import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function ForCompaniesPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">For Companies</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Innovative technological solutions for your business. Explore our offers to commission projects, source technology and build strategic collaborations.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-yiketeck-dark">Our solutions for your business</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver a wide range of services: custom engineering, technology sourcing and strategic partnerships to support your innovation projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="relative h-64 bg-gray-200">
                <Image
                  src="/project_1.webp"
                  alt="Projects"
                  width={600}
                  height={256}
                  className="w-full h-full object-cover"
                  quality={85}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-yiketeck-dark mb-3">Commission projects</h3>
                <p className="text-gray-600 mb-6">
                  You have an innovative idea or a tech challenge? Our engineers and designers turn your vision into reality.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom engineering projects</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Innovative and functional design</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cutting-edge technological solutions</span>
                  </li>
                </ul>
                <Link
                  href="/en/for-companies/projects"
                  className="inline-flex items-center text-yiketeck-red hover:text-red-700 font-medium"
                >
                  Learn more
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="relative h-64 bg-gray-200">
                <Image
                  src="/tech_sourcing.webp"
                  alt="Technology Sourcing"
                  width={600}
                  height={256}
                  className="w-full h-full object-cover"
                  quality={85}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-yiketeck-dark mb-3">Technology sourcing</h3>
                <p className="text-gray-600 mb-6">
                  Looking for innovative technologies? Our network helps identify and supply the most advanced solutions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access to the latest technologies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Global network of technology partners</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Customized solutions for every need</span>
                  </li>
                </ul>
                <Link
                  href="/en/for-companies/sourcing"
                  className="inline-flex items-center text-yiketeck-red hover:text-red-700 font-medium"
                >
                  Learn more
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="relative h-64 bg-gray-200">
                <Image
                  src="/collaborations_1.webp"
                  alt="Collaborations"
                  width={600}
                  height={256}
                  className="w-full h-full object-cover"
                  quality={85}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-yiketeck-dark mb-3">Collaborations</h3>
                <p className="text-gray-600 mb-6">
                  We believe in collaboration: strategic partners allow more innovative and impactful solutions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Joint research and development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Strategic partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Complementary skills integration</span>
                  </li>
                </ul>
                <Link
                  href="/en/for-companies/collaborations"
                  className="inline-flex items-center text-yiketeck-red hover:text-red-700 font-medium"
                >
                  Learn more
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-yiketeck-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us to discuss your needs and discover how Yike Teck can help you reach your technological goals.
          </p>
          <Link
            href="/en/contact"
            className="px-8 py-3 bg-white text-yiketeck-red rounded-full hover:bg-gray-100 transition duration-300 font-medium"
          >
            Contact us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
