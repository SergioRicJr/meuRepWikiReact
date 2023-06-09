import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import  GlobalStyleComponent  from './styles.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyleComponent/>
    <App />
  </React.StrictMode>
);