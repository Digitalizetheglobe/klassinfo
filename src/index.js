import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import ReactDOM from 'react-dom/client';

import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Leadership from './components/Leadership';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Leadership/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
