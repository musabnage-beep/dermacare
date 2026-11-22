import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { MotionProvider } from './components/primitives/MotionProvider.tsx'
import { LanguageProvider } from './i18n/LanguageProvider.tsx'
import { ShopProvider } from './shop/ShopProvider.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <ShopProvider>
        <MotionProvider>
          <App />
        </MotionProvider>
      </ShopProvider>
    </LanguageProvider>
  </StrictMode>,
)
