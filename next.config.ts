import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      // Pin Turbopack root to this app to avoid multi-lockfile inference.
      root: __dirname,
    },
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, no-cache, must-revalidate, max-age=0" },
          { key: "Pragma", value: "no-cache" },
          { key: "Expires", value: "0" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.abemedia.online",
          },
        ],
        destination: "https://abemedia.online/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
