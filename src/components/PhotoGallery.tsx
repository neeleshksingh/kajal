import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart } from "lucide-react";

import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";
import memory5 from "@/assets/memory-5.jpg";
import memory6 from "@/assets/memory-6.jpg";

interface Photo {
  src: string;
  alt: string;
  caption: string;
}

const photos: Photo[] = [
  { src: memory1, alt: "Beach walk", caption: "Walking hand in hand" },
  { src: memory2, alt: "Coffee date", caption: "Our cozy cafe moments" },
  { src: memory3, alt: "Dancing", caption: "Dancing under the stars" },
  { src: memory4, alt: "Garden picnic", caption: "Spring blossoms together" },
  { src: memory5, alt: "Mountain sunset", caption: "Adventures we share" },
  { src: memory6, alt: "Cooking together", caption: "Cooking up love" },
];

// Optimized Image component with lazy loading and smooth transitions
const OptimizedImage = ({
  src,
  alt,
  className,
  onLoad
}: {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" } // Start loading 100px before entering viewport
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <div ref={imgRef} className="relative w-full h-full">
      {/* Blur placeholder */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-rose/20 to-blush/20 transition-opacity duration-500 ${isLoaded ? "opacity-0" : "opacity-100"
          }`}
      />
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          className={`${className} transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"
            }`}
          style={{
            willChange: "transform",
            contentVisibility: "auto"
          }}
        />
      )}
    </div>
  );
};

// Preload images for lightbox
const preloadImage = (src: string) => {
  const img = new Image();
  img.src = src;
};

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Preload all images on mount for smoother lightbox experience
  useEffect(() => {
    photos.forEach((photo) => preloadImage(photo.src));
  }, []);

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Cherished <span className="text-gradient-romantic">Moments</span>
          </h2>
          <p className="font-sans text-muted-foreground max-w-xl mx-auto">
            Every picture tells a story, every moment a memory to treasure
          </p>
        </motion.div>

        {/* Photo Grid with GPU-accelerated transforms */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handlePhotoClick(photo)}
              style={{
                transform: "translateZ(0)", // Force GPU layer
                backfaceVisibility: "hidden"
              }}
            >
              <OptimizedImage
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-serif text-primary-foreground text-lg">
                  {photo.caption}
                </p>
              </div>
              <motion.div
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.2 }}
              >
                <Heart className="w-6 h-6 text-primary-foreground fill-rose" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox with optimized rendering */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                transform: "translateZ(0)",
                willChange: "transform, opacity"
              }}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-full object-contain rounded-lg shadow-romantic"
                style={{
                  willChange: "auto",
                  contentVisibility: "auto"
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent rounded-b-lg">
                <p className="font-serif text-primary-foreground text-2xl text-center">
                  {selectedPhoto.caption}
                </p>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
