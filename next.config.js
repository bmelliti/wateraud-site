// next.config.js — add a root redirect
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: '/', destination: '/en', permanent: false }];
  },
};
module.exports = nextConfig;
