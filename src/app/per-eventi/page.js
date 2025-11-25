import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function EventsPage() {
  return (
    <main>
      <Navbar />

      {/* Header della pagina */}
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Speech, eventi e novità</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Scopri come Yike Teck può arricchire i tuoi eventi con speech tecnici,
            partecipazioni a fiere e rimani aggiornato sulle nostre ultime innovazioni tecnologiche.
          </p>
        </div>
      </section>

      {/* Sezione Richiedi uno Speech */}
      <section id="speech" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Colonna Testo */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Richiedi uno Speech Tecnico</h2>
              <p className="text-lg text-gray-600 mb-6">
                I nostri esperti sono disponibili per interventi su innovazioni, AI, tecnologie avanzate
                e molto altro. Arricchisci il tuo evento con approfondimenti tecnici di alto livello.
              </p>

              <h3 className="text-xl font-bold mb-4">Aree tematiche</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yiketeck-red mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Intelligenza Artificiale e Machine Learning</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yiketeck-red mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Smart City e Tecnologie Urbane</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yiketeck-red mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Innovazione Tecnologica e Design</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yiketeck-red mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Futuro della Tecnologia e Tendenze Emergenti</span>
                </li>
              </ul>

              <Link
                href="/contatti"
                className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
              >
                Richiedi uno speech
              </Link>
            </div>

            {/* Colonna Immagine */}
            <div className="md:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/speech.webp"
                alt="Speech Tecnico"
                width={800}
                height={600}
                quality={90}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Tipologie di Eventi */}
      <section id="fiere" className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Partecipazione a Eventi</h2>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
            Yike Teck partecipa regolarmente ai principali eventi del settore tecnologico.
            Contattaci per conoscere le nostre prossime partecipazioni o per invitarci a un tuo evento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-yiketeck-red rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fiere di Settore</h3>
              <p className="text-gray-600">
                Partecipiamo alle principali fiere tecnologiche nazionali e internazionali per presentare le nostre soluzioni innovative.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-yiketeck-red rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Conferenze Tech</h3>
              <p className="text-gray-600">
                I nostri esperti intervengono regolarmente in conferenze sulle tecnologie emergenti, AI e innovazione digitale.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-yiketeck-red rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Workshop Formativi</h3>
              <p className="text-gray-600">
                Organizziamo e partecipiamo a workshop formativi per condividere conoscenze e best practices nel campo tecnologico.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contatti"
              className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
            >
              Contattaci per informazioni
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section semplificata con grigio più chiaro */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-yiketeck-dark">Vuoi rimanere aggiornato?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            Contattaci per ricevere informazioni sui nostri progetti, innovazioni e partecipazioni a eventi.
          </p>
          <a
            href="/contatti"
            className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
          >
            Contattaci
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
