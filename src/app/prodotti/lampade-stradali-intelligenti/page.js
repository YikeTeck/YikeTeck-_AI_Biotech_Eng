import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function LampadeStradaliIntelligentiPage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      
      {/* Header della pagina */}
      <section className="pt-28 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h1 className="text-4xl font-bold">Illuminazione Pubblica Intelligente IoT</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Lampade stradali intelligenti a energia solare con tecnologia IoT per città più efficienti e sostenibili.
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
                        'Tecnologia IoT integrata per controllo remoto',
                        'Funzionamento ibrido con batteria e rete elettrica',
                        'Risparmio energetico fino al 40%',
                        'Sensori di movimento e luminosità ambientale',
                        'Monitoraggio e manutenzione predittiva',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#c22a2a] flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative h-64 bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5">
                  <Image 
                    src="/Smart_Iot_Light_1.webp" 
                    alt="lampade-stradali-intelligenti" 
                    width={600}
                    height={256}
                    className="w-full h-full object-contain"
                    quality={85}
                  />
                </div>
                
                <div className="relative h-64 bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5">
                  <Image 
                    src="/Smart_Iot_Light2.webp" 
                    alt="lampade-stradali-intelligenti" 
                    width={600}
                    height={256}
                    className="w-full h-full object-contain"
                    quality={85}
                  />
                </div>
              </div>
            </div>
            
            {/* Contenuto principale */}
            <div className="lg:w-2/3">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Illuminazione Stradale del Futuro</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  L'illuminazione stradale basata su IoT rappresenta una soluzione innovativa che integra sensori, reti di comunicazione e software di gestione per monitorare e regolare i lampioni stradali in tempo reale. Grazie a questa tecnologia, i lampioni diventano "smart", adattando automaticamente la luminosità in base alle condizioni ambientali, alla presenza di veicoli o pedoni e alla luce naturale, ottimizzando così la sicurezza e l'efficienza energetica.
                </p>
                
                <div className="bg-[#f5f5f5] p-6 rounded-2xl my-8 border border-black/5">
                  <p className="text-gray-700 italic border-l-4 border-yiketeck-red pl-4">
                    "Un sistema di illuminazione intelligente che si adatta alle esigenze reali della città, riducendo i consumi energetici e migliorando la qualità della vita urbana."
                  </p>
                </div>
                
                <p className="mb-6 text-gray-700 leading-relaxed">
                  In caso di malfunzionamenti, il sistema rileva i guasti, consentendo interventi di manutenzione tempestivi e riducendo i tempi di inattività. La manutenzione predittiva non solo riduce i costi operativi, ma assicura anche un servizio di illuminazione più affidabile per i cittadini.
                </p>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Tecnologia Ibrida Innovativa</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Un aspetto distintivo è la capacità di questi sistemi di funzionare in modalità ibrida, sfruttando uno <strong>storage di energia</strong>: il lampione utilizza l'energia immagazzinata nelle batterie prima di passare all'alimentazione dalla rete elettrica. Questo approccio è valido in qualsiasi contesto urbano, indipendentemente dall'accessibilità alla rete, e permette di ottenere un notevole risparmio, riducendo di oltre il 40% l'energia prelevata dalla rete per gli enti pubblici che scelgono di adottare questa tecnologia.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Vantaggi Energetici</h3>
                    <ul className="space-y-2">
                      <li>• Riduzione del consumo energetico fino al 40%</li>
                      <li>• Utilizzo prioritario dell'energia solare immagazzinata</li>
                      <li>• Minor impatto sulla rete elettrica nelle ore di punta</li>
                      <li>• Indipendenza energetica parziale o totale</li>
                      <li>• Riduzione delle emissioni di CO₂</li>
                    </ul>
                  </div>
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">Funzionalità Smart</h3>
                    <ul className="space-y-2">
                      <li>• Regolazione automatica dell'intensità luminosa</li>
                      <li>• Rilevamento di veicoli e pedoni</li>
                      <li>• Diagnosi remota e manutenzione predittiva</li>
                      <li>• Integrazione con altri sistemi IoT urbani</li>
                      <li>• Dashboard di controllo centralizzata</li>
                    </ul>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Gestione Centralizzata e Integrazione IoT</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  La gestione centralizzata consente inoltre di raccogliere dati per analisi predittive, migliorando l'efficienza complessiva e integrandosi con altre infrastrutture urbane, come i sistemi per il monitoraggio della qualità dell'aria. Dotati di sensori di movimento e controllo della luminosità, i lampioni possono regolare l'illuminazione in linea con le normative locali, ottimizzando ulteriormente il consumo energetico.
                </p>
                
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Le diverse opzioni di montaggio e l'angolo di inclinazione regolabile ne facilitano l'adattamento a vari contesti urbani, dai grandi viali ai parchi pubblici, dalle zone residenziali alle aree industriali. Questa versatilità rende le nostre soluzioni adatte a qualsiasi progetto di smart city.
                </p>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Modelli Disponibili</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  La nostra gamma di lampade stradali intelligenti include diversi modelli per soddisfare ogni esigenza di illuminazione pubblica, dai piccoli percorsi pedonali alle grandi arterie stradali:
                </p>
                
                <div className="bg-[#f5f5f5] p-5 rounded-2xl shadow-sm border border-black/5 mb-8" style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#1f2937', color: '#fff', textAlign: 'left' }}>
                        {['Reference','Power (W)','Battery capacity','Color temp. (xx00K)','PCB LED number','Luminous flux (lm)','Working temperature','Dimensions AxBxC (mm)','Weight (Kg)'].map((h) => (
                          <th key={h} style={{ padding: '12px 16px', fontWeight: 600, borderBottom: '1px solid #374151' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[ 
                        ['Solar street lamp IOTSOL030','30W','230.4Wh-18Ah','30-40-50','108','6000','0 to 50°C','703x301x250','7.3±0.3'],
                        ['Solar street lamp IOTSOL040','40W','307.2Wh-24Ah','30-40-50','216','8000','0 to 50°C','910x429x291','13.9±0.3'],
                        ['Solar street lamp IOTSOL050','50W','384W-30Ah','30-40-50','216','10000','0 to 50°C','910x429x291','14.4±0.3'],
                        ['Solar street lamp IOTSOL060','60W','460.8Wh-36Ah','30-40-50','216','12000','0 to 50°C','910x429x291','15.0±0.3'],
                      ].map((row, idx) => (
                        <tr key={row[0]} style={{ backgroundColor: idx % 2 === 0 ? '#fff' : '#f9fafb' }}>
                          {row.map((cell) => (
                            <td key={cell} style={{ padding: '12px 16px', borderBottom: '1px solid #e5e7eb' }}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Applicazioni e Casi d'Uso</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  {[
                    { title: 'Strade Urbane', text: 'Illuminazione efficiente delle strade cittadine con adattamento automatico all\'intensità del traffico e alle condizioni atmosferiche.' },
                    { title: 'Parchi e Aree Verdi', text: 'Illuminazione ambientale che aumenta la sicurezza e la fruibilità degli spazi verdi nelle ore serali.' },
                    { title: 'Zone Residenziali', text: 'Comfort visivo e sicurezza per pedoni e veicoli con consumi ridotti.' },
                    { title: 'Aree Industriali', text: 'Illuminazione affidabile per aree produttive e logistiche con monitoraggio remoto.' },
                    { title: 'Parcheggi e Campus', text: 'Gestione intelligente di parcheggi e campus universitari con sensori di presenza.' },
                    { title: 'Piste Ciclabili', text: 'Luce ottimizzata per percorsi ciclabili con attivazione su presenza.' },
                  ].map((card) => (
                    <div key={card.title} className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                      <h3 className="text-lg font-bold text-yiketeck-dark mb-3">{card.title}</h3>
                      <p className="text-gray-700">{card.text}</p>
                    </div>
                  ))}
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
