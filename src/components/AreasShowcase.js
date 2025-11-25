import Image from 'next/image';
import Link from 'next/link';

const AREAS = [
  {
    id: 'ai',
    label: 'AI Systems',
    title: 'AI Systems & Protocol Design',
    subtitle: 'Piattaforme AI proprietarie, dataset dedicati e progetti end-to-end.',
    href: '/ai-design',
    image: '/AI_AA.webp'
  },
  {
    id: 'biotech',
    label: 'Biotechnology',
    title: 'Biotecnologie e ricerca applicata',
    subtitle: 'Piattaforme AI per dati biologici, analisi e piani sperimentali.',
    href: '/biotech',
    image: '/Biotech_A1.webp'
  },
  {
    id: 'engineering',
    label: 'Engineering & Robotics',
    title: 'Engineering & Robotics',
    subtitle: 'Progettazione e industrializzazione di sistemi embedded, prodotti finiti e sourcing tecnologico',
    href: '/prodotti',
    image: '/Eng_AA.webp'
  }
];

export default function AreasShowcase({ labelText = 'Le Nostre Soluzioni', areas = AREAS, ctaLabel = 'Scopri' }) {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-[#1f1f1f]/10 pb-4">
          <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-[2px] w-8 bg-[#c22a2a]" aria-hidden="true" />
              <p className="text-base sm:text-lg font-semibold uppercase tracking-[0.22em] text-slate-700">{labelText}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {areas.map((area) => (
            <Link
              key={area.id}
              href={area.href}
              className="group relative overflow-hidden rounded-[28px] bg-slate-900 text-white shadow-2xl transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]"
            >
              <div className="absolute inset-0">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover transition duration-600 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/5" aria-hidden="true" />
              </div>
              <div className="relative h-[26rem] sm:h-[28rem] lg:h-[32rem] p-7 sm:p-8 lg:p-9 flex flex-col justify-end gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-200">{area.label}</p>
                <h3 className="text-2xl sm:text-3xl font-semibold leading-tight drop-shadow-md">{area.title}</h3>
                <p className="text-sm sm:text-base text-gray-100/90 leading-relaxed drop-shadow-sm">{area.subtitle}</p>
                <div className="pt-2 text-sm font-semibold text-[#c22a2a] flex items-center gap-2 drop-shadow-sm">
                  <span>{ctaLabel}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
