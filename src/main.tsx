
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

// PostHog configuration
const posthogApiKey = 'phc_RSPcUNGE9xNj9bjU8BvTkp45vgLuovKnAtW14cgBYtd';
const posthogHost = 'https://eu.i.posthog.com';

// Initialize PostHog
posthog.init(posthogApiKey, {
  api_host: posthogHost,
  loaded: (posthog) => {
    if (process.env.NODE_ENV === 'development') console.log('PostHog loaded!');
  }
});

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </React.StrictMode>
);
