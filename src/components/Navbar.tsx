"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À Propos" },
  { href: "#menu", label: "Menu" },
  { href: "#galerie", label: "Galerie" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0d100d]/95 backdrop-blur-lg shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="#accueil" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg border-2 border-[#c9a962] overflow-hidden flex items-center justify-center relative bg-[#0d100d]/50">
                <img
                  src="/images/logo.jpg"
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
                  <span className="font-[var(--font-playfair)] text-[#c9a962] text-xl font-bold">
                    EP
                  </span>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-[var(--font-playfair)] text-xl font-semibold text-[#f5f0e6]">
                  El Padrino
                </h1>
                <p className="text-[10px] text-[#c9a962] tracking-[0.2em] uppercase">
                  Restaurant & Cigar Lounge
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm text-[#f5f0e6]/80 hover:text-[#c9a962] transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c9a962] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+22507161616"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#c9a962] text-[#0d100d] rounded-full font-medium text-sm hover:bg-[#d4b978] transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a962]/20"
              >
                <Phone className="w-4 h-4" />
                <span>Réserver</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#f5f0e6]"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-[#141814] shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 px-6">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 text-lg text-[#f5f0e6] hover:text-[#c9a962] transition-colors border-b border-[#c9a962]/10"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8">
                  <a
                    href="tel:+22507161616"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#c9a962] text-[#0d100d] rounded-full font-semibold hover:bg-[#d4b978] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>07 16 16 16 16</span>
                  </a>
                </div>
                <div className="mt-auto pb-8 text-center">
                  <p className="text-sm text-[#f5f0e6]/50">
                    345 Bretelle Chardy E, Abidjan
                  </p>
                  <p className="text-xs text-[#c9a962] mt-1">
                    Ouvert jusqu&apos;à 02h00
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
