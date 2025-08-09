// next.config.js — belt & suspenders redirect for "/"
 /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: '/', destination: '/en', permanent: false }];
  },
};
module.exports = nextConfig;
