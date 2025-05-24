import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './Resume';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/portfolio-react" element={<App />} />
        <Route path="/portfolio-react/home" element={<App />} />
        <Route path="/portfolio-react/resume" element={<Resume />} />
      </Routes>
    </Router>
  </StrictMode>
)
