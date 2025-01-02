import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl='https://d96c-118-70-9-25.ngrok-free.app/tonconnect-manifest.json'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </BrowserRouter>
    </TonConnectUIProvider>
  </StrictMode>
)
