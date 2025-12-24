import type { Metadata } from 'next'
import { PT_Serif, Montserrat } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'
import ScrollProgressBar from '@/components/ScrollProgressBar'

// PT Serif for headings
const ptSerif = PT_Serif({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-serif',
  display: 'swap',
})

// Montserrat for body text
const montserrat = Montserrat({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Legendary Real Estate Services - Your Lake Geneva WI Real Estate Team',
  description: 'Boutique by Design. Legendary by Result. Your trusted real estate team in Lake Geneva, WI and the Geneva Lakes area.',
  keywords: 'real estate, Lake Geneva, Wisconsin, homes for sale, property listings, Legendary Real Estate Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ptSerif.variable} ${montserrat.variable}`}>
      <body className={montserrat.className}>
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
                activationToken: "5bde82f9-6b1d-4223-b1a3-7b664e7c5a6e",
              };
            `,
          }}
        />
        <ScrollProgressBar />
        <ScrollAnimations />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
