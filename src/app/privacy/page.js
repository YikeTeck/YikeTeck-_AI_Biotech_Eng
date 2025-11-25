import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      
      {/* Header della pagina */}
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Ultimo aggiornamento: 13 Aprile 2025
          </p>
        </div>
      </section>
      
      {/* Contenuto Privacy Policy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Introduzione</h2>
            <p>
              La tua privacy è importante per noi. Questa Privacy Policy spiega come Yike Teck raccoglie, utilizza, 
              divulga e protegge i tuoi dati personali quando utilizzi il nostro sito web o i nostri servizi.
            </p>
            
            <h2>Informazioni che raccogliamo</h2>
            <p>
              Possiamo raccogliere diversi tipi di informazioni, tra cui:
            </p>
            <ul>
              <li>
                <strong>Informazioni personali</strong>: nome, indirizzo email, numero di telefono, indirizzo postale 
                e altre informazioni che ci fornisci volontariamente tramite i nostri moduli di contatto.
              </li>
              <li>
                <strong>Informazioni sul dispositivo</strong>: indirizzo IP, tipo di browser, sistema operativo, 
                provider di servizi Internet, pagine di riferimento/uscita e timestamp.
              </li>
              <li>
                <strong>Cookie e tecnologie simili</strong>: utilizziamo cookie e tecnologie simili per migliorare 
                l'esperienza sul nostro sito e per analizzare il traffico.
              </li>
            </ul>
            
            <h2>Come utilizziamo le informazioni</h2>
            <p>
              Utilizziamo le informazioni raccolte per:
            </p>
            <ul>
              <li>Fornire, gestire e migliorare i nostri servizi</li>
              <li>Comprendere e analizzare come utilizzi il nostro sito</li>
              <li>Comunicare con te, incluso l'invio di notifiche e aggiornamenti sui nostri servizi</li>
              <li>Prevenire frodi e abusi</li>
            </ul>
            
            <h2>Condivisione delle informazioni</h2>
            <p>
              Non vendiamo, scambiamo o trasferiamo in altro modo le tue informazioni personali a terzi, ad eccezione 
              di quanto descritto in questa Privacy Policy. Possiamo condividere le tue informazioni con:
            </p>
            <ul>
              <li>
                <strong>Fornitori di servizi</strong>: terze parti che ci aiutano a gestire il nostro sito web 
                e a fornire i nostri servizi.
              </li>
              <li>
                <strong>Partner commerciali</strong>: possiamo condividere le tue informazioni con partner commerciali 
                per offrirti determinati prodotti, servizi o promozioni.
              </li>
              <li>
                <strong>Requisiti legali</strong>: possiamo divulgare le tue informazioni se richiesto dalla legge 
                o in risposta a richieste legali valide.
              </li>
            </ul>
            
            <h2>Sicurezza dei dati</h2>
            <p>
              Adottiamo misure di sicurezza appropriate per proteggere le tue informazioni personali da perdita, 
              uso improprio, accesso non autorizzato, divulgazione o alterazione.
            </p>
            
            <h2>I tuoi diritti</h2>
            <p>
              Hai il diritto di:
            </p>
            <ul>
              <li>Accedere, correggere o eliminare le tue informazioni personali</li>
              <li>Limitare o opporti al trattamento dei tuoi dati</li>
              <li>Ricevere una copia delle tue informazioni personali in un formato strutturato</li>
              <li>Presentare un reclamo a un'autorità di controllo</li>
            </ul>
            
            <h2>Modifiche alla Privacy Policy</h2>
            <p>
              Possiamo aggiornare questa Privacy Policy di tanto in tanto. Ti consigliamo di rivedere periodicamente 
              questa pagina per rimanere informato sulle eventuali modifiche.
            </p>
            
            <h2>Contattaci</h2>
            <p>
              Se hai domande o dubbi sulla nostra Privacy Policy, non esitare a contattarci a privacy@yiketeck.com.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}