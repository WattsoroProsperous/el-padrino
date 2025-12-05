"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wine, Utensils, Cigarette, Eye } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Cuisine Raffinée",
    description: "Des plats savoureux préparés avec des ingrédients de première qualité",
  },
  {
    icon: Wine,
    title: "Bar Premium",
    description: "Une sélection exceptionnelle de vins et spiritueux du monde entier",
  },
  {
    icon: Cigarette,
    title: "Cigar Lounge",
    description: "Un espace dédié aux amateurs de cigares dans une ambiance feutrée",
  },
  {
    icon: Eye,
    title: "Vue Lagune",
    description: "Une vue imprenable sur la lagune pour sublimer votre expérience",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d100d] via-[#141814] to-[#0d100d]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a962]/30 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a962] text-sm tracking-[0.3em] uppercase">
            Bienvenue
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            <span className="gradient-text">Une Expérience</span>
            <br />
            <span className="text-[#f5f0e6]">Inoubliable</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-[#f5f0e6]/70 leading-relaxed">
            El Padrino vous invite à vivre une expérience culinaire exceptionnelle.
            Notre restaurant allie élégance, raffinement et une atmosphère unique
            pour créer des moments mémorables.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-[#1a1f1a]/50 border border-[#c9a962]/10 hover:border-[#c9a962]/30 transition-all duration-500 h-full">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#c9a962]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[#c9a962]/10 flex items-center justify-center mb-6 group-hover:bg-[#c9a962]/20 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-[#c9a962]" />
                  </div>
                  <h3 className="font-[var(--font-playfair)] text-xl font-semibold text-[#f5f0e6] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#f5f0e6]/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="relative inline-block">
            <span className="absolute -top-6 -left-4 text-6xl text-[#c9a962]/20 font-serif">&ldquo;</span>
            <blockquote className="font-[var(--font-playfair)] text-2xl sm:text-3xl italic text-[#f5f0e6]/80 max-w-3xl">
              The beautiful bar is strategically placed as you enter the lounge.
              A masterstroke to have the restaurant being the lounge.
            </blockquote>
            <span className="absolute -bottom-4 -right-4 text-6xl text-[#c9a962]/20 font-serif">&rdquo;</span>
          </div>
          <p className="mt-6 text-[#c9a962]">— Martyn Coomber, Local Guide</p>
        </motion.div>
      </div>
    </section>
  );
}
