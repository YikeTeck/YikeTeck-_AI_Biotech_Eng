import Navbar from '@/components/Navbar';
import HeroVideo from '@/components/HeroVideo';
import AreasShowcase from '@/components/AreasShowcase';
import Footer from '@/components/Footer';

const areasEn = [
  {
    id: 'ai',
    label: 'AI Systems',
    title: 'AI Systems & Protocol Design',
    subtitle: 'Proprietary AI platforms, curated datasets and end-to-end projects.',
    href: '/en/ai-design',
    image: '/AI_AA.webp'
  },
  {
    id: 'biotech',
    label: 'Biotechnology',
    title: 'Applied biotechnology',
    subtitle: 'AI platforms for biological data, analysis and experimental plans.',
    href: '/en/biotech',
    image: '/Biotech_A1.webp'
  },
  {
    id: 'engineering',
    label: 'Engineering & Robotics',
    title: 'Engineering & Robotics',
    subtitle: 'Design and industrialization of embedded systems, finished products and technology sourcing.',
    href: '/en/products',
    image: '/Eng_AA.webp'
  }
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroVideo
        title="Proprietary AI, biotechnology, engineering and robotics."
        subtitle="We design AI systems, biological research and hardware engineering end-to-end to go beyond the standard, keeping people at the center."
        showTagline
        taglineText="AI · Biotech · Engineering"
      />
      <AreasShowcase labelText="Our solutions" areas={areasEn} ctaLabel="Explore" />
      <Footer />
    </main>
  );
}
