/**
 * Get the base URL for the application
 * Automatically switches between development and production
 */
export const getBaseUrl = (): string => {
  // In production build, use the production URL
  if (import.meta.env.PROD) {
    return import.meta.env.VITE_SITE_URL || import.meta.env.VITE_BASE_URL || 'https://ajuserv.com';
  }

  // In development, use localhost or the dev URL
  return import.meta.env.VITE_BASE_URL || 'http://localhost:5173';
};

/**
 * Get absolute URL for an asset (image, file, etc.)
 * @param path - Relative path starting with / (e.g., "/images/logo.png")
 */
export const getAbsoluteUrl = (path: string): string => {
  const baseUrl = getBaseUrl();
  // Remove trailing slash from base URL and leading slash from path if both exist
  const cleanBaseUrl = baseUrl.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBaseUrl}${cleanPath}`;
};

/**
 * Configuration object for easy access
 */
export const config = {
  baseUrl: getBaseUrl(),
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://ajuserv.com',
  siteName: 'Ajuserv',

  // Helper function to get absolute URLs
  getAbsoluteUrl,
};

export default config;
