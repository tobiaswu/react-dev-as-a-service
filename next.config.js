/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'contra.com',
      },
    ],
  },
};

module.exports = nextConfig;
