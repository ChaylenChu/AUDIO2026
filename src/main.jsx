import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 👈 关键修改：添加 basename，注意大小写和斜杠 */}
    <BrowserRouter basename="/AUDIO2026">
      <App />
    </BrowserRouter>
  </StrictMode>,
)