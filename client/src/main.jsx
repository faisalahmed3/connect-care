import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import ContactUs from './pages/Home/Contact/ContactUs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Home></Home>
   <ContactUs></ContactUs>
  </StrictMode>,
)
