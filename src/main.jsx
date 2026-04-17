import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <footer className='text-center text-gray-600 dark:text-gray-400 py-6 bg-gray-100 dark:bg-gray-800'>
      corporate Sarobidy Henintsoa
    </footer>
  </StrictMode>,
)
