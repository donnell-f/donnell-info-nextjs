/** @type {import('next').NextConfig} */

// Single source of truth for the deploy base path. Set by CI (from GitHub Pages'
// computed base_path); empty locally so dev/build serve from the root. The same value
// is inlined for client code via NEXT_PUBLIC_BASE_PATH and consumed by src/lib/asset.js.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactCompiler: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
