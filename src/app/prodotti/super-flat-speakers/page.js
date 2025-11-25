import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function SuperFlatSpeakersPage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />

      {/* Header della pagina */}
      <section className="pt-28 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h1 className="text-4xl font-bold">Super Flat Speakers</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Diffusori audio ultrasottili con qualità sonora premium per un'esperienza di ascolto perfetta.
          </p>
        </div>
      </section>

      {/* Contenuto principale */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar con info rapide */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-6">
                <div className="bg-[#f5f5f5] rounded-2xl shadow-sm overflow-hidden border border-black/5">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-yiketeck-dark flex items-center gap-2">
                      <span className="h-[2px] w-8 bg-[#c22a2a]" aria-hidden="true" />
                      Caratteristiche principali
                    </h2>
                    <ul className="space-y-4">
                      {[
                        'Ultra sottile: solo 39mm di spessore',
                        'Risposta in frequenza: 46Hz - 21kHz',
                        'Versioni attiva e passiva disponibili',
                        'Tecnologia protetta da due brevetti',
                        'Connettività Wi-Fi e Bluetooth (versione attiva)',
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
                    src="/SuperFlatSpeaker_1.webp" 
                    alt="Super Flat Speaker" 
                    width={600}
                    height={256}
                    className="w-full h-full object-cover"
                    quality={85}
                  />
                </div>
                
                <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-black/5">
                  <Image 
                    src="/SuperFlatSpeaker_2.webp" 
                    alt="Super Flat Speaker Design" 
                    width={600}
                    height={256}
                    className="w-full h-full object-cover"
                    quality={85}
                  />
                </div>
              </div>
            </div>
            
            {/* Contenuto principale */}
            <div className="lg:w-2/3">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Super Flat Audio Speakers</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Il nostro profondo know-how nell'ingegneria audio ci spinge a esplorare soluzioni completamente innovative per la progettazione di apparecchi destinati a questo settore. I nostri prodotti sono progettati per garantire una grande usabilità, unita a un effetto 'WoW!', offrendo prestazioni che, a prima vista, sembrano impossibili date le dimensioni e le geometrie estremamente ridotte. Il tutto è arricchito dal design italiano.
                </p>
                
                <div className="bg-[#f5f5f5] p-6 rounded-2xl my-8 border border-black/5">
                  <p className="text-gray-700 italic border-l-4 border-yiketeck-red pl-4">
                    "Un diffusore acustico dalle dimensioni di 600x390x39 mm, che offre prestazioni straordinarie nonostante il suo spessore di soli 39 mm! La risposta in frequenza si estende fino a 46 Hz in basso e raggiunge i 21 kHz in alto."
                  </p>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Evoluzione e Innovazione</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  La prima generazione, è stata presentata con il brand "deeversa" sin dal 2019. Attualmente, con la seconda generazione, siamo riusciti a compattare ulteriormente le dimensioni, raggiungendo un livello di qualità audio superiore. Questa tecnologia innovativa, utilizzata nella seconda serie, è protetta da due brevetti.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Con questa seconda serie, presentiamo un diffusore acustico dalle dimensioni di 600x390x39 mm, che offre prestazioni straordinarie nonostante il suo spessore di soli 39 mm! La risposta in frequenza si estende fino a 46 Hz in basso e raggiunge i 21 kHz in alto. Grazie alle innovative soluzioni progettuali che ne hanno guidato la concezione e la costruzione, questo diffusore sembra quasi sfidare le leggi della fisica.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Versione Attiva</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Wireless con Wi-Fi e Bluetooth</li>
                      <li>• Potenza: 100W</li>
                      <li>• Controllo tramite app dedicata</li>
                      <li>• Streaming audio multi-room</li>
                    </ul>
                  </div>
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Versione Passiva</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Compatibile con amplificatore dedicato</li>
                      <li>• Impedenza ottimizzata</li>
                      <li>• Connettori di alta qualità</li>
                      <li>• Design minimalista</li>
                    </ul>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Tecnologia Brevettata</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  I diffusori Super Flat Speakers sono disponibili sia in versione attiva che passiva. La versione attiva è wireless, con connettività Wi-Fi e Bluetooth, e una potenza di 100W. L'intero progetto è stato sviluppato per offrire prestazioni sonore di alto livello, in grado di soddisfare anche gli audiofili più esigenti.
                </p>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Design Italiano</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Oltre alle prestazioni audio eccezionali, i nostri Super Flat Speakers vantano un design italiano che li rende oggetti di arredo eleganti e raffinati. La loro sottigliezza permette di integrarli in qualsiasi ambiente, sia domestico che professionale, senza compromettere lo spazio o l'estetica della stanza.
                </p>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Applicazioni</h2>
                <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm mb-8 border border-black/5">
                  <h3 className="text-xl font-bold mb-3">I Super Flat Speakers sono ideali per:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Home Theater di alta qualità</li>
                    <li>• Installazioni audio in spazi ridotti</li>
                    <li>• Sistemi hi-fi </li>
                    <li>• Ambienti di design dove l'estetica è importante</li>
                    <li>• Showroom, gallerie d'arte e spazi espositivi</li>
                    <li>• Ristoranti e hotel</li>
                  </ul>
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
