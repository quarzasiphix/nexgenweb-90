
import { usePostHog } from 'posthog-js/react';
import { isAnalyticsAvailable } from '@/lib/analytics';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useAnalytics() {
  // Use the PostHog hook
  const posthog = usePostHog();
  const location = useLocation?.();
  
  // Track page views automatically when location changes
  useEffect(() => {
    if (posthog && isAnalyticsAvailable() && location) {
      try {
        posthog.capture('$pageview', {
          path: location.pathname,
          referrer: document.referrer || 'direct',
          title: document.title,
        });
      } catch (err) {
        console.error('Error capturing page view:', err);
      }
    }
  }, [posthog, location]);
  
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
  
  // Function to reset user identity
  const resetUser = () => {
    if (posthog && isAnalyticsAvailable()) {
      try {
        posthog.reset();
      } catch (err) {
        console.error('Error resetting user identity:', err);
      }
    }
  };
  
  // Function to add user properties
  const setUserProperties = (properties: Record<string, any>) => {
    if (posthog && isAnalyticsAvailable()) {
      try {
        posthog.people.set(properties);
      } catch (err) {
        console.error('Error setting user properties:', err);
      }
    }
  };
  
  return { 
    posthog,
    captureEvent,
    identifyUser,
    resetUser,
    setUserProperties
  };
}
