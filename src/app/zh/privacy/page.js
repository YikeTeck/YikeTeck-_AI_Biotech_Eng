import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      
      {/* 页面标题 */}
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">隐私政策</h1>
          <p className="text-lg text-gray-600">
            最后更新：2025年4月13日
          </p>
        </div>
      </section>
      
      {/* 隐私政策内容 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>引言</h2>
            <p>
              您的隐私对我们很重要。本隐私政策解释了Yike Teck在您使用我们的网站或服务时如何收集、使用、披露和保护您的个人数据。
            </p>
            
            <h2>我们收集的信息</h2>
            <p>
              我们可能收集各种类型的信息，包括：
            </p>
            <ul>
              <li>
                <strong>个人信息</strong>：姓名、电子邮件地址、电话号码、邮寄地址以及您通过我们的联系表格自愿提供的其他信息。
              </li>
              <li>
                <strong>设备信息</strong>：IP地址、浏览器类型、操作系统、互联网服务提供商、引用/退出页面和时间戳。
              </li>
              <li>
                <strong>Cookie和类似技术</strong>：我们使用Cookie和类似技术来改善网站体验并分析流量。
              </li>
            </ul>
            
            <h2>我们如何使用信息</h2>
            <p>
              我们使用收集的信息来：
            </p>
            <ul>
              <li>提供、管理和改进我们的服务</li>
              <li>了解和分析您如何使用我们的网站</li>
              <li>与您沟通，包括发送关于我们服务的通知和更新</li>
              <li>防止欺诈和滥用</li>
            </ul>
            
            <h2>信息共享</h2>
            <p>
              我们不会出售、交换或以其他方式将您的个人信息转让给第三方，除非在本隐私政策中描述。我们可能与以下方共享您的信息：
            </p>
            <ul>
              <li>
                <strong>服务提供商</strong>：帮助我们管理网站和提供服务的第三方。
              </li>
              <li>
                <strong>业务合作伙伴</strong>：我们可能与业务合作伙伴共享您的信息，以向您提供特定产品、服务或促销。
              </li>
              <li>
                <strong>法律要求</strong>：如果法律要求或响应有效的法律请求，我们可能会披露您的信息。
              </li>
            </ul>
            
            <h2>数据安全</h2>
            <p>
              我们采取适当的安全措施来保护您的个人信息免受丢失、滥用、未经授权的访问、披露或更改。
            </p>
            
            <h2>您的权利</h2>
            <p>
              您有权：
            </p>
            <ul>
              <li>访问、更正或删除您的个人信息</li>
              <li>限制或反对处理您的数据</li>
              <li>以结构化格式接收您个人信息的副本</li>
              <li>向监管机构提出投诉</li>
            </ul>
            
            <h2>隐私政策的变更</h2>
            <p>
              我们可能会不时更新此隐私政策。我们建议您定期查看此页面，以了解任何变更。
            </p>
            
            <h2>联系我们</h2>
            <p>
              如果您对我们的隐私政策有任何问题或疑虑，请随时通过privacy@yiketeck.com与我们联系。
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}