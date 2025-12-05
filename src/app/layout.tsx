import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "El Padrino | Restaurant & Cigar Lounge - Abidjan",
  description: "Découvrez El Padrino, un restaurant d'exception et cigar lounge à Abidjan. Vue lagune, cuisine raffinée, ambiance unique. Ouvert jusqu'à 02h00.",
  keywords: ["restaurant", "cigar lounge", "Abidjan", "vue lagune", "gastronomie", "El Padrino"],
  openGraph: {
    title: "El Padrino | Restaurant & Cigar Lounge",
    description: "Une expérience culinaire unique avec vue sur la lagune à Abidjan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-[#0d100d] text-[#f5f0e6]`}
      >
        {children}
      </body>
    </html>
  );
}
