/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '/dist',
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

module.exports = nextConfig;
