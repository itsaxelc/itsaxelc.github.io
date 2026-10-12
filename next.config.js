/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export, so the site can be hosted on GitHub Pages.
  output: "export",
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
