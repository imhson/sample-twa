import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl='https://sample-twa-99b45.web.app/tonconnect-manifest.json'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </BrowserRouter>
    </TonConnectUIProvider>
  </StrictMode>
)
