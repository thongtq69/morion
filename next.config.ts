import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "homenest.com.vn" },
      { protocol: "https", hostname: "image.homenest.com.vn" },
      { protocol: "https", hostname: "image.homenest.software" },
      { protocol: "https", hostname: "image.homenest.tech" },
      { protocol: "https", hostname: "image.homenest.media" },
      { protocol: "https", hostname: "s3.ap-southeast-1.amazonaws.com" },
      { protocol: "https", hostname: "wintek.com.vn" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
};

export default nextConfig;
