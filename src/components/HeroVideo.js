import Link from 'next/link';

export default function HeroVideo({
  title = 'AI proprietaria, biotecnologia, engineering e robotica.',
  subtitle = 'Progettiamo sistemi di intelligenza artificiale, ricerca biologica e ingegneria hardware end-to-end per andare oltre lo standard, mantenendo sempre l’uomo al centro.',
  titleClassName = 'text-4xl sm:text-5xl lg:text-6xl',
  subtitleClassName = 'text-lg sm:text-xl',
  taglineText,
  showTagline = false
}) {
  const finalTagline = taglineText || 'AI · Biotech · Engineering';

  return (
    <section className="relative w-full overflow-hidden bg-black text-white h-screen">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover scale-[1.15] -translate-y-2"
          poster="/YikeTeck_A_poster.webp"
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
        >
          <source src="/YikeTeck_A_480.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/YikeTeck_A_720.mp4" type="video/mp4" />
          <source src="/YikeTeck_A.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/60" aria-hidden="true" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-40 pb-8 lg:pt-48 lg:pb-12 space-y-6">
        <h1 className={`${titleClassName} font-bold leading-tight text-white max-w-4xl`}>
          {title}
        </h1>
        <p className={`${subtitleClassName} text-gray-200 max-w-3xl`}>
          {subtitle}
        </p>
      </div>

      {showTagline && (
        <div className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-2 z-10">
          <div className="px-6 py-3 rounded-full bg-black/50 border border-white/20 backdrop-blur-sm">
            <span className="text-lg sm:text-xl text-white tracking-wide">
              {finalTagline}
            </span>
          </div>
          <div className="animate-bounce text-white/80" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      )}

    </section>
  );
}
