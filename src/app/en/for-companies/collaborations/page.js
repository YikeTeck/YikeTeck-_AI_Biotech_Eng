import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function CollaborationsPage() {
  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Collaborations</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Explore collaboration opportunities with Yike Teck to create innovative solutions and expand your business possibilities through strategic partnerships.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">The power of collaboration</h2>
              <p className="text-lg text-gray-700 mb-6">
                We believe in the power of collaboration. By joining forces with strategic partners, we can create even more innovative and impactful solutions—combining complementary skills, resources, and visions to tackle complex challenges and seize new market opportunities.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our collaborations are built on shared values, common goals, and a commitment to excellence and innovation. Whether it is R&D projects, commercial partnerships, or joint training initiatives, we are open to exploring different collaboration formats.
              </p>
            </div>

            <div className="md:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/collaboration.webp"
                alt="Collaborations"
                width={800}
                height={600}
                quality={90}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration types */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center mb-12">Collaboration types</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Joint R&D',
                text: 'We collaborate with companies, universities, and research centers to develop innovative technologies and cutting-edge solutions, blending our technical experience with partners’ domain expertise.',
                bullets: ['Applied research projects', 'Development of innovative prototypes', 'Co-patenting of technologies'],
              },
              {
                title: 'Strategic partnerships',
                text: 'We form alliances with complementary companies to broaden the product and service offering, reach new markets, and build end-to-end solutions that deliver value to every stakeholder.',
                bullets: ['Co-development of products and services', 'Integration of complementary technologies', 'Joint go-to-market strategies'],
              },
              {
                title: 'Innovation ecosystem',
                text: 'We engage in innovation networks, accelerators, and open innovation programs, collaborating with startups, investors, and other tech ecosystem players.',
                bullets: ['Mentorship programs for startups', 'Participation in open innovation projects', 'Collaborations with incubators and accelerators'],
              },
            ].map((card) => (
              <div key={card.title} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/5 space-y-4">
                <h3 className="text-xl font-bold text-yiketeck-dark mb-1">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.text}</p>
                <ul className="space-y-2 text-gray-700">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 text-lg leading-none select-none" style={{ color: '#c22a2a' }} aria-hidden="true">
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

      {/* Benefits */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center mb-12">Benefits of collaborations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { step: '1', title: 'Faster innovation', text: 'By blending diverse skills and perspectives, we speed up the development of innovative solutions and reduce time-to-market.' },
              { step: '2', title: 'Shared resources and expertise', text: 'Collaborations let us share technical resources and infrastructure, optimizing investments and tackling more ambitious projects.' },
              { step: '3', title: 'Access to new markets', text: 'Strategic partnerships open doors to new markets and segments, leveraging partners’ networks and channels to expand globally.' },
              { step: '4', title: 'Integrated solutions', text: 'We deliver end-to-end solutions by integrating core technologies with complementary services to provide more value to customers.' },
              { step: '5', title: 'Creative synergy', text: 'Joint R&D blends unique strengths, generating solutions greater than the sum of their parts.' },
              { step: '6', title: 'Sustainable growth', text: 'Structured partnerships drive resilient growth, diversifying revenue and reducing reliance on single markets.' },
            ].map((item) => (
              <div key={item.step} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/5 space-y-3">
                <div className="h-10 w-10 rounded-full border-2 border-yiketeck-dark text-yiketeck-dark font-bold flex items-center justify-center bg-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-yiketeck-dark">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center mb-12">Our approach to collaboration</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              { step: '1', title: 'Exploration', text: 'Open dialogue to understand objectives, skills, and synergies, assessing feasibility and mutual value.' },
              { step: '2', title: 'Definition', text: 'Shared objectives, roles, and KPIs with clear governance to keep balance and transparency.' },
              { step: '3', title: 'Implementation', text: 'Working side by side with constant communication, adapting in an agile way to challenges and opportunities.' },
            ].map((item) => (
              <div key={item.step} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/5 space-y-3 text-left">
                <div className="h-10 w-10 rounded-full border-2 border-yiketeck-dark text-yiketeck-dark font-bold flex items-center justify-center bg-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-yiketeck-dark">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              At every stage we commit to a transparent, flexible, and results-oriented approach, building collaborations that create real, sustainable value for all partners involved.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-yiketeck-dark">Interested in collaborating with us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            If you have an idea for a potential collaboration or want to explore synergies, contact us today. We are always open to new partnership opportunities.
          </p>
          <Link
            href="/en/contact"
            className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
          >
            Let’s talk collaboration
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
