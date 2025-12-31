/** @type {import('next').NextConfig} */
const { getBlogRedirects } = require('./lib/blogRedirects');

const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    // Known agent slugs - redirect from /{slug} to /agents/{slug}
    const agentRedirects = [
      'jade',
      'chris-devincentis',
      'chris',
      'tim-cox',
      'diane-urlakis',
      'emma-alexander',
      'matt-petersen',
      'sara-dickfoss',
    ].map((slug) => ({
      source: `/${slug}`,
      destination: `/agents/${slug}`,
      permanent: true,
    }));

    // Blog redirects from old WordPress URLs and /blog/{slug} to /{category}/{slug} format
    // TEMPORARILY DISABLED to debug redirect loop
    // const blogRedirects = getBlogRedirects();

    return [
      {
        source: '/studio',
        destination: 'https://realestatebycherlnj.sanity.studio/',
        permanent: true,
      },
      {
        source: '/market-reports',
        destination: '/blog',
        permanent: true,
      },
      ...agentRedirects,
      // ...blogRedirects, // TEMPORARILY DISABLED
    ]
  },
}

module.exports = nextConfig
