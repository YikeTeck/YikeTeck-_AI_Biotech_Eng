import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function KioskInterattiviPage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      
      {/* Header della pagina */}
      <section className="pt-28 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h1 className="text-4xl font-bold">Kiosk Interattivi</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Terminali autonomi e intuitivi per interazioni digitali avanzate in spazi pubblici e commerciali.
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
                        'Display da 32" ad alta luminosità',
                        'Lettore di codici QR integrato',
                        'Stampante termica ad alta velocità',
                        'Interfaccia utente intuitiva e personalizzabile',
                        'Design robusto ed elegante',
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
                    src="/Kiosk_1.webp" 
                    alt="kiosk-interattivi" 
                    width={600}
                    height={256}
                    className="w-full h-full object-cover"
                    quality={85}
                  />
                </div>
                
                <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-black/5">
                  <Image 
                    src="/Kiosk_2.webp" 
                    alt="kiosk-interattivi" 
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
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Kiosk Interattivi - Esperienza utente intuitiva</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  I kiosk interattivi sono dispositivi digitali autonomi, dotati di display, lettore di codici QR, stampante e altre periferiche che facilitano l'interazione diretta con gli utenti. Utilizzati in ambienti come negozi, fast food, aeroporti e uffici pubblici, permettono di effettuare operazioni rapide come l'acquisto di biglietti, la consultazione di informazioni e l'acquisizione di ricevute o etichette stampate.
                </p>
                
                <div className="bg-[#f5f5f5] p-6 rounded-2xl my-8 border border-black/5">
                  <p className="text-gray-700 italic border-l-4 border-yiketeck-red pl-4">
                    "Grazie alla loro versatilità, questi kiosk migliorano l'efficienza del servizio e offrono un'esperienza utente intuitiva e moderna."
                  </p>
                </div>
                
                <p className="mb-6 text-gray-700 leading-relaxed">
                  I nostri prodotti, progettati interamente da noi, utilizzano un display da 32 pollici ad alta luminosità, per adattarsi a tutti gli ambienti di installazione, compresi i luoghi molto illuminati. Ogni aspetto del design è stato curato nei minimi dettagli per garantire robustezza, eleganza e facilità d'uso.
                </p>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Tecnologia all'avanguardia</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Hardware avanzato</h3>
                    <ul className="space-y-2">
                      <li>• Processore multi-core ad alte prestazioni</li>
                      <li>• Display touchscreen capacitivo con vetro protettivo</li>
                      <li>• Sistema di raffreddamento silenzioso ed efficiente</li>
                      <li>• Opzioni di connettività Wi-Fi, Ethernet e 4G/5G</li>
                      <li>• Alimentazione a risparmio energetico</li>
                    </ul>
                  </div>
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Software personalizzabile</h3>
                    <ul className="space-y-2">
                      <li>• Interfaccia utente intuitiva e responsive</li>
                      <li>• Supporto multilingua</li>
                      <li>• Compatibilità con vari sistemi di pagamento</li>
                      <li>• Dashboard di gestione remota</li>
                      <li>• Analisi dati e reportistica avanzata</li>
                    </ul>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Periferiche integrate</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  I nostri kiosk interattivi sono dotati di una serie di periferiche che ampliano le loro funzionalità e li rendono adatti a molteplici contesti di utilizzo:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-3">Stampante termica</h3>
                    <p className="text-gray-700">
                      Produce rapidamente ricevute, ticket e etichette con alta qualità di stampa e bassa manutenzione.
                    </p>
                  </div>
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-3">Lettore QR/Barcode</h3>
                    <p className="text-gray-700">
                      Scansiona codici 1D e 2D con estrema rapidità, facilitando operazioni come check-in e verifica di coupon.
                    </p>
                  </div>
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-3">POS integrato</h3>
                    <p className="text-gray-700">
                      Permette pagamenti sicuri con carte di credito, NFC e altre modalità contactless.
                    </p>
                  </div>
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-3">Telecamera HD</h3>
                    <p className="text-gray-700">
                      Utile per videoconferenze, riconoscimento facciale e altre applicazioni che richiedono input visivo.
                    </p>
                  </div>
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-3">Scanner documenti</h3>
                    <p className="text-gray-700">
                      Digitalizza documenti cartacei come ID, passaporti o altri certificati necessari per varie operazioni.
                    </p>
                  </div>
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-3">Lettore RFID/NFC</h3>
                    <p className="text-gray-700">
                      Permette l'interazione con carte fedeltà, badge aziendali e altre applicazioni basate su tecnologia RFID.
                    </p>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Settori di applicazione</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  I kiosk interattivi trovano applicazione in numerosi settori, dove migliorano l'efficienza operativa e l'esperienza utente:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Retail e GDO</h3>
                    <p className="text-gray-700 mb-3">
                      Nei negozi al dettaglio e nella grande distribuzione, i kiosk offrono:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Self-checkout per ridurre le code</li>
                      <li>• Catalogo prodotti interattivo</li>
                      <li>• Gestione programmi fedeltà</li>
                      <li>• Gestione ordini personalizzati</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Ristorazione</h3>
                    <p className="text-gray-700 mb-3">
                      Nel settore della ristorazione, i kiosk permettono:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Ordinazione autonoma con personalizzazione</li>
                      <li>• Pagamento diretto senza code alla cassa</li>
                      <li>• Visualizzazione dettagliata di menu e ingredienti</li>
                      <li>• Suggerimenti di abbinamenti e promozioni</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Trasporti e Turismo</h3>
                    <p className="text-gray-700 mb-3">
                      Nel settore dei trasporti e del turismo, i kiosk sono utili per:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Check-in e stampa carte d'imbarco</li>
                      <li>• Acquisto biglietti per mezzi pubblici</li>
                      <li>• Informazioni turistiche interattive</li>
                      <li>• Prenotazione di tour ed esperienze</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Sanità</h3>
                    <p className="text-gray-700 mb-3">
                      Nel settore sanitario, i kiosk facilitano:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Check-in pazienti e registrazione visite</li>
                      <li>• Compilazione moduli e questionari</li>
                      <li>• Pagamento ticket sanitari</li>
                      <li>• Consultazione referti e prenotazioni</li>
                    </ul>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Design personalizzabile</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Ogni kiosk può essere personalizzato sia esteticamente che funzionalmente per adattarsi perfettamente all'identità del brand e alle specifiche esigenze operative:
                </p>
                
                <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm mb-8 border border-black/5">
                  <h3 className="text-xl font-bold mb-3">Opzioni di personalizzazione:</h3>
                  <ul className="space-y-2">
                    <li>• Colori e finiture su misura per il brand</li>
                    <li>• Opzioni di montaggio: a pavimento, a parete o da tavolo</li>
                    <li>• Configurazione hardware in base alle funzionalità necessarie</li>
                    <li>• Interfaccia software personalizzata e intuitiva</li>
                    <li>• Integrazione con sistemi aziendali esistenti</li>
                    <li>• Accessibilità per utenti con disabilità</li>
                  </ul>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Vantaggi competitivi</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  I nostri kiosk interattivi offrono numerosi benefici che li distinguono dalle soluzioni concorrenti:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-2">Riduzione dei costi operativi</h3>
                    <p className="text-gray-700">
                      Automatizzano processi ripetitivi, riducono le code e liberano personale su attività a maggior valore.
                    </p>
                  </div>
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-2">Esperienza utente migliore</h3>
                    <p className="text-gray-700">
                      Interfacce chiare, pagamenti rapidi, contenuti personalizzabili e analytics per iterare sui flussi.
                    </p>
                  </div>
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
