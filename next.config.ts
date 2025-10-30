import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  images: {
    domains: ['picsum.photos'],
  },
};

export default nextConfig;
