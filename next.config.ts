import path from "path";
import type { NextConfig } from "next";

const themeKey = process.env.NEXT_PUBLIC_THEME_KEY || "themeA";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@app": path.resolve(__dirname, `themes/${themeKey}/app`),
    };
    return config;
  },
};

export default nextConfig;