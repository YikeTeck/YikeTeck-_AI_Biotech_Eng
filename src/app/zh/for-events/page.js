import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function EventsPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">演讲、活动与更新</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            了解 Yike Teck 如何通过技术演讲、参展为你的活动增值，并获取我们的最新动态。
          </p>
        </div>
      </section>

      <section id="speech" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">申请技术演讲</h2>
              <p className="text-lg text-gray-600 mb-6">
                我们的专家可提供 AI、先进技术与创新相关的演讲，为你的活动带来扎实、可落地的内容。
              </p>

              <h3 className="text-xl font-bold mb-4">主题</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yiketeck-red mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>人工智能与机器学习</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yiketeck-red mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>智慧城市与城市科技</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yiketeck-red mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>技术创新与设计</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-yiketeck-red mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>未来科技与新兴趋势</span>
                </li>
              </ul>

              <Link
                href="/zh/contact"
                className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
              >
                申请演讲
              </Link>
            </div>

            <div className="md:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/speech.webp"
                alt="技术演讲"
                width={800}
                height={600}
                quality={90}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">参与活动</h2>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
            我们参加重要的科技与工业活动，可作为演讲嘉宾、带来演示或与您共创专属环节。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-yiketeck-red rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">行业展会</h3>
              <p className="text-gray-600">
                参加主要科技展会，展示我们的解决方案。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-yiketeck-red rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">科技会议</h3>
              <p className="text-gray-600">
                就新兴科技、AI 与数字创新发表演讲。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-yiketeck-red rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">工作坊</h3>
              <p className="text-gray-600">
                短时工作坊，包含指导练习和可直接使用的材料。
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/zh/contact"
              className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
            >
              联系我们
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-yiketeck-dark">想获取更多更新？</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            联系我们，了解项目进展、创新工作及参会安排。
          </p>
          <a
            href="/zh/contact"
            className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
          >
            联系我们
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
