// Load environment variables
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';

// Load .env file
const __dirname = path.dirname(fileURLToPath(import.meta.url));
config({ path: path.resolve(__dirname, '.env') });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  typescript: {
    // Force TypeScript errors to be ignored in production builds
    ignoreBuildErrors: true,
    tsconfigPath: 'tsconfig.json'
  },
  eslint: {
    // Force ESLint errors to be ignored in production builds
    ignoreDuringBuilds: true
  },
  // Disable type checking during build (using transpileOnly)
  webpack(config, { dev, isServer }) {
    // Disable type checking in webpack
    if (!dev && !isServer) {
      config.resolve.alias['next/router'] = 'next/router';
    }
    return config;
  }
}

export default nextConfig
