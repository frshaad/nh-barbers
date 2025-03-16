import type { NextConfig } from 'next';
import { validateEnvironment } from '@/lib/env';

validateEnvironment();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lookee.nwhco.ir',
      },
    ],
  },
};

export default nextConfig;
