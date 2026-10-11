import type { NextConfig } from "next"

const nextConfig = {
  reactCompiler: true,
  typedRoutes: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
} satisfies NextConfig

export default nextConfig
