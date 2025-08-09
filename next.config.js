// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: [] },
  // optional: backstop redirect
  // async redirects() {
  //   return [{ source: '/', destination: '/en', permanent: false }];
  // },
};

module.exports = nextConfig;
