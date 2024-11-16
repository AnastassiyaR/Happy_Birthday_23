import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainPage from './pages/MainPage.jsx';
import RunningPage from './pages/RunningPage.jsx';

// Create the root element for rendering
const root = createRoot(document.getElementById('root'));

// Render the application
root.render(
  <StrictMode>
    <Router>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/running" element={<RunningPage />} />
        </Routes>
      </AnimatePresence>
    </Router>
  </StrictMode>
);