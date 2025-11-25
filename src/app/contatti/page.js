"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    subject: 'Richiesta informazioni'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        // Reset del form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          subject: 'Richiesta informazioni'
        });
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <main>
      <Navbar />
      
      {/* Header della pagina */}
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contattaci</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Hai domande, richieste o vuoi saperne di più sui nostri prodotti e servizi?
            Compilare il modulo sottostante e il nostro team ti risponderà al più presto.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonna sinistra - Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                {submitSuccess ? (
                  <div className="text-center py-8">
                    <svg className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 className="text-2xl font-bold mb-2">Messaggio inviato con successo!</h3>
                    <p className="text-gray-600 mb-6">Grazie per averci contattato. Ti risponderemo al più presto.</p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
                    >
                      Invia un altro messaggio
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold mb-6">Invia un messaggio</h2>
                    
                    {submitError && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                        <p>Si è verificato un errore durante l'invio del messaggio. Riprova più tardi o contattaci direttamente via email.</p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nome e Cognome *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yiketeck-red"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yiketeck-red"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Telefono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yiketeck-red"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Azienda
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yiketeck-red"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Oggetto *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yiketeck-red"
                        >
                          <option value="Richiesta informazioni">Richiesta informazioni</option>
                          <option value="Supporto tecnico">Supporto tecnico</option>
                          <option value="Collaborazione">Collaborazione</option>
                          <option value="Commissionare progetto">Commissionare progetto</option>
                          <option value="Richiesta speech">Richiesta speech</option>
                          <option value="Altro">Altro</option>
                        </select>
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Messaggio *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="6"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yiketeck-red"
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <input
                        id="privacy"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-yiketeck-red focus:ring-yiketeck-red border-gray-300 rounded"
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                        Acconsento al trattamento dei dati personali secondo la{' '}
                        <a href="/privacy" className="text-yiketeck-red hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-gray-200 text-gray-700 font-medium rounded-md shadow-md hover:bg-red-700 hover:text-white transition duration-300 border border-gray-300"
                    >
                      {isSubmitting ? 'Invio in corso...' : 'Invia messaggio'}
                    </button>
                  </form>
                )}
              </div>
            </div>
            
            {/* Colonna destra - Informazioni di contatto */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4 text-yiketeck-dark">Sede Cina</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-700 mb-2">
                        <span className="font-medium">YiKe Teck Co., Ltd.</span><br />
                        No. 80 Shilong Section, Dongjiang Avenue,<br />
                        Shilong Town, Dongguan,<br />
                        Guangdong Province, China
                      </p>
                      <p className="text-gray-700">
                        意科技术（东莞）有限公司<br />
                        广东省东莞市石龙镇东江大道石龙段80号
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-gray-700">
                      +86 0769-86889123<br />
                      +86 133 16376169<br />
                      +86 133 60874140<br />
                      +39 348 4029687 (WeChat/WhatsApp)
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-700">info @ yiketeck.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4 text-yiketeck-dark">Orari</h2>
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-yiketeck-red mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">
                    Lunedì - Venerdì: 8:00 - 19:00<br />
                    Sabato 8:00-13.00 - Domenica: Chiuso
                   
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h2 className="text-xl font-bold mb-4 text-yiketeck-dark">Social Media</h2>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 hover:text-yiketeck-red transition duration-300">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-yiketeck-red transition duration-300">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-yiketeck-red transition duration-300">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-yiketeck-red transition duration-300">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.502 19.525c1.524-1.105 2.498-2.738 2.498-4.554 0-3.326-3.237-6.023-7.227-6.023s-7.227 2.697-7.227 6.023c0 3.327 3.237 6.024 7.227 6.024 0.838 0 1.648-0.102 2.398-0.293 0.699 0.438 1.549 0.86 2.583 1.068 0.174 0.035 0.369 0.072 0.571 0.104 0.527 0.084 1.001-0.399 0.777-0.898-0.442-0.995-0.631-1.784-0.6-2.451zM12 16.525c-0.688 0-1.247-0.559-1.247-1.247s0.559-1.246 1.247-1.246 1.247 0.559 1.247 1.246c0 0.688-0.559 1.247-1.247 1.247zM15.247 16.525c-0.688 0-1.247-0.559-1.247-1.247s0.559-1.246 1.247-1.246 1.247 0.559 1.247 1.246c0 0.688-0.559 1.247-1.247 1.247zM18.494 16.525c-0.688 0-1.247-0.559-1.247-1.247s0.559-1.246 1.247-1.246 1.247 0.559 1.247 1.246c0 0.688-0.559 1.247-1.247 1.247z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mappa delle sedi */}
      <section className="pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">La nostra sede</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="rounded-lg overflow-hidden relative">
              <Image
                src="/YikeTeck_Map.webp"
                alt="Mappa sede Yike Teck a Dongguan"
                width={1185}
                height={659}
                className="w-full h-auto"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-3 z-10">
                <a
                  href="https://uri.amap.com/marker?position=113.852919,23.111207&name=意科技术（东莞）有限公司"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-gray-900 font-semibold rounded-full shadow-md border border-gray-300 hover:bg-gray-100 transition"
                >
                  Apri mappa interattiva
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
