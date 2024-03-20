/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  reactStrictMode: true,
  env: {
    TG_BOT_NAME: process.env.TG_BOT_NAME,
    HOST: process.env.HOST,
  }
};

export default nextConfig;
