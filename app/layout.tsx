import type { Metadata } from 'next'
import { PT_Serif, Montserrat } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import { getBrandSettings, generateBrandCSSVariables } from '@/lib/brandSettings'

// PT Serif for headings (default)
const ptSerif = PT_Serif({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-serif',
  display: 'swap',
})

// Montserrat for body text (default)
const montserrat = Montserrat({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata(): Promise<Metadata> {
  const brandSettings = await getBrandSettings();
  
  const brandName = brandSettings?.coreIdentity?.brandName || 'Legendary Real Estate Services';
  const defaultMetaTitle = brandSettings?.seo?.defaultMetaTitle || `${brandName} - Your Lake Geneva WI Real Estate Team`;
  const defaultMetaDescription = brandSettings?.seo?.defaultMetaDescription || 'Boutique by Design. Legendary by Result. Your trusted real estate team in Lake Geneva, WI and the Geneva Lakes area.';
  
  return {
    title: defaultMetaTitle,
    description: defaultMetaDescription,
  keywords: 'real estate, Lake Geneva, Wisconsin, homes for sale, property listings, Legendary Real Estate Services',
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const brandSettings = await getBrandSettings();
  const brandCSS = generateBrandCSSVariables(brandSettings);
  
  // Get fonts from brand settings or use defaults
  const headingFont = brandSettings?.typography?.headingFont || 'PT Serif';
  const bodyFont = brandSettings?.typography?.bodyFont || 'Montserrat';
  
  return (
    <html lang="en" className={`${ptSerif.variable} ${montserrat.variable}`}>
      <body className={montserrat.className}>
        {brandCSS && (
          <style dangerouslySetInnerHTML={{ __html: brandCSS }} />
        )}
        <Script
          src="https://kestrel.idxhome.com/ihf-kestrel.js"
          strategy="beforeInteractive"
        />
        <Script
          id="ihf-kestrel-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.ihfKestrel = window.ihfKestrel || {};
              ihfKestrel.config = {
                platform: "custom",
                activationToken: "2d411d15-be99-4140-a73b-1dc1e448192a",
              };
            `,
          }}
        />
        <ScrollProgressBar />
        <ScrollAnimations />
        <Navbar brandSettings={brandSettings} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer brandSettings={brandSettings} />
      </body>
    </html>
  )
}
