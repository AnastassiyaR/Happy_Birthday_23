import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage.jsx';

// Create the root element for rendering
const root = createRoot(document.getElementById('root'));

// Render the application
root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
