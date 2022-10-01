import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './root';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Root />
    </Router>
  </React.StrictMode>
);
