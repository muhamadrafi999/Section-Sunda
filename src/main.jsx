import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Import font
import "@fontsource/great-vibes";
import "@fontsource/cormorant-garamond";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)