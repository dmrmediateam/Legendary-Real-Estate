'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import type { BrandSettings } from '@/lib/brandSettings';
import { getLogoUrl } from '@/lib/brandSettings';

interface FooterProps {
  brandSettings: BrandSettings | null;
}

const Footer = ({ brandSettings }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [isAreasExpanded, setIsAreasExpanded] = useState(false);

  // Get brand values from settings
  const primaryColor = brandSettings?.colors?.primary || '#890100';
  const brandName = brandSettings?.coreIdentity?.brandName || 'Legendary Real Estate Services';
  const tagline = brandSettings?.coreIdentity?.tagline || 'Boutique by Design. Legendary by Result.';
  
  // Get footer content from settings
  const footerColumns = brandSettings?.footer?.columns || [];
  const footerAddress = brandSettings?.footer?.address || '487 W South St\nLake Geneva, WI 53147';
  const footerPhone = brandSettings?.footer?.phone || '262-204-5534';
  const footerEmail = brandSettings?.footer?.email;
  const footerBusinessHours = brandSettings?.footer?.businessHours;
  const socialLinks = brandSettings?.footer?.socialLinks || [];
  const legalLinks = brandSettings?.footer?.legalLinks || [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Accessibility', href: '/accessibility' },
  ];
  
  // Get logo
  const primaryLogo = brandSettings?.logos?.primaryLogo;
  const logoUrl = primaryLogo ? getLogoUrl(primaryLogo) : null;

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
    <footer className="bg-black text-white border-t" style={{ borderTopColor: primaryColor }}>
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
              {logoUrl ? (
                <Image 
                  src={logoUrl} 
                  alt={brandName} 
                  width={200} 
                  height={60}
                  className="h-8 lg:h-10 w-auto mb-2"
                />
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-serif font-normal text-white tracking-[0.1em] uppercase">{brandName.split(' ')[0]}</span>
                    <span className="font-serif text-xl" style={{ color: primaryColor }}>•</span>
                  </div>
                  <div className="w-0 h-px transition-all duration-500 group-hover:w-full mt-2" style={{ backgroundColor: primaryColor }}></div>
                </>
              )}
            </Link>
            <p className="text-white/60 text-xs leading-relaxed mb-8 font-serif" style={{ letterSpacing: '0.02em' }}>
              {tagline}
            </p>
            <div className="text-xs text-white/50 font-serif space-y-1 whitespace-pre-line">
              {footerAddress.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>

          {/* Footer Columns from Brand Settings */}
          {footerColumns.length > 0 ? (
            footerColumns.map((column, colIndex) => (
              <div key={colIndex}>
                <h4 className="text-xs font-serif font-normal uppercase tracking-[0.2em] mb-8" style={{ color: primaryColor }}>
                  {column.title}
                </h4>
                <ul className="space-y-4">
                  {column.links?.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href || '#'} 
                        className="text-white/60 transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group"
                        onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                      >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ backgroundColor: primaryColor }}></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <>
              {/* Default Navigate Column */}
              <div>
                <h4 className="text-xs font-serif font-normal uppercase tracking-[0.2em] mb-8" style={{ color: primaryColor }}>Navigate</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/" className="text-white/60 transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group"
                      onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                    >
                      Home
                      <span className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ backgroundColor: primaryColor }}></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-white/60 transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group"
                      onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                    >
                      About
                      <span className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ backgroundColor: primaryColor }}></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/listings" className="text-white/60 transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group"
                      onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                    >
                      Properties
                      <span className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ backgroundColor: primaryColor }}></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-white/60 transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group"
                      onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                    >
                      Contact
                      <span className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ backgroundColor: primaryColor }}></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-white/60 transition-colors duration-300 text-xs font-serif tracking-[0.1em] uppercase relative group"
                      onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                    >
                      Blog
                      <span className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ backgroundColor: primaryColor }}></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}

          {/* Contact */}
          <div>
            <h4 className="text-xs font-serif font-normal uppercase tracking-[0.2em] mb-8" style={{ color: primaryColor }}>Contact</h4>
            <div className="space-y-6 text-xs text-white/60 font-serif mb-8">
              {footerPhone && (
                <div>
                  <span className="text-white/40 uppercase tracking-[0.2em] text-[10px] block mb-2">Phone</span>
                  <a 
                    href={`tel:${footerPhone.replace(/\D/g, '')}`} 
                    className="text-white/80 transition-colors duration-300"
                    onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    {footerPhone}
                  </a>
                </div>
              )}
              {footerEmail && (
                <div>
                  <span className="text-white/40 uppercase tracking-[0.2em] text-[10px] block mb-2">Email</span>
                  <a 
                    href={`mailto:${footerEmail}`} 
                    className="text-white/80 transition-colors duration-300"
                    onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                  >
                    {footerEmail}
                  </a>
                </div>
              )}
              {footerBusinessHours && (
                <div>
                  <span className="text-white/40 uppercase tracking-[0.2em] text-[10px] block mb-2">Hours</span>
                  <div className="text-white/80 whitespace-pre-line">{footerBusinessHours}</div>
                </div>
              )}
            </div>
            {socialLinks.length > 0 && (
              <div>
                <h5 className="text-xs font-serif font-normal uppercase tracking-[0.2em] mb-4" style={{ color: primaryColor }}>Follow</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const getIcon = (platform: string) => {
                      switch (platform?.toLowerCase()) {
                        case 'facebook':
                          return (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          );
                        case 'youtube':
                          return (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                          );
                        case 'instagram':
                          return (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          );
                        case 'linkedin':
                          return (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          );
                        case 'twitter':
                          return (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                          );
                        default:
                          return null;
                      }
                    };
                    
                    return (
                      <a
                        key={index}
                        href={social.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${brandName} on ${social.platform}`}
                        className="w-8 h-8 border border-white/20 text-white/60 flex items-center justify-center transition-all duration-300"
                        style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = primaryColor;
                          e.currentTarget.style.color = primaryColor;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                        }}
                      >
                        {getIcon(social.platform || '')}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Legal & Compliance Accordions */}
        <div className="border-t border-white/10 py-12">
          <h4 className="text-xs font-serif font-normal uppercase tracking-[0.2em] mb-8" style={{ color: primaryColor }}>Legal & Compliance</h4>
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
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openAccordion === 'mls' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  style={{ color: primaryColor }}
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
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openAccordion === 'fairhousing' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  style={{ color: primaryColor }}
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
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openAccordion === 'licensing' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  style={{ color: primaryColor }}
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
              © {currentYear} {brandName}. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs">
              {legalLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href || '#'} 
                  className="text-white/50 transition-colors duration-300 font-serif tracking-[0.1em] uppercase"
                  onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href="https://dmrmedia.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/50 transition-colors duration-300 font-serif tracking-[0.1em] uppercase"
                onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}
              >
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
