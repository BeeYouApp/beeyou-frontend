/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MAPBOXTOKEN: process.env.MAPBOXTOKEN,
  },
}

module.exports = nextConfig
