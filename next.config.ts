import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* MVP shell: avoid dev RSC shell that can block client hydration in some envs */
  cacheComponents: false,
  partialPrefetching: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
