import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import  ReactRouter from './ReactRouter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReactRouter />
  </React.StrictMode>
);
