import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function ChiSiamoPage() {
  return (
    <main>
      <Navbar />
      
      {/* Header della pagina */}
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Chi Siamo</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Uniamo sensorialità umana, scienza e tecnologia per creare soluzioni innovative che migliorano la vita quotidiana.
          </p>
        </div>
      </section>
      
      {/* Contenuto principale */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar con info rapide */}
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-yiketeck-dark">Punti chiave</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-yiketeck-red mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Fondati nel 2018</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-yiketeck-red mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Sede a Dongguan, Cina</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-yiketeck-red mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">AI-first: piattaforme e protocolli proprietari</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-yiketeck-red mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Supporto e sourcing tecnologico</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-yiketeck-red mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Portfolio di prodotti brevettati</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-64 bg-gray-200">
                  <Image 
  src="/Yike_Teck_company1.webp" 
  alt="Yike Teck Sede" 
  width={800} 
  height={600}
  quality={90} 
  className="w-full h-full object-cover"
/>
                  </div>
                </div>
                
                <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <Image 
  src="/AI_B1.webp" 
  alt="Interfacce e codice in primo piano" 
  width={800} 
  height={600}
  quality={90} 
  className="w-full h-full object-cover"
/>
                </div>
                <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md mt-6">
                  <Image
                    src="/Who_A.png.webp"
                    alt="Team Yike Teck"
                    width={800}
                    height={600}
                    quality={90}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Contenuto principale */}
            <div className="lg:w-2/3">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">La nostra storia</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Fondata nel 2018, Yike Teck nasce con un&apos;idea semplice e ambiziosa: unire sensorialità umana, scienza e intelligenza artificiale in sistemi concreti, utilizzabili ogni giorno. Partendo da una solida esperienza nel campo della tecnologia e del design, abbiamo lavorato su audio engineering, interfacce uomo-macchina (HMI) e, progressivamente, su architetture AI proprietarie in grado di connettere questi mondi in modo coerente.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Con sede strategica a Dongguan, nel cuore della provincia del Guangdong, operiamo in uno dei principali poli tecnologici della Cina, a pochi passi da Shenzhen, Guangzhou, Guzhen (capitale mondiale dell’illuminazione) e Hong Kong. Questa posizione, unita a un background tecnico europeo, ci permette di fare da ponte naturale tra R&D occidentale, capacità manifatturiera orientale e nuovi sistemi di AI destinati a vivere dentro prodotti reali: dispositivi embedded, soluzioni per la smart city, applicazioni biotech e robotiche.
                </p>
                
                <div className="bg-yiketeck-light p-6 rounded-lg my-8">
                  <p className="text-gray-700 italic border-l-4 border-yiketeck-red pl-4">
                    "In Yike Teck creiamo valore sviluppando sistemi e piattaforme di AI proprietarie. Ascoltiamo le vostre sfide e le trasformiamo in soluzioni concrete, in cui ingegneria e intelligenza artificiale lavorano insieme al servizio dei vostri progetti."
                  </p>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Innovazione tecnologica</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Il nostro portfolio include prodotti e soluzioni che uniscono elettronica avanzata, sistemi intelligenti e software dedicati al potenziamento cognitivo. Lavoriamo su dispositivi IoT per le smart cities, sistemi audio evoluti, piattaforme AI di nuova generazione e applicazioni come Flomindy, pensate per migliorare le performance mentali e la qualità del lavoro. Molte di queste tecnologie sono protette da brevetti o in corso di tutela, a conferma del nostro impegno costante in ricerca e sviluppo.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  In Yike Teck investiamo in modo mirato nello sviluppo di AI proprietaria: protocolli, piattaforme e software avanzati progettati per aumentare l’efficacia dei processi decisionali e operativi. Le nostre soluzioni – tra cui ambienti come ComplexDot e Clevidot – nascono con un obiettivo chiaro: usare l’intelligenza artificiale per amplificare le capacità naturali delle persone, ridurre la complessità e creare contesti di lavoro più efficienti, sostenibili e gratificanti. Per noi la tecnologia ha senso solo quando migliora davvero il modo in cui pensiamo, progettiamo e realizziamo il futuro.
                </p>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Le nostre competenze</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-yiketeck-red mb-3">Intelligenza Artificiale</h3>
                    <p className="text-gray-700">
                      Sviluppiamo algoritmi di AI per ottimizzare processi aziendali, analisi predittiva e miglioramento dell&apos;esperienza utente, con particolare attenzione all&apos;interazione uomo-macchina.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-yiketeck-red mb-3">Ingegneria Audio</h3>
                    <p className="text-gray-700">
                      Progettiamo soluzioni audio innovative, dai diffusori ultra-sottili ai sistemi audio avanzati per ambienti commerciali e residenziali, con particolare attenzione alla qualità del suono e al design.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-yiketeck-red mb-3">Smart Cities &amp; IoT</h3>
                    <p className="text-gray-700">
                      Creiamo dispositivi e sistemi intelligenti per le città del futuro, dall&apos;illuminazione pubblica ai sistemi di gestione dei rifiuti, contribuendo a rendere gli spazi urbani più efficienti e sostenibili.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-yiketeck-red mb-3">Cognitive Enhancement</h3>
                    <p className="text-gray-700">
                      Sviluppiamo software e applicazioni progettate per migliorare le capacità cognitive umane, dalla concentrazione alla memoria, basati su solidi principi scientifici e ricerche all&apos;avanguardia.
                    </p>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">I nostri servizi</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Grazie alla nostra esperienza in Cina e alla rete consolidata di contatti ed entità nel settore tecnologico, siamo in grado di offrire ulteriori soluzioni e supporto alle aziende globali nei seguenti ambiti:
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-yiketeck-red">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Consulenza tecnica e progettazione:</strong> Offriamo supporto esperto per trasformare le idee in prodotti concreti, dall&apos;ideazione al prototipo funzionante.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Approvvigionamento strategico:</strong> Gestiamo la ricerca e selezione di componenti e semilavorati, garantendo qualità e tempi di consegna ottimali.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Sviluppo e design di prodotto:</strong> Combiniamo funzionalità avanzate con design accattivante per creare prodotti che si distinguono sul mercato.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Supporto alla produzione e controllo qualità:</strong> Garantiamo che ogni prodotto rispetti gli standard più elevati, supervisionando l&apos;intero processo produttivo.</span>
                    </li>
                  </ul>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Partnership strategiche</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Per l&apos;approvvigionamento, la logistica e lo stoccaggio, collaboriamo strettamente con Shamana (<a href="https://www.shamana-china.com" className="text-yiketeck-red hover:underline" target="_blank" rel="noopener noreferrer">www.shamana-china.com</a>), una rinomata azienda situata anch&apos;essa a Dongguan, a pochi passi dai nostri uffici.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Questa collaborazione ci permette di offrire un servizio completo ai nostri clienti, garantendo efficienza e qualità in ogni fase del processo, dalla progettazione alla consegna finale. 
                </p>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Il nostro impegno nell&apos;intelligenza artificiale</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  In Yike Teck siamo convinti che l&apos;intelligenza artificiale rappresenti una delle frontiere più promettenti per il miglioramento delle performance lavorative e la creazione di nuovi paradigmi di interazione uomo-macchina.
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Il nostro team di ricerca e sviluppo lavora costantemente alla creazione di nuovi protocolli AI che possano:
                </p>
                <div className="bg-yiketeck-light p-6 rounded-lg mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Ottimizzare i processi decisionali in ambienti complessi</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Migliorare le capacità cognitive attraverso software adattivi</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Creare interfacce uomo-macchina più intuitive e responsive</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Sviluppare sistemi predittivi per l&apos;ottimizzazione delle risorse</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Implementare soluzioni di automazione intelligente per le smart cities</span>
                    </li>
                  </ul>
                </div>
                
                <p className="mb-6 text-gray-700 leading-relaxed">
                  La nostra filosofia si basa sulla convinzione che la tecnologia debba potenziare le capacità umane, non sostituirle. Per questo, i nostri prodotti e servizi sono sempre progettati con una profonda comprensione delle esigenze umane e con l&apos;obiettivo di creare un impatto positivo e duraturo.
                </p>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">La nostra visione</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  In YiKe Teck crediamo che il futuro sarà caratterizzato da una sempre maggiore integrazione tra uomo e tecnologia. La nostra visione è quella di essere protagonisti di questa evoluzione, creando prodotti e servizi che rendano questa integrazione non solo possibile, ma anche naturale e vantaggiosa.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Mettiamo a vostra disposizione le nostre soluzioni e competenze, e insieme creeremo risultati tangibili e duraturi, pronti ad affrontare le sfide del domani con strumenti all&apos;avanguardia oggi.
                </p>
                
                {/* Sezione "Il significato del nostro nome" aggiornata con la nuova informazione */}
                <hr className="border-t-2 border-yiketeck-red w-24 my-8" />
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Il significato del nostro nome</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  In cinese, <strong>"Yi Ke" (意科)</strong> combina i caratteri di <em>significato/intenzione</em> (意) e <em>scienza/tecnologia</em> (科), trasmettendo il concetto di "tecnologia con uno scopo" o "tecnologia intenzionale". Questo risuona con la nostra filosofia di creare tecnologia che abbia un autentico significato nella vita delle persone.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  La scelta della <strong>K finale</strong> in "Teck" è deliberata: crea un equilibrio visivo con la K di "Yike" ed evoca simultaneamente il <strong>simbolo del transistor</strong> nel nostro logo, abilmente costruito specchiando e integrando le iniziali <strong>Y</strong> e <strong>T</strong>. Questo transistor, inventato nel 1947, ha rivoluzionato l&apos;elettronica e gettato le basi per tutta la tecnologia moderna.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Questo richiamo al transistor sottolinea il nostro legame con la storia dell&apos;innovazione e rappresenta il nostro impegno a proseguire su quella strada, facendo della tecnologia il cuore delle nostre soluzioni.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
