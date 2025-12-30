'use client';

import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [isAreasExpanded, setIsAreasExpanded] = useState(false);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  // Main areas (without property type qualifiers)
  const mainAreas = [
    'Abbey Springs WI',
    'Burlington WI',
    'Cedar Point Park WI',
    'Country Club Estates WI',
    'Delavan WI',
    'East Troy WI',
    'Elkhorn WI',
    'Fontana WI',
    'Geneva National WI',
    'Genoa City WI',
    'Lake Geneva WI',
    'Lyons WI',
    'North Shore Estates WI',
    'Powers Lake WI',
    'Powers WI',
    'Salem WI',
    'Silver Lake WI',
    'Twin Lakes WI',
    'Walworth WI',
    'Whitewater WI',
    'Williams Bay WI',
    'Lake Geneva WI Condos',
    'Lake Geneva WI Waterfront',
    'Lake Geneva WI Waterfront Condos',
  ];

  // Property-specific areas
  const propertyAreas = [
    'Waterfront for Sale in Burlington, WI',
    'Townhomes for Sale in Burlington, WI',
    'Duplexes for Sale in Burlington, WI',
    'Condos for Sale in Burlington, WI',
    'Townhomes for Sale in Elkhorn WI',
    'Duplexes for Sale in Elkhorn WI',
    'Waterfront Properties for Sale in Elkhorn WI',
    'Condos for Sale in Elkhorn WI',
    'Condos for Sale in Geneva National, WI',
    'Townhomes for Sale in Geneva National, WI',
    'Waterfront Properties for Sale in Geneva National, WI',
    'Duplexes for Sale in Geneva National, WI',
    'Condos for Sale in Salem, WI',
    'Waterfront Properties for Sale in Salem, WI',
    'Duplexes for Sale in Salem, WI',
    'Townhomes for Sale in Salem, WI',
    'Homes for Sale in Geneva National, WI',
    'Townhomes for sale in Walworth, WI',
    'Duplexes for sale in Walworth, WI',
    'Waterfront properties for sale in Walworth, WI',
    'Condos for sale in Walworth, WI',
    'Homes for sale in Walworth, WI',
    'Townhomes for Sale in Twin Lakes, WI',
    'Duplexes for Sale in Twin Lakes, WI',
    'Waterfront Properties for Sale in Twin Lakes, WI',
    'Condos for Sale in Twin Lakes, WI',
    'Homes for Sale in Twin Lakes, WI',
    'Townhomes for Sale in Genoa City, WI',
    'Condos for Sale in Genoa City, WI',
    'Homes for Sale in Genoa City, WI',
    'Waterfront Properties for Sale in Genoa City, WI',
    'Duplexes for Sale in Genoa City, WI',
    'Condos for sale in Williams Bay, WI',
    'Townhomes for sale in Williams Bay, WI',
    'Duplexes for sale in Williams Bay, WI',
    'Waterfront properties for sale in Williams Bay, WI',
    'Homes for sale in Williams Bay, WI',
  ];

  // Helper function to generate slug from area name
  const getAreaSlug = (area: string) => {
    return area.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  };

  const allAreas = [...mainAreas, ...propertyAreas];
  const initialCount = 12;
  const displayedAreas = isAreasExpanded ? allAreas : mainAreas.slice(0, initialCount);

  return (
    <footer className="bg-black text-white border-t border-[#890100]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Explore Areas Section */}
        <div className="border-b border-white/10 py-12">
          <h3 className="text-sm font-serif font-normal text-white/80 mb-8 tracking-[0.15em] uppercase text-center" style={{ letterSpacing: '0.15em' }}>
            Explore the Areas We Proudly Represent
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-6">
            {displayedAreas.map((area, index) => (
              <Link
                key={index}
                href={`/${getAreaSlug(area)}`}
                className="text-white/50 hover:text-white/80 transition-colors duration-300 font-serif text-xs tracking-[0.05em] uppercase relative group py-1"
                style={{ letterSpacing: '0.05em' }}
              >
                {area}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[0.5px] bg-white/20 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          {allAreas.length > initialCount && (
            <div className="text-center">
              <button
                onClick={() => setIsAreasExpanded(!isAreasExpanded)}
                className="text-white/40 hover:text-white/60 transition-colors duration-300 font-serif text-xs tracking-[0.1em] uppercase relative group"
                style={{ letterSpacing: '0.1em' }}
              >
                {isAreasExpanded ? 'Show Less' : `Show All ${allAreas.length} Areas`}
                <span className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-white/20 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
          )}
        </div>

        {/* Main Footer Content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-8 group">
              <div className="flex items-center gap-2">
                <span className="text-xl font-serif font-normal text-white tracking-[0.1em] uppercase">Legendary</span>
                <span className="text-[#890100] font-serif text-xl">•</span>
              </div>
              <div className="w-0 h-px bg-[#890100] transition-all duration-500 group-hover:w-full mt-2"></div>
            </Link>
            <p className="text-white/60 text-xs leading-relaxed mb-8 font-serif" style={{ letterSpacing: '0.02em' }}>
              Boutique by Design. Legendary by Result. Your trusted real estate team in Lake Geneva, WI and the Geneva Lakes area.
            </p>
            <div className="text-xs text-white/50 font-serif space-y-1">
              <div>487 W South St</div>
              <div>Lake Geneva, WI 53147</div>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-xs font-serif font-normal text-[#890100] uppercase tracking-[0.2em] mb-8">Navigate</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-white/60 hover:text-[#890100] transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#890100] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-[#890100] transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#890100] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/listings" className="text-white/60 hover:text-[#890100] transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group">
                  Properties
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#890100] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-[#890100] transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#890100] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/60 hover:text-[#890100] transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group">
                  Blog
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#890100] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-serif font-normal text-[#890100] uppercase tracking-[0.2em] mb-8">Resources</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/market-reports" className="text-white/60 hover:text-[#890100] transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group">
                  Market Reports
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#890100] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/buyers" className="text-white/60 hover:text-[#890100] transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group">
                  Buyer's Guide
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#890100] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/sellers" className="text-white/60 hover:text-[#890100] transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group">
                  Seller's Guide
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#890100] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-white/60 hover:text-[#890100] transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group">
                  Testimonials
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#890100] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h4 className="text-xs font-serif font-normal text-[#890100] uppercase tracking-[0.2em] mb-8">Communities</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/communities/lake-geneva" className="text-white/60 hover:text-[#890100] transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group">
                  Lake Geneva
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#890100] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/communities/fontana" className="text-white/60 hover:text-[#890100] transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group">
                  Fontana
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#890100] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/communities/salem" className="text-white/60 hover:text-[#890100] transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group">
                  Salem
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#890100] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/communities/burlington" className="text-white/60 hover:text-[#890100] transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group">
                  Burlington
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#890100] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/communities/elkhorn" className="text-white/60 hover:text-[#890100] transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group">
                  Elkhorn
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#890100] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/communities/delavan" className="text-white/60 hover:text-[#890100] transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group">
                  Delavan
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#890100] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-serif font-normal text-[#890100] uppercase tracking-[0.2em] mb-8">Contact</h4>
            <div className="space-y-6 text-xs text-white/60 font-serif mb-8">
              <div>
                <span className="text-white/40 uppercase tracking-[0.2em] text-[10px] block mb-2">Phone</span>
                <a href="tel:2622045534" className="text-white/80 hover:text-[#890100] transition-colors duration-300">
                  262-204-5534
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-xs font-serif font-normal text-[#890100] uppercase tracking-[0.2em] mb-4">Follow</h5>
              <div className="flex space-x-4">
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit Legendary Real Estate Services on Facebook"
                  className="w-8 h-8 border border-white/20 hover:border-[#890100] text-white/60 hover:text-[#890100] flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a 
                  href="https://www.youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit Legendary Real Estate Services on YouTube"
                  className="w-8 h-8 border border-white/20 hover:border-[#890100] text-white/60 hover:text-[#890100] flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Accordions */}
        <div className="border-t border-white/10 py-12">
          <h4 className="text-xs font-serif font-normal text-[#890100] uppercase tracking-[0.2em] mb-8">Legal & Compliance</h4>
          <div className="space-y-3">
            {/* MLS Disclaimer Accordion */}
            <div className="border border-white/10 bg-black/50 overflow-hidden">
              <button
                onClick={() => toggleAccordion('mls')}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors duration-300"
              >
                <span className="text-xs font-serif font-normal text-white/80 uppercase tracking-[0.15em]">
                  MLS Disclaimer & Notification
                </span>
                <svg
                  className={`w-4 h-4 text-[#890100] transition-transform duration-300 ${
                    openAccordion === 'mls' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openAccordion === 'mls' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-4 pt-0 text-xs text-white/50 leading-relaxed space-y-3 font-serif">
                  <p>
                    Metro MLS – Milwaukee Data provided by Metro MLS. All information deemed reliable but not guaranteed. All properties are subject to prior sale, change or withdrawal. Neither listing broker(s) or information provider(s) shall be responsible for any typographical errors, misinformation, misprints and shall be held totally harmless. IDX information is provided exclusively for consumers personal, non-commercial use and that it may not be used for any purpose other than to identify prospective properties.
                  </p>
                  <p>
                    REALTORS® Wisconsin Real Estate Exchange (WIREX). All information deemed reliable but not guaranteed. Information is supplied by seller and other third parties and has not been verified. All properties are subject to prior sale, change or withdrawal. Neither listing broker(s), nor Legendary Real Estate Services, nor WIREX MLS shall be responsible for any typographical errors, misinformation, misprints and shall be held totally harmless. Listing(s) information is provided for consumer's personal, non-commercial use and may not be used for any purpose other than to identify prospective properties.
                  </p>
                </div>
              </div>
            </div>

            {/* Fair Housing Accordion */}
            <div className="border border-white/10 bg-black/50 overflow-hidden">
              <button
                onClick={() => toggleAccordion('fairhousing')}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors duration-300"
              >
                <span className="text-xs font-serif font-normal text-white/80 uppercase tracking-[0.15em]">
                  Fair Housing & Equal Opportunity
                </span>
                <svg
                  className={`w-4 h-4 text-[#890100] transition-transform duration-300 ${
                    openAccordion === 'fairhousing' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openAccordion === 'fairhousing' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-4 pt-0 text-xs text-white/50 leading-relaxed space-y-3 font-serif">
                  <p>
                    We are pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity throughout the Nation. We encourage and support an affirmative advertising and marketing program in which there are no barriers to obtaining housing because of race, color, religion, sex, handicap, familial status, or national origin.
                  </p>
                  <p>
                    This real estate is offered without regard to race, color, religion, sex, handicap, familial status, or national origin. We are committed to providing an accessible website and mobile application. If you have difficulty accessing content, have difficulty viewing a file on the website, or notice any accessibility problems, please contact us to specify the nature of the accessibility issue and any assistive technology you use.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Licensing Accordion */}
            <div className="border border-white/10 bg-black/50 overflow-hidden">
              <button
                onClick={() => toggleAccordion('licensing')}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors duration-300"
              >
                <span className="text-xs font-serif font-normal text-white/80 uppercase tracking-[0.15em]">
                  Professional Licensing & Realtor Information
                </span>
                <svg
                  className={`w-4 h-4 text-[#890100] transition-transform duration-300 ${
                    openAccordion === 'licensing' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openAccordion === 'licensing' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-4 pt-0 text-xs text-white/50 leading-relaxed space-y-3 font-serif">
                  <p className="font-normal text-white">Legendary Real Estate Services</p>
                  <p>
                    487 W South St<br />
                    Lake Geneva, WI 53147
                  </p>
                  <p>
                    REALTOR® is a registered trademark of the National Association of REALTORS® and identifies real estate professionals who are members of the National Association of REALTORS® and subscribe to its strict Code of Ethics.
                  </p>
                  <p>
                    All information provided is deemed reliable but is not guaranteed and should be independently verified.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/50 text-xs font-serif tracking-[0.05em]">
              © {currentYear} Legendary Real Estate Services. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs">
              <Link href="/privacy-policy" className="text-white/50 hover:text-[#890100] transition-colors duration-300 font-serif tracking-[0.1em] uppercase">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="text-white/50 hover:text-[#890100] transition-colors duration-300 font-serif tracking-[0.1em] uppercase">
                Terms & Conditions
              </Link>
              <Link href="/accessibility" className="text-white/50 hover:text-[#890100] transition-colors duration-300 font-serif tracking-[0.1em] uppercase">
                Accessibility
              </Link>
              <a href="https://dmrmedia.org" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#890100] transition-colors duration-300 font-serif tracking-[0.1em] uppercase">
                Development & SEO Managed by DMR Media
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
