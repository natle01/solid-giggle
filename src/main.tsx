import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { generateTheme, Theme } from '@natle01/laughing-kookaburra';

import App from './App';

import '@natle01/laughing-kookaburra/styles.css';
import './index.css';

const customTheme = {
  globalColorText: ['#1c1e20', '#afbccf'],
  globalColorCanvas: ['#f1f8f9', '#0c111b'],
  globalColorSurface: ['#e8f2ff', '#141b28']
} satisfies Theme

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <style>{generateTheme(customTheme)}</style>
      <App />
    </HashRouter>
  </React.StrictMode>
);
