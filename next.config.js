/** @type {import('next').NextConfig} */
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
    ]
  },
}

module.exports = nextConfig
