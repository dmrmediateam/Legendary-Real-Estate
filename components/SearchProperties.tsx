'use client';

import { useEffect, useRef, useState } from 'react';

const SearchProperties = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    try {
      // Check if ihfKestrel is available
      if (typeof window !== 'undefined' && (window as any).ihfKestrel) {
        const ihfKestrel = (window as any).ihfKestrel;
        
        // Create a script element to replace
        const script = document.createElement('script');
        script.textContent = `
          try {
            if (window.ihfKestrel && window.ihfKestrel.render) {
              const widget = window.ihfKestrel.render({
                "component": "propertiesGalleryWidget",
                "cityId": 22626,
                "propertyTypes": "SFR",
                "status": "active",
                "sort": "pd",
                "resultsPerPage": 10
              });
              if (widget) {
                document.currentScript.parentNode.replaceChild(widget, document.currentScript);
              }
            }
          } catch (error) {
            console.error('iHomeFinder Kestrel error:', error);
            document.currentScript.parentNode.innerHTML = '<div class="text-center p-8 text-gray-600">Property search temporarily unavailable. Please try again later.</div>';
          }
        `;
        
        containerRef.current.appendChild(script);
        console.log('iHomeFinder Kestrel search widget loaded');
      } else {
        setError('iHomeFinder Kestrel not available');
      }
    } catch (err) {
      console.error('Error loading iHomeFinder search widget:', err);
      setError('Failed to load property search');
    }
  }, [isClient]);

  if (!isClient) {
    return (
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
            <h2 className="scroll-animate text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-8 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
              Search Properties
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-[#890100]"></div>
              <span className="text-[#890100] font-serif text-2xl">•</span>
              <div className="w-12 h-px bg-[#890100]"></div>
            </div>
            <p className="scroll-animate text-sm text-black/70 max-w-2xl mx-auto font-serif" style={{ letterSpacing: '0.02em' }}>
              Find your dream home with our advanced search tools.
            </p>
            <div className="w-24 h-px bg-[#890100] mx-auto mt-12"></div>
          </div>
          <div className="scroll-animate w-full h-32 bg-black/5 flex items-center justify-center">
            <div className="text-black/40 font-serif text-xs tracking-[0.1em] uppercase">Loading property search...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="w-24 h-px bg-[#890100] mx-auto mb-12"></div>
          <h2 className="scroll-animate text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-black mb-8 tracking-[0.05em]" style={{ letterSpacing: '0.05em' }}>
            Search Properties
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#890100]"></div>
            <span className="text-[#890100] font-serif text-2xl">•</span>
            <div className="w-12 h-px bg-[#890100]"></div>
          </div>
          <p className="scroll-animate text-sm text-black/70 max-w-2xl mx-auto font-serif" style={{ letterSpacing: '0.02em' }}>
            Find your dream home with our advanced search tools.
          </p>
          <div className="w-24 h-px bg-[#890100] mx-auto mt-12"></div>
        </div>

        {/* iHomeFinder Kestrel Search Widget */}
        <div className="scroll-animate w-full" ref={containerRef}>
          {error && (
            <div className="text-center p-8 text-gray-600 bg-gray-50 rounded-lg">
              {error}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchProperties;

