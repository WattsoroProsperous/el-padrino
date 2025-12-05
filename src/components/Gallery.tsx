"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Intérieur du restaurant",
    category: "ambiance",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Plat gastronomique",
    category: "cuisine",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
    alt: "Bar lounge",
    category: "ambiance",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    alt: "Plat de viande",
    category: "cuisine",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    alt: "Vue terrasse",
    category: "ambiance",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    alt: "Assiette gourmande",
    category: "cuisine",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage(
      selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
    );
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(
      selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
    );
  };

  return (
    <section id="galerie" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d100d] via-[#141814] to-[#0d100d]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a962] text-sm tracking-[0.3em] uppercase">
            Découvrez
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            <span className="gradient-text">Notre Galerie</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#f5f0e6]/70">
            Plongez dans l&apos;univers El Padrino à travers nos photos
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <div
                className={`relative ${
                  index === 0 ? "aspect-square sm:aspect-[4/3]" : "aspect-square"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d100d]/80 via-[#0d100d]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-[#c9a962] text-xs tracking-wider uppercase mb-1">
                    {image.category}
                  </span>
                  <h3 className="text-[#f5f0e6] font-medium text-lg">
                    {image.alt}
                  </h3>
                </div>
                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[#c9a962]/0 group-hover:border-[#c9a962]/50 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0d100d]/95 backdrop-blur-lg flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 text-[#f5f0e6] hover:text-[#c9a962] transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-[#1a1f1a] border border-[#c9a962]/30 text-[#f5f0e6] hover:bg-[#c9a962] hover:text-[#0d100d] transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-[#1a1f1a] border border-[#c9a962]/30 text-[#f5f0e6] hover:bg-[#c9a962] hover:text-[#0d100d] transition-all z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <p className="text-[#f5f0e6] font-medium">
                  {galleryImages[selectedImage].alt}
                </p>
                <p className="text-[#c9a962] text-sm mt-1">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
