/**
 * Builds a dynamic URL based on the current domain
 * @param domain - The current domain (e.g., "example.com") or null
 * @param fallbackUrl - The fallback URL to use if domain is null
 * @param subdomain - The subdomain to prepend (default: "user")
 * @returns The constructed URL with https:// protocol
 */
export function buildDynamicUrl(
  domain: string | null,
  fallbackUrl: string,
  subdomain: string = 'user'
): string {
  // If domain is not available, use fallback
  if (!domain) {
    return ensureProtocol(fallbackUrl);
  }

  // Build the URL with the pattern: subdomain.domain
  const dynamicUrl = `${subdomain}.${domain}`;

  return ensureProtocol(dynamicUrl);
}

/**
 * Ensures a URL has the https:// protocol
 * @param url - The URL to process
 * @returns The URL with https:// protocol
 */
function ensureProtocol(url: string): string {
  // If it already has a protocol, return as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // Add https:// protocol
  return `https://${url}`;
}

/**
 * Get the fallback URL from environment variable
 * @returns The fallback URL from NEXT_PUBLIC_FALLBACK_URL or default
 */
export function getFallbackUrl(): string {
  return process.env.NEXT_PUBLIC_FALLBACK_URL || 'https://user.xrista.net';
}
