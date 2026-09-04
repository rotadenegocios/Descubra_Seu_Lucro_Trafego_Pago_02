import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import App from './App.jsx'
import { profitPage } from './config/profitPage.jsx'
import { PrivacyBar, TrackingProvider } from './tracking/index.js'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TrackingProvider itemId={profitPage.slug} itemName={profitPage.title}>
      <App />
      <PrivacyBar />
    </TrackingProvider>
    <Analytics />
  </StrictMode>,
)
