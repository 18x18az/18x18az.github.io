import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import  ReactRouter from './ReactRouter';

// Add this at the very top of your entry file (e.g., src/index.tsx)
const params = new URLSearchParams(window.location.search);
const redirect = params.get('redirect');
if (redirect) {
  window.history.replaceState(null, '', redirect);
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReactRouter />
  </React.StrictMode>
);
