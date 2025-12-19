import Link from 'next/link';

export default function HeroVideo({
  title = 'AI proprietaria, biotecnologia, engineering e robotica.',
  subtitle = 'Progettiamo sistemi di intelligenza artificiale, biotecnologia applicata e soluzioni di engineering per andare oltre lo standard, mantenendo sempre l’uomo al centro.',
  titleClassName = 'text-3xl sm:text-5xl lg:text-6xl',
  subtitleClassName = 'text-lg sm:text-xl',
  taglineText,
  showTagline = false
}) {
  const finalTagline = taglineText || 'AI · Biotech · Engineering';

  return (
    <section className="relative w-full overflow-hidden bg-white text-yiketeck-dark">
      {/* Layer video di sfondo */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover object-[50%_35%]"
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
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/45 to-white/80" />
      </div>

      {/* Contenuto hero */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-24 min-h-[70vh] flex items-start sm:items-center">
        <div className="max-w-3xl space-y-6">
          {/* Tagline in alto */}
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-yiketeck-red">
            {finalTagline}
          </p>

          <h1 className={`${titleClassName} font-semibold leading-tight`}>
            {title}
          </h1>

          <p className={`${subtitleClassName} text-yiketeck-dark/80 max-w-2xl`}>
            {subtitle}
          </p>

        </div>
      </div>

      {/* Tagline e freccia in basso opzionale */}
      {showTagline && (
        <div className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-2 z-10">
          <div className="px-5 py-2 rounded-full bg-white/85 border border-yiketeck-red/25 shadow-sm backdrop-blur-sm">
            <span className="text-sm sm:text-base text-yiketeck-dark tracking-wide">
              {finalTagline}
            </span>
          </div>
          <div className="animate-bounce text-yiketeck-dark/70" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      )}
    </section>
  );
}
