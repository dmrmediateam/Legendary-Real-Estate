import { MetadataRoute } from 'next';

/**
 * Dynamic Robots.txt Generation
 * This file automatically generates a robots.txt at /robots.txt
 */

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://legendaryrealestateservices.com';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/studio/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

