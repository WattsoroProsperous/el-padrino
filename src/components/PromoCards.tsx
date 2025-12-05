"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, Users, Sparkles, Wine, Music } from "lucide-react";

const promoCards = [
  {
    id: 1,
    title: "Soirée Jazz",
    subtitle: "Tous les vendredis",
    description: "Profitez d'une ambiance musicale live avec notre groupe de jazz tout en dégustant nos cocktails signature.",
    icon: Music,
    gradient: "from-purple-500/20 to-[#c9a962]/20",
    badge: "Live Music",
    time: "20h00 - 01h00",
  },
  {
    id: 2,
    title: "Happy Hour",
    subtitle: "Du lundi au jeudi",
    description: "Cocktails et vins sélectionnés à -30% de 18h à 20h. L'occasion parfaite pour un afterwork raffiné.",
    icon: Wine,
    gradient: "from-[#c9a962]/20 to-amber-500/20",
    badge: "-30%",
    time: "18h00 - 20h00",
  },
  {
    id: 3,
    title: "Menu Dégustation",
    subtitle: "Expérience gastronomique",
    description: "Un voyage culinaire en 7 services préparé par notre chef. Accord mets et vins en option.",
    icon: Sparkles,
    gradient: "from-[#c9a962]/20 to-rose-500/20",
    badge: "Chef's Choice",
    price: "85 000 FCFA",
  },
  {
    id: 4,
    title: "Réservation Privée",
    subtitle: "Pour vos événements",
    description: "Privatisez notre salon VIP pour vos célébrations, réunions d'affaires ou événements spéciaux.",
    icon: Users,
    gradient: "from-blue-500/20 to-[#c9a962]/20",
    badge: "VIP",
    capacity: "Jusqu'à 30 personnes",
  },
];

export default function PromoCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
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
            Offres Spéciales
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            <span className="gradient-text">Nos Événements</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#f5f0e6]/70">
            Découvrez nos offres exclusives et événements à ne pas manquer
          </p>
        </motion.div>

        {/* Promo cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {promoCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${card.gradient} backdrop-blur-sm border border-[#c9a962]/20 hover:border-[#c9a962]/50 transition-all duration-500 overflow-hidden`}>
                {/* Animated background glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#c9a962]/10 rounded-full filter blur-3xl group-hover:bg-[#c9a962]/20 transition-all duration-500" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#c9a962]/5 rounded-full filter blur-3xl group-hover:bg-[#c9a962]/15 transition-all duration-500" />

                {/* Badge */}
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1.5 rounded-full bg-[#c9a962] text-[#0d100d] text-xs font-bold uppercase tracking-wider">
                    {card.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#c9a962]/10 flex items-center justify-center mb-6 group-hover:bg-[#c9a962]/20 transition-colors duration-300 group-hover:scale-110 transform">
                    <card.icon className="w-8 h-8 text-[#c9a962]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-[var(--font-playfair)] text-2xl sm:text-3xl font-bold text-[#f5f0e6] mb-2 group-hover:text-[#c9a962] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-[#c9a962] font-medium mb-4">{card.subtitle}</p>

                  {/* Description */}
                  <p className="text-[#f5f0e6]/70 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    {card.time && (
                      <div className="flex items-center gap-2 text-[#f5f0e6]/60">
                        <Clock className="w-4 h-4 text-[#c9a962]" />
                        {card.time}
                      </div>
                    )}
                    {card.price && (
                      <div className="flex items-center gap-2 text-[#f5f0e6]/60">
                        <span className="text-[#c9a962] font-semibold">{card.price}</span>
                      </div>
                    )}
                    {card.capacity && (
                      <div className="flex items-center gap-2 text-[#f5f0e6]/60">
                        <Users className="w-4 h-4 text-[#c9a962]" />
                        {card.capacity}
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <a
                      href="tel:+22507161616"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a962]/10 border border-[#c9a962]/30 text-[#c9a962] rounded-full font-medium hover:bg-[#c9a962] hover:text-[#0d100d] transition-all duration-300"
                    >
                      <Calendar className="w-4 h-4" />
                      Réserver maintenant
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
