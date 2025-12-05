import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Décommentez et modifiez si votre repo n'est pas à la racine
  // basePath: "/nom-du-repo",
  // assetPrefix: "/nom-du-repo/",
};

export default nextConfig;
