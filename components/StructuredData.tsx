import type { BlogPost } from '@/data/blogPosts';

interface StructuredDataProps {
  post: BlogPost;
  url: string;
}

export default function StructuredData({ post, url }: StructuredDataProps) {
  // Check if structured data is enabled
  if (post.structuredSnippet?.enable === false) {
    return null;
  }

  const baseUrl = 'https://legendaryrealestateservices.com';
  const schemaType = post.structuredSnippet?.type || 'BlogPosting';
  
  // Build structured data object
  const structuredData: any = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    headline: post.structuredSnippet?.headline || post.title,
    description: post.structuredSnippet?.description || post.description,
    image: post.structuredSnippet?.image || post.mainImage.asset.url,
    datePublished: post.structuredSnippet?.datePublished || post.publishedAt,
    dateModified: post.structuredSnippet?.dateModified || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.structuredSnippet?.author || post.author.name,
      ...(post.author.image && {
        image: post.author.image,
      }),
    },
    publisher: {
      '@type': 'Organization',
      name: post.structuredSnippet?.publisher?.name || 'Legendary Real Estate Services',
      logo: {
        '@type': 'ImageObject',
        url: post.structuredSnippet?.publisher?.logo || `${baseUrl}/images/weichert-logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url: url,
    ...(post.structuredSnippet?.keywords && {
      keywords: post.structuredSnippet.keywords.join(', '),
    }),
    ...(post.tags && post.tags.length > 0 && !post.structuredSnippet?.keywords && {
      keywords: post.tags.join(', '),
    }),
    ...(post.structuredSnippet?.articleSection && {
      articleSection: post.structuredSnippet.articleSection,
    }),
    ...(!post.structuredSnippet?.articleSection && {
      articleSection: post.category,
    }),
    ...(post.structuredSnippet?.wordCount && {
      wordCount: post.structuredSnippet.wordCount,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  );
}






