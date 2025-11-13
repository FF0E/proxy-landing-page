'use client';

import { useDomain } from '../domain-context';
import { buildDynamicUrl, getFallbackUrl } from '../url-builder';

/**
 * Hook that returns a dynamic URL based on the current domain
 * @param subdomain - The subdomain to use (default: "user")
 * @returns The dynamic URL (e.g., "https://user.example.com" or fallback)
 */
export function useDynamicLink(subdomain: string = 'user'): string {
  const domain = useDomain();
  const fallbackUrl = getFallbackUrl();

  return buildDynamicUrl(domain, fallbackUrl, subdomain);
}
