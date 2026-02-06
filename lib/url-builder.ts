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
 * Resolves a dynamic href by applying the source URL's path, query, and hash
 * onto the provided dynamic base URL.
 * Internal anchors/paths and non-http(s) schemes are returned unchanged.
 * @param dynamicBase - The base dynamic URL (e.g., "https://user.example.com")
 * @param sourceUrl - The configured URL to copy path/query/hash from
 */
export function resolveDynamicHref(dynamicBase: string, sourceUrl: string): string {
  const trimmed = sourceUrl.trim();

  if (!trimmed) {
    return dynamicBase;
  }

  // Keep internal navigation as-is
  if (trimmed.startsWith('#') || trimmed.startsWith('/')) {
    return trimmed;
  }

  // Preserve non-http(s) schemes like mailto:, tel:, etc.
  if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(trimmed) && !/^https?:/i.test(trimmed)) {
    return trimmed;
  }

  try {
    const base = new URL(dynamicBase);
    const source = new URL(ensureProtocol(trimmed));

    base.pathname = source.pathname;
    base.search = source.search;
    base.hash = source.hash;

    return base.toString();
  } catch {
    return dynamicBase;
  }
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
