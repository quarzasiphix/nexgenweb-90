
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PostHogProvider } from 'posthog-js/react'

// PostHog configuration
const posthogApiKey = 'phc_RSPcUNGE9xNj9bjU8BvTkp45vgLuovKnAtW14cgBYtd';
const posthogHost = 'https://eu.i.posthog.com';

const posthogOptions = {
  api_host: posthogHost
}

createRoot(document.getElementById("root")!).render(
  <PostHogProvider 
    apiKey={posthogApiKey}
    options={posthogOptions}
  >
    <App />
  </PostHogProvider>
);
