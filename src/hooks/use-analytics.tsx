
import React, { createContext, useContext, ReactNode } from 'react';
import { usePostHog } from 'posthog-js/react';
import { isAnalyticsAvailable } from '@/lib/analytics';

// Create an analytics context
const AnalyticsContext = createContext<ReturnType<typeof useAnalytics> | undefined>(undefined);

// Analytics provider component
export const AnalyticsProvider = ({ children }: { children: ReactNode }) => {
  const analytics = useAnalytics();
  
  return (
    <AnalyticsContext.Provider value={analytics}>
      {children}
    </AnalyticsContext.Provider>
  );
};

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

// Hook for consuming the analytics context
export const useAnalyticsContext = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider');
  }
  return context;
};
