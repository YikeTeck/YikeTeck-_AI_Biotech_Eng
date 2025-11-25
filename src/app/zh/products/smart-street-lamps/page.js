import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function SmartStreetLampsPage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h1 className="text-4xl font-bold">智慧公共照明 IoT</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            采用物联网技术的太阳能智慧路灯，让城市更高效、更可持续。
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
                        '集成 IoT，可远程控制',
                        '电池与电网双供电的混合模式',
                        '节能最高可达 40%',
                        '移动与环境光传感器',
                        '监测与预测性维护',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#c22a2a] flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative h-64 bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5">
                  <Image
                    src="/Smart_Iot_Light_1.webp"
                    alt="智慧路灯"
                    width={600}
                    height={256}
                    className="w-full h-full object-contain"
                    quality={85}
                  />
                </div>

                <div className="relative h-64 bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5">
                  <Image
                    src="/Smart_Iot_Light2.webp"
                    alt="智慧路灯"
                    width={600}
                    height={256}
                    className="w-full h-full object-contain"
                    quality={85}
                  />
                </div>
              </div>
            </div>

            {/* Article */}
            <div className="lg:w-2/3">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">未来的道路照明</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  基于 IoT 的道路照明整合传感器、通信网络与管理软件，实时监控和调节路灯。灯具变得“智能”，会根据环境条件、车辆或行人存在以及自然光自动调节亮度，优化安全与能源效率。
                </p>

                <div className="bg-[#f5f5f5] p-6 rounded-2xl my-8 border border-black/5">
                  <p className="text-gray-700 italic border-l-4 border-yiketeck-red pl-4">
                    “一个能随城市真实需求自适应的照明系统，降低能耗并提升城市生活质量。”
                  </p>
                </div>

                <p className="mb-6 text-gray-700 leading-relaxed">
                  当发生故障时，系统会检测异常，便于及时维护，减少停机时间。预测性维护不仅降低运营成本，也让市民享受更可靠的照明服务。
                </p>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">创新的混合供电</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  这类系统的亮点是混合供电能力，利用<strong>储能</strong>：路灯优先使用电池中存储的能量，再切换到电网供电。无论是否易于接入电网，此方式都适用，可为公共部门带来显著节能，将来自电网的取电降低 40% 以上。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">能源优势</h3>
                    <ul className="space-y-2">
                      <li>• 能耗最高降低 40%</li>
                      <li>• 优先使用储存的太阳能</li>
                      <li>• 减少用电高峰期对电网的压力</li>
                      <li>• 部分或完全的能源独立</li>
                      <li>• 降低 CO₂ 排放</li>
                    </ul>
                  </div>
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">智能功能</h3>
                    <ul className="space-y-2">
                      <li>• 自动调节亮度</li>
                      <li>• 车辆与行人检测</li>
                      <li>• 远程诊断与预测性维护</li>
                      <li>• 与其他城市 IoT 系统集成</li>
                      <li>• 集中式控制面板</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">集中管理与 IoT 集成</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  集中管理可收集数据做预测分析，提升整体效率，并与其他城市基础设施（如空气质量监测）互联。配备移动与亮度传感器，路灯可按当地法规调节照度，进一步优化能耗。
                </p>

                <p className="mb-6 text-gray-700 leading-relaxed">
                  多样的安装方式与可调节倾角，使其适配多种城市场景，从主干道到公园、住宅区再到工业区，都能灵活部署，满足智慧城市项目需求。
                </p>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">可选型号</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  我们的智慧路灯系列提供多种型号，满足从小型步道到大型道路的公共照明需求：
                </p>

                <div className="bg-[#f5f5f5] p-5 rounded-2xl shadow-sm border border-black/5 mb-8" style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#1f2937', color: '#fff', textAlign: 'left' }}>
                        {['型号', '功率 (W)', '电池容量', '色温 (xx00K)', 'LED 数量', '光通量 (lm)', '工作温度', '尺寸 AxBxC (mm)', '重量 (Kg)'].map((h) => (
                          <th key={h} style={{ padding: '12px 16px', fontWeight: 600, borderBottom: '1px solid #374151' }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Solar street lamp IOTSOL030', '30W', '230.4Wh-18Ah', '30-40-50', '108', '6000', '0 至 50°C', '703x301x250', '7.3±0.3'],
                        ['Solar street lamp IOTSOL040', '40W', '307.2Wh-24Ah', '30-40-50', '216', '8000', '0 至 50°C', '910x429x291', '13.9±0.3'],
                        ['Solar street lamp IOTSOL050', '50W', '384W-30Ah', '30-40-50', '216', '10000', '0 至 50°C', '910x429x291', '14.4±0.3'],
                        ['Solar street lamp IOTSOL060', '60W', '460.8Wh-36Ah', '30-40-50', '216', '12000', '0 至 50°C', '910x429x291', '15.0±0.3'],
                      ].map((row, idx) => (
                        <tr key={row[0]} style={{ backgroundColor: idx % 2 === 0 ? '#fff' : '#f9fafb' }}>
                          {row.map((cell) => (
                            <td key={cell} style={{ padding: '12px 16px', borderBottom: '1px solid #e5e7eb' }}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">应用与场景</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  {[
                    { title: '城市道路', text: '高效照明，依据车流与天气自动调节亮度。' },
                    { title: '公园与绿地', text: '营造安全、宜人的夜间环境。' },
                    { title: '住宅区', text: '为行人和车辆提供舒适与安全，同时降低能耗。' },
                    { title: '工业区', text: '为生产与物流区域提供可靠照明与远程监控。' },
                    { title: '停车场与校园', text: '配合存在传感器，实现智能化管理。' },
                    { title: '自行车道', text: '针对骑行路线的优化照明，按需激活。' },
                  ].map((card) => (
                    <div key={card.title} className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                      <h3 className="text-lg font-bold text-yiketeck-dark mb-3">{card.title}</h3>
                      <p className="text-gray-700">{card.text}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
