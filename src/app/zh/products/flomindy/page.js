import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function FlomindyPage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="h-15 w-auto mb-2">
            <Image
              src="/Flomindy_logo_black_lock1.webp"
              alt="Flomindy Logo"
              width={300}
              height={100}
              className="h-full w-auto"
              quality={90}
            />
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">提升认知表现与专注力的应用。</p>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-6">
                <div className="bg-[#f5f5f5] rounded-2xl shadow-sm overflow-hidden border border-black/5">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-yiketeck-dark flex items-center gap-2">
                      <span className="h-[2px] w-8 bg-[#c22a2a]" aria-hidden="true" />
                      主要特性
                    </h2>
                    <ul className="space-y-4">
                      {[
                        '支持 3 至 19Hz 的 EEG 频率',
                        '在后台静默运行',
                        '无需额外设备',
                        '基于科学研究',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#c22a2a] flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-black/5">
                  <Image
                    src="/Flomindy_1.webp"
                    alt="Flomindy App"
                    width={600}
                    height={256}
                    className="w-full h-full object-cover"
                    quality={85}
                  />
                </div>

                <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-black/5">
                  <Image
                    src="/Flomindy_2.webp"
                    alt="Flomindy Interface"
                    width={600}
                    height={256}
                    className="w-full h-full object-cover"
                    quality={85}
                  />
                </div>
              </div>
            </div>

            {/* Article */}
            <div className="lg:w-2/3">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">什么是 Flomindy？</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Flomindy 是正在申请专利的应用，通过显示屏闪烁（在 PC、平板或手机上）同步脑波，无需眼镜或头戴设备。在后台运行，你可照常使用设备，同时优化认知状态。
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  安装后选择你的活动类型，应用会在后台悄然运作，提升专注、效率与注意力，不打断工作。
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  应用利用多种 EEG 频率，根据任务同步大脑。工作、学习或放松时，它会刺激最合适的频率，增强生产力、创造力、专注或解决问题的能力。
                </p>
                <p className="mb-8 text-gray-700 leading-relaxed">
                  Flomindy 基于大量科学研究，表明大脑可通过光脉冲同步。屏幕闪烁在后台进行，你可以无缝继续操作设备。
                </p>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">工作原理与频段</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">支持 3 至 19Hz 的 EEG 频率，针对不同认知表现：</p>
                <div className="bg-[#f5f5f5] p-6 rounded-2xl mb-8 border border-black/5">
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 pr-4 font-bold text-yiketeck-dark w-1/3">Delta/Theta (3-6 Hz)：</td>
                        <td className="py-3">放松与深度睡眠，助力恢复与减压。</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 pr-4 font-bold text-yiketeck-dark">Theta (6-9 Hz)：</td>
                        <td className="py-3">深度放松与创造性直觉。</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 pr-4 font-bold text-yiketeck-dark">低 Alpha (9-12 Hz)：</td>
                        <td className="py-3">学习与记忆，轻松集中。</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 pr-4 font-bold text-yiketeck-dark">高 Alpha (12-15 Hz)：</td>
                        <td className="py-3">提升注意力与复杂任务效率。</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-bold text-yiketeck-dark">Beta (15-19 Hz)：</td>
                        <td className="py-3">刺激专注与问题解决。</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">适合哪些人？</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  适用于长时间使用电脑、需要自然方式优化认知的人群：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: '专业人士与办公人群',
                      text: '长时间电脑工作保持专注，适合经理、行政与知识工作者。',
                    },
                    {
                      title: '学生与研究人员',
                      text: '学习时提升注意力，助力大量信息的吸收。',
                    },
                    {
                      title: '设计师与创意人士',
                      text: '激发创意与灵感，适用于设计、写作与艺术创作。',
                    },
                    {
                      title: '解决复杂问题的专业人士',
                      text: '工程师、开发者、技术人员在复杂任务中保持专注与高效。',
                    },
                    {
                      title: '放松与恢复需求者',
                      text: '减轻压力的放松频率，支持心理健康。',
                    },
                  ].map((card) => (
                    <div key={card.title} className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                      <h3 className="text-xl font-bold text-yiketeck-dark mb-3">{card.title}</h3>
                      <p className="text-gray-700">{card.text}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">如何使用 Flomindy</h2>
                <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm mb-8 border border-black/5">
                  <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                    <li>根据任务选择频率（放松、学习、专注、问题解决）。</li>
                    <li>按需调节闪烁强度。</li>
                    <li>设置计时器（可选）。</li>
                    <li>点击“Start”启动后台闪烁，正常使用设备即可。</li>
                  </ol>
                  <p className="mt-4 text-gray-700">
                    激活后，Flomindy 在后台运行，并以图标提示当前频率，你可无干扰继续使用设备。
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">为何具有创新性？</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Flomindy 隐形工作，无需额外努力即可提升认知；无需笨重眼镜或头戴设备，自动适配当前活动。
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  基于科学的脑波同步原理，在工作或放松时提升专注、效率与生产力。
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  源于 Andrew Mario Cincotto 多年的频率同步研究。早在 2004 年，首个相关专利就设想了包含特殊灯光、双耳节拍与负离子的“学习站”。
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  如今，这一构想被带入随处可用的应用中，在任何设备上悄然运行，提供真实而有效的支持。
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-10 border-t border-gray-200">
        <p className="text-lg text-gray-700">
          想了解更多，请访问官网{' '}
          <a href="https://www.flomindy.com" className="text-yiketeck-red font-medium hover:underline">
            www.flomindy.com
          </a>
        </p>
      </div>

      <Footer />
    </main>
  );
}
