/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    tsconfigPath: 'tsconfig.build.json',
  },
}

module.exports = nextConfig
