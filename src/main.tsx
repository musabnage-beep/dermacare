import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { MotionProvider } from './components/primitives/MotionProvider.tsx'
import { LanguageProvider } from './i18n/LanguageProvider.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <MotionProvider>
        <App />
      </MotionProvider>
    </LanguageProvider>
  </StrictMode>,
)
