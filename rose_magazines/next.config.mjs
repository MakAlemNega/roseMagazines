/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  output: "export",

  allowedDevOrigins: [
    "192.168.11.1",
    "localhost:3000",
    "evaluation-metro-andrea-apartments.trycloudflare.com",
  ],

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
