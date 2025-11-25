import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function SourcingPage() {
  return (
    <main>
      <Navbar />
      
     {/* Header della pagina */}
<section className="pt-28 pb-10 bg-yiketeck-light">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-bold mb-4">Sourcing Tecnologico</h1>
    <p className="text-lg text-gray-600 max-w-3xl">
      Accedi alle tecnologie più innovative per il tuo business grazie alla nostra rete globale
      di partner e alla nostra presenza diretta nei principali hub produttivi mondiali.
    </p>
  </div>
</section>

{/* Sezione Introduttiva */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row gap-12 items-center">
      
      {/* Testo */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Il partner ideale per il tuo approvvigionamento tecnologico</h2>
        <p className="text-lg text-gray-700 mb-6">
          Sei alla ricerca di tecnologie innovative per il tuo business? La nostra rete globale ci permette di individuare e 
          fornire le soluzioni più avanzate per soddisfare le tue esigenze specifiche, garantendo qualità, affidabilità e prezzi competitivi.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Grazie alla nostra presenza diretta in Cina, in particolare a Dongguan, uno dei principali hub tecnologici e produttivi al mondo, 
          possiamo offrirti un accesso privilegiato a componenti, tecnologie e soluzioni all'avanguardia, eliminando intermediari e 
          garantendo processi di approvvigionamento efficienti e trasparenti.
        </p>
      </div>

      {/* Immagine */}
      <div className="md:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden">
        <Image 
  src="/Dongguan_sourcing.webp" 
  alt="Sourcing Tecnologico" 
  width={800} 
  height={600}
  quality={90} 
  className="w-full h-full object-cover"
/>
      </div>

    </div>
  </div>
</section>

      
      {/* I nostri servizi */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center mb-12">I nostri servizi di sourcing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Ricerca e Selezione Fornitori',
                text: "Identifichiamo i migliori fornitori di tecnologie e componenti attraverso un processo di valutazione rigoroso basato su criteri di qualità, affidabilità, capacità produttiva, conformità normativa e sostenibilità.",
                bullets: [
                  'Due diligence completa sui fornitori',
                  'Valutazione tecnologica delle soluzioni',
                  'Analisi comparativa multi-fornitore',
                ],
              },
              {
                title: 'Gestione degli Acquisti',
                text: "Gestiamo l'intero processo di acquisto, dalla negoziazione dei contratti alla gestione degli ordini, ottimizzando i costi e garantendo la massima trasparenza in ogni fase del processo.",
                bullets: [
                  'Negoziazione contratti e prezzi',
                  'Gestione ordini e pianificazione',
                  "Ottimizzazione dei costi di approvvigionamento",
                ],
              },
              {
                title: 'Controllo Qualità',
                text: 'Implementiamo rigorosi processi di controllo qualità in ogni fase della catena di fornitura, garantendo che tutti i componenti e le tecnologie rispettino gli standard più elevati e le specifiche richieste.',
                bullets: [
                  'Ispezioni pre-spedizione',
                  'Test di conformità e prestazioni',
                  'Audit dei processi produttivi',
                ],
              },
              {
                title: 'Logistica e Stoccaggio',
                text: "Offriamo soluzioni logistiche complete, dall'imballaggio alla spedizione, fino allo stoccaggio temporaneo, garantendo consegne puntuali e gestione efficiente dell'inventario.",
                bullets: [
                  'Gestione completa della supply chain',
                  'Soluzioni di imballaggio personalizzate',
                  'Monitoraggio spedizioni in tempo reale',
                ],
              },
            ].map((card) => (
              <div key={card.title} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/5 space-y-4">
                <h3 className="text-xl font-bold text-yiketeck-dark">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.text}</p>
                <ul className="space-y-2 text-gray-700">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 text-lg leading-none select-none text-[#c22a2a]" aria-hidden="true">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
{/* Partnership con Shamana - Versione semplificata */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row gap-12 items-center">

      {/* Testo */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Partnership Strategica</h2>
        <h3 className="text-xl font-bold text-yiketeck-dark mb-4">Shamana - Il nostro partner per logistica e approvvigionamento</h3>
        <p className="text-lg text-gray-700 mb-6">
          Per l'approvvigionamento, la logistica e lo stoccaggio, collaboriamo strettamente con Shamana (<a href="https://www.shamana-china.com" className="text-yiketeck-dark underline" target="_blank" rel="noopener noreferrer">www.shamana-china.com</a>), 
          una rinomata azienda situata anch'essa a Dongguan, a pochi passi dai nostri uffici.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Questa collaborazione strategica ci permette di offrire un servizio completo e integrato, dalla ricerca 
          e selezione dei fornitori fino alla gestione della logistica e dello stoccaggio, garantendo efficienza, 
          affidabilità e tempi di consegna ridotti.
        </p>

        <ul className="space-y-3 mb-8">
          {[
            'Magazzini strategici a Dongguan',
            'Gestione inventario avanzata',
            'Soluzioni logistiche globali',
            'Gestione doganale e documentale',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 text-lg leading-none select-none text-[#c22a2a]" aria-hidden="true">•</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <a 
          href="https://www.shamana-china.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-700 transition duration-300"
        >
          Visita il sito di Shamana
        </a>
      </div>

      {/* Immagine Partner Shamana */}
      <div className="md:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden">
        <Image 
  src="/Shamana_1__.webp" 
  alt="Partner Shamana" 
  width={800} 
  height={600}
  quality={90} 
  className="w-full h-full object-cover"
/>
      </div>

    </div>
  </div>
</section>

      
      {/* Vantaggi del nostro sourcing */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center mb-12">Vantaggi del nostro sourcing tecnologico</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Riduzione dei tempi',
                text: 'La nostra presenza diretta nei principali hub produttivi e la collaborazione con Shamana ci permettono di ridurre significativamente i tempi di approvvigionamento, eliminando intermediari e semplificando i processi.'
              },
              {
                title: 'Ottimizzazione dei costi',
                text: 'Grazie alla nostra rete globale e alle partnership strategiche, possiamo negoziare condizioni vantaggiose e ottimizzare i costi di approvvigionamento, garantendo il miglior rapporto qualità-prezzo.'
              },
              {
                title: 'Garanzia di qualità',
                text: 'Il nostro rigoroso processo di selezione dei fornitori e i controlli qualità a tutti i livelli della catena di fornitura garantiscono che ogni componente rispetti gli standard più elevati.'
              },
              {
                title: 'Accesso globale',
                text: 'La nostra rete internazionale ci permette di accedere alle tecnologie più innovative e ai componenti più avanzati a livello globale, indipendentemente dalla loro origine geografica.'
              },
              {
                title: 'Flessibilità e scalabilità',
                text: 'Le nostre soluzioni di sourcing si adattano alle dimensioni e alle esigenze del tuo business, scalando in base ai volumi e garantendo la massima flessibilità in ogni fase del processo.'
              },
              {
                title: 'Supporto tecnico locale',
                text: 'Offriamo un supporto tecnico completo con personale altamente qualificato, capace di assistere i clienti nella scelta delle tecnologie più adatte alle loro esigenze specifiche.'
              }
            ].map((item) => (
              <div key={item.title} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/5">
                <h3 className="text-xl font-bold text-yiketeck-dark mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Processo di Sourcing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center">Il nostro processo di sourcing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Analisi Requisiti', text: 'Comprendiamo le tue esigenze specifiche e definiamo insieme le specifiche tecniche e i volumi richiesti.' },
              { step: '2', title: 'Ricerca Fornitori', text: 'Identifichiamo i fornitori più adatti attraverso la nostra rete globale e valutiamo le loro capacità.' },
              { step: '3', title: 'Valutazione e Selezione', text: "Conduciamo un'analisi comparativa per selezionare i fornitori che meglio rispondono ai requisiti di qualità, prezzo e tempistiche." },
              { step: '4', title: 'Negoziazione', text: 'Negoziazione dei termini contrattuali, definizione dei prezzi e pianificazione delle consegne per ottimizzare costi e tempi.' },
              { step: '5', title: 'Logistica', text: "Gestiamo l'intero processo logistico, dalla spedizione allo stoccaggio, garantendo consegne puntuali ed efficienti." },
            ].map((item) => (
              <div key={item.step} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/10 text-left space-y-3">
                <div className="h-10 w-10 rounded-full border-2 border-yiketeck-dark text-yiketeck-dark font-bold flex items-center justify-center bg-white">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-yiketeck-dark">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      
      {/* Call to Action */}
      <section className="py-16 bg-yiketeck-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto a ottimizzare il tuo approvvigionamento tecnologico?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contattaci oggi stesso per scoprire come possiamo aiutarti a trovare le soluzioni tecnologiche più innovative 
            e competitive per il tuo business, con un servizio completo dalla ricerca alla consegna.
          </p>
          <Link 
            href="/contatti" 
            className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
          >
            Richiedi una consulenza
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
