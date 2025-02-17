import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import { HeroUIProvider } from '@heroui/react'
import MainLayout from './layouts/MainLayout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <MainLayout />
    </HeroUIProvider>
  </StrictMode>,
)
