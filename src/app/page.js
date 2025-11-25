import Navbar from '@/components/Navbar';
import HeroVideo from '@/components/HeroVideo';
import AreasShowcase from '@/components/AreasShowcase';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroVideo showTagline taglineText="AI · Biotech · Engineering" />
      <AreasShowcase />
      <Footer />
    </main>
  );
}
