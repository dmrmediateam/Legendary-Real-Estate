'use client';

import { createContext, useContext, ReactNode } from 'react';
import type { BrandSettings } from '@/lib/brandSettings';

const BrandContext = createContext<BrandSettings | null>(null);

export function BrandProvider({ 
  children, 
  settings 
}: { 
  children: ReactNode;
  settings: BrandSettings | null;
}) {
  return (
    <BrandContext.Provider value={settings}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrandSettings() {
  return useContext(BrandContext);
}


