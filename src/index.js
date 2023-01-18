import AppProviders from 'providers/AppProviders';
import React from 'react';
import 'assets/styles/fonts.css';
import ReactDOM from 'react-dom/client';
import Root from 'views/Root';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProviders>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </AppProviders>
  </React.StrictMode>
);
