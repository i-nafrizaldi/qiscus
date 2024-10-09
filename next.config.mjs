/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "pii.or.id",
      },
      {
        protocol: "https",
        hostname: "youtube.com",
      },
    ],
  },
  
};
export default nextConfig;
