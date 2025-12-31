/**
 * Blog redirects from old WordPress URLs to new /{category}/{slug} format
 * Generated from sitemap: https://legendaryrealestateservices.com/post-sitemap.xml
 */

// Map of old paths to new category/slug paths
// The old paths already contain the category, so we just redirect to themselves (they're already in the right format)
// But we also need to handle /blog/{slug} redirects to /{category}/{slug}
const blogRedirectMap = [
  // Uncategorized
  { old: '/uncategorized/2025-lake-geneva-real-estate-a-year-of-plot-twists-price-psychology-and-wait-did-we-have-a-bidding-war-in-november', category: 'uncategorized', slug: '2025-lake-geneva-real-estate-a-year-of-plot-twists-price-psychology-and-wait-did-we-have-a-bidding-war-in-november' },
  { old: '/uncategorized/exploring-lake-geneva-waterfront-wonders-2026', category: 'uncategorized', slug: 'exploring-lake-geneva-waterfront-wonders-2026' },
  { old: '/uncategorized/q4-2025-lake-geneva-real-estate-market-update', category: 'uncategorized', slug: 'q4-2025-lake-geneva-real-estate-market-update' },
  { old: '/uncategorized/the-calm-the-curveball-and-the-comeback-lake-genevas-fall-market-in-focus', category: 'uncategorized', slug: 'the-calm-the-curveball-and-the-comeback-lake-genevas-fall-market-in-focus' },
  { old: '/uncategorized/%f0%9f%95%b0%ef%b8%8f-12-months-out-the-smart-buyers-playbook-for-lake-genevas-market', category: 'uncategorized', slug: '12-months-out-the-smart-buyers-playbook-for-lake-genevas-market' },
  { old: '/uncategorized/lake-geneva-real-estate-market-update-balance-patience-and-a-few-nuances', category: 'uncategorized', slug: 'lake-geneva-real-estate-market-update-balance-patience-and-a-few-nuances' },
  { old: '/uncategorized/lake-geneva-school-districts-complete-guide-for-families-moving-to-walworth-county', category: 'uncategorized', slug: 'lake-geneva-school-districts-complete-guide-for-families-moving-to-walworth-county' },
  { old: '/uncategorized/lake-geneva-real-estate-market-update-why-smart-pricing-wins-every-time', category: 'uncategorized', slug: 'lake-geneva-real-estate-market-update-why-smart-pricing-wins-every-time' },
  { old: '/uncategorized/lake-geneva-investment-properties-short-term-rental-vs-long-term-returns-analysis', category: 'uncategorized', slug: 'lake-geneva-investment-properties-short-term-rental-vs-long-term-returns-analysis' },
  { old: '/uncategorized/lake-geneva-luxury-home-staging-what-million-dollar-buyers-really-want', category: 'uncategorized', slug: 'lake-geneva-luxury-home-staging-what-million-dollar-buyers-really-want' },
  { old: '/uncategorized/2026-real-estate-market-report-for-lake-geneva-and-fontana-expected-real-estate-returns', category: 'uncategorized', slug: '2026-real-estate-market-report-for-lake-geneva-and-fontana-expected-real-estate-returns' },
  { old: '/uncategorized/7-most-popular-neighborhoods-on-lake-geneva', category: 'uncategorized', slug: '7-most-popular-neighborhoods-on-lake-geneva' },
  { old: '/uncategorized/the-ultimate-guide-to-halloween-in-lake-geneva-wi', category: 'uncategorized', slug: 'the-ultimate-guide-to-halloween-in-lake-geneva-wi' },
  { old: '/uncategorized/what-its-like-living-in-lake-geneva-wi-in-the-fall-fall-real-estate-trends', category: 'uncategorized', slug: 'what-its-like-living-in-lake-geneva-wi-in-the-fall-fall-real-estate-trends' },
  { old: '/uncategorized/5-counterintuitive-moves-to-flip-the-script-on-foreclosure-and-help-you-move-on-fast-with-dignity-and-without-losing-everything', category: 'uncategorized', slug: '5-counterintuitive-moves-to-flip-the-script-on-foreclosure-and-help-you-move-on-fast-with-dignity-and-without-losing-everything' },
  { old: '/uncategorized/lake-geneva-real-estate-why-its-still-a-sellers-market-but-not-without-a-twist', category: 'uncategorized', slug: 'lake-geneva-real-estate-why-its-still-a-sellers-market-but-not-without-a-twist' },
  { old: '/uncategorized/selling-your-home-in-williams-bay-how-to-guide', category: 'uncategorized', slug: 'selling-your-home-in-williams-bay-how-to-guide' },
  { old: '/uncategorized/its-a-sellers-market-again-but-with-a-twist', category: 'uncategorized', slug: 'its-a-sellers-market-again-but-with-a-twist' },
  { old: '/uncategorized/the-intelligent-approach-to-pricing-lakefront-homes-on-lake-geneva', category: 'uncategorized', slug: 'the-intelligent-approach-to-pricing-lakefront-homes-on-lake-geneva' },
  { old: '/uncategorized/lake-geneva-real-estate-update-what-buyers-sellers-need-to-know-right-now', category: 'uncategorized', slug: 'lake-geneva-real-estate-update-what-buyers-sellers-need-to-know-right-now' },
  { old: '/uncategorized/top-rated-schools-in-lake-geneva', category: 'uncategorized', slug: 'top-rated-schools-in-lake-geneva' },
  { old: '/uncategorized/boost-your-homes-value-with-these-5-smart-renovations-in-lake-geneva-wi', category: 'uncategorized', slug: 'boost-your-homes-value-with-these-5-smart-renovations-in-lake-geneva-wi' },
  { old: '/uncategorized/trumps-2025-housing-agenda-what-it-could-mean-for-buyers-and-sellers-in-lake-geneva-and-the-geneva-lakes-wi-area', category: 'uncategorized', slug: 'trumps-2025-housing-agenda-what-it-could-mean-for-buyers-and-sellers-in-lake-geneva-and-the-geneva-lakes-wi-area' },
  
  // Guide
  { old: '/guide/lake-geneva-real-estate-trends-shaping-the-2026-market-for-homeowners', category: 'guide', slug: 'lake-geneva-real-estate-trends-shaping-the-2026-market-for-homeowners' },
  { old: '/guide/parade-of-trees-and-winter-actives-in-lake-geneva-2025', category: 'guide', slug: 'parade-of-trees-and-winter-actives-in-lake-geneva-2025' },
  { old: '/guide/a-local-guide-to-lake-geneva-and-fontana-on-the-lake', category: 'guide', slug: 'a-local-guide-to-lake-geneva-and-fontana-on-the-lake' },
  
  // Areas
  { old: '/areas/lake-genevas-best-family-neighborhoods-in-2026-where-to-raise-kids-on-the-lake', category: 'areas', slug: 'lake-genevas-best-family-neighborhoods-in-2026-where-to-raise-kids-on-the-lake' },
  { old: '/areas/the-ultimate-guide-to-family-living-in-lake-geneva', category: 'areas', slug: 'the-ultimate-guide-to-family-living-in-lake-geneva' },
  { old: '/areas/lakegeneva', category: 'areas', slug: 'lakegeneva' },
  { old: '/areas/fontana', category: 'areas', slug: 'fontana' },
  { old: '/areas/delavan', category: 'areas', slug: 'delavan' },
  
  // News
  { old: '/news/the-worlds-tallest-glass-tree-returns-to-yerkes-observatory', category: 'news', slug: 'the-worlds-tallest-glass-tree-returns-to-yerkes-observatory' },
  { old: '/news/newly-built-mansion-on-bayview-drive-sells-for-8-million-in-just-11-days', category: 'news', slug: 'newly-built-mansion-on-bayview-drive-sells-for-8-million-in-just-11-days' },
  
  // Buyer
  { old: '/buyer/what-its-like-buying-a-home-in-fontana-wi', category: 'buyer', slug: 'what-its-like-buying-a-home-in-fontana-wi' },
  { old: '/buyer/the-official-elkhorn-wi-real-estate-guide', category: 'buyer', slug: 'the-official-elkhorn-wi-real-estate-guide' },
  { old: '/buyer/real-estate-guide-first-time-home-buyers-in-lake-geneva', category: 'buyer', slug: 'real-estate-guide-first-time-home-buyers-in-lake-geneva' },
  { old: '/buyer/real-estate-and-mortgage-guide-for-lake-geneva-wi', category: 'buyer', slug: 'real-estate-and-mortgage-guide-for-lake-geneva-wi' },
  { old: '/buyer/exploring-community-life-and-quality-living-in-salem-wi-for-2025', category: 'buyer', slug: 'exploring-community-life-and-quality-living-in-salem-wi-for-2025' },
  { old: '/buyer/locals-guide-to-elkhorn-wi-a-christmas-card-town', category: 'buyer', slug: 'locals-guide-to-elkhorn-wi-a-christmas-card-town' },
  { old: '/buyer/3-ways-to-build-wealth-through-refinancing-your-real-estate', category: 'buyer', slug: '3-ways-to-build-wealth-through-refinancing-your-real-estate' },
  
  // Seller
  { old: '/seller/2025-lake-geneva-real-estate-update-what-buyers-sellers-need-to-know-right-now', category: 'seller', slug: '2025-lake-geneva-real-estate-update-what-buyers-sellers-need-to-know-right-now' },
  { old: '/seller/do-home-sellers-have-loan-type-bias', category: 'seller', slug: 'do-home-sellers-have-loan-type-bias' },
  { old: '/seller/there-was-a-bubble-but-not-in-real-estate', category: 'seller', slug: 'there-was-a-bubble-but-not-in-real-estate' },
];

/**
 * Generate blog redirects array for Next.js config
 * Redirects /blog/{slug} URLs to /{category}/{slug}
 * Note: Old WordPress URLs like /{category}/{slug} are already in the correct format, so no redirect needed
 */
function getBlogRedirects() {
  const redirects = [];
  
  // Only redirect /blog/{slug} to /{category}/{slug}
  // Don't redirect category URLs to themselves (that causes redirect loops)
  blogRedirectMap.forEach(({ category, slug }) => {
    // Redirect /blog/{slug} to /{category}/{slug}
    redirects.push({
      source: `/blog/${slug}`,
      destination: `/${category}/${slug}`,
      permanent: true,
    });
    redirects.push({
      source: `/blog/${slug}/`,
      destination: `/${category}/${slug}`,
      permanent: true,
    });
  });
  
  return redirects;
}

module.exports = { getBlogRedirects };

