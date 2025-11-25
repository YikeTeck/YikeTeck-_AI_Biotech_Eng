import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function ForCompaniesPage() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">面向企业</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            为你的业务提供创新科技方案。浏览我们的委托开发、技术采购与战略合作服务。
          </p>
        </div>
      </section>
      
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-yiketeck-dark">为你的业务提供的方案</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              我们提供多种服务：定制工程、技术采购和战略合作，共同推动你的创新项目。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="relative h-64 bg-gray-200">
                <Image 
                  src="/project_1.webp" 
                  alt="项目" 
                  width={600}
                  height={256}
                  className="w-full h-full object-cover"
                  quality={85}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-yiketeck-dark mb-3">委托项目</h3>
                <p className="text-gray-600 mb-6">
                  有创意或技术难题？我们的工程师与设计师将你的想法变成现实。
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>定制工程项目</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>创新且实用的设计</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>前沿技术方案</span>
                  </li>
                </ul>
                <Link
                  href="/zh/for-companies/projects"
                  className="inline-flex items-center text-yiketeck-red hover:text-red-700 font-medium"
                >
                  了解更多
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="relative h-64 bg-gray-200">
                <Image 
                  src="/tech_sourcing.webp" 
                  alt="技术采购" 
                  width={600}
                  height={256}
                  className="w-full h-full object-cover"
                  quality={85}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-yiketeck-dark mb-3">技术采购</h3>
                <p className="text-gray-600 mb-6">
                  想为业务引入新技术？我们的网络可甄别并提供先进方案。
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>获取最新技术</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>全球技术合作伙伴网络</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>按需定制方案</span>
                  </li>
                </ul>
                <Link
                  href="/zh/for-companies/sourcing"
                  className="inline-flex items-center text-yiketeck-red hover:text-red-700 font-medium"
                >
                  了解更多
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="relative h-64 bg-gray-200">
                <Image 
                  src="/collaborations_1.webp" 
                  alt="合作" 
                  width={600}
                  height={256}
                  className="w-full h-full object-cover"
                  quality={85}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-yiketeck-dark mb-3">合作</h3>
                <p className="text-gray-600 mb-6">
                  我们重视合作：与战略伙伴携手，共同打造更具创新和影响力的方案。
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>联合研发项目</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>战略合作</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>互补能力的整合</span>
                  </li>
                </ul>
                <Link
                  href="/zh/for-companies/collaborations"
                  className="inline-flex items-center text-yiketeck-red hover:text-red-700 font-medium"
                >
                  了解更多
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-yiketeck-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">准备好升级业务了吗？</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            联系我们，讨论你的需求，看看我们如何帮助你达成科技目标。
          </p>
          <Link 
            href="/zh/contact" 
            className="px-8 py-3 bg-white text-yiketeck-red rounded-full hover:bg-gray-100 transition duration-300 font-medium"
          >
            联系我们
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
