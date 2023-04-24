import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import A, { Bottom, Bottom2 } from './Bottoms';
import reportWebVitals from './reportWebVitals';
import MyComponent from './App2.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App></App>
    <Bottom>bbb</Bottom>
    <Bottom2>aaa</Bottom2>
    <A></A>
    <hr />
    <MyComponent />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
