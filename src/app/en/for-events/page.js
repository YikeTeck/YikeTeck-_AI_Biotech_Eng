import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function EventsPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Speeches, events and updates</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            See how Yike Teck can add value to your events with technical speeches, participation in fairs, and stay updated with our latest work.
          </p>
        </div>
      </section>

      <section id="speech" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Request a technical speech</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our experts are available for talks on AI, advanced technologies and innovation. Enrich your event with solid, immediately applicable content.
              </p>

              <h3 className="text-xl font-bold mb-4">Themes</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yiketeck-red mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Artificial Intelligence and Machine Learning</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yiketeck-red mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Smart City and Urban Technologies</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yiketeck-red mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Technological Innovation and Design</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yiketeck-red mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Future of Technology and Emerging Trends</span>
                </li>
              </ul>

              <Link
                href="/en/contact"
                className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
              >
                Request a speech
              </Link>
            </div>

            <div className="md:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/speech.webp"
                alt="Technical Speech"
                width={800}
                height={600}
                quality={90}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Participation in events</h2>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
            We attend key tech and industrial events. We can speak, bring demos or co-design a dedicated slot for your event.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-yiketeck-red rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Trade shows</h3>
              <p className="text-gray-600">
                Presence at major tech fairs to present our solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-yiketeck-red rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Tech conferences</h3>
              <p className="text-gray-600">
                Talks on emerging technologies, AI and digital innovation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-yiketeck-red rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Workshops</h3>
              <p className="text-gray-600">
                Short labs with guided exercises and ready-to-use materials for participants.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/en/contact"
              className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
            >
              Contact us for details
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-yiketeck-dark">Want to stay updated?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            Contact us to receive information about our projects, innovation work and participation in events.
          </p>
          <a
            href="/en/contact"
            className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
          >
            Contact us
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
