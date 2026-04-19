import type { NextConfig } from "next";

import './src/env'

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    formats : ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
      },
    ],
  },
};
export default nextConfig;
