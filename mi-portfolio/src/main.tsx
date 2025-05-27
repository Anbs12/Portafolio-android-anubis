import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // ¡Asegúrate de que esta línea esté presente!
import Portfolio from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
);
