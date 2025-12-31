/**
 * Blog redirects from old WordPress URLs to new /blog/{slug} format
 * Generated from sitemap: https://legendaryrealestateservices.com/post-sitemap.xml
 */

// Map of old paths to new blog slugs
const blogRedirectMap = [
  // Uncategorized
  { old: '/uncategorized/2025-lake-geneva-real-estate-a-year-of-plot-twists-price-psychology-and-wait-did-we-have-a-bidding-war-in-november', new: '2025-lake-geneva-real-estate-a-year-of-plot-twists-price-psychology-and-wait-did-we-have-a-bidding-war-in-november' },
  { old: '/uncategorized/exploring-lake-geneva-waterfront-wonders-2026', new: 'exploring-lake-geneva-waterfront-wonders-2026' },
  { old: '/uncategorized/q4-2025-lake-geneva-real-estate-market-update', new: 'q4-2025-lake-geneva-real-estate-market-update' },
  { old: '/uncategorized/the-calm-the-curveball-and-the-comeback-lake-genevas-fall-market-in-focus', new: 'the-calm-the-curveball-and-the-comeback-lake-genevas-fall-market-in-focus' },
  { old: '/uncategorized/%f0%9f%95%b0%ef%b8%8f-12-months-out-the-smart-buyers-playbook-for-lake-genevas-market', new: '12-months-out-the-smart-buyers-playbook-for-lake-genevas-market' },
  { old: '/uncategorized/lake-geneva-real-estate-market-update-balance-patience-and-a-few-nuances', new: 'lake-geneva-real-estate-market-update-balance-patience-and-a-few-nuances' },
  { old: '/uncategorized/lake-geneva-school-districts-complete-guide-for-families-moving-to-walworth-county', new: 'lake-geneva-school-districts-complete-guide-for-families-moving-to-walworth-county' },
  { old: '/uncategorized/lake-geneva-real-estate-market-update-why-smart-pricing-wins-every-time', new: 'lake-geneva-real-estate-market-update-why-smart-pricing-wins-every-time' },
  { old: '/uncategorized/lake-geneva-investment-properties-short-term-rental-vs-long-term-returns-analysis', new: 'lake-geneva-investment-properties-short-term-rental-vs-long-term-returns-analysis' },
  { old: '/uncategorized/lake-geneva-luxury-home-staging-what-million-dollar-buyers-really-want', new: 'lake-geneva-luxury-home-staging-what-million-dollar-buyers-really-want' },
  { old: '/uncategorized/2026-real-estate-market-report-for-lake-geneva-and-fontana-expected-real-estate-returns', new: '2026-real-estate-market-report-for-lake-geneva-and-fontana-expected-real-estate-returns' },
  { old: '/uncategorized/7-most-popular-neighborhoods-on-lake-geneva', new: '7-most-popular-neighborhoods-on-lake-geneva' },
  { old: '/uncategorized/the-ultimate-guide-to-halloween-in-lake-geneva-wi', new: 'the-ultimate-guide-to-halloween-in-lake-geneva-wi' },
  { old: '/uncategorized/what-its-like-living-in-lake-geneva-wi-in-the-fall-fall-real-estate-trends', new: 'what-its-like-living-in-lake-geneva-wi-in-the-fall-fall-real-estate-trends' },
  { old: '/uncategorized/5-counterintuitive-moves-to-flip-the-script-on-foreclosure-and-help-you-move-on-fast-with-dignity-and-without-losing-everything', new: '5-counterintuitive-moves-to-flip-the-script-on-foreclosure-and-help-you-move-on-fast-with-dignity-and-without-losing-everything' },
  { old: '/uncategorized/lake-geneva-real-estate-why-its-still-a-sellers-market-but-not-without-a-twist', new: 'lake-geneva-real-estate-why-its-still-a-sellers-market-but-not-without-a-twist' },
  { old: '/uncategorized/selling-your-home-in-williams-bay-how-to-guide', new: 'selling-your-home-in-williams-bay-how-to-guide' },
  { old: '/uncategorized/its-a-sellers-market-again-but-with-a-twist', new: 'its-a-sellers-market-again-but-with-a-twist' },
  { old: '/uncategorized/the-intelligent-approach-to-pricing-lakefront-homes-on-lake-geneva', new: 'the-intelligent-approach-to-pricing-lakefront-homes-on-lake-geneva' },
  { old: '/uncategorized/lake-geneva-real-estate-update-what-buyers-sellers-need-to-know-right-now', new: 'lake-geneva-real-estate-update-what-buyers-sellers-need-to-know-right-now' },
  { old: '/uncategorized/top-rated-schools-in-lake-geneva', new: 'top-rated-schools-in-lake-geneva' },
  { old: '/uncategorized/boost-your-homes-value-with-these-5-smart-renovations-in-lake-geneva-wi', new: 'boost-your-homes-value-with-these-5-smart-renovations-in-lake-geneva-wi' },
  { old: '/uncategorized/trumps-2025-housing-agenda-what-it-could-mean-for-buyers-and-sellers-in-lake-geneva-and-the-geneva-lakes-wi-area', new: 'trumps-2025-housing-agenda-what-it-could-mean-for-buyers-and-sellers-in-lake-geneva-and-the-geneva-lakes-wi-area' },
  
  // Guide
  { old: '/guide/lake-geneva-real-estate-trends-shaping-the-2026-market-for-homeowners', new: 'lake-geneva-real-estate-trends-shaping-the-2026-market-for-homeowners' },
  { old: '/guide/parade-of-trees-and-winter-actives-in-lake-geneva-2025', new: 'parade-of-trees-and-winter-actives-in-lake-geneva-2025' },
  { old: '/guide/a-local-guide-to-lake-geneva-and-fontana-on-the-lake', new: 'a-local-guide-to-lake-geneva-and-fontana-on-the-lake' },
  
  // Areas
  { old: '/areas/lake-genevas-best-family-neighborhoods-in-2026-where-to-raise-kids-on-the-lake', new: 'lake-genevas-best-family-neighborhoods-in-2026-where-to-raise-kids-on-the-lake' },
  { old: '/areas/the-ultimate-guide-to-family-living-in-lake-geneva', new: 'the-ultimate-guide-to-family-living-in-lake-geneva' },
  { old: '/areas/lakegeneva', new: 'lakegeneva' },
  { old: '/areas/fontana', new: 'fontana' },
  { old: '/areas/delavan', new: 'delavan' },
  
  // News
  { old: '/news/the-worlds-tallest-glass-tree-returns-to-yerkes-observatory', new: 'the-worlds-tallest-glass-tree-returns-to-yerkes-observatory' },
  { old: '/news/newly-built-mansion-on-bayview-drive-sells-for-8-million-in-just-11-days', new: 'newly-built-mansion-on-bayview-drive-sells-for-8-million-in-just-11-days' },
  
  // Buyer
  { old: '/buyer/what-its-like-buying-a-home-in-fontana-wi', new: 'what-its-like-buying-a-home-in-fontana-wi' },
  { old: '/buyer/the-official-elkhorn-wi-real-estate-guide', new: 'the-official-elkhorn-wi-real-estate-guide' },
  { old: '/buyer/real-estate-guide-first-time-home-buyers-in-lake-geneva', new: 'real-estate-guide-first-time-home-buyers-in-lake-geneva' },
  { old: '/buyer/real-estate-and-mortgage-guide-for-lake-geneva-wi', new: 'real-estate-and-mortgage-guide-for-lake-geneva-wi' },
  { old: '/buyer/exploring-community-life-and-quality-living-in-salem-wi-for-2025', new: 'exploring-community-life-and-quality-living-in-salem-wi-for-2025' },
  { old: '/buyer/locals-guide-to-elkhorn-wi-a-christmas-card-town', new: 'locals-guide-to-elkhorn-wi-a-christmas-card-town' },
  { old: '/buyer/3-ways-to-build-wealth-through-refinancing-your-real-estate', new: '3-ways-to-build-wealth-through-refinancing-your-real-estate' },
  
  // Seller
  { old: '/seller/2025-lake-geneva-real-estate-update-what-buyers-sellers-need-to-know-right-now', new: '2025-lake-geneva-real-estate-update-what-buyers-sellers-need-to-know-right-now' },
  { old: '/seller/do-home-sellers-have-loan-type-bias', new: 'do-home-sellers-have-loan-type-bias' },
  { old: '/seller/there-was-a-bubble-but-not-in-real-estate', new: 'there-was-a-bubble-but-not-in-real-estate' },
];

/**
 * Generate blog redirects array for Next.js config
 */
function getBlogRedirects() {
  return blogRedirectMap.flatMap(({ old, new: newSlug }) => [
    {
      source: old,
      destination: `/blog/${newSlug}`,
      permanent: true,
    },
    {
      source: `${old}/`,
      destination: `/blog/${newSlug}`,
      permanent: true,
    },
  ]);
}

module.exports = { getBlogRedirects };

