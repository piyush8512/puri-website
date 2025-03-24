import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true } ,
  trailingSlash: true,  // Add this line
  distDir: 'out'
  /* config options here */
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   
//  // Enable static export
//   reactStrictMode: true,
//   typescript: {
//     ignoreBuildErrors: false // Recommended for type checking
//   }
// }

// module.exports = nextConfig