/**
 * Script to generate blog redirects from WordPress sitemap
 * Extracts slugs from old WordPress URLs and creates redirects to /blog/{slug}
 */

// URLs from the sitemap
const sitemapUrls = [
  'https://legendaryrealestateservices.com/uncategorized/2025-lake-geneva-real-estate-a-year-of-plot-twists-price-psychology-and-wait-did-we-have-a-bidding-war-in-november/',
  'https://legendaryrealestateservices.com/guide/lake-geneva-real-estate-trends-shaping-the-2026-market-for-homeowners/',
  'https://legendaryrealestateservices.com/uncategorized/exploring-lake-geneva-waterfront-wonders-2026/',
  'https://legendaryrealestateservices.com/areas/lake-genevas-best-family-neighborhoods-in-2026-where-to-raise-kids-on-the-lake/',
  'https://legendaryrealestateservices.com/guide/parade-of-trees-and-winter-actives-in-lake-geneva-2025/',
  'https://legendaryrealestateservices.com/uncategorized/q4-2025-lake-geneva-real-estate-market-update/',
  'https://legendaryrealestateservices.com/news/the-worlds-tallest-glass-tree-returns-to-yerkes-observatory/',
  'https://legendaryrealestateservices.com/uncategorized/the-calm-the-curveball-and-the-comeback-lake-genevas-fall-market-in-focus/',
  'https://legendaryrealestateservices.com/news/newly-built-mansion-on-bayview-drive-sells-for-8-million-in-just-11-days/',
  'https://legendaryrealestateservices.com/uncategorized/%f0%9f%95%b0%ef%b8%8f-12-months-out-the-smart-buyers-playbook-for-lake-genevas-market/',
  'https://legendaryrealestateservices.com/uncategorized/lake-geneva-real-estate-market-update-balance-patience-and-a-few-nuances/',
  'https://legendaryrealestateservices.com/uncategorized/lake-geneva-school-districts-complete-guide-for-families-moving-to-walworth-county/',
  'https://legendaryrealestateservices.com/uncategorized/lake-geneva-real-estate-market-update-why-smart-pricing-wins-every-time/',
  'https://legendaryrealestateservices.com/uncategorized/lake-geneva-investment-properties-short-term-rental-vs-long-term-returns-analysis/',
  'https://legendaryrealestateservices.com/uncategorized/lake-geneva-luxury-home-staging-what-million-dollar-buyers-really-want/',
  'https://legendaryrealestateservices.com/uncategorized/2026-real-estate-market-report-for-lake-geneva-and-fontana-expected-real-estate-returns/',
  'https://legendaryrealestateservices.com/uncategorized/7-most-popular-neighborhoods-on-lake-geneva/',
  'https://legendaryrealestateservices.com/uncategorized/the-ultimate-guide-to-halloween-in-lake-geneva-wi/',
  'https://legendaryrealestateservices.com/uncategorized/what-its-like-living-in-lake-geneva-wi-in-the-fall-fall-real-estate-trends/',
  'https://legendaryrealestateservices.com/uncategorized/lake-geneva-real-estate-market-update-balance-patience-and-a-few-nuances/',
  'https://legendaryrealestateservices.com/uncategorized/lake-geneva-school-districts-complete-guide-for-families-moving-to-walworth-county/',
  'https://legendaryrealestateservices.com/uncategorized/lake-geneva-real-estate-market-update-why-smart-pricing-wins-every-time/',
  'https://legendaryrealestateservices.com/uncategorized/lake-geneva-investment-properties-short-term-rental-vs-long-term-returns-analysis/',
  'https://legendaryrealestateservices.com/uncategorized/lake-geneva-luxury-home-staging-what-million-dollar-buyers-really-want/',
  'https://legendaryrealestateservices.com/uncategorized/2026-real-estate-market-report-for-lake-geneva-and-fontana-expected-real-estate-returns/',
  'https://legendaryrealestateservices.com/uncategorized/7-most-popular-neighborhoods-on-lake-geneva/',
  'https://legendaryrealestateservices.com/uncategorized/the-ultimate-guide-to-halloween-in-lake-geneva-wi/',
  'https://legendaryrealestateservices.com/uncategorized/what-its-like-living-in-lake-geneva-wi-in-the-fall-fall-real-estate-trends/',
  'https://legendaryrealestateservices.com/guide/a-local-guide-to-lake-geneva-and-fontana-on-the-lake/',
  'https://legendaryrealestateservices.com/buyer/what-its-like-buying-a-home-in-fontana-wi/',
  'https://legendaryrealestateservices.com/uncategorized/5-counterintuitive-moves-to-flip-the-script-on-foreclosure-and-help-you-move-on-fast-with-dignity-and-without-losing-everything/',
  'https://legendaryrealestateservices.com/uncategorized/lake-geneva-real-estate-why-its-still-a-sellers-market-but-not-without-a-twist/',
  'https://legendaryrealestateservices.com/uncategorized/selling-your-home-in-williams-bay-how-to-guide/',
  'https://legendaryrealestateservices.com/uncategorized/its-a-sellers-market-again-but-with-a-twist/',
  'https://legendaryrealestateservices.com/uncategorized/the-intelligent-approach-to-pricing-lakefront-homes-on-lake-geneva/',
  'https://legendaryrealestateservices.com/buyer/the-official-elkhorn-wi-real-estate-guide/',
  'https://legendaryrealestateservices.com/buyer/real-estate-guide-first-time-home-buyers-in-lake-geneva/',
  'https://legendaryrealestateservices.com/uncategorized/lake-geneva-real-estate-update-what-buyers-sellers-need-to-know-right-now/',
  'https://legendaryrealestateservices.com/buyer/real-estate-and-mortgage-guide-for-lake-geneva-wi/',
  'https://legendaryrealestateservices.com/buyer/exploring-community-life-and-quality-living-in-salem-wi-for-2025/',
  'https://legendaryrealestateservices.com/uncategorized/top-rated-schools-in-lake-geneva/',
  'https://legendaryrealestateservices.com/seller/2025-lake-geneva-real-estate-update-what-buyers-sellers-need-to-know-right-now/',
  'https://legendaryrealestateservices.com/uncategorized/boost-your-homes-value-with-these-5-smart-renovations-in-lake-geneva-wi/',
  'https://legendaryrealestateservices.com/uncategorized/trumps-2025-housing-agenda-what-it-could-mean-for-buyers-and-sellers-in-lake-geneva-and-the-geneva-lakes-wi-area/',
  'https://legendaryrealestateservices.com/buyer/locals-guide-to-elkhorn-wi-a-christmas-card-town/',
  'https://legendaryrealestateservices.com/areas/the-ultimate-guide-to-family-living-in-lake-geneva/',
  'https://legendaryrealestateservices.com/buyer/3-ways-to-build-wealth-through-refinancing-your-real-estate/',
  'https://legendaryrealestateservices.com/seller/do-home-sellers-have-loan-type-bias/',
  'https://legendaryrealestateservices.com/areas/lakegeneva/',
  'https://legendaryrealestateservices.com/seller/there-was-a-bubble-but-not-in-real-estate/',
  'https://legendaryrealestateservices.com/areas/fontana/',
  'https://legendaryrealestateservices.com/areas/delavan/',
];

function extractSlug(url) {
  // Decode URL-encoded characters
  let decodedUrl = decodeURIComponent(url);
  // Remove domain and trailing slash
  const path = decodedUrl.replace('https://legendaryrealestateservices.com', '').replace(/\/$/, '');
  // Extract slug (everything after the category)
  const parts = path.split('/').filter(p => p); // Filter out empty strings
  if (parts.length >= 2) {
    // Skip category, get the rest
    return parts.slice(1).join('/');
  }
  return null;
}

function generateRedirects() {
  const redirects = [];
  const seen = new Set();

  for (const url of sitemapUrls) {
    const slug = extractSlug(url);
    if (!slug || seen.has(slug)) continue;
    
    seen.add(slug);
    
    // Extract the source path (category + slug)
    const sourcePath = url.replace('https://legendaryrealestateservices.com', '').replace(/\/$/, '');
    
    redirects.push({
      source: sourcePath,
      destination: `/blog/${slug}`,
      permanent: true,
    });
    
    // Also add redirect with trailing slash
    redirects.push({
      source: `${sourcePath}/`,
      destination: `/blog/${slug}`,
      permanent: true,
    });
  }

  return redirects;
}

const redirects = generateRedirects();
console.log(JSON.stringify(redirects, null, 2));
console.log(`\nTotal redirects: ${redirects.length}`);

