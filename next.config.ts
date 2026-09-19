import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/web-development",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/website-development",
        destination: "/services/web-development",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
