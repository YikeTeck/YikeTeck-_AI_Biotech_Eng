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
    subject: 'Information request'
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
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          subject: 'Information request'
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
      
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contact us</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Questions, requests, or need more about our products and services? Fill the form below and we’ll get back to you soon.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                {submitSuccess ? (
                  <div className="text-center py-8">
                    <svg className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 className="text-2xl font-bold mb-2">Message sent!</h3>
                    <p className="text-gray-600 mb-6">Thanks for contacting us. We’ll reply as soon as possible.</p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold mb-6">Send a message</h2>
                    
                    {submitError && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                        <p>There was an error sending the message. Please try again later or email us directly.</p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name and surname *
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
                          Phone
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
                          Company
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
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yiketeck-red"
                        >
                          <option value="Information request">Information request</option>
                          <option value="Technical support">Technical support</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Project commission">Project commission</option>
                          <option value="Speech request">Speech request</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message *
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
                        I agree to the processing of personal data according to the{' '}
                        <a href="/en/privacy" className="text-yiketeck-red hover:underline">
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
                      {isSubmitting ? 'Sending...' : 'Send message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4 text-yiketeck-dark">China office</h2>
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
                <h2 className="text-xl font-bold mb-4 text-yiketeck-dark">Hours</h2>
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-yiketeck-red mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">
                    Monday - Friday: 8:00 - 19:00<br />
                    Saturday 8:00-13:00 - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Our location</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="rounded-lg overflow-hidden relative">
              <Image
                src="/YikeTeck_Map.webp"
                alt="Map of Yike Teck Dongguan office"
                width={1185}
                height={659}
                className="w-full h-auto"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-3">
                <a
                  href="https://uri.amap.com/marker?position=113.852919,23.111207&name=意科技术（东莞）有限公司"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-gray-900 font-semibold rounded-full shadow-md border border-gray-300 hover:bg-gray-100 transition"
                >
                  Open interactive map
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
