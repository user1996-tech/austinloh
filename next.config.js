/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: { ignoreDuringBuilds: true },
  i18n: { locales: ["en"], defaultLocale: "en" },
};

module.exports = nextConfig;
