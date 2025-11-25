import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">关于我们</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            我们将人类感知、科学与人工智能结合，打造每天都能用到的系统。
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-yiketeck-dark">关键点</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-yiketeck-red mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">2018 年成立</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-yiketeck-red mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">总部位于广东东莞</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-yiketeck-red mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">AI-first：自研平台与协议</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-yiketeck-red mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">技术支持与采购</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-yiketeck-red mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">已获或在申请的专利产品</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-64 bg-gray-200">
                    <Image 
                      src="/Yike_Teck_company1.webp" 
                      alt="Yike Teck 办公地点" 
                      width={800} 
                      height={600}
                      quality={90} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src="/AI_B1.webp" 
                    alt="界面与代码" 
                    width={800} 
                    height={600}
                    quality={90} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md mt-6">
                  <Image
                    src="/Who_A.png.webp"
                    alt="Yike Teck 团队"
                    width={800}
                    height={600}
                    quality={90}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">我们的故事</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  2018 年创立的 Yike Teck，源于一个简单而大胆的想法：把人类感知、科学与 AI 融合为可日用的系统。基于深厚的技术与设计经验，我们做过音频工程、HMI，并逐步打造自研 AI 架构，让这些领域协同一致。
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  坐落于广东东莞的科技枢纽，毗邻深圳、广州、古镇、香港。地理位置与欧洲背景，使我们天然成为西方研发、东方制造与“AI 内置于真实产品”之间的桥梁：嵌入式设备、智慧城市、生物科技与机器人应用。
                </p>
                
                <div className="bg-yiketeck-light p-6 rounded-lg my-8">
                  <p className="text-gray-700 italic border-l-4 border-yiketeck-red pl-4">
                    “我们通过自研 AI 系统与平台创造价值。倾听你的挑战，把工程与 AI 结合为具体可落地的方案。”
                  </p>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">技术创新</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  我们的产品组合覆盖先进电子、智能系统和认知提升软件。涉及智慧城市 IoT、先进音频、下一代 AI 平台，以及如 Flomindy 等提升专注力和工作质量的应用。多项技术已获或在申请专利，体现持续的研发投入。
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  我们专注自研 AI：协议、平台与高级软件，提升决策与运营效率。ComplexDot、Clevidot 等方案的目标是用 AI 放大人的能力、降低复杂度，并让工作环境更高效、可持续、令人受益。技术只有在真正改善思考、设计和落地方式时才有意义。
                </p>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">我们的能力</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-yiketeck-red mb-3">人工智能</h3>
                    <p className="text-gray-700">
                      自研算法与平台，优化流程、预测分析，并改进人机交互。
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-yiketeck-red mb-3">音频工程</h3>
                    <p className="text-gray-700">
                      创新音频方案，从超薄扬声器到高端系统，兼顾音质与设计。
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-yiketeck-red mb-3">智慧城市与 IoT</h3>
                    <p className="text-gray-700">
                      面向未来城市的智能设备与系统：照明、垃圾管理、城市效率。
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-yiketeck-red mb-3">认知提升</h3>
                    <p className="text-gray-700">
                      旨在提升专注、记忆与表现的软件和应用，基于扎实的科学研究。
                    </p>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">我们的服务</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  凭借在中国的经验和稳固的科技伙伴网络，我们为全球企业提供：
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-yiketeck-red">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>技术咨询与设计：</strong> 从创意到可用原型。</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>战略采购：</strong> 寻找并评估组件/半成品，控制质量与交期。</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>产品开发与设计：</strong> 先进功能与独特设计，并做好文档化。</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>生产支持与质量控制：</strong> 全流程把控，确保达到最高标准。</span>
                    </li>
                  </ul>
                </div>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">战略合作</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  在采购、物流与仓储方面，我们与同在东莞的 Shamana (<a href="https://www.shamana-china.com" className="text-yiketeck-red hover:underline" target="_blank" rel="noopener noreferrer">www.shamana-china.com</a>) 深度合作。
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  这让我们能为客户提供端到端服务，从设计到交付都兼顾效率与质量。
                </p>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">我们对 AI 的投入</h2>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  我们相信 AI 是提升工作表现、人机交互的关键前沿。
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  研发团队持续打磨新的 AI 协议，致力于：
                </p>
                <div className="bg-yiketeck-light p-6 rounded-lg mb-8">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">在复杂环境中优化决策流程</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">通过自适应软件提升认知能力</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">打造更直观、响应迅速的人机界面</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">开发预测系统以优化资源</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yiketeck-red mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">为智慧城市实施智能自动化</span>
                    </li>
                  </ul>
                </div>
                
                <p className="mb-6 text-gray-700 leading-relaxed">
                  我们的理念：技术应当放大人的能力，而非取代。产品与服务以人为本，追求长期积极影响。
                </p>
                
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">我们的愿景</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  未来将是人机深度融合。我们希望成为这一进程的主角，提供让融合自然、受益的产品与服务。
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  我们提供方案与专业能力，创造可衡量、可持续的成果，借助前沿工具迎接明日挑战。
                </p>
                
                <hr className="border-t-2 border-yiketeck-red w-24 my-8" />
                <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">名字的含义</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  “意科”结合了“意（意义/意图）”与“科（科学/技术）”，表达“有目的的科技”。这与我们“让技术真正有意义”的理念一致。
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  “Teck” 末尾的 K 是刻意的：与 “Yike” 中的 K 平衡，同时在 LOGO 中引用<strong>晶体管符号</strong>，由首字母 Y 和 T 镜像组合而成。1947 年发明的晶体管推动了电子技术并奠定现代科技基础。
                </p>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  这一引用强调我们与创新史的联系，也体现我们持续以科技为核心创造价值的决心。
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
