'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import Image from 'next/image';
import type { BrandSettings } from '@/lib/brandSettings';
import { getLogoUrl } from '@/lib/brandSettings';

interface NavbarProps {
  brandSettings: BrandSettings | null;
}

const Navbar = ({ brandSettings }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  
  // Timeout refs for dropdown delays
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Get colors from brand settings or use defaults
  const primaryColor = brandSettings?.colors?.primary || '#890100';
  const brandName = brandSettings?.coreIdentity?.brandName || 'Legendary';
  
  // Navigation structure
  const navItems = [
    {
      label: 'Search',
      linkType: 'dropdown' as const,
      href: '/listings',
      children: [
        { label: 'Our Listings', href: '/our-listings' },
      ],
    },
    {
      label: "What's My Home Worth?",
      linkType: 'internal' as const,
      href: '/seller-value/',
    },
    {
      label: 'About Us',
      linkType: 'dropdown' as const,
      href: '/about',
      children: [
        { label: 'Agent Roster', href: '/agents' },
        { label: 'Lake Geneva Real Estate Blog', href: '/blog' },
        { label: 'Buyers', href: '/buying-a-house-wisconsin/' },
        { label: 'Sellers', href: '/selling-a-house-in-wisconsin/' },
        { label: 'How We Give Back', href: '/how-we-give-back/' },
      ],
    },
    {
      label: 'Contact Us',
      linkType: 'internal' as const,
      href: '/contact',
    },
  ];

  // Get CTA button from brand settings
  const ctaButton = brandSettings?.header?.ctaButton;
  
  // Get logo
  const primaryLogo = brandSettings?.logos?.primaryLogo;
  const logoUrl = primaryLogo ? getLogoUrl(primaryLogo) : null;

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-[9999]" style={{ borderBottomColor: `${primaryColor}20` }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo - From brand settings or text fallback */}
          <Link href="/" className="flex items-center z-10 group">
            {logoUrl ? (
              <Image 
                src={logoUrl} 
                alt={brandName} 
                width={200} 
                height={60}
                className="h-8 lg:h-10 w-auto"
              />
            ) : (
              <>
            <div className="relative">
              <span className="text-xl lg:text-2xl font-serif font-normal text-black tracking-[0.1em] uppercase">
                    {brandName}
              </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-500 group-hover:w-full" style={{ backgroundColor: primaryColor }}></div>
            </div>
                <span className="mx-2 font-serif text-xl" style={{ color: primaryColor }}>•</span>
            <span className="text-xs lg:text-sm font-serif font-light text-black/60 tracking-[0.2em] uppercase hidden sm:inline">
              Real Estate
            </span>
              </>
            )}
          </Link>

          {/* Right Side - Desktop Nav + Menu Button */}
          <div className="flex items-center gap-6 lg:gap-12">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                if (item.linkType === 'dropdown' && item.children) {
                  const isOpen = item.label === 'Search' ? isSearchOpen : isAboutOpen;
                  const setIsOpen = item.label === 'Search' ? setIsSearchOpen : setIsAboutOpen;
                  
                  return (
                    <div 
                      key={item.label} 
                      className="relative"
                      onMouseEnter={() => {
                        // Clear any pending timeout
                        const timeoutRef = item.label === 'Search' ? searchTimeoutRef : aboutTimeoutRef;
                        if (timeoutRef.current) {
                          clearTimeout(timeoutRef.current);
                          timeoutRef.current = null;
                        }
                        setIsOpen(true);
                      }}
                      onMouseLeave={() => {
                        // Add delay before closing
                        const timeoutRef = item.label === 'Search' ? searchTimeoutRef : aboutTimeoutRef;
                        timeoutRef.current = setTimeout(() => {
                          setIsOpen(false);
                          timeoutRef.current = null;
                        }, 500); // 500ms delay
                      }}
                    >
              <Link
                        href={item.href || '#'}
                        className="text-black/70 font-serif text-xs tracking-[0.15em] uppercase transition-colors duration-300 flex items-center gap-2 relative group"
                        style={{ fontWeight: 300, letterSpacing: '0.15em', color: isOpen ? primaryColor : undefined }}
                        onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.7)'}
                      >
                        {item.label}
                        <svg className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                        <span className="absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full" style={{ backgroundColor: primaryColor }}></span>
                      </Link>
                      {isOpen && (
                        <div 
                          className="absolute left-0 mt-2 w-64 bg-white border border-black/10 shadow-2xl p-4 z-[10000]"
                          onMouseEnter={() => {
                            // Clear any pending timeout when hovering over dropdown
                            const timeoutRef = item.label === 'Search' ? searchTimeoutRef : aboutTimeoutRef;
                            if (timeoutRef.current) {
                              clearTimeout(timeoutRef.current);
                              timeoutRef.current = null;
                            }
                            setIsOpen(true);
                          }}
                          onMouseLeave={() => {
                            // Add delay before closing
                            const timeoutRef = item.label === 'Search' ? searchTimeoutRef : aboutTimeoutRef;
                            timeoutRef.current = setTimeout(() => {
                              setIsOpen(false);
                              timeoutRef.current = null;
                            }, 500); // 500ms delay
                          }}
                        >
                    <div className="space-y-1">
                            {item.children.map((child) => (
                        <Link
                                key={child.label}
                                href={child.href || '#'}
                                className="block px-3 py-2 text-xs text-black/60 hover:text-black hover:bg-black/5 transition-all duration-300 font-serif tracking-[0.1em] uppercase"
                                onClick={() => setIsOpen(false)}
                        >
                                {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    href={item.href || '#'}
                    className="text-black/70 font-serif text-xs tracking-[0.15em] uppercase transition-colors duration-300 relative group"
                    style={{ fontWeight: 300, letterSpacing: '0.15em' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.7)'}
                  >
                    {item.label}
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full" style={{ backgroundColor: primaryColor }}></span>
                  </Link>
                );
              })}
            </div>
            
            {/* CTA Button from brand settings */}
            {ctaButton && (
              <Link
                href={ctaButton.href || '#'}
                className="hidden lg:inline-block border px-6 py-2 font-serif text-xs tracking-[0.1em] uppercase transition-all duration-300"
                style={{ 
                  borderColor: primaryColor,
                  color: primaryColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = primaryColor;
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = primaryColor;
                }}
              >
                {ctaButton.label}
              </Link>
            )}

            {/* Menu button - Elegant lines */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-black/70 z-[10000] relative transition-colors duration-300"
              style={{ color: isMenuOpen ? primaryColor : undefined }}
              onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.7)'}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="flex flex-col gap-1.5 w-5">
                <span className={`block h-[1px] bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-[1px] bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-[1px] bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hidden lg:flex items-center gap-2 text-black/70 font-serif text-xs tracking-[0.15em] uppercase transition-colors duration-300 relative group"
              style={{ color: isMenuOpen ? primaryColor : undefined }}
              onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.7)'}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span>Menu</span>
              <div className="flex flex-col gap-1 w-4">
                <span className={`block h-[1px] bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-[1px] bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-[1px] bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[9998] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Full Screen Menu - Elegant, Medieval Luxury */}
      <div
        className={`fixed top-0 right-0 h-screen w-full md:w-3/4 lg:w-2/3 bg-white z-[10000] transition-transform duration-700 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Decorative Border */}
        <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundColor: primaryColor }}></div>
        <div className="absolute bottom-0 left-0 w-full h-px" style={{ backgroundColor: primaryColor }}></div>
        <div className="absolute top-0 left-0 w-px h-full" style={{ backgroundColor: primaryColor }}></div>
        
        {/* Close Button - Always Visible */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 md:top-8 md:right-8 z-[10001] p-3 text-black/70 transition-all duration-300 group"
          style={{ color: primaryColor }}
          onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.7)'}
          aria-label="Close menu"
        >
          <div className="flex flex-col gap-1.5 w-6 items-center justify-center">
            <span className="block w-6 h-[1px] bg-current transition-all duration-300 rotate-45 translate-y-1"></span>
            <span className="block w-6 h-[1px] bg-current transition-all duration-300 -rotate-45 -translate-y-1"></span>
          </div>
        </button>
        
        <div className="h-full overflow-y-auto">
          <div className="max-w-7xl mx-auto h-full py-16 px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full">
              
              {/* Left Side - Navigation */}
              <div className="flex flex-col justify-center space-y-8">
                <h2 className="text-xs uppercase tracking-[0.3em] mb-4 font-serif font-normal" style={{ color: primaryColor }}>Navigation</h2>
                
                <Link
                  href="/"
                  className="text-3xl md:text-4xl font-serif font-normal text-black transition-all duration-500 tracking-[0.05em] relative group"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ letterSpacing: '0.05em' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#000'}
                >
                  Home
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-500 group-hover:w-full" style={{ backgroundColor: primaryColor }}></span>
                </Link>

                {/* Navigation Items */}
                {navItems.map((item) => {
                  if (item.linkType === 'dropdown' && item.children) {
                    const isOpen = item.label === 'Search' ? isMobileSearchOpen : isMobileAboutOpen;
                    const setIsOpen = item.label === 'Search' ? setIsMobileSearchOpen : setIsMobileAboutOpen;
                    
                    return (
                      <div key={item.label} className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Link
                            href={item.href || '#'}
                            className="text-3xl md:text-4xl font-serif font-normal text-black transition-all duration-500 tracking-[0.05em] relative group w-fit"
                            onClick={() => setIsMenuOpen(false)}
                            style={{ letterSpacing: '0.05em' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#000'}
                          >
                            {item.label}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-500 group-hover:w-full" style={{ backgroundColor: primaryColor }}></span>
                          </Link>
                  <button
                    type="button"
                            className="text-3xl md:text-4xl font-serif font-normal text-black transition-all duration-500 tracking-[0.05em] flex items-center gap-3 relative group"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            style={{ letterSpacing: '0.05em', color: isOpen ? primaryColor : undefined }}
                            onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                            onMouseLeave={(e) => e.currentTarget.style.color = isOpen ? primaryColor : '#000'}
                          >
                            <svg className={`w-5 h-5 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                        </div>
                        {isOpen && (
                          <div className="pl-6 space-y-3 border-l" style={{ borderColor: `${primaryColor}33` }}>
                            {item.children.map((child) => (
                        <Link
                                key={child.label}
                                href={child.href || '#'}
                                className="block text-lg md:text-xl font-serif font-light text-black/60 transition-all duration-500 relative group w-fit"
                          onClick={() => setIsMenuOpen(false)}
                                onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.6)'}
                        >
                                {child.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-500 group-hover:w-full" style={{ backgroundColor: primaryColor }}></span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                    );
                  }
                  return (
                <Link
                      key={item.label}
                      href={item.href || '#'}
                      className="text-3xl md:text-4xl font-serif font-normal text-black transition-all duration-500 tracking-[0.05em] relative group w-fit"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ letterSpacing: '0.05em' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#000'}
                >
                      {item.label}
                      <span className="absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-500 group-hover:w-full" style={{ backgroundColor: primaryColor }}></span>
                </Link>
                  );
                })}

                {/* Legal Section */}
                <div className="pt-8 pb-8 border-t border-black/10 mt-8">
                  <div className="text-xs uppercase tracking-[0.3em] text-black/40 mb-4 font-serif">Legal</div>
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    <Link
                      href="/privacy-policy"
                      className="text-xs font-serif font-light text-black/60 transition-colors duration-300 tracking-[0.1em] uppercase"
                      onClick={() => setIsMenuOpen(false)}
                      onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.6)'}
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/accessibility"
                      className="text-xs font-serif font-light text-black/60 transition-colors duration-300 tracking-[0.1em] uppercase"
                      onClick={() => setIsMenuOpen(false)}
                      onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.6)'}
                    >
                      Accessibility
                    </Link>
                    <Link
                      href="/terms-and-conditions"
                      className="text-xs font-serif font-light text-black/60 transition-colors duration-300 tracking-[0.1em] uppercase"
                      onClick={() => setIsMenuOpen(false)}
                      onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.6)'}
                    >
                      Terms & Conditions
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Information */}
              <div className="flex flex-col justify-center space-y-12 lg:border-l lg:pl-16" style={{ borderColor: `${primaryColor}33` }}>
                <div>
                  <h2 className="text-xs uppercase tracking-[0.3em] mb-8 font-serif font-normal" style={{ color: primaryColor }}>Get In Touch</h2>
                  
                  <div className="space-y-8">
                    {/* Phone */}
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3 font-serif">Phone</div>
                      <a 
                        href="tel:2622045534" 
                        className="text-2xl md:text-3xl font-serif font-normal text-black transition-colors duration-300 tracking-[0.05em]"
                        style={{ letterSpacing: '0.05em' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#000'}
                      >
                        262-204-5534
                      </a>
                    </div>

                    {/* Office */}
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3 font-serif">Office</div>
                      <address className="text-base md:text-lg font-serif font-light text-black/70 not-italic leading-relaxed">
                        487 W South St<br />
                        Lake Geneva, WI 53147
                      </address>
                    </div>

                    {/* CTA Button - Elegant */}
                    <div className="pt-4">
                      <Link
                        href="/contact"
                        className="inline-block border px-8 py-3 font-serif text-xs tracking-[0.2em] uppercase transition-all duration-500"
                        style={{ 
                          borderColor: primaryColor,
                          color: primaryColor,
                        }}
                        onClick={() => setIsMenuOpen(false)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = primaryColor;
                          e.currentTarget.style.color = '#fff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = primaryColor;
                        }}
                      >
                        Schedule Consultation
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-black/10">
                  <div className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4 font-serif">Follow</div>
                  <div className="flex space-x-6">
                    <a 
                      href="https://www.facebook.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/60 transition-colors duration-300"
                      aria-label="Visit Legendary Real Estate Services on Facebook"
                      onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.6)'}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.youtube.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/60 transition-colors duration-300"
                      aria-label="Visit Legendary Real Estate Services on YouTube"
                      onMouseEnter={(e) => e.currentTarget.style.color = primaryColor}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0, 0, 0, 0.6)'}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
