import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ShoppingPage from './ShoppingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShoppingPage />
  </StrictMode>,
)
