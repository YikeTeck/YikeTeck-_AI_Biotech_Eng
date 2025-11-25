import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function InteractiveKiosksPage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h1 className="text-4xl font-bold">互动终端</h1>
          <p className="text-lg text-gray-600 max-w-3xl">面向公共与商业空间的独立、直观终端，提供高级数字交互。</p>
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
                        '32 英寸高亮显示屏',
                        '内置二维码读码器',
                        '高速热敏打印机',
                        '直观且可定制的界面',
                        '坚固且优雅的设计',
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
                    src="/Kiosk_1.webp"
                    alt="互动终端"
                    width={600}
                    height={256}
                    className="w-full h-full object-cover"
                    quality={85}
                  />
                </div>

                <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-black/5">
                  <Image
                    src="/Kiosk_2.webp"
                    alt="互动终端"
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
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">互动终端——直观的用户体验</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  互动终端是带显示屏、二维码读码器、打印机及其他外设的独立设备，便于与用户直接交互。常见于商店、快餐店、机场与政府机构，可用于购票、查询信息、打印收据或标签等快速操作。
                </p>

                <div className="bg-[#f5f5f5] p-6 rounded-2xl my-8 border border-black/5">
                  <p className="text-gray-700 italic border-l-4 border-yiketeck-red pl-4">
                    “凭借多样性，这些终端提升服务效率，带来现代且直观的用户体验。”
                  </p>
                </div>

                <p className="mb-6 text-gray-700 leading-relaxed">
                  我们的产品完全自主设计，采用 32 英寸高亮屏，适配高光环境。每个设计细节都为稳固、优雅与易用而打磨。
                </p>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">前沿技术</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">先进硬件</h3>
                    <ul className="space-y-2">
                      <li>• 高性能多核处理器</li>
                      <li>• 具保护玻璃的电容式触摸屏</li>
                      <li>• 静音高效的散热系统</li>
                      <li>• Wi-Fi、以太网与 4G/5G 连接</li>
                      <li>• 节能供电设计</li>
                    </ul>
                  </div>
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">可定制软件</h3>
                    <ul className="space-y-2">
                      <li>• 直观、响应式界面</li>
                      <li>• 多语言支持</li>
                      <li>• 兼容多种支付系统</li>
                      <li>• 远程管理控制台</li>
                      <li>• 数据分析与高级报告</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">集成外设</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  互动终端配备多种外设，扩展功能，适配多样场景：
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  {[
                    { title: '热敏打印机', text: '快速打印收据、票据与标签，质量高且维护低。' },
                    { title: 'QR/条码读码器', text: '高速扫描 1D/2D 码，适用于签到、优惠券验证等。' },
                    { title: '集成 POS', text: '支持信用卡、NFC 等非接触式安全支付。' },
                    { title: '高清摄像头', text: '用于视频通话、人脸识别等视觉场景。' },
                    { title: '文件扫描仪', text: '数字化身份证、护照和所需证件。' },
                    { title: 'RFID/NFC 读卡', text: '适用于会员卡、工牌等 RFID 应用。' },
                  ].map((card) => (
                    <div key={card.title} className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                      <h3 className="text-lg font-bold text-yiketeck-dark mb-3">{card.title}</h3>
                      <p className="text-gray-700">{card.text}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">应用领域</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">互动终端覆盖多个行业，提升运营效率与用户体验：</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">零售与商超</h3>
                    <p className="text-gray-700 mb-3">在零售与连锁场景，可实现：</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 自助结账，减少排队</li>
                      <li>• 交互式商品目录</li>
                      <li>• 会员计划管理</li>
                      <li>• 个性化订单处理</li>
                    </ul>
                  </div>

                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">餐饮</h3>
                    <p className="text-gray-700 mb-3">在餐饮和快餐领域：</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 自助点餐与个性化定制</li>
                      <li>• 直接支付，免排队</li>
                      <li>• 菜单与配料详情展示</li>
                      <li>• 套餐推荐与促销提示</li>
                    </ul>
                  </div>

                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">交通与旅游</h3>
                    <p className="text-gray-700 mb-3">在出行与旅游场景：</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 值机与登机牌打印</li>
                      <li>• 公共交通购票</li>
                      <li>• 交互式旅游信息</li>
                      <li>• 预订行程与体验</li>
                    </ul>
                  </div>

                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-xl font-bold text-yiketeck-dark mb-3">医疗</h3>
                    <p className="text-gray-700 mb-3">在医疗场景，终端可用于：</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 患者签到与就诊登记</li>
                      <li>• 填写表单与问卷</li>
                      <li>• 缴纳医药票据</li>
                      <li>• 查看报告与预约</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">可定制设计</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">每台终端都可在外观与功能上定制，贴合品牌与运营需求：</p>

                <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm mb-8 border border-black/5">
                  <h3 className="text-xl font-bold mb-3">定制选项：</h3>
                  <ul className="space-y-2">
                    <li>• 颜色与表面处理按品牌定制</li>
                    <li>• 安装方式：落地、壁挂或桌面</li>
                    <li>• 硬件配置按所需功能选择</li>
                    <li>• 个性化、直观的软件界面</li>
                    <li>• 与现有企业系统集成</li>
                    <li>• 适配无障碍需求</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">竞争优势</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">我们的互动终端具有多重优势：</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-2">降低运营成本</h3>
                    <p className="text-gray-700">自动化重复流程，缩短排队时间，释放人员投入更高价值的工作。</p>
                  </div>
                  <div className="bg-[#f5f5f5] p-6 rounded-2xl shadow-sm border border-black/5">
                    <h3 className="text-lg font-bold text-yiketeck-dark mb-2">更佳用户体验</h3>
                    <p className="text-gray-700">界面清晰、支付快速、内容可定制，并可通过数据分析持续改进流程。</p>
                  </div>
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
