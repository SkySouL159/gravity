/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com", // already used for other images
      "assets.aceternity.com", // add this line to allow the new hostname
    ],
  },
};

export default nextConfig;
