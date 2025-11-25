import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function PerAziendePage() {
  return (
    <main>
      <Navbar />
      
      {/* Header della pagina */}
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Per Aziende</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Soluzioni tecnologiche innovative per il tuo business. Esplora le nostre offerte 
            per commissionare progetti, sourcing tecnologico e collaborazioni strategiche.
          </p>
        </div>
      </section>
      
      {/* Introduzione alle sezioni */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-yiketeck-dark">Le nostre soluzioni per il tuo business</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              In Yike Teck offriamo un'ampia gamma di servizi tecnologici per supportare il tuo business, dalla progettazione su misura 
              al sourcing di componenti avanzati, fino alle partnership strategiche per progetti di innovazione.
            </p>
          </div>
          
          {/* Sezioni principali - Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Commissionare Progetti */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
  <div className="relative h-64 bg-gray-200">
    <Image 
      src="/project_1.webp" 
      alt="Progetti" 
      width={600}
      height={256}
      className="w-full h-full object-cover"
      quality={85}
    />
  </div>
  <div className="p-6">
                <h3 className="text-2xl font-bold text-yiketeck-dark mb-3">Commissionare Progetti</h3>
                <p className="text-gray-600 mb-6">
                  Hai un'idea innovativa o una sfida tecnologica da risolvere? Il nostro team di ingegneri e 
                  designer è pronto a trasformare la tua visione in realtà.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Progetti ingegneristici su misura</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Design innovativo e funzionale</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Soluzioni tecnologiche all'avanguardia</span>
                  </li>
                </ul>
                <Link
  href="/per-aziende/progetti"
  className="inline-flex items-center text-yiketeck-red hover:text-red-700 font-medium"
>
  Scopri di più
  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
</Link>
              </div>
            </div>
            
            {/* Sourcing Tecnologico */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
  <div className="relative h-64 bg-gray-200">
    <Image 
      src="/tech_sourcing.webp" 
      alt="Sourcing Tecnologico" 
      width={600}
      height={256}
      className="w-full h-full object-cover"
      quality={85}
    />
  </div>
  <div className="p-6">
                <h3 className="text-2xl font-bold text-yiketeck-dark mb-3">Sourcing Tecnologico</h3>
                <p className="text-gray-600 mb-6">
                  Sei alla ricerca di tecnologie innovative per il tuo business? La nostra rete globale ci permette di 
                  individuare e fornire le soluzioni più avanzate.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Accesso alle tecnologie più recenti</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Rete globale di partner tecnologici</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Soluzioni personalizzate per ogni esigenza</span>
                  </li>
                </ul>
                <Link
  href="/per-aziende/sourcing"
  className="inline-flex items-center text-yiketeck-red hover:text-red-700 font-medium"
>
  Scopri di più
  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
</Link>
              </div>
            </div>
            
            {/* Collaborazioni */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
  <div className="relative h-64 bg-gray-200">
    <Image 
      src="/collaborations_1.webp" 
      alt="Collaborazioni" 
      width={600}
      height={256}
      className="w-full h-full object-cover"
      quality={85}
    />
  </div>
  <div className="p-6">
                <h3 className="text-2xl font-bold text-yiketeck-dark mb-3">Collaborazioni</h3>
                <p className="text-gray-600 mb-6">
                  Crediamo nella potenza della collaborazione. Unendo le forze con partner strategici, possiamo creare 
                  soluzioni ancora più innovative e impattanti.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Progetti di ricerca e sviluppo congiunti</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Partnership strategiche</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Integrazione di competenze complementari</span>
                  </li>
                </ul>
                <Link
  href="/per-aziende/collaborazioni"
  className="inline-flex items-center text-yiketeck-red hover:text-red-700 font-medium"
>
  Scopri di più
  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-yiketeck-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronti a trasformare il tuo business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contattaci oggi stesso per discutere delle tue esigenze e scoprire come Yike Teck può aiutarti a
            raggiungere i tuoi obiettivi tecnologici.
          </p>
          <Link 
            href="/contatti" 
            className="px-8 py-3 bg-white text-yiketeck-red rounded-full hover:bg-gray-100 transition duration-300 font-medium"
          >
            Contattaci ora
          </Link>
        </div>
      </section>
      
      {/* FAQ Section - Manteniamo questa sezione come richiesto */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center mb-12">Domande frequenti</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Come funziona il processo di commissione di un progetto?</h3>
              <p className="text-gray-600">
                Il processo inizia con una consultazione iniziale dove raccogliamo i tuoi requisiti e definiamo gli 
                obiettivi. Sviluppiamo poi una proposta dettagliata, e una volta approvata, il nostro team di esperti 
                inizia a lavorare sul progetto con aggiornamenti regolari fino alla consegna finale.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Quali sono i tempi medi per un progetto personalizzato?</h3>
              <p className="text-gray-600">
                I tempi variano in base alla complessità del progetto. Progetti semplici possono richiedere dalle 2 alle 
                4 settimane, mentre progetti più complessi possono estendersi da 3 a 6 mesi. Durante la fase di proposta, 
                forniamo sempre una stima dettagliata dei tempi.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Come garantite la qualità dei componenti nel sourcing?</h3>
              <p className="text-gray-600">
                Tutti i nostri partner sono certificati secondo standard internazionali. Ogni componente viene sottoposto 
                a rigorosi controlli di qualità prima della consegna, e offriamo garanzie specifiche su tutti i prodotti 
                forniti attraverso il nostro servizio di sourcing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Quali tipi di collaborazioni proponete?</h3>
              <p className="text-gray-600">
                Offriamo diverse modalità di collaborazione: progetti di R&D congiunti, partnership tecnologiche, 
                joint ventures per prodotti specifici, e programmi di innovazione condivisa. Ogni collaborazione 
                è strutturata in base agli obiettivi comuni e alle competenze di ciascun partner.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
