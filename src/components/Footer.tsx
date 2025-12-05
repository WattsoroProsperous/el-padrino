"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

const footerLinks = {
  navigation: [
    { label: "Accueil", href: "#accueil" },
    { label: "À Propos", href: "#apropos" },
    { label: "Menu", href: "#menu" },
    { label: "Galerie", href: "#galerie" },
    { label: "Avis", href: "#avis" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Restaurant", href: "#menu" },
    { label: "Cigar Lounge", href: "#apropos" },
    { label: "Bar Premium", href: "#menu" },
    { label: "Événements Privés", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#0d100d] border-t border-[#c9a962]/10">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full border-2 border-[#c9a962] flex items-center justify-center">
                <span className="font-[var(--font-playfair)] text-[#c9a962] text-xl font-bold">
                  EP
                </span>
              </div>
              <div>
                <h3 className="font-[var(--font-playfair)] text-xl font-semibold text-[#f5f0e6]">
                  El Padrino
                </h3>
                <p className="text-xs text-[#c9a962] tracking-[0.2em] uppercase">
                  Restaurant & Cigar Lounge
                </p>
              </div>
            </div>
            <p className="text-[#f5f0e6]/60 leading-relaxed max-w-md mb-6">
              Une expérience gastronomique unique avec vue sur la lagune à Abidjan.
              Cuisine raffinée, ambiance feutrée et service d&apos;exception.
            </p>
            <div className="flex items-center gap-2 text-[#c9a962]">
              <span className="text-sm">4.4/5</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-4 h-4 ${star <= 4 ? "fill-[#c9a962]" : "fill-[#c9a962]/50"}`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-[#f5f0e6]/60">(68 avis)</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-[#f5f0e6] mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#f5f0e6]/60 hover:text-[#c9a962] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[#f5f0e6] mb-4">Nos Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#f5f0e6]/60 hover:text-[#c9a962] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#c9a962]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#f5f0e6]/50">
              © {new Date().getFullYear()} El Padrino. Tous droits réservés.
            </p>
            <p className="text-sm text-[#f5f0e6]/50 flex items-center gap-1">
              Fait avec <Heart className="w-4 h-4 text-[#c9a962] fill-[#c9a962]" /> à Abidjan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
