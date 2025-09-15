import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ enables static export
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint during build
  },
  images: {
    unoptimized: true, // ✅ required for <Image> when exporting static HTML
  },
};

export default nextConfig;
