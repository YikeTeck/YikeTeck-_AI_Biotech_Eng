import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function FlomindyPage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      
      {/* Header della pagina */}
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
          <p className="text-lg text-gray-600 max-w-3xl">
            App per migliorare le performance cognitive e la concentrazione.
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
                        'Supporta frequenze EEG da 3 a 19Hz',
                        'Funziona in background senza interruzioni',
                        'Non richiede dispositivi aggiuntivi',
                        'Basato su studi scientifici',
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
            
            {/* Contenuto principale */}
            <div className="lg:w-2/3">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Cos'è Flomindy?</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Flomindy è un'app innovativa, in corso di brevetto, che sfrutta il flickering del display (su PC, tablet o smartphone) per sincronizzare le onde cerebrali senza la necessità di dispositivi aggiuntivi come occhiali o cuffie. L'app funziona in background, permettendoti di continuare a utilizzare il tuo dispositivo normalmente, mentre ottimizza il tuo stato cognitivo.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Con Flomindy, non devi fare altro: basta installarla e iniziare a utilizzare il tuo dispositivo come al solito, e l'app, dopo aver programmato il tipo di attività che intendi svolgere, inizierà a funzionare in modo discreto affinché tu possa migliorare la tua concentrazione, produttività e focus senza interruzioni.
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  L'app funziona utilizzando diverse frequenze EEG che sincronizzano il cervello in base all'attività che stai svolgendo. In altre parole, puoi continuare a lavorare, studiare o rilassarti mentre l'app stimola il tuo cervello con la frequenza più adatta a quel momento, migliorando la tua produttività, creatività, concentrazione o capacità di problem solving.
                </p>
                <p className="mb-8 text-gray-700 leading-relaxed">
                  Flomindy si basa su numerosi studi scientifici che dimostrano come il cervello possa essere sincronizzato con impulsi luminosi. L'app sfrutta questo fenomeno naturale per guidare e mantenere il nostro cervello verso le frequenze ottimali, in base al tipo di attività che stiamo svolgendo. La tecnologia è completamente discreta: il flickering dello schermo avviene in background, permettendoti di continuare ad utilizzare il dispositivo senza interruzioni.
                </p>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Funzionamento e Frequenze</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Flomindy supporta un range di frequenze EEG da 3 fino a 19Hz. Questo range è progettato per ottimizzare aspetti specifici delle prestazioni mentali:
                </p>
                <div className="bg-[#f5f5f5] p-6 rounded-2xl mb-8 border border-black/5">
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 pr-4 font-bold text-yiketeck-dark w-1/3">Delta/Theta (3-6 Hz):</td>
                        <td className="py-3">Ottimale per il rilassamento e il sonno profondo, favorisce il recupero e la riduzione dello stress.</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 pr-4 font-bold text-yiketeck-dark">Theta (6-9 Hz):</td>
                        <td className="py-3">Promuove il rilassamento profondo e l'intuizione creativa.</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 pr-4 font-bold text-yiketeck-dark">Alpha Bassa (9-12 Hz):</td>
                        <td className="py-3">Favorisce l'apprendimento e la memoria, ideale per la concentrazione senza sforzo.</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 pr-4 font-bold text-yiketeck-dark">Alpha Alta (12-15 Hz):</td>
                        <td className="py-3">Migliora l'attenzione e l'efficienza nelle attività mentali complesse.</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-bold text-yiketeck-dark">Beta (15-19 Hz):</td>
                        <td className="py-3">Stimola la concentrazione e la capacità di risolvere problemi.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Per chi è consigliato Flomindy?</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Flomindy è progettato per supportare una vasta gamma di attività mentali e può essere utile per chiunque trascorra molte ore davanti al computer o abbia bisogno di ottimizzare le proprie capacità cognitive in modo naturale. Ecco alcune categorie di utenti che possono trarre beneficio dall'uso dell'app:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    { title: "Professionisti e Lavoratori d'Ufficio", text: 'Per chi trascorre molte ore davanti al PC e ha bisogno di mantenere alta la concentrazione, come manager, amministratori e impiegati.' },
                    { title: 'Studenti e Ricercatori', text: "Per migliorare la concentrazione durante lo studio e ottimizzare l'apprendimento, Flomindy è ideale per chi ha bisogno di assimilare grandi quantità di informazioni." },
                    { title: 'Designer e Creativi', text: 'Per stimolare la creatività e favorire la generazione di idee, questa app può essere particolarmente utile a chi lavora in campi creativi come design, scrittura, e arte.' },
                    { title: 'Professionisti che Risolvono Problemi Complessi', text: 'Per chi è impegnato in attività che richiedono capacità di problem-solving elevate, come ingegneri, sviluppatori, e tecnici, Flomindy aiuta a rimanere focalizzati e produttivi.' },
                    { title: 'Chi Cerca Rilassamento e Recupero', text: 'Se hai bisogno di una pausa dallo stress quotidiano, Flomindy offre frequenze di rilassamento per ridurre l’ansia e favorire il benessere mentale.' },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5"
                    >
                      <h3 className="text-xl font-bold text-yiketeck-dark mb-3">{card.title}</h3>
                      <p className="text-gray-700">{card.text}</p>
                    </div>
                  ))}
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Come usare Flomindy</h2>
                <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm mb-8 border border-black/5">
                  <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                    <li>Seleziona la frequenza in base all'attività che stai svolgendo (rilassamento, apprendimento, focus, problem solving).</li>
                    <li>Regola l'intensità dell'effetto di flickering a seconda della profondità che desideri.</li>
                    <li>Imposta il timer per scegliere quanto tempo vuoi che l'effetto duri (opzionale).</li>
                    <li>Premi "Start" per avviare l'effetto di flickering, che si attiverà in background mentre usi il dispositivo come al solito.</li>
                  </ol>
                  <p className="mt-4 text-gray-700">
                    Una volta attivato, Flomindy continua a funzionare in background senza bisogno di interazioni. Il sistema mostrerà un'icona discreta che indica la frequenza in uso, permettendoti di proseguire con le tue attività senza interruzioni.
                  </p>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Perché è innovativo?</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Flomindy è un'app che agisce in modo invisibile mentre usi il dispositivo, migliorando la tua attività cognitiva senza richiedere alcuno sforzo aggiuntivo. Funziona senza bisogno di dispositivi ingombranti, come occhiali o cuffie, e si adatta automaticamente alla tua attività.
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Basata su solide basi scientifiche, l'app sfrutta il potenziale dell'entrainment cerebrale per ottimizzare le tue capacità cognitive, migliorando la concentrazione, il focus e la produttività, tutto mentre continui a lavorare o a rilassarti.
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Flomindy si basa su anni di studi approfonditi sulla sincronizzazione delle frequenze cerebrali tramite il fenomeno del "trascimamento" (entainment), portati avanti da Andrew Mario Cincotto. Il primo brevetto in questo ambito fu depositato addirittura nel 2004, e prevedeva una stazione di "studio" innovativa, composta da lampade speciali, audio binaurale e generazione di ioni negativi.
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Con questo nuovo passo, siamo riusciti a sviluppare un'app utilizzabile ovunque, su tutti i dispositivi, che funziona in modo discreto, offrendo un valido e concreto supporto.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 border-t border-gray-200">
        <p className="text-lg text-gray-700">
          Per ulteriori informazioni, puoi anche visitare il sito ufficiale{' '}
          <a href="https://www.flomindy.com" className="text-yiketeck-red font-medium hover:underline">
            www.flomindy.com
          </a>
        </p>
      </div>
      
      <Footer />
    </main>
  );
}
