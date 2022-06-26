/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com'],
  },
}

module.exports = nextConfig
