import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function CollaborazioniPage() {
  return (
    <main>
      <Navbar />
      
      {/* Header della pagina */}
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Collaborazioni</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Esplora le opportunità di collaborazione con Yike Teck per creare soluzioni innovative 
            e ampliare le possibilità del tuo business attraverso partnership strategiche.
          </p>
        </div>
      </section>
      
     {/* Sezione Introduttiva */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row gap-12 items-center">

      {/* Testo */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">La potenza delle collaborazioni</h2>
        <p className="text-lg text-gray-700 mb-6">
          Crediamo nella potenza della collaborazione. Unendo le forze con partner strategici, possiamo creare soluzioni 
          ancora più innovative e impattanti, combinando competenze, risorse e visioni complementari per affrontare sfide 
          complesse e cogliere nuove opportunità di mercato.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Le nostre collaborazioni si basano su valori condivisi, obiettivi comuni e un impegno verso l'eccellenza e 
          l'innovazione. Che si tratti di progetti di ricerca e sviluppo, di partnership commerciali o di iniziative 
          congiunte di formazione, siamo aperti a esplorare diverse forme di collaborazione.
        </p>
      </div>

      {/* Immagine */}
      <div className="md:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden">
        <Image 
  src="/collaboration.webp" 
  alt="Collaborazioni" 
  width={800} 
  height={600}
  quality={90} 
  className="w-full h-full object-cover"
/>
      </div>

    </div>
  </div>
</section>

      
      {/* Tipi di collaborazione */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center mb-12">Tipi di collaborazione</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'R&D Congiunti',
                text: "Collaboriamo con aziende, università e centri di ricerca per sviluppare tecnologie innovative e soluzioni all'avanguardia, combinando la nostra esperienza tecnica con le competenze specifiche dei nostri partner.",
                bullets: [
                  'Progetti di ricerca applicata',
                  'Sviluppo di prototipi innovativi',
                  'Co-brevettazione di tecnologie',
                ],
              },
              {
                title: 'Partnership Strategiche',
                text: "Creiamo alleanze strategiche con aziende complementari per ampliare l'offerta di prodotti e servizi, accedere a nuovi mercati e creare soluzioni end-to-end che generano valore per tutti gli stakeholder.",
                bullets: [
                  'Co-sviluppo di prodotti e servizi',
                  'Integrazione di tecnologie complementari',
                  'Strategie di go-to-market congiunte',
                ],
              },
              {
                title: 'Ecosistema di Innovazione',
                text: "Partecipiamo attivamente a reti di innovazione, acceleratori e programmi di open innovation, collaborando con startup, investitori e altri attori dell'ecosistema tecnologico.",
                bullets: [
                  'Programmi di mentorship per startup',
                  'Partecipazione a progetti di innovazione aperta',
                  'Collaborazioni con incubatori e acceleratori',
                ],
              },
            ].map((card) => (
              <div key={card.title} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/5 space-y-4">
                <h3 className="text-xl font-bold text-yiketeck-dark mb-1">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.text}</p>
                <ul className="space-y-2 text-gray-700">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 text-lg leading-none select-none" style={{ color: '#c22a2a' }} aria-hidden="true">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefici delle collaborazioni */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center mb-12">Benefici delle collaborazioni</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { step: '1', title: "Accelerazione dell'innovazione", text: 'Combinando competenze diverse e prospettive complementari, acceleriamo lo sviluppo di soluzioni innovative riducendo il time-to-market.' },
              { step: '2', title: 'Condivisione di risorse e competenze', text: 'Le collaborazioni permettono di condividere risorse tecniche e infrastrutture, ottimizzando investimenti e affrontando progetti più ambiziosi.' },
              { step: '3', title: 'Accesso a nuovi mercati', text: 'Partnership strategiche ci aprono a nuovi mercati e segmenti, sfruttando reti e canali dei partner per espandere la presenza globale.' },
              { step: '4', title: 'Soluzioni integrate', text: 'Creiamo soluzioni end-to-end integrando tecnologie core con servizi complementari per offrire più valore ai clienti.' },
              { step: '5', title: 'Sinergia creativa', text: 'Progetti di R&D congiunti combinano competenze uniche, generando soluzioni che superano la somma delle parti.' },
              { step: '6', title: 'Crescita sostenibile', text: 'Partnership strutturate favoriscono crescita resiliente, diversificando ricavi e riducendo la dipendenza da singoli mercati.' },
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
      
   
      
      {/* Il nostro approccio */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center mb-12">Il nostro approccio alle collaborazioni</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              { step: '1', title: 'Esplorazione', text: 'Dialogo aperto per comprendere obiettivi, competenze e sinergie, valutando la fattibilità e il valore della collaborazione.' },
              { step: '2', title: 'Definizione', text: 'Obiettivi, ruoli e KPI condivisi, con governance chiara per mantenere equilibrio e trasparenza.' },
              { step: '3', title: 'Implementazione', text: 'Lavoriamo fianco a fianco con comunicazione costante, adattandoci in modo agile a sfide e opportunità.' },
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
              In ogni fase, ci impegniamo a mantenere un approccio trasparente, flessibile e orientato ai risultati, 
              creando collaborazioni che generano valore reale e sostenibile per tutti i partner coinvolti.
            </p>
          </div>
        </div>
      </section>
      
  {/* Call to Action con pulsante grigio più chiaro e bordo bianco */}
<section className="py-16 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold mb-6 text-yiketeck-dark">Interessato a collaborare con noi?</h2>
    <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
      Se hai un'idea per una potenziale collaborazione o sei interessato a esplorare sinergie tra le nostre realtà, 
      contattaci oggi stesso. Siamo sempre aperti a nuove opportunità di partnership.
    </p>
    
    {/* Pulsante grigio più chiaro con bordo bianco che diventa rosso scuro al passaggio del mouse */}
    <a 
      href="/contatti" 
      className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
    >
      Parliamo di collaborazione
    </a>
  </div>
</section>
      
      <Footer />
    </main>
  );
}
