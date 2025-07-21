/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // intercepts /api/*
        destination: "http://localhost:3001/api/:path*", // forwards to backend
      },
    ];
  },
};

export default nextConfig;
