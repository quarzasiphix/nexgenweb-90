
import { usePostHog } from 'posthog-js/react';

export function useAnalytics() {
  const posthog = usePostHog();
  
  const captureEvent = (eventName: string, properties?: Record<string, any>) => {
    if (posthog) {
      posthog.capture(eventName, properties);
    }
  };
  
  const identifyUser = (distinctId: string, properties?: Record<string, any>) => {
    if (posthog) {
      posthog.identify(distinctId, properties);
    }
  };
  
  return { 
    posthog,
    captureEvent,
    identifyUser
  };
}
