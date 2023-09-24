/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['car-spares.s3.amazonaws.com'],
  },
};

module.exports = nextConfig;
