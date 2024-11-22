/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Cloudinary domain
        pathname: "/**", // Allow all paths under Cloudinary
      },
    ],
  },
};

export default nextConfig;
