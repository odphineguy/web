"use client";

interface CarouselImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface LogoCarouselProps {
  images: CarouselImage[];
}

export default function LogoCarousel({ images }: LogoCarouselProps) {

  if (images.length === 0) return null;

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Grid Layout with Hover Effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2"
          >
            <div className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay with text - appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2 group-hover:translate-y-0 translate-y-4 transition-transform duration-300 delay-100">
                    {image.title}
                  </h3>
                  <p className="text-sm opacity-90 group-hover:translate-y-0 translate-y-4 transition-transform duration-300 delay-200">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Subtle border effect on hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
