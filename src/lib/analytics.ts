
import posthog from 'posthog-js';

// Analytics configuration
export const POSTHOG_API_KEY = 'phc_RSPcUNGE9xNj9bjU8BvTkp45vgLuovKnAtW14cgBYtd';
export const POSTHOG_HOST = 'https://eu.i.posthog.com';

// Helper function to check if analytics is available
export const isAnalyticsAvailable = () => {
  return typeof window !== 'undefined' && posthog && posthog.isFeatureEnabled;
};

// Export posthog instance
export { posthog };
