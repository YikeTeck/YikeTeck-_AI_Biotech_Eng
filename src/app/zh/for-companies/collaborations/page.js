import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function CollaborationsPage() {
  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">合作</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            与 Yike Teck 一起探索合作机会，通过战略伙伴关系创造创新解决方案，拓展业务可能性。
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">合作的力量</h2>
              <p className="text-lg text-gray-700 mb-6">
                我们坚信合作的力量。与战略伙伴并肩，我们能将互补的技能、资源和视角结合起来，打造更具创新和影响力的方案，应对复杂挑战并抓住新的市场机会。
              </p>
              <p className="text-lg text-gray-700 mb-6">
                我们的合作基于共同的价值观、目标以及对卓越与创新的承诺。无论是研发项目、商业伙伴关系，还是联合培训计划，我们都乐于探索多种合作形式。
              </p>
            </div>

            <div className="md:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/collaboration.webp"
                alt="合作"
                width={800}
                height={600}
                quality={90}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration types */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center mb-12">合作类型</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '联合研发',
                text: '与企业、大学和研究中心合作，开发创新技术与前沿解决方案，将我们的技术经验与伙伴的专业能力结合。',
                bullets: ['应用研究项目', '创新原型开发', '技术共同申请专利'],
              },
              {
                title: '战略伙伴关系',
                text: '与互补型企业建立战略联盟，扩充产品与服务，进入新市场，打造端到端方案，为各方创造价值。',
                bullets: ['产品与服务共创', '整合互补技术', '联合 go-to-market 策略'],
              },
              {
                title: '创新生态',
                text: '积极参与创新网络、加速器和开放式创新项目，与初创企业、投资者及科技生态伙伴合作。',
                bullets: ['初创企业导师计划', '参与开放式创新项目', '与孵化器和加速器合作'],
              },
            ].map((card) => (
              <div key={card.title} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/5 space-y-4">
                <h3 className="text-xl font-bold text-yiketeck-dark mb-1">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.text}</p>
                <ul className="space-y-2 text-gray-700">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 text-lg leading-none select-none" style={{ color: '#c22a2a' }} aria-hidden="true">
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

      {/* Benefits */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center mb-12">合作收益</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { step: '1', title: '加速创新', text: '结合不同专长与互补视角，加速创新方案的开发，缩短上市时间。' },
              { step: '2', title: '资源与能力共享', text: '合作让我们共享技术资源与基础设施，优化投入，应对更具野心的项目。' },
              { step: '3', title: '获取新市场', text: '战略伙伴关系让我们借助伙伴的网络和渠道进入新市场与细分领域。' },
              { step: '4', title: '一体化方案', text: '整合核心技术与互补服务，打造端到端方案，为客户提供更高价值。' },
              { step: '5', title: '创意协同', text: '联合研发将独特能力相结合，创造超越简单叠加的解决方案。' },
              { step: '6', title: '可持续增长', text: '结构化合作促进韧性增长，分散收入来源，降低对单一市场的依赖。' },
            ].map((item) => (
              <div key={item.step} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/5 space-y-3">
                <div className="h-10 w-10 rounded-full border-2 border-yiketeck-dark text-yiketeck-dark font-bold flex items-center justify-center bg-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-yiketeck-dark">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center mb-12">我们的合作方法</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              { step: '1', title: '探索', text: '开放式对话，理解目标、能力与协同点，评估合作的可行性与价值。' },
              { step: '2', title: '定义', text: '共同确定目标、角色与 KPI，以清晰治理确保平衡与透明。' },
              { step: '3', title: '实施', text: '并肩工作，保持持续沟通，敏捷应对挑战与机会。' },
            ].map((item) => (
              <div key={item.step} className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/5 space-y-3 text-left">
                <div className="h-10 w-10 rounded-full border-2 border-yiketeck-dark text-yiketeck-dark font-bold flex items-center justify-center bg-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-yiketeck-dark">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              在每个阶段，我们坚持透明、灵活且结果导向的方式，打造为所有合作伙伴创造真实、可持续价值的合作关系。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-yiketeck-dark">有兴趣与我们合作吗？</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            如果你有潜在的合作想法，或想探索我们之间的协同，欢迎随时联系。我们始终乐于开启新的合作机会。
          </p>
          <Link
            href="/zh/contact"
            className="px-8 py-3 bg-gray-200 text-gray-700 border border-gray-300 rounded-full hover:bg-red-700 hover:text-white transition duration-300 font-medium"
          >
            一起谈合作
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
