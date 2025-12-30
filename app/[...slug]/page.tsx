import { notFound } from 'next/navigation';

// Catch-all route for undefined routes
// Agent redirects are now handled in next.config.js as hardcoded redirects
export default async function SlugRedirect({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  // Await params in Next.js 15
  const { slug } = await params;
  
  // Return 404 for any unmatched routes
  notFound();
}

