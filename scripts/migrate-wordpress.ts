/**
 * WordPress to Sanity Migration Script
 * Following Sanity's official migration guide:
 * https://www.sanity.io/learn/course/migrating-content-from-wordpress-to-sanity
 */

import dotenv from 'dotenv';
import { resolve } from 'path';

// Load environment variables from .env.local
dotenv.config({ path: resolve(process.cwd(), '.env.local') });
import { createClient } from '@sanity/client';
import * as cheerio from 'cheerio';
import * as path from 'path';
import * as https from 'https';
import * as http from 'http';

// Sanity client configuration
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'asgbwpeo',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// WordPress API endpoint
const WORDPRESS_API = 'https://legendaryrealestateservices.com/wp-json/wp/v2';

// Cache for uploaded images
const imageCache: Map<string, string> = new Map();

/**
 * Fetch all posts from WordPress API
 */
async function fetchWordPressPosts(): Promise<any[]> {
  console.log('Fetching posts from WordPress...');
  const posts: any[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    try {
      const response = await fetch(`${WORDPRESS_API}/posts?per_page=100&page=${page}&_embed=author,wp:featuredmedia,wp:term`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      if (data.length === 0) {
        hasMore = false;
      } else {
        posts.push(...data);
        console.log(`Fetched page ${page}: ${data.length} posts`);
        page++;
      }
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error);
      hasMore = false;
    }
  }

  console.log(`Total posts fetched: ${posts.length}`);
  return posts;
}

/**
 * Fetch WordPress authors
 */
async function fetchWordPressAuthors(): Promise<any[]> {
  console.log('Fetching authors from WordPress...');
  try {
    const response = await fetch(`${WORDPRESS_API}/users?per_page=100`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const authors = await response.json();
    console.log(`Fetched ${authors.length} authors`);
    return authors;
  } catch (error) {
    console.error('Error fetching authors:', error);
    return [];
  }
}

/**
 * Normalize image URL (handle relative URLs)
 */
function normalizeImageUrl(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  if (url.startsWith('//')) {
    return `https:${url}`;
  }
  if (url.startsWith('/')) {
    return `https://legendaryrealestateservices.com${url}`;
  }
  return `https://legendaryrealestateservices.com/${url}`;
}

/**
 * Download image and upload to Sanity
 */
async function uploadImageToSanity(imageUrl: string): Promise<string | null> {
  // Normalize URL
  const normalizedUrl = normalizeImageUrl(imageUrl);
  
  // Check cache first
  if (imageCache.has(normalizedUrl)) {
    return imageCache.get(normalizedUrl) || null;
  }

  try {
    console.log(`Uploading image: ${normalizedUrl}`);
    
    // Download the image
    const imageBuffer = await downloadImage(normalizedUrl);
    if (!imageBuffer) {
      return null;
    }

    // Upload to Sanity
    const asset = await sanityClient.assets.upload('image', imageBuffer, {
      filename: path.basename(new URL(normalizedUrl).pathname),
    });

    const imageRef = asset._id;
    imageCache.set(normalizedUrl, imageRef);
    imageCache.set(imageUrl, imageRef); // Also cache original URL
    console.log(`Uploaded image: ${imageRef}`);
    return imageRef;
  } catch (error) {
    console.error(`Error uploading image ${normalizedUrl}:`, error);
    return null;
  }
}

/**
 * Download image from URL
 */
function downloadImage(url: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      const chunks: Buffer[] = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });
}

/**
 * Convert HTML to PortableText blocks
 * Returns an array with blocks and image placeholders in order
 */
function htmlToPortableText(html: string): Array<{ type: 'block' | 'image', data: any }> {
  if (!html) return [];

  const $ = cheerio.load(html);
  const items: Array<{ type: 'block' | 'image', data: any }> = [];
  let itemIndex = 0;

  // Process all elements in order
  $('body').children().each((_, element) => {
    const $el = $(element);
    const tagName = element.tagName?.toLowerCase();

    if (tagName === 'p') {
      // Handle paragraphs with potential links and formatting
      const children: any[] = [];
      let spanIndex = 0;

      $el.contents().each((_, node) => {
        if (node.type === 'text') {
          const text = $(node).text().trim();
          if (text) {
            children.push({
              _type: 'span',
              _key: `span-${itemIndex}-${spanIndex++}`,
              text: text,
              marks: [],
            });
          }
        } else if (node.type === 'tag') {
          const $node = $(node);
          if ($node.is('a')) {
            const text = $node.text().trim();
            const href = $node.attr('href') || '';
            if (text) {
              children.push({
                _type: 'span',
                _key: `span-${itemIndex}-${spanIndex++}`,
                text: text,
                marks: [{
                  _type: 'link',
                  href: href,
                }],
              });
            }
          } else if ($node.is('strong') || $node.is('b')) {
            const text = $node.text().trim();
            if (text) {
              children.push({
                _type: 'span',
                _key: `span-${itemIndex}-${spanIndex++}`,
                text: text,
                marks: ['strong'],
              });
            }
          } else if ($node.is('em') || $node.is('i')) {
            const text = $node.text().trim();
            if (text) {
              children.push({
                _type: 'span',
                _key: `span-${itemIndex}-${spanIndex++}`,
                text: text,
                marks: ['em'],
              });
            }
          } else {
            const text = $node.text().trim();
            if (text) {
              children.push({
                _type: 'span',
                _key: `span-${itemIndex}-${spanIndex++}`,
                text: text,
                marks: [],
              });
            }
          }
        }
      });

      if (children.length > 0) {
        items.push({
          type: 'block',
          data: {
            _type: 'block',
            _key: `block-${itemIndex++}`,
            style: 'normal',
            children: children,
          },
        });
      }
    } else if (tagName === 'h2') {
      const text = $el.text().trim();
      if (text) {
        items.push({
          type: 'block',
          data: {
            _type: 'block',
            _key: `block-${itemIndex++}`,
            style: 'h2',
            children: [{
              _type: 'span',
              _key: `span-${itemIndex - 1}`,
              text: text,
              marks: [],
            }],
          },
        });
      }
    } else if (tagName === 'h3') {
      const text = $el.text().trim();
      if (text) {
        items.push({
          type: 'block',
          data: {
            _type: 'block',
            _key: `block-${itemIndex++}`,
            style: 'h3',
            children: [{
              _type: 'span',
              _key: `span-${itemIndex - 1}`,
              text: text,
              marks: [],
            }],
          },
        });
      }
    } else if (tagName === 'h4') {
      const text = $el.text().trim();
      if (text) {
        items.push({
          type: 'block',
          data: {
            _type: 'block',
            _key: `block-${itemIndex++}`,
            style: 'h4',
            children: [{
              _type: 'span',
              _key: `span-${itemIndex - 1}`,
              text: text,
              marks: [],
            }],
          },
        });
      }
    } else if (tagName === 'ul' || tagName === 'ol') {
      $el.find('li').each((idx, li) => {
        const text = $(li).text().trim();
        if (text) {
          items.push({
            type: 'block',
            data: {
              _type: 'block',
              _key: `list-item-${itemIndex++}`,
              style: 'normal',
              listItem: tagName === 'ul' ? 'bullet' : 'number',
              children: [{
                _type: 'span',
                _key: `span-${itemIndex - 1}`,
                text: text,
                marks: [],
              }],
            },
          });
        }
      });
    } else if (tagName === 'blockquote') {
      const text = $el.text().trim();
      if (text) {
        items.push({
          type: 'block',
          data: {
            _type: 'block',
            _key: `block-${itemIndex++}`,
            style: 'blockquote',
            children: [{
              _type: 'span',
              _key: `span-${itemIndex - 1}`,
              text: text,
              marks: [],
            }],
          },
        });
      }
    } else if (tagName === 'img') {
      const src = $el.attr('src');
      const alt = $el.attr('alt') || '';
      if (src) {
        items.push({
          type: 'image',
          data: { url: src, alt },
        });
      }
    } else if (tagName === 'figure') {
      // Handle WordPress figure elements
      const img = $el.find('img');
      if (img.length > 0) {
        const src = img.attr('src');
        const alt = img.attr('alt') || $el.find('figcaption').text().trim() || '';
        if (src) {
          items.push({
            type: 'image',
            data: { url: src, alt },
          });
        }
      }
    }
  });

  return items;
}

/**
 * Get or create agent by name
 */
async function getOrCreateAgent(authorName: string, authorEmail?: string): Promise<string | null> {
  try {
    // First, try to find existing agent
    const existingAgents = await sanityClient.fetch(
      `*[_type == "agent" && name == $name][0]._id`,
      { name: authorName }
    );

    if (existingAgents) {
      return existingAgents;
    }

    // If not found, create a new agent
    console.log(`Creating new agent: ${authorName}`);
    const newAgent = await sanityClient.create({
      _type: 'agent',
      name: authorName,
      email: authorEmail || '',
      phone: '',
      realEstateLicense: 'TBD',
      slug: {
        _type: 'slug',
        current: authorName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      },
    });

    return newAgent._id;
  } catch (error) {
    console.error(`Error getting/creating agent ${authorName}:`, error);
    return null;
  }
}

/**
 * Map WordPress category to Sanity category
 */
function mapCategory(wpCategory: string): string {
  const categoryMap: Record<string, string> = {
    'market-report': 'Market Report',
    'investment-guide': 'Investment Guide',
    'buyer-tips': 'Buyer Tips',
    'seller-tips': 'Seller Tips',
    'market-analysis': 'Market Analysis',
  };

  // Try exact match first
  if (categoryMap[wpCategory.toLowerCase()]) {
    return categoryMap[wpCategory.toLowerCase()];
  }

  // Try partial match
  const lowerCategory = wpCategory.toLowerCase();
  for (const [key, value] of Object.entries(categoryMap)) {
    if (lowerCategory.includes(key) || key.includes(lowerCategory)) {
      return value;
    }
  }

  // Default to first category
  return 'Market Report';
}

/**
 * Calculate read time from content
 */
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * Migrate a single WordPress post to Sanity
 */
async function migratePost(wpPost: any, authors: any[]): Promise<void> {
  try {
    console.log(`Migrating post: ${wpPost.title.rendered}`);

    // Check if post already exists
    const existingPost = await sanityClient.fetch(
      `*[_type == "post" && slug.current == $slug][0]._id`,
      { slug: wpPost.slug }
    );

    if (existingPost) {
      console.log(`Post ${wpPost.slug} already exists, skipping...`);
      return;
    }

    // Get author
    const wpAuthor = authors.find(a => a.id === wpPost.author);
    const authorName = wpAuthor?.name || 'Unknown Author';
    const authorId = await getOrCreateAgent(authorName, wpAuthor?.email);

    if (!authorId) {
      console.error(`Could not get/create author for post: ${wpPost.title.rendered}`);
      return;
    }

    // Upload featured image
    let mainImageRef: string | null = null;
    if (wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
      const imageUrl = wpPost._embedded['wp:featuredmedia'][0].source_url;
      mainImageRef = await uploadImageToSanity(imageUrl);
    }
    
    // If no featured image, try to get first image from content
    if (!mainImageRef) {
      const $ = cheerio.load(wpPost.content.rendered);
      const firstImg = $('img').first();
      if (firstImg.length > 0) {
        const imgUrl = firstImg.attr('src');
        if (imgUrl) {
          mainImageRef = await uploadImageToSanity(imgUrl);
        }
      }
    }

    // Get category
    let category = 'Market Report';
    if (wpPost._embedded?.['wp:term']?.[0]) {
      const categories = wpPost._embedded['wp:term'][0];
      if (categories.length > 0) {
        category = mapCategory(categories[0].name);
      }
    }

    // Convert HTML content to PortableText (preserves order of blocks and images)
    const items = htmlToPortableText(wpPost.content.rendered);
    
    // Process items in order, uploading images as we go
    const body: any[] = [];
    let imageIndex = 0;
    
    for (const item of items) {
      if (item.type === 'block') {
        body.push(item.data);
      } else if (item.type === 'image') {
        // Upload image and add to body
        const imageRef = await uploadImageToSanity(item.data.url);
        if (imageRef) {
          body.push({
            _type: 'image',
            _key: `image-${imageIndex++}`,
            asset: {
              _type: 'reference',
              _ref: imageRef,
            },
            alt: item.data.alt || wpPost.title.rendered,
          });
        }
      }
    }

    // Get tags
    const tags: string[] = [];
    if (wpPost._embedded?.['wp:term']?.[1]) {
      const wpTags = wpPost._embedded['wp:term'][1];
      tags.push(...wpTags.map((tag: any) => tag.name));
    }

    // Ensure we have a description
    const description = wpPost.excerpt?.rendered?.replace(/<[^>]*>/g, '').substring(0, 200).trim() || 
                       wpPost.content?.rendered?.replace(/<[^>]*>/g, '').substring(0, 200).trim() || 
                       '';

    // Create Sanity post
    const sanityPost = {
      _type: 'post',
      title: wpPost.title.rendered || 'Untitled Post',
      slug: {
        _type: 'slug',
        current: wpPost.slug || `post-${wpPost.id}`,
      },
      category: category,
      description: description,
      ...(mainImageRef ? {
        mainImage: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: mainImageRef,
          },
          alt: wpPost.title.rendered,
        },
      } : {}),
      author: {
        _type: 'reference',
        _ref: authorId,
      },
      publishedAt: wpPost.date_gmt || wpPost.date,
      readTime: calculateReadTime(wpPost.content.rendered),
      body: body,
      tags: tags.length > 0 ? tags : undefined,
      seo: {
        metaTitle: wpPost.title.rendered,
        metaDescription: wpPost.excerpt?.rendered?.replace(/<[^>]*>/g, '').substring(0, 160) || '',
      },
    };

    await sanityClient.create(sanityPost);
    console.log(`✓ Migrated: ${wpPost.title.rendered}`);
  } catch (error) {
    console.error(`Error migrating post ${wpPost.title?.rendered}:`, error);
  }
}

/**
 * Main migration function
 */
async function migrate() {
  console.log('Starting WordPress to Sanity migration...\n');

  // Check environment variables
  if (!process.env.SANITY_API_TOKEN) {
    console.error('ERROR: SANITY_API_TOKEN environment variable is not set!');
    console.error('Please add it to your .env.local file.');
    process.exit(1);
  }

  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.error('ERROR: NEXT_PUBLIC_SANITY_PROJECT_ID environment variable is not set!');
    process.exit(1);
  }

  try {
    // Fetch WordPress data
    const [wpPosts, wpAuthors] = await Promise.all([
      fetchWordPressPosts(),
      fetchWordPressAuthors(),
    ]);

    if (wpPosts.length === 0) {
      console.log('No posts found to migrate.');
      return;
    }

    console.log(`\nMigrating ${wpPosts.length} posts...\n`);

    // Migrate posts one by one
    for (let i = 0; i < wpPosts.length; i++) {
      const post = wpPosts[i];
      console.log(`[${i + 1}/${wpPosts.length}]`);
      await migratePost(post, wpAuthors);
      
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log('\n✓ Migration completed!');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
migrate();

