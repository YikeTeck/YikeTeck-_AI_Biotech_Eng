import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function FlomindyPage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="h-15 w-auto mb-2">
            <Image
              src="/Flomindy_logo_black_lock1.webp"
              alt="Flomindy Logo"
              width={300}
              height={100}
              className="h-full w-auto"
              quality={90}
            />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">App to enhance cognitive performance and concentration.</p>
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
                        'Supports EEG frequencies from 3 to 19Hz',
                        'Runs quietly in the background',
                        'No extra devices needed',
                        'Built on scientific studies',
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
                    src="/Flomindy_1.webp"
                    alt="Flomindy App"
                    width={600}
                    height={256}
                    className="w-full h-full object-cover"
                    quality={85}
                  />
                </div>

                <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-black/5">
                  <Image
                    src="/Flomindy_2.webp"
                    alt="Flomindy Interface"
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
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">What is Flomindy?</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Flomindy is a patent-pending app that uses display flicker (on PC, tablet, or smartphone) to synchronize
                  brainwaves without extra devices like glasses or headsets. It runs in the background so you keep using your
                  device as usual while your cognitive state is optimized.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Install it, set the activity you plan to do, and the app works discreetly to improve focus, productivity, and
                  concentration without interruptions.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  The app leverages multiple EEG frequencies to sync the brain according to the task. You can work, study, or
                  relax while it stimulates the most suitable frequency, boosting productivity, creativity, focus, or
                  problem-solving.
                </p>
                <p className="mb-8 text-gray-700 leading-relaxed">
                  Flomindy is rooted in scientific studies showing how the brain can be synchronized through light pulses. The
                  flicker happens in the background so you can keep using your device uninterrupted.
                </p>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">How it works and frequencies</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Flomindy supports EEG frequencies from 3 to 19Hz, tailored to specific mental performance aspects:
                </p>
                <div className="bg-[#f5f5f5] p-6 rounded-2xl mb-8 border border-black/5">
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 pr-4 font-bold text-yiketeck-dark w-1/3">Delta/Theta (3-6 Hz):</td>
                        <td className="py-3">Relaxation and deep sleep; recovery and stress reduction.</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 pr-4 font-bold text-yiketeck-dark">Theta (6-9 Hz):</td>
                        <td className="py-3">Deep relaxation and creative intuition.</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 pr-4 font-bold text-yiketeck-dark">Low Alpha (9-12 Hz):</td>
                        <td className="py-3">Learning and memory; effortless concentration.</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 pr-4 font-bold text-yiketeck-dark">High Alpha (12-15 Hz):</td>
                        <td className="py-3">Improves attention and efficiency in complex mental tasks.</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-bold text-yiketeck-dark">Beta (15-19 Hz):</td>
                        <td className="py-3">Stimulates focus and problem solving.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Who is Flomindy for?</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Designed to support a wide range of mental activities for anyone spending long hours at a computer or needing
                  natural cognitive optimization:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: 'Professionals and office workers',
                      text: 'Keep concentration high during long PC sessions—ideal for managers, admins, and knowledge workers.',
                    },
                    {
                      title: 'Students and researchers',
                      text: 'Improve focus while studying and optimize learning when assimilating large amounts of information.',
                    },
                    {
                      title: 'Designers and creatives',
                      text: 'Stimulate creativity and idea generation for design, writing, and artistic work.',
                    },
                    {
                      title: 'Problem-solvers',
                      text: 'Engineers, developers, and technicians can stay focused and productive on complex tasks.',
                    },
                    {
                      title: 'Relaxation and recovery',
                      text: 'Frequencies for relaxation to lower stress and support mental well-being.',
                    },
                  ].map((card) => (
                    <div key={card.title} className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                      <h3 className="text-xl font-bold text-yiketeck-dark mb-3">{card.title}</h3>
                      <p className="text-gray-700">{card.text}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">How to use Flomindy</h2>
                <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm mb-8 border border-black/5">
                  <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                    <li>Select the frequency based on your task (relaxation, learning, focus, problem solving).</li>
                    <li>Adjust flicker intensity depending on the depth you want.</li>
                    <li>Set a timer for how long the effect should last (optional).</li>
                    <li>Hit “Start” to run the background flicker while you use the device normally.</li>
                  </ol>
                  <p className="mt-4 text-gray-700">
                    Once activated, Flomindy runs in the background with a discreet icon showing the active frequency, letting
                    you continue without interruptions.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Why it’s innovative?</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Flomindy works invisibly while you use your device, boosting cognition with zero extra effort. No bulky glasses
                  or headsets required, and it adapts automatically to what you’re doing.
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Grounded in strong science, it leverages brain entrainment to improve concentration, focus, and productivity
                  while you work or unwind.
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Flomindy builds on years of research into synchronizing brain frequencies via entrainment, led by Andrew Mario
                  Cincotto. The first patent in this area dates back to 2004, envisioning a “study station” with special lamps,
                  binaural audio, and negative ions.
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Today we’ve brought that vision into an app usable anywhere, on any device, working discreetly to provide real,
                  tangible support.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 border-t border-gray-200">
        <p className="text-lg text-gray-700">
          For more information, visit the official site{' '}
          <a href="https://www.flomindy.com" className="text-yiketeck-red font-medium hover:underline">
            www.flomindy.com
          </a>
        </p>
      </div>

      <Footer />
    </main>
  );
}
