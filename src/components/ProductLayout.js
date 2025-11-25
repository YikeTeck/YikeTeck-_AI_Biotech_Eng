import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProductLayout({
  title,
  subtitle,
  features = [],
  images = [],
  featuresTitle = 'Caratteristiche principali',
  intro,
  quote,
  mainSections = [],
  headerBgClass = 'bg-yiketeck-light',
  headerPaddingClass = 'pt-24 pb-3',
  logos = [],
}) {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />

      {/* Header */}
      <section className={`${headerPaddingClass} ${headerBgClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h1 className="text-4xl font-bold">{title}</h1>
          {subtitle && <p className="text-lg text-gray-600 max-w-3xl">{subtitle}</p>}
          {logos.length > 0 && (
            <div className="flex flex-wrap items-center justify-start gap-10">
              {logos.map((logo, idx) => {
                const logoImg = (
                  <Image
                    src={logo.src}
                    alt={logo.alt || ''}
                    width={logo.width || 200}
                    height={logo.height || 70}
                    className="object-contain"
                    priority={false}
                  />
                );

                return (
                  <div key={idx} className="h-16 md:h-20 w-auto">
                    {logo.href ? (
                      <Link href={logo.href} aria-label={logo.alt || ''}>
                        {logoImg}
                      </Link>
                    ) : (
                      logoImg
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Contenuto principale */}
      <section className="pt-4 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-6">
                {/* Features box */}
                {(features?.length || quote) && (
                  <div className="bg-[#f0efed] rounded-xl shadow-md border border-black/5 p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-yiketeck-dark flex items-center gap-2">
                      <div className="h-[2px] w-8 bg-[#c22a2a]" aria-hidden="true" />
                      {featuresTitle}
                    </h2>
                    {features?.length > 0 && (
                      <ul className="space-y-3">
                        {features.map((item) => (
                          <li key={item} className="flex items-start">
                            <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-[#c22a2a] flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {/* Immagini */}
                {images?.map((img, idx) => (
                  <div
                    key={img.src || idx}
                    className="relative h-64 bg-[#f0efed] rounded-xl overflow-hidden shadow-md border border-black/5"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt || ''}
                      fill
                      className="w-full h-full object-cover"
                      quality={img.quality || 85}
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Testo principale */}
            <div className="lg:w-2/3">
              <article className="prose prose-lg max-w-none">
                {intro?.title && (
                  <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">{intro.title}</h2>
                )}
                {intro?.paragraphs?.map((p, idx) => (
                  <p key={idx} className="mb-6 text-gray-700 leading-relaxed">
                    {p}
                  </p>
                ))}

                {quote && (
                  <div className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/5 my-8">
                    <p className="text-gray-700 italic border-l-4 border-yiketeck-red pl-4">
                      {quote}
                    </p>
                  </div>
                )}

                {mainSections.map((section) => (
                  <div key={section.title} className="mb-10">
                    <h2 className="text-3xl font-bold text-yiketeck-dark mb-6">{section.title}</h2>
                    {section.paragraphs?.map((p, idx) => (
                      <p key={idx} className="mb-6 text-gray-700 leading-relaxed">
                        {p}
                      </p>
                    ))}
                    {section.cards?.length ? (
                      <div className={`grid grid-cols-1 md:grid-cols-${section.cols || 2} gap-6 my-8`}>
                        {section.cards.map((card) => {
                          const cardBody = (
                            <div className="bg-[#f0efed] p-6 rounded-xl shadow-sm border border-black/5 h-full">
                              <h3 className="text-xl font-bold text-yiketeck-dark mb-3">{card.title}</h3>
                              {card.items ? (
                                <ul className="space-y-2 text-gray-700">
                                  {card.items.map((item) => (
                                    <li key={item}>• {item}</li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-gray-700">{card.text}</p>
                              )}
                            </div>
                          );

                          return card.href ? (
                            <Link key={card.title} href={card.href} className="block h-full">
                              {cardBody}
                            </Link>
                          ) : (
                            <div key={card.title}>{cardBody}</div>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                ))}
              </article>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
