import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ben from './benspage/benswork.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Ben />
    <Musa />
  </StrictMode>,
)
