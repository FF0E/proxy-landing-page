import { headers } from 'next/headers';

/**
 * Extracts the domain from the current request
 * @returns The domain (e.g., "example.com") or null if it cannot be determined
 */
export async function getCurrentDomain(): Promise<string | null> {
  try {
    const headersList = await headers();
    const host = headersList.get('host');

    if (!host) {
      return null;
    }

    // Remove port if present
    const domain = host.split(':')[0];

    // Check if it's localhost or an IP address - these should use fallback
    if (
      domain === 'localhost' ||
      domain === '127.0.0.1' ||
      domain === '0.0.0.0' ||
      /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(domain) // IP address pattern
    ) {
      return null;
    }

    return domain;
  } catch (error) {
    console.error('Error getting current domain:', error);
    return null;
  }
}

/**
 * Extracts just the base domain without subdomains
 * @param fullDomain - The full domain (e.g., "sub.example.com")
 * @returns The base domain (e.g., "example.com")
 */
export function getBaseDomain(fullDomain: string): string {
  const parts = fullDomain.split('.');

  // If it's already a base domain (e.g., "example.com"), return as is
  if (parts.length <= 2) {
    return fullDomain;
  }

  // Return the last two parts (e.g., "example.com" from "sub.example.com")
  return parts.slice(-2).join('.');
}
