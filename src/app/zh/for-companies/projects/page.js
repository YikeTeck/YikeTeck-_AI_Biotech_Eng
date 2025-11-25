import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  const competenze = [
    {
      title: '工业设计',
      text: '为工业自动化、能源效率和生产流程优化打造创新方案。从概念到落地，每一步都严控细节。'
    },
    {
      title: '嵌入式系统',
      text: '专注物联网、工业控制和消费电子的嵌入式设备设计。我们的 HOROMA 平台提供先进的实时可视化与控制。'
    },
    {
      title: '创新设计',
      text: '团队结合美学与功能，创造既能解决技术问题又拥有出色用户体验的产品。我们设计直观界面与人体工学方案。'
    },
    {
      title: '移动技术',
      text: '开发可与硬件无缝集成的移动与 Web 应用，构建完整的监控和远程控制生态系统。'
    },
    {
      title: '定制软件',
      text: '基于你的业务需求打造流程自动化和数据管理方案，采用最新的人工智能与机器学习技术。'
    },
    {
      title: '网络安全',
      text: '安全是每个项目的核心。我们采用最佳实践保护系统与数据，抵御最新威胁。'
    }
  ];

  const steps = [
    {
      step: '1',
      title: '咨询与分析',
      text: '通过详细会谈了解需求、目标与挑战。分析要求、评估技术可行性，并确定最佳策略。'
    },
    {
      step: '2',
      title: '方案与规划',
      text: '提供包含技术规格、时间表、预算和交付物的详细方案。确认后制定里程碑与资源分配计划。'
    },
    {
      step: '3',
      title: '设计与原型',
      text: '工程师与设计师开发详细概念和功能原型，包括硬件设计、软件开发与系统集成，用于验证功能与易用性。'
    },
    {
      step: '4',
      title: '开发与测试',
      text: '采用敏捷方法实施，确保灵活性与适应性。对每个组件进行严格测试，确保质量、可靠性与安全。'
    },
    {
      step: '5',
      title: '交付与支持',
      text: '精确交付，提供完整文档、培训与实施支持。持续陪伴，确保长期价值。'
    }
  ];

  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">委托项目</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            我们把你的想法变为现实。工程师与设计师团队随时准备为你的业务开发定制技术方案。
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">从愿景到现实</h2>
              <p className="text-lg text-gray-700 mb-6">
                有创新想法或技术挑战吗？我们的工程师与设计师随时准备将你的愿景变成现实。我们为每个需求提供量身定制的解决方案，结合先进技术、创意和对细节的关注。
              </p>
              <p className="text-lg text-gray-700 mb-6">
                每个项目都遵循经过验证的方法论，确保高品质、准时与客户满意。从需求分析到最终交付，我们在每个阶段都与你并肩前行。
              </p>
            </div>
            <div className="relative h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden w-full md:w-1/2">
              <Image
                src="/project_company.webp"
                alt="定制项目"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={90}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center mb-12">我们的专长</h2>

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

      {/* Process */}
      <section className="py-16 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <h2 className="text-3xl font-bold text-yiketeck-dark text-center">我们的流程</h2>

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

      {/* CTA */}
      <section className="py-16 bg-yiketeck-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">有项目想法吗？</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            立即联系我们，讨论你的创意，看看我们如何帮助你将其变为现实。我们的专家团队随时倾听需求并提供量身定制的方案。
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
