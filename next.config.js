/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mapboxToken: process.env.mapboxToken,
  },
}

module.exports = nextConfig
