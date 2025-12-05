"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, Clock, Mail, Instagram, Facebook } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "07 16 16 16 16",
    href: "tel:+22507161616",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "345 Bretelle Chardy E, Abidjan",
    href: "https://maps.google.com/?q=El+Padrino+Abidjan",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Ouvert jusqu'à 02h00",
    href: null,
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@elpadrino.ci",
    href: "mailto:contact@elpadrino.ci",
  },
];

const hours = [
  { day: "Lundi - Jeudi", time: "12h00 - 00h00" },
  { day: "Vendredi - Samedi", time: "12h00 - 02h00" },
  { day: "Dimanche", time: "12h00 - 23h00" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0d100d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c9a962]/5 via-transparent to-transparent" />
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
            Contact
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            <span className="gradient-text">Venez Nous Voir</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#f5f0e6]/70">
            Réservez votre table ou passez nous rendre visite
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block p-6 rounded-2xl bg-[#1a1f1a]/50 border border-[#c9a962]/10 hover:border-[#c9a962]/30 transition-all duration-300 group"
                    >
                      <item.icon className="w-6 h-6 text-[#c9a962] mb-3 group-hover:scale-110 transition-transform" />
                      <p className="text-sm text-[#f5f0e6]/60 mb-1">{item.label}</p>
                      <p className="font-medium text-[#f5f0e6] group-hover:text-[#c9a962] transition-colors">
                        {item.value}
                      </p>
                    </a>
                  ) : (
                    <div className="p-6 rounded-2xl bg-[#1a1f1a]/50 border border-[#c9a962]/10">
                      <item.icon className="w-6 h-6 text-[#c9a962] mb-3" />
                      <p className="text-sm text-[#f5f0e6]/60 mb-1">{item.label}</p>
                      <p className="font-medium text-[#f5f0e6]">{item.value}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="p-6 rounded-2xl bg-[#1a1f1a]/50 border border-[#c9a962]/10 mb-8"
            >
              <h3 className="font-[var(--font-playfair)] text-xl font-semibold text-[#f5f0e6] mb-4">
                Horaires d&apos;ouverture
              </h3>
              <div className="space-y-3">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-[#f5f0e6]/70">{item.day}</span>
                    <span className="text-[#c9a962] font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-[#f5f0e6]/60">Suivez-nous:</span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1a1f1a] border border-[#c9a962]/20 flex items-center justify-center text-[#c9a962] hover:bg-[#c9a962] hover:text-[#0d100d] transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1a1f1a] border border-[#c9a962]/20 flex items-center justify-center text-[#c9a962] hover:bg-[#c9a962] hover:text-[#0d100d] transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#c9a962]/20 aspect-square lg:aspect-auto lg:h-full min-h-[400px]">
              {/* Map placeholder with gradient overlay */}
              <div className="absolute inset-0 bg-[#1a1f1a]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.3!2d-3.99!3d5.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjEnMDAuMCJOIDPCsDU5JzI0LjAiVw!5e0!3m2!1sfr!2sci!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d100d]/50 to-transparent pointer-events-none" />
              </div>

              {/* Location badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="p-4 rounded-xl bg-[#0d100d]/90 backdrop-blur-sm border border-[#c9a962]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#c9a962] flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#0d100d]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#f5f0e6]">El Padrino</p>
                      <p className="text-sm text-[#f5f0e6]/60">
                        345 Bretelle Chardy E, Abidjan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="tel:+22507161616"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#c9a962] text-[#0d100d] rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a962]/30"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Phone className="w-5 h-5" />
              Réserver maintenant - 07 16 16 16 16
            </span>
            <div className="absolute inset-0 bg-[#d4b978] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
