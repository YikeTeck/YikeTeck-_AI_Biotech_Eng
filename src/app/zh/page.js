import Navbar from '@/components/Navbar';
import HeroVideo from '@/components/HeroVideo';
import AreasShowcase from '@/components/AreasShowcase';
import Footer from '@/components/Footer';

const areasZh = [
  {
    id: 'ai',
    label: 'AI 系统',
    title: 'AI 系统与协议设计',
    subtitle: '自研 AI 平台、精选数据集与端到端项目。',
    href: '/zh/ai-design',
    image: '/AI_AA.webp'
  },
  {
    id: 'biotech',
    label: '生物技术',
    title: '生物技术与应用研究',
    subtitle: '面向生物数据、分析和实验计划的 AI 平台。',
    href: '/zh/biotech',
    image: '/Biotech_A1.webp'
  },
  {
    id: 'engineering',
    label: '工程与机器人',
    title: '工程与机器人',
    subtitle: '嵌入式系统、成品与技术采购的设计和量产。',
    href: '/zh/products',
    image: '/Eng_AA.webp'
  }
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroVideo
        title="自研 AI、生物科技、工程与机器人"
        subtitle="我们设计端到端的人工智能、生物研究和硬件工程方案，超越标准，并始终以人为中心。"
        titleClassName="text-4xl sm:text-5xl lg:text-5xl"
        subtitleClassName="text-lg"
        showTagline
        taglineText="AI · 生物技术 · 工程"
      />
      <AreasShowcase labelText="我们的解决方案" areas={areasZh} ctaLabel="了解更多" />
      <Footer />
    </main>
  );
}
