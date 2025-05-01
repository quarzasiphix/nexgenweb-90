
import React, { createContext, useContext } from 'react';
import { usePostHog } from 'posthog-js/react';
import { isAnalyticsAvailable } from '@/lib/analytics';

// Create a context for analytics
const AnalyticsContext = createContext<ReturnType<typeof useAnalyticsProvider> | undefined>(undefined);

// Provider hook that creates analytics object and handles initialization
function useAnalyticsProvider() {
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
    identifyUser,
  };
}

// Provider component that wraps your app and makes analytics object available
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const analytics = useAnalyticsProvider();
  return (
    <AnalyticsContext.Provider value={analytics}>
      {children}
    </AnalyticsContext.Provider>
  );
}

// Hook for components to get access to the analytics API
export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    // If useAnalytics is called outside of AnalyticsProvider,
    // fall back to direct usage instead of throwing an error
    return useAnalyticsProvider();
  }
  return context;
}
