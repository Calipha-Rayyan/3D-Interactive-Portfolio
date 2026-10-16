import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';
import './styles/sections.css';

// Find the <div id="root"> in index.html and render the whole app inside it.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
