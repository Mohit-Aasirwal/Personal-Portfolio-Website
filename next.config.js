/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "media2.giphy.com",
      "media3.giphy.com",
      "media0.giphy.com",
      "media1.giphy.com",
      "media4.giphy.com",
      "media.tenor.com",
    ],
  },
};

module.exports = nextConfig;
