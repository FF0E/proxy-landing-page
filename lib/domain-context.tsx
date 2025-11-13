'use client';

import { createContext, useContext, type ReactNode } from 'react';

interface DomainContextType {
  domain: string | null;
}

const DomainContext = createContext<DomainContextType | undefined>(undefined);

interface DomainProviderProps {
  domain: string | null;
  children: ReactNode;
}

/**
 * Provider component that makes the current domain available to all child components
 */
export function DomainProvider({ domain, children }: DomainProviderProps) {
  return (
    <DomainContext.Provider value={{ domain }}>
      {children}
    </DomainContext.Provider>
  );
}

/**
 * Hook to access the current domain in client components
 * @returns The current domain or null if not available
 */
export function useDomain(): string | null {
  const context = useContext(DomainContext);

  if (context === undefined) {
    throw new Error('useDomain must be used within a DomainProvider');
  }

  return context.domain;
}
