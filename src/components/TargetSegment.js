import Image from 'next/image';
import LocalizedButton from './LocalizedButton';

export default function TargetSegment({ title, description, imageUrl, linkUrl }) {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      {/* Immagine di sfondo */}
      <div className="relative h-80 bg-gray-300">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            {title}
          </div>
        )}
      </div>
      {/* Overlay scuro */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"></div>
      {/* Contenuto */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="mb-4 text-gray-200">{description}</p>
        <LocalizedButton
          href={linkUrl}
          className="inline-block px-5 py-2 bg-yiketeck-red text-white rounded-full hover:bg-red-700 transition duration-300"
        />
      </div>
    </div>
  );
}