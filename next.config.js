/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: { ssr: true, displayName: true },
  },
  images: {
    domains: [
      'car-spares.s3.eu-north-1.amazonaws.com',
      'car-spares.s3.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
