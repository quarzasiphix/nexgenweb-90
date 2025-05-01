
import { usePostHog } from 'posthog-js/react';
import { isAnalyticsAvailable } from '@/lib/analytics';

export function useAnalytics() {
  // Use the PostHog hook
  const posthog = usePostHog();
  
  // Function to capture events
  const captureEvent = (eventName: string, properties?: Record<string, any>) => {
    if (posthog && isAnalyticsAvailable()) {
      try {
        posthog.capture(eventName, properties);
      } catch (err) {
        console.error('Error capturing analytics event:', err);
      }
    }
  };
  
  // Function to identify users
  const identifyUser = (distinctId: string, properties?: Record<string, any>) => {
    if (posthog && isAnalyticsAvailable()) {
      try {
        posthog.identify(distinctId, properties);
      } catch (err) {
        console.error('Error identifying user:', err);
      }
    }
  };
  
  return { 
    posthog,
    captureEvent,
    identifyUser
  };
}
