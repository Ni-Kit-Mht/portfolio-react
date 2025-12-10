import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './Resume';
import App from './App.jsx'
import HireMe from './HireMe.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/portfolio-react" element={<App />} />
        <Route path="/portfolio-react/home" element={<App />} />
        <Route path="/portfolio-react/resume" element={<Resume />} />
        <Route path="/portfolio-react/hire_me" element={<HireMe />} />
      </Routes>
    </Router>
  </StrictMode>
)
