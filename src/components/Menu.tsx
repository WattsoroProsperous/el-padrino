"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Flame, Leaf, Star } from "lucide-react";

const menuCategories = [
  { id: "entrees", label: "Entrées" },
  { id: "plats", label: "Plats" },
  { id: "desserts", label: "Desserts" },
  { id: "boissons", label: "Boissons" },
];

interface MenuItem {
  name: string;
  description: string;
  price: string;
  isPopular?: boolean;
  isSpicy?: boolean;
  isVegetarian?: boolean;
}

const menuItems: Record<string, MenuItem[]> = {
  entrees: [
    {
      name: "Carpaccio de Boeuf",
      description: "Fines tranches de boeuf, roquette, parmesan, huile de truffe",
      price: "12 000",
      isPopular: true,
    },
    {
      name: "Tartare de Thon",
      description: "Thon frais, avocat, sésame, sauce ponzu",
      price: "15 000",
      isVegetarian: false,
    },
    {
      name: "Burrata Crémeuse",
      description: "Burrata fraîche, tomates cerises, basilic, réduction balsamique",
      price: "14 000",
      isVegetarian: true,
    },
    {
      name: "Gambas Flambées",
      description: "Gambas à l'ail, flambées au cognac, beurre aux herbes",
      price: "18 000",
      isSpicy: true,
    },
  ],
  plats: [
    {
      name: "Côte de Boeuf",
      description: "Côte de boeuf maturée 45 jours, sauce béarnaise, légumes grillés",
      price: "45 000",
      isPopular: true,
    },
    {
      name: "Filet de Bar",
      description: "Bar sauvage, risotto aux fruits de mer, émulsion safranée",
      price: "32 000",
    },
    {
      name: "Carré d'Agneau",
      description: "Agneau en croûte d'herbes, jus au romarin, gratin dauphinois",
      price: "38 000",
    },
    {
      name: "Homard Grillé",
      description: "Demi-homard grillé, beurre à l'ail, frites maison",
      price: "55 000",
      isPopular: true,
    },
  ],
  desserts: [
    {
      name: "Fondant au Chocolat",
      description: "Coeur coulant chocolat Valrhona, glace vanille de Madagascar",
      price: "8 000",
      isPopular: true,
    },
    {
      name: "Tiramisu Classique",
      description: "Mascarpone, café espresso, cacao amer",
      price: "7 000",
    },
    {
      name: "Crème Brûlée",
      description: "Crème à la vanille bourbon, caramel craquant",
      price: "7 500",
    },
    {
      name: "Assiette de Fromages",
      description: "Sélection de fromages affinés, confiture de figues",
      price: "12 000",
    },
  ],
  boissons: [
    {
      name: "Champagne Dom Pérignon",
      description: "Millésime 2012, notes florales et minérales",
      price: "350 000",
      isPopular: true,
    },
    {
      name: "Whisky Macallan 18",
      description: "Single malt, notes de fruits secs et épices",
      price: "25 000",
    },
    {
      name: "Cocktail El Padrino",
      description: "Rhum vieux, citron vert, menthe, sucre de canne",
      price: "12 000",
      isPopular: true,
    },
    {
      name: "Sélection de Cigares",
      description: "Cohiba, Montecristo, Romeo y Julieta",
      price: "À partir de 30 000",
    },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("entrees");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0d100d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#c9a962]/5 via-transparent to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a962] text-sm tracking-[0.3em] uppercase">
            Gastronomie
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            <span className="gradient-text">Notre Menu</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#f5f0e6]/70">
            Une carte raffinée mêlant saveurs méditerranéennes et cuisine internationale
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[#c9a962] text-[#0d100d]"
                  : "bg-[#1a1f1a] text-[#f5f0e6]/70 hover:text-[#f5f0e6] border border-[#c9a962]/20 hover:border-[#c9a962]/40"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Menu items grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {menuItems[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-[#1a1f1a]/50 border border-[#c9a962]/10 hover:border-[#c9a962]/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-[var(--font-playfair)] text-xl font-semibold text-[#f5f0e6] group-hover:text-[#c9a962] transition-colors">
                      {item.name}
                    </h3>
                    {item.isPopular && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#c9a962]/20 text-[#c9a962] text-xs">
                        <Star className="w-3 h-3 fill-[#c9a962]" />
                        Populaire
                      </span>
                    )}
                    {item.isSpicy && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-xs">
                        <Flame className="w-3 h-3" />
                        Épicé
                      </span>
                    )}
                    {item.isVegetarian && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs">
                        <Leaf className="w-3 h-3" />
                        Végé
                      </span>
                    )}
                  </div>
                  <p className="text-[#f5f0e6]/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-[var(--font-playfair)] text-xl font-semibold text-[#c9a962]">
                    {item.price}
                  </span>
                  <span className="text-[#c9a962]/60 text-sm block">FCFA</span>
                </div>
              </div>
              {/* Decorative line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#c9a962]/20 to-transparent" />
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-[#f5f0e6]/50 text-sm mt-12"
        >
          * Prix indicatifs. Menu susceptible d&apos;évoluer selon les arrivages.
        </motion.p>
      </div>
    </section>
  );
}
