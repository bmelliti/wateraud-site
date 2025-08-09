// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { remotePatterns: [] }, // no private hosts
  // no rewrites/redirects to localhost or private IPs
};

module.exports = nextConfig;
