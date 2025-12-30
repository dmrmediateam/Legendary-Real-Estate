'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryImageWithUrl {
  url: string
  alt?: string
  caption?: string
}

interface ListingGalleryProps {
  images: GalleryImageWithUrl[]
}

export default function ListingGallery({ images }: ListingGalleryProps) {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 6; // 3x2 grid
  const displayedImages = showAll ? images : images.slice(0, initialCount);
  const hasMore = images.length > initialCount;

  if (images.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-serif font-normal text-black mb-6 tracking-[0.05em]">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {displayedImages.map((image, index) => {
          if (!image.url) return null;
          return (
            <div key={index} className="relative aspect-square bg-gray-200 overflow-hidden group cursor-pointer">
              <Image
                src={image.url}
                alt={image.alt || `Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          );
        })}
      </div>
      {hasMore && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-block border border-[#890100] text-[#890100] hover:bg-[#890100] hover:text-white px-8 py-3 font-serif text-xs tracking-[0.1em] uppercase transition-all duration-300"
          >
            {showAll ? 'Show Less' : `View All ${images.length} Images`}
          </button>
        </div>
      )}
    </div>
  );
}

