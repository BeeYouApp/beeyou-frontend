/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER: process.env.mapboxToken,
  },
}

module.exports = nextConfig
