const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Add webpack configuration for .qmd and .rmd files
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(qmd|rmd)$/,
      use: [
        {
          loader: 'raw-loader',
        },
        {
          loader: path.resolve('./scripts/rmarkdown-loader.js'),
        },
      ],
    });
    return config;
  },
  // Add public directory as a static asset directory
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: '/public/images/:path*',
      },
    ]
  },
}

module.exports = nextConfig 