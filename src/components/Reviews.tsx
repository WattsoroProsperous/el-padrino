"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Martyn Coomber",
    role: "Local Guide",
    avatar: "MC",
    rating: 5,
    date: "il y a 7 mois",
    text: "It's been a while since I attended a venue that had the instant wow factor. The beautiful bar is strategically placed as you enter the lounge. A masterstroke to have the restaurant being the lounge.",
    photos: 281,
    reviews: 46,
  },
  {
    id: 2,
    author: "Ines D",
    role: "Local Guide",
    avatar: "ID",
    rating: 5,
    date: "il y a 4 mois",
    text: "L'ambiance, on n'en parle !!!!! Wouaoooh j'ai adoré, le petit en-cas avant le repas était frais et tellement exquis... Les toilettes super bien entretenus, un petit mot gentil par si et par là.",
    photos: 51,
    reviews: 88,
  },
  {
    id: 3,
    author: "Rodolphe Vialles",
    role: "Local Guide",
    avatar: "RV",
    rating: 5,
    date: "il y a 10 mois",
    text: "Une nouvelle proposition à Abidjan avec une très belle vue lagune. Cuisine de qualité. La terrasse propose une autre formule axée sur le thème méditerranéen. L'intérieur est plus classique dans sa carte.",
    photos: 156,
    reviews: 193,
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="avis" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0d100d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#c9a962]/5 via-transparent to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a962] text-sm tracking-[0.3em] uppercase">
            Témoignages
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            <span className="gradient-text">Ce Que Disent</span>
            <br />
            <span className="text-[#f5f0e6]">Nos Clients</span>
          </h2>

          {/* Rating summary */}
          <div className="inline-flex items-center gap-4 mt-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${
                    star <= 4
                      ? "text-[#c9a962] fill-[#c9a962]"
                      : "text-[#c9a962] fill-[#c9a962]/50"
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-[#f5f0e6]">4.4</span>
            <span className="text-[#f5f0e6]/60">sur 68 avis</span>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="h-full p-8 rounded-2xl bg-[#1a1f1a]/50 border border-[#c9a962]/10 hover:border-[#c9a962]/30 transition-all duration-300">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-[#c9a962]/20 mb-4" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating
                          ? "text-[#c9a962] fill-[#c9a962]"
                          : "text-[#c9a962]/30"
                      }`}
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-[#f5f0e6]/80 leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                    <span className="text-[#c9a962] font-semibold">
                      {review.avatar}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#f5f0e6]">
                      {review.author}
                    </h4>
                    <p className="text-sm text-[#c9a962]">{review.role}</p>
                    <p className="text-xs text-[#f5f0e6]/50 mt-0.5">
                      {review.reviews} avis · {review.photos} photos
                    </p>
                  </div>
                </div>

                {/* Date */}
                <p className="absolute top-8 right-8 text-xs text-[#f5f0e6]/40">
                  {review.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/maps/place/El+Padrino"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#c9a962]/50 text-[#c9a962] rounded-full hover:bg-[#c9a962]/10 transition-all duration-300"
          >
            Voir tous les avis sur Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
