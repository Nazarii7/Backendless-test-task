import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './globals.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
