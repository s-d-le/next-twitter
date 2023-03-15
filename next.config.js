/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.google.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
