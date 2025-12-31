/**
 * Script to update blog post categories in Sanity CMS based on sitemap URLs
 * 
 * This script:
 * 1. Fetches the sitemap from the original website
 * 2. Extracts category and slug mappings
 * 3. Updates all blog posts in Sanity to match the correct categories
 * 
 * Usage:
 *   npm run update:categories
 * 
 * Requires SANITY_API_TOKEN environment variable with write permissions
 */

import dotenv from 'dotenv';
import { resolve } from 'path';
import { createClient } from '@sanity/client';
import * as https from 'https';

// Load environment variables from .env.local
dotenv.config({ path: resolve(process.cwd(), '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'asgbwpeo',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Sitemap URL
const SITEMAP_URL = 'https://legendaryrealestateservices.com/post-sitemap.xml';

// Valid categories from the sitemap
const VALID_CATEGORIES = ['uncategorized', 'guide', 'areas', 'buyer', 'seller', 'news'];

interface SitemapEntry {
  slug: string;
  category: string;
}

/**
 * Fetch and parse the sitemap XML
 */
function fetchSitemap(): Promise<string> {
  return new Promise((resolve, reject) => {
    https.get(SITEMAP_URL, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Parse sitemap XML and extract URL mappings
 */
function parseSitemap(xml: string): Map<string, string> {
  const urlMap = new Map<string, string>();
  
  // Match all <loc> tags
  const locRegex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
  const matches = xml.matchAll(locRegex);
  
  for (const match of matches) {
    const url = match[1];
    // Extract category and slug from URL
    // Format: https://legendaryrealestateservices.com/{category}/{slug}/
    const urlMatch = url.match(/legendaryrealestateservices\.com\/([^\/]+)\/([^\/]+)\/?$/);
    
    if (urlMatch) {
      const category = urlMatch[1];
      const slug = urlMatch[2];
      
      // Only process valid categories
      if (VALID_CATEGORIES.includes(category)) {
        urlMap.set(slug, category);
      }
    }
  }
  
  return urlMap;
}

/**
 * Main function to update blog post categories
 */
async function updateBlogCategories() {
  console.log('Starting blog category updates...\n');

  if (!process.env.SANITY_API_TOKEN) {
    console.error('ERROR: SANITY_API_TOKEN environment variable is required');
    console.error('Please set it with write permissions before running this script.');
    process.exit(1);
  }

  try {
    // Fetch and parse sitemap
    console.log('Fetching sitemap from original website...');
    const sitemapXml = await fetchSitemap();
    const urlMap = parseSitemap(sitemapXml);
    console.log(`Found ${urlMap.size} blog post URLs in sitemap\n`);

    // Fetch all blog posts from Sanity
    console.log('Fetching all blog posts from Sanity...');
    const posts = await client.fetch(`
      *[_type == "post"] {
        _id,
        title,
        "slug": slug.current,
        category
      }
    `);

    console.log(`Found ${posts.length} blog posts in Sanity\n`);

    let updatedCount = 0;
    let skippedCount = 0;
    let notFoundCount = 0;

    for (const post of posts) {
      const expectedCategory = urlMap.get(post.slug);
      
      if (expectedCategory) {
        if (post.category !== expectedCategory) {
          console.log(`Updating: ${post.title}`);
          console.log(`  Current category: ${post.category}`);
          console.log(`  New category: ${expectedCategory}`);
          console.log(`  Slug: ${post.slug}`);

          try {
            await client
              .patch(post._id)
              .set({ category: expectedCategory })
              .commit();

            console.log(`  ✓ Successfully updated\n`);
            updatedCount++;
          } catch (error) {
            console.error(`  ✗ Error updating: ${error}\n`);
          }
        } else {
          console.log(`Skipping: ${post.title} - already has correct category (${post.category})\n`);
          skippedCount++;
        }
      } else {
        console.log(`Not found in sitemap: ${post.title} (slug: ${post.slug})`);
        console.log(`  Current category: ${post.category}\n`);
        notFoundCount++;
      }
    }

    console.log('\n=== Summary ===');
    console.log(`Updated: ${updatedCount}`);
    console.log(`Skipped (already correct): ${skippedCount}`);
    console.log(`Not found in sitemap: ${notFoundCount}`);
    console.log(`Total posts: ${posts.length}`);
    console.log(`Sitemap entries: ${urlMap.size}`);

    if (updatedCount > 0) {
      console.log('\n✓ Blog category updates completed successfully!');
    } else {
      console.log('\nNo updates were needed.');
    }

    if (notFoundCount > 0) {
      console.log(`\n⚠ Warning: ${notFoundCount} posts were not found in the sitemap.`);
      console.log('These posts may need manual category assignment.');
    }
  } catch (error) {
    console.error('Error updating blog categories:', error);
    process.exit(1);
  }
}

// Run the script
updateBlogCategories()
  .then(() => {
    console.log('\nScript completed.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Script failed:', error);
    process.exit(1);
  });

