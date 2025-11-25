import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function SmartTrashBinsPage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h1 className="text-4xl font-bold">智慧垃圾桶</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            具备 IoT 技术的智能垃圾桶，为城市垃圾管理提供优化方案。
          </p>
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
                        '实时监测填充水平',
                        '传感器识别垃圾类型',
                        'IoT 连接到中央系统',
                        '太阳能供电并带后备电池',
                        '坚固、防风雨的设计',
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
                    src="/urban-trash_1.webp"
                    alt="智慧垃圾桶"
                    width={600}
                    height={256}
                    className="w-full h-full object-cover"
                    quality={85}
                  />
                </div>

                <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-black/5">
                  <Image
                    src="/urban-trash_2.webp"
                    alt="智慧垃圾桶"
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
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">城市垃圾管理的变革</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  智慧垃圾桶内置 IoT 传感器，可实时监测填充度与垃圾类型，并与中心系统通信，优化收运路线，降低成本与环境影响，同时避免垃圾溢出，提升城市卫生。
                </p>

                <div className="bg-[#f5f5f5] p-6 rounded-2xl my-8 border border-black/5">
                  <p className="text-gray-700 italic border-l-4 border-yiketeck-red pl-4">
                    “无论是私营场所还是公共部门，智慧垃圾桶都能让公共空间更整洁有序，提升城市生活品质。”
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">更洁净城市的先进技术</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">监测系统</h3>
                    <ul className="space-y-2">
                      <li>• 超声波传感器检测填充度</li>
                      <li>• 光学识别确定垃圾类型</li>
                      <li>• 温度监测，预防火情</li>
                      <li>• 重量传感器精确量化</li>
                      <li>• 异常情况实时告警</li>
                    </ul>
                  </div>
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">通信与连接</h3>
                    <ul className="space-y-2">
                      <li>• 通过 LoRaWAN 或 NB-IoT 无线连接</li>
                      <li>• 数据加密传输，确保安全</li>
                      <li>• 可与现有城市管理平台集成</li>
                      <li>• Web 控制台集中监测</li>
                      <li>• 面向运营人员和市民的移动应用</li>
                    </ul>
                  </div>
                </div>

                <p className="mb-6 text-gray-700 leading-relaxed">
                  我们的研发团队正推进新一代智慧垃圾桶，提升能源效率与场景适配性。即将推出的方案将为城市垃圾管理提供更可持续、更高性能的技术。
                </p>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">在研的创新特性</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  {[
                    { title: '自动压缩', text: '内置压缩将有效容量提升至 8 倍，减少收集频次。' },
                    { title: 'AI 识别', text: 'AI 算法自动识别材质，提升分类质量。' },
                    { title: 'UV 消毒', text: '紫外消毒去除细菌并减轻异味，提升卫生。' },
                    { title: '自清洁', text: '自动清洁机制，无需人工即可保持卫生。' },
                    { title: '友好界面', text: '交互式触摸屏，提供分类信息并奖励市民。' },
                    { title: '混合供电', text: '太阳能、电网与电池结合，确保持续运行。' },
                  ].map((card) => (
                    <div key={card.title} className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                      <h3 className="text-lg font-bold text-yiketeck-dark mb-3">{card.title}</h3>
                      <p className="text-gray-700">{card.text}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">优势与应用</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">面向公共部门</h3>
                    <p className="text-gray-700 mb-3">市政部门可获得：</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 通过优化路线，收运成本最高降低 30%</li>
                      <li>• 减少运输相关的 CO₂ 排放</li>
                      <li>• 改善卫生与城市景观</li>
                      <li>• 分析数据以更好规划服务</li>
                      <li>• 提升市民参与度</li>
                    </ul>
                  </div>

                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">面向企业与商业空间</h3>
                    <p className="text-gray-700 mb-3">商场、企业和公共商业空间可获得：</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 更高效地管理内部垃圾</li>
                      <li>• 降低处理成本</li>
                      <li>• 因可持续努力而提升公众形象</li>
                      <li>• 为顾客与员工提供更洁净卫生的环境</li>
                      <li>• 更易符合环境法规</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm mb-8 border border-black/5">
                  <h3 className="text-xl font-bold mb-3">智慧垃圾桶的环境影响：</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 通过优化收集减少 CO₂ 排放</li>
                    <li>• 更好的垃圾处理，降低环境污染</li>
                    <li>• 促进分类与回收</li>
                    <li>• 减少垃圾车交通</li>
                    <li>• 太阳能供电降低能源消耗</li>
                    <li>• 可回收或可降解组件的可持续设计</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">软件与管理平台</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  每个智慧垃圾桶都接入我们的专用云平台，提供全系统管理的高级能力：
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-5 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-2">集中式仪表盘</h3>
                    <p className="text-gray-700">直观界面在交互式地图上展示所有设备状态，并实时显示填充水平。</p>
                  </div>
                  <div className="bg-[#f5f5f5] p-5 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-2">路线优化</h3>
                    <p className="text-gray-700">高级算法基于优先级、交通与容量计算最优收运路线。</p>
                  </div>
                  <div className="bg-[#f5f5f5] p-5 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-2">预测分析</h3>
                    <p className="text-gray-700">结合历史数据与本地事件预测填充率，便于前瞻性规划。</p>
                  </div>
                  <div className="bg-[#f5f5f5] p-5 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-2">高级报表</h3>
                    <p className="text-gray-700">自动生成可定制的报告，涵盖收集、效率、节省与环境影响。</p>
                  </div>
                </div>

                <p className="mb-6 text-gray-700 leading-relaxed">
                  Yike Teck 智慧垃圾桶是迈向更洁净、高效、可持续城市的重要一步。融合高质量硬件、智能软件与功能性设计，我们提供符合循环经济与智慧城市理念的现代化垃圾管理解决方案。
                </p>

                <p className="text-gray-700 leading-relaxed">
                  欢迎联系我们，了解我们的智慧垃圾桶如何改变你的城市或企业的垃圾管理，助力更可持续的未来与更宜居的城市空间。
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
