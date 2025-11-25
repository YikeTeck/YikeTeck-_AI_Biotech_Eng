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
    subject: '信息咨询'
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
          subject: '信息咨询'
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
          <h1 className="text-4xl font-bold mb-4">联系我们</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            有疑问、需求，或想进一步了解我们的产品和服务？请填写下方表单，我们的团队会尽快回复你。
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
                    <h3 className="text-2xl font-bold mb-2">消息发送成功！</h3>
                    <p className="text-gray-600 mb-6">感谢你的联系，我们会尽快回复。</p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
                    >
                      再发一条消息
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold mb-6">发送消息</h2>
                    
                    {submitError && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                        <p>发送失败，请稍后再试或直接邮件联系我们。</p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          姓名 *
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
                          邮箱 *
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
                          电话
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
                          公司
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
                          主题 *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yiketeck-red"
                        >
                          <option value="信息咨询">信息咨询</option>
                          <option value="技术支持">技术支持</option>
                          <option value="合作">合作</option>
                          <option value="委托项目">委托项目</option>
                          <option value="演讲需求">演讲需求</option>
                          <option value="其他">其他</option>
                        </select>
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          留言 *
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
                        我同意按照 <a href="/zh/privacy" className="text-yiketeck-red hover:underline">隐私政策</a> 处理个人数据。
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-gray-200 text-gray-700 font-medium rounded-md shadow-md hover:bg-red-700 hover:text-white transition duration-300 border border-gray-300"
                    >
                      {isSubmitting ? '发送中...' : '发送消息'}
                    </button>
                  </form>
                )}
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4 text-yiketeck-dark">中国办公地点</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-700 mb-2">
                        <span className="font-medium">意科技术（东莞）有限公司</span><br />
                        广东省东莞市石龙镇东江大道石龙段80号
                      </p>
                      <p className="text-gray-700">
                        YiKe Teck Co., Ltd.<br />
                        No. 80 Shilong Section, Dongjiang Avenue,<br />
                        Shilong Town, Dongguan, Guangdong, China
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
                <h2 className="text-xl font-bold mb-4 text-yiketeck-dark">工作时间</h2>
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-yiketeck-red mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">
                    周一 - 周五: 8:00 - 19:00<br />
                    周六 8:00-13:00 - 周日: 休息
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">公司位置</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="rounded-lg overflow-hidden relative">
              <Image
                src="/YikeTeck_Map.webp"
                alt="Yike Teck 东莞公司地图"
                width={1185}
                height={659}
                className="w-full h-auto"
                priority={false}
              />
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-3">
                <a
                  href="https://uri.amap.com/marker?position=113.852919,23.111207&name=意科技术（东莞）有限公司"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-gray-900 font-semibold rounded-full shadow-md border border-gray-300 hover:bg-gray-100 transition"
                >
                  打开互动地图
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
