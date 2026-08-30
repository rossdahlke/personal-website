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
  // Printed materials (white paper covers, slides) cite the shorter
  // rossdahlke.com/codelab, so send it to the real /code-lab route.
  // The static PDFs under public/codelab/ are files, not routes, and are
  // unaffected by this exact-path redirect.
  async redirects() {
    return [
      {
        source: '/codelab',
        destination: '/code-lab',
        permanent: true,
      },
    ]
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