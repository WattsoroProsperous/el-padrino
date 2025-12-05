"use client";

import { motion } from "framer-motion";
import { ChevronDown, Star, MapPin, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        {/* Image de fond */}
        <img
          src={`${process.env.NODE_ENV === 'production' ? '/el-padrino' : ''}/images/hero-bg.jpg`}
          alt="El Padrino Restaurant"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Filtre noir transparent */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gradient overlay pour un effet plus élégant */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d100d]/40 via-transparent to-[#0d100d]" />
        {/* Subtle gold radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c9a962]/10 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/30 mb-8"
        >
          <Star className="w-4 h-4 text-[#c9a962] fill-[#c9a962]" />
          <span className="text-sm text-[#c9a962]">4.4/5 - 68 avis</span>
        </motion.div>

        {/* Logo/Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          {/* Logo */}
          <div className="inline-block mb-6">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-2xl border-2 border-[#c9a962] overflow-hidden flex items-center justify-center relative bg-[#0d100d]/50 backdrop-blur-sm">
              <img
                src={`${process.env.NODE_ENV === 'production' ? '/el-padrino' : ''}/images/logo.jpg`}
                alt="El Padrino Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback si l'image ne charge pas */}
              <div className="absolute inset-0 hidden items-center justify-center">
                <span className="font-[var(--font-playfair)] text-[#c9a962] text-4xl sm:text-5xl font-bold">
                  EP
                </span>
              </div>
            </div>
          </div>

          <h1 className="font-[var(--font-playfair)] text-5xl sm:text-6xl lg:text-8xl font-bold mb-4">
            <span className="gradient-text">El Padrino</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#c9a962] tracking-[0.3em] uppercase font-light">
            Restaurant & Cigar Lounge
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-[#f5f0e6]/70 mb-8 leading-relaxed"
        >
          Une expérience gastronomique unique avec une vue imprenable sur la lagune.
          Savourez des mets raffinés dans une ambiance exceptionnelle.
        </motion.p>

        {/* Info badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1f1a] border border-[#c9a962]/20">
            <MapPin className="w-4 h-4 text-[#c9a962]" />
            <span className="text-sm text-[#f5f0e6]/80">Abidjan, Côte d&apos;Ivoire</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1f1a] border border-[#c9a962]/20">
            <Clock className="w-4 h-4 text-[#c9a962]" />
            <span className="text-sm text-[#f5f0e6]/80">Ouvert jusqu&apos;à 02h00</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:+22507161616"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#c9a962] text-[#0d100d] rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a962]/30"
          >
            <span className="relative z-10">Réserver une table</span>
            <div className="absolute inset-0 bg-[#d4b978] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#c9a962]/50 text-[#c9a962] rounded-full font-semibold text-lg hover:bg-[#c9a962]/10 transition-all duration-300"
          >
            Découvrir le menu
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#apropos"
          className="flex flex-col items-center gap-2 text-[#c9a962]/60 hover:text-[#c9a962] transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-[#c9a962]/30 to-transparent hidden lg:block" />
      <div className="absolute top-20 right-10 w-px h-32 bg-gradient-to-b from-transparent via-[#c9a962]/30 to-transparent hidden lg:block" />
    </section>
  );
}
