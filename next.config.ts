import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "cv"; // ← replace with your repo name


const nextConfig: NextConfig = {
    output: "export", // important for static GitHub Pages
    basePath: isProd ? `/${repoName}` : "",
    assetPrefix: isProd ? `/${repoName}/` : "",
    images: {
    unoptimized: true, // GitHub Pages does NOT support Next.js image optimization
  },
};

export default nextConfig;
