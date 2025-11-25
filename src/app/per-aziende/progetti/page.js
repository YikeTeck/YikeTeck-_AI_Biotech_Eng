import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function ProgettiPage() {
  const competenze = [
    {
      title: 'Progettazione Industriale',
      text: "Sviluppiamo soluzioni innovative per l'automazione industriale, l'efficienza energetica e l'ottimizzazione dei processi produttivi. Dal concept alla realizzazione, seguiamo ogni fase con la massima attenzione ai dettagli."
    },
    {
      title: 'Sistemi Embedded',
      text: 'Siamo specializzati nella progettazione di dispositivi embedded per applicazioni IoT, controllo industriale e consumer electronics. La nostra piattaforma HOROMA offre soluzioni avanzate per la visualizzazione e il controllo in tempo reale.'
    },
    {
      title: 'Design Innovativo',
      text: "Il nostro team di designer combina estetica e funzionalità per creare prodotti che non solo risolvono problemi tecnici, ma offrono anche un'esperienza utente eccezionale. Progettiamo interfacce intuitive e design ergonomici."
    },
    {
      title: 'Tecnologie Mobili',
      text: 'Sviluppiamo applicazioni mobili e web che si integrano perfettamente con i sistemi hardware, creando ecosistemi tecnologici completi per il monitoraggio e il controllo remoto dei dispositivi.'
    },
    {
      title: 'Software Personalizzato',
      text: "Creiamo soluzioni software su misura per le esigenze specifiche del tuo business, dall'automazione dei processi alla gestione dei dati, implementando le più recenti tecnologie di intelligenza artificiale e machine learning."
    },
    {
      title: 'Cybersecurity',
      text: 'La sicurezza è al centro di ogni nostro progetto. Implementiamo le migliori pratiche di cybersecurity per garantire che i tuoi sistemi e dati siano protetti dalle minacce più recenti e sofisticate.'
    }
  ];

  const steps = [
    {
      step: '1',
      title: 'Consultazione e Analisi',
      text: 'Iniziamo con un incontro dettagliato per comprendere le tue esigenze, obiettivi e sfide. Analizziamo i requisiti, valutiamo la fattibilità tecnica e identifichiamo le migliori strategie per il tuo progetto.'
    },
    {
      step: '2',
      title: 'Proposta e Pianificazione',
      text: "Sviluppiamo una proposta dettagliata che include specifiche tecniche, tempistiche, budget e deliverable. Dopo l'approvazione, creiamo un piano di progetto con milestone chiare e allocazione delle risorse."
    },
    {
      step: '3',
      title: 'Design e Prototipazione',
      text: "Il nostro team di ingegneri e designer sviluppa concept dettagliati e prototipi funzionali. Questa fase include la progettazione hardware, lo sviluppo software, e l'integrazione di sistemi per valutare la funzionalità e l'usabilità."
    },
    {
      step: '4',
      title: 'Sviluppo e Test',
      text: 'Implementiamo il progetto seguendo metodologie agili per assicurare flessibilità e adattabilità. Ogni componente viene rigorosamente testato per garantire la massima qualità, affidabilità e sicurezza.'
    },
    {
      step: '5',
      title: 'Consegna e Supporto',
      text: "Completiamo il progetto con una consegna accurata che include documentazione completa, formazione e assistenza all'implementazione. Offriamo supporto continuo post-progetto per garantire il massimo valore nel tempo."
    }
  ];

  return (
    <main>
      <Navbar />
      
      {/* Header della pagina */}
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Commissionare Progetti</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Trasformiamo le tue idee in realtà. Il nostro team di ingegneri e designer è pronto a sviluppare
            soluzioni tecnologiche personalizzate per ogni esigenza del tuo business.
          </p>
        </div>
      </section>
      
      {/* Sezione Introduttiva */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">Dalla visione alla realtà</h2>
              <p className="text-lg text-gray-700 mb-6">
                Hai un'idea innovativa o una sfida tecnologica da risolvere? Il nostro team di ingegneri e designer è pronto a trasformare la tua visione in realtà. Offriamo soluzioni personalizzate per ogni esigenza, combinando competenze tecniche avanzate con creatività e attenzione ai dettagli.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Ogni progetto viene sviluppato seguendo una metodologia collaudata che garantisce risultati di alta qualità, rispetto delle tempistiche e piena soddisfazione del cliente. Dall'analisi dei requisiti alla consegna finale, siamo al tuo fianco in ogni fase del processo.
              </p>
            </div>
            <div className="relative h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden w-full md:w-1/2">
              <Image 
                src="/project_company.webp" 
                alt="Progetti Personalizzati" 
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={90} 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Le nostre competenze */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center mb-12">Le nostre competenze</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competenze.map((card) => (
              <div key={card.title} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/5">
                <h3 className="text-xl font-bold text-yiketeck-dark mb-3">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Il Nostro Processo */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center">Il nostro processo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((item) => (
              <div key={item.step} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/5 flex gap-4">
                <span className="h-10 w-10 rounded-full bg-white text-yiketeck-red font-bold flex items-center justify-center flex-shrink-0 border border-yiketeck-red/60">
                  {item.step}
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-yiketeck-dark">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-yiketeck-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Hai un progetto in mente?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contattaci oggi stesso per discutere della tua idea e scoprire come possiamo aiutarti a trasformarla in realtà.
            Il nostro team di esperti è pronto ad ascoltare le tue esigenze e a proporre soluzioni su misura.
          </p>
          <Link
            href="/contatti"
            className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
          >
            Richiedi una consultazione
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
