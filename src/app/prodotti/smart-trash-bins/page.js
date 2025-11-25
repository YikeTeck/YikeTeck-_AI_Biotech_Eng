import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function SmartTrashBinsPage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      
      {/* Header della pagina */}
      <section className="pt-28 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h1 className="text-4xl font-bold">Smart Trash Bins</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Contenitori intelligenti per la gestione ottimizzata dei rifiuti urbani con tecnologia IoT integrata.
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
                        'Monitoraggio in tempo reale del livello di riempimento',
                        'Sensori per il rilevamento della tipologia di rifiuti',
                        'Connettività IoT per comunicazione con sistemi centrali',
                        'Alimentazione a energia solare con batteria di backup',
                        'Design robusto e resistente agli agenti atmosferici',
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
                    src="/urban-trash_1.webp" 
                    alt="smart-trash-bins" 
                    width={600}
                    height={256}
                    className="w-full h-full object-cover"
                    quality={85}
                  />
                </div>
                
                <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-black/5">
                  <Image 
                    src="/urban-trash_2.webp" 
                    alt="smart-trash-bins" 
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
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Rivoluzione nella Gestione dei Rifiuti Urbani</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Gli smart trash bins sono contenitori per rifiuti dotati di tecnologia IoT in grado di monitorare in tempo reale il livello di riempimento e la tipologia dei rifiuti raccolti. Grazie a sensori integrati e alla possibilità di comunicare con sistemi centrali, questi dispositivi permettono di ottimizzare i percorsi di raccolta, riducendo i costi e l'impatto ambientale, oltre a migliorare l'igiene urbana evitando l'accumulo eccessivo di rifiuti.
                </p>
                
                <div className="bg-[#f5f5f5] p-6 rounded-2xl my-8 border border-black/5">
                  <p className="text-gray-700 italic border-l-4 border-yiketeck-red pl-4">
                    "Utili sia per le utenze private sia per le amministrazioni pubbliche, i cestini intelligenti contribuiscono a mantenere più puliti e ordinati gli spazi pubblici, aumentando la qualità della vita urbana."
                  </p>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Tecnologia Avanzata per Città Più Pulite</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Sistema di Monitoraggio</h3>
                    <ul className="space-y-2">
                      <li>• Sensori ultrasonici per il rilevamento del livello di riempimento</li>
                      <li>• Tecnologia di riconoscimento ottico per identificare i tipi di rifiuti</li>
                      <li>• Monitoraggio della temperatura per prevenire incendi</li>
                      <li>• Sensori di peso per la quantificazione precisa dei rifiuti</li>
                      <li>• Allarmi in tempo reale per segnalare condizioni anomale</li>
                    </ul>
                  </div>
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Comunicazione e Connettività</h3>
                    <ul className="space-y-2">
                      <li>• Connessione wireless con tecnologia LoRaWAN o NB-IoT</li>
                      <li>• Trasmissione dati crittografata per la massima sicurezza</li>
                      <li>• Integrazione con piattaforme di gestione urbana esistenti</li>
                      <li>• Dashboard web per il monitoraggio centralizzato</li>
                      <li>• App mobile per operatori e cittadini</li>
                    </ul>
                  </div>
                </div>
                
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Il nostro team di Ricerca e Sviluppo sta attualmente lavorando su nuovi modelli di smart trash bins che integreranno funzionalità ancora più avanzate, come un'efficienza energetica migliorata e una maggiore capacità di adattamento alle diverse esigenze cittadine. A breve saremo pronti a lanciare sul mercato queste soluzioni innovative, con l'obiettivo di offrire tecnologie sostenibili e performanti per la gestione dei rifiuti e l'ottimizzazione delle risorse urbane.
                </p>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Caratteristiche Innovative in Fase di Sviluppo</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  {[ 
                    { title: 'Compattazione Automatica', text: 'Sistema di compressione integrato che aumenta la capacità effettiva fino a 8 volte, riducendo la frequenza delle raccolte.' },
                    { title: 'Riconoscimento AI', text: 'Algoritmi di intelligenza artificiale che identificano automaticamente i materiali per migliorare la qualità della raccolta differenziata.' },
                    { title: 'Igienizzazione UV', text: 'Sistema di disinfezione a raggi ultravioletti che elimina batteri e riduce gli odori, migliorando l\'igiene urbana.' },
                    { title: 'Autopulizia', text: 'Meccanismo di pulizia automatica che mantiene il contenitore in condizioni igieniche ottimali senza intervento manuale.' },
                    { title: 'Interfaccia User-Friendly', text: 'Display touch interattivo che fornisce informazioni sulla raccolta differenziata e premia comportamenti virtuosi dei cittadini.' },
                    { title: 'Alimentazione Ibrida', text: 'Sistema di alimentazione che combina energia solare, rete elettrica e batteria per garantire funzionamento continuo in ogni condizione.' },
                  ].map((card) => (
                    <div key={card.title} className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                      <h3 className="text-lg font-bold text-yiketeck-dark mb-3">{card.title}</h3>
                      <p className="text-gray-700">{card.text}</p>
                    </div>
                  ))}
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Benefici e Applicazioni</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Per le Amministrazioni Pubbliche</h3>
                    <p className="text-gray-700 mb-3">
                      Le amministrazioni comunali possono trarre numerosi vantaggi:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Riduzione fino al 30% dei costi di raccolta grazie all'ottimizzazione dei percorsi</li>
                      <li>• Diminuzione delle emissioni di CO₂ legate al trasporto</li>
                      <li>• Miglioramento dell'igiene e dell'estetica urbana</li>
                      <li>• Dati analitici per pianificare meglio i servizi di raccolta</li>
                      <li>• Incentivazione della partecipazione dei cittadini</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Per Aziende e Spazi Commerciali</h3>
                    <p className="text-gray-700 mb-3">
                      Centri commerciali, aziende e spazi pubblici privati beneficiano di:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Gestione più efficiente dei rifiuti prodotti internamente</li>
                      <li>• Riduzione dei costi di smaltimento</li>
                      <li>• Migliore immagine pubblica grazie all'impegno per la sostenibilità</li>
                      <li>• Ambienti più puliti e igienici per clienti e dipendenti</li>
                      <li>• Conformità facilitata alle normative ambientali</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm mb-8 border border-black/5">
                  <h3 className="text-xl font-bold mb-3">Impatto ambientale degli Smart Trash Bins:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Riduzione delle emissioni di CO₂ grazie all'ottimizzazione della raccolta</li>
                    <li>• Migliore gestione dei rifiuti con conseguente riduzione della contaminazione ambientale</li>
                    <li>• Promozione della raccolta differenziata e del riciclo</li>
                    <li>• Diminuzione del traffico veicolare legato alla raccolta rifiuti</li>
                    <li>• Consumo energetico ridotto grazie all'utilizzo di energia solare</li>
                    <li>• Design sostenibile con componenti riciclabili o biodegradabili</li>
                  </ul>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Software e Piattaforma di Gestione</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Ogni Smart Trash Bin è collegato alla nostra piattaforma cloud dedicata, che offre funzionalità avanzate per la gestione completa del sistema:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-5 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-2">Dashboard Centralizzata</h3>
                    <p className="text-gray-700">
                      Interfaccia intuitiva che mostra lo stato di tutti i dispositivi su mappa interattiva, con indicatori in tempo reale del livello di riempimento.
                    </p>
                  </div>
                  <div className="bg-[#f5f5f5] p-5 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-2">Ottimizzazione Percorsi</h3>
                    <p className="text-gray-700">
                      Algoritmi avanzati che calcolano i percorsi più efficienti per i veicoli di raccolta, considerando priorità, traffico e capacità.
                    </p>
                  </div>
                  <div className="bg-[#f5f5f5] p-5 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-2">Analisi Predittiva</h3>
                    <p className="text-gray-700">
                      Previsione dei tassi di riempimento basata su dati storici e eventi locali, permettendo una pianificazione proattiva.
                    </p>
                  </div>
                  <div className="bg-[#f5f5f5] p-5 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-2">Reportistica Avanzata</h3>
                    <p className="text-gray-700">
                      Generazione automatica di report dettagliati su raccolta, efficienza, risparmio e impatto ambientale, personalizzabili per diverse esigenze.
                    </p>
                  </div>
                </div>
                
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Gli Smart Trash Bins di Yike Teck rappresentano un passo importante verso città più pulite, efficienti e sostenibili. Combinando hardware di alta qualità, software intelligente e design funzionale, offriamo una soluzione completa per la gestione moderna dei rifiuti urbani, in linea con i principi dell'economia circolare e delle smart cities.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Contattaci oggi stesso per scoprire come i nostri Smart Trash Bins possono trasformare la gestione dei rifiuti nella tua città o azienda, contribuendo a un futuro più sostenibile e a spazi urbani più vivibili.
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
