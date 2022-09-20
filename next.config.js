/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    allowFutureImage: true,
    unoptimized: true,
  },
};

module.exports = nextConfig;
