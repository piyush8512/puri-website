// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false // Recommended for type checking
  }
}

module.exports = nextConfig