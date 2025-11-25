import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function SourcingPage() {
  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">技术采购</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            借助我们的全球合作伙伴网络和在主要生产中心的本地存在，让你的业务获取最前沿的技术。
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">你理想的技术采购伙伴</h2>
              <p className="text-lg text-gray-700 mb-6">
                在为业务寻找创新技术吗？我们依托全球网络，为你甄选并提供最先进的解决方案，确保质量、可靠性与竞争力价格。
              </p>
              <p className="text-lg text-gray-700 mb-6">
                得益于我们在中国，尤其是东莞（全球领先的科技与制造中心）的直接布局，你能获得对前沿组件与技术的优先访问，减少中间环节，确保高效透明的采购流程。
              </p>
            </div>

            <div className="md:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/Dongguan_sourcing.webp"
                alt="技术采购"
                width={800}
                height={600}
                quality={90}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center mb-12">我们的采购服务</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: '供应商研究与筛选',
                text: '依据质量、可靠性、产能、合规与可持续性等严格标准，识别最合适的技术和组件供应商。',
                bullets: ['供应商尽职调查', '技术方案评估', '多供应商对比分析'],
              },
              {
                title: '采购管理',
                text: '管理从合同谈判到订单管理的全过程，优化成本并确保流程透明。',
                bullets: ['合同与价格谈判', '订单管理与规划', '采购成本优化'],
              },
              {
                title: '质量控制',
                text: '在供应链各阶段实施严格质控，确保所有组件和技术符合最高标准和要求。',
                bullets: ['出货前检验', '合规与性能测试', '生产流程审计'],
              },
              {
                title: '物流与仓储',
                text: '提供完整物流方案，从包装到运输再到临时仓储，确保准时交付与高效库存管理。',
                bullets: ['端到端供应链管理', '定制化包装方案', '实时运输监控'],
              },
            ].map((card) => (
              <div key={card.title} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/5 space-y-4">
                <h3 className="text-xl font-bold text-yiketeck-dark">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.text}</p>
                <ul className="space-y-2 text-gray-700">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 text-lg leading-none select-none text-[#c22a2a]" aria-hidden="true">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">战略合作</h2>
              <h3 className="text-xl font-bold text-yiketeck-dark mb-4">Shamana - 我们的物流与采购合作伙伴</h3>
              <p className="text-lg text-gray-700 mb-6">
                在采购、物流与仓储方面，我们与 Shamana (
                <a
                  href="https://www.shamana-china.com"
                  className="text-yiketeck-dark underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.shamana-china.com
                </a>
                ) 保持紧密合作，这是一家同样位于东莞、距离我们办公室仅数步的知名公司。
              </p>
              <p className="text-lg text-gray-700 mb-6">
                这项战略合作让我们提供从供应商研究与筛选到物流与仓储的全流程服务，保证高效、可靠和缩短交付时间。
              </p>

              <ul className="space-y-3 mb-8">
                {['东莞战略仓储', '先进库存管理', '全球物流方案', '报关与单证管理'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-lg leading-none select-none text-[#c22a2a]" aria-hidden="true">
                      •
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://www.shamana-china.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-700 transition duration-300"
              >
                访问 Shamana 官网
              </a>
            </div>

            <div className="md:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/Shamana_1__.webp"
                alt="Shamana 合作伙伴"
                width={800}
                height={600}
                quality={90}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center mb-12">我们的技术采购优势</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '缩短周期',
                text: '依托主要生产中心的本地存在与 Shamana 合作，显著缩短采购周期，消除中间环节，简化流程。',
              },
              {
                title: '成本优化',
                text: '凭借全球网络与战略合作，获得更优条件，优化采购成本，确保最佳性价比。',
              },
              {
                title: '质量保障',
                text: '严格的供应商筛选和全链路质控，保证每个组件都符合最高标准。',
              },
              {
                title: '全球获取',
                text: '国际网络让我们能获取全球范围内的创新技术与先进组件，无论产地在哪里。',
              },
              {
                title: '灵活与可扩展',
                text: '方案可随业务规模与需求调整，按量扩展，在每个阶段保持最大灵活性。',
              },
              {
                title: '本地技术支持',
                text: '专业团队提供全面技术支持，帮助客户挑选最适合的技术方案。',
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/5">
                <h3 className="text-xl font-bold text-yiketeck-dark mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center">我们的采购流程</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: '1', title: '需求分析', text: '理解你的具体需求，与您共同明确技术规格与需求量。' },
              { step: '2', title: '供应商搜寻', text: '通过全球网络锁定最合适的供应商并评估其能力。' },
              { step: '3', title: '评估与选择', text: '进行对比分析，选择在质量、价格和周期上最匹配的供应商。' },
              { step: '4', title: '谈判', text: '谈判合同条款、价格和交付计划，以优化成本和时间。' },
              { step: '5', title: '物流', text: '管理从发货到仓储的全流程物流，确保准时高效交付。' },
            ].map((item) => (
              <div key={item.step} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/10 text-left space-y-3">
                <div className="h-10 w-10 rounded-full border-2 border-yiketeck-dark text-yiketeck-dark font-bold flex items-center justify-center bg-white">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-yiketeck-dark">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yiketeck-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">准备好优化你的技术采购了吗？</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            立即联系我们，了解我们如何帮助你为业务寻找最具创新性和竞争力的技术解决方案，提供从研究到交付的全程服务。
          </p>
          <Link
            href="/zh/contact"
            className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
          >
            预约咨询
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
