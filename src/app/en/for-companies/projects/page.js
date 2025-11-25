import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  const skills = [
    {
      title: 'Industrial design',
      text: 'We build innovative solutions for industrial automation, energy efficiency, and process optimization—controlling every step from concept to delivery.'
    },
    {
      title: 'Embedded systems',
      text: 'We design embedded devices for IoT, industrial control, and consumer electronics. Our HOROMA platform offers advanced real-time visualization and control.'
    },
    {
      title: 'Innovative design',
      text: 'We combine aesthetics and function to create products that solve technical problems and deliver great user experiences, with intuitive interfaces and ergonomic design.'
    },
    {
      title: 'Mobile technology',
      text: 'We build mobile and web apps that integrate seamlessly with hardware, creating full ecosystems for monitoring and remote control.'
    },
    {
      title: 'Custom software',
      text: 'We tailor software to your business needs—from process automation to data management—using the latest AI and machine learning technologies.'
    },
    {
      title: 'Cybersecurity',
      text: 'Security sits at the core. We apply best practices to protect systems and data against the latest threats.'
    }
  ];

  const steps = [
    {
      step: '1',
      title: 'Consultation & analysis',
      text: 'We start with a detailed session to understand needs, goals, and challenges. We assess requirements, evaluate feasibility, and pinpoint the best strategy.'
    },
    {
      step: '2',
      title: 'Proposal & planning',
      text: 'We deliver a detailed proposal with technical specs, timelines, budget, and deliverables. Once approved, we build a project plan with clear milestones and resourcing.'
    },
    {
      step: '3',
      title: 'Design & prototyping',
      text: 'Our engineers and designers create detailed concepts and working prototypes—covering hardware design, software development, and system integration to validate function and usability.'
    },
    {
      step: '4',
      title: 'Development & testing',
      text: 'We execute using agile methods for flexibility and adaptability. Every component is rigorously tested to guarantee quality, reliability, and security.'
    },
    {
      step: '5',
      title: 'Delivery & support',
      text: 'We complete with precise delivery, full documentation, training, and implementation support—plus ongoing post-project assistance to ensure lasting value.'
    }
  ];

  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Commission projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            We turn your ideas into reality. Our engineers and designers build custom tech solutions for every need of your business.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">From vision to reality</h2>
              <p className="text-lg text-gray-700 mb-6">
                Got an innovative idea or a tough tech challenge? Our engineers and designers are ready to turn your vision into reality. We deliver tailored solutions for every need, combining advanced technical skills with creativity and attention to detail.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Every project follows a proven methodology to ensure high quality, on-time delivery, and customer satisfaction. From requirements analysis to final handoff, we stand by you at every stage.
              </p>
            </div>
            <div className="relative h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden w-full md:w-1/2">
              <Image
                src="/project_company.webp"
                alt="Custom projects"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={90}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center mb-12">Our expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((card) => (
              <div key={card.title} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/5">
                <h3 className="text-xl font-bold text-yiketeck-dark mb-3">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center">Our process</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((item) => (
              <div key={item.step} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/5 flex gap-4">
                <span className="h-10 w-10 rounded-full bg-white text-yiketeck-red font-bold flex items-center justify-center flex-shrink-0 border border-yiketeck-red/60">
                  {item.step}
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-yiketeck-dark">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yiketeck-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your idea and see how we can help you bring it to life. Our experts are ready to listen and propose tailored solutions.
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
