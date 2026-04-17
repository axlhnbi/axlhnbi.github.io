import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://seashell-gazelle-908805.hostingersite.com/',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
