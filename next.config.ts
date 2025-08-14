import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone', // ✅ Minimal build for Azure SWA
  images: {
    unoptimized: true, // ✅ Avoids Azure SWA image loader issues
  },
};

export default nextConfig;

