import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProviderWrap from './contex/ProviderWrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProviderWrap />
  </React.StrictMode>
);


