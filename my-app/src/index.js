import React from 'react';
import './index.css';
import App from './App';
import Home from './Pages/Home';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
    <App/>
  </React.StrictMode>
);


