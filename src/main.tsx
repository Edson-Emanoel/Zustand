import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { useCartStore } from './store/cartStore.ts'

useCartStore.subscribe((state) => console.log("Novo Estado: " + state))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
