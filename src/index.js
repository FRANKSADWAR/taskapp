import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppFunction from './App';
import reportWebVitals from './reportWebVitals';


const main_render = ReactDOM.createRoot(document.getElementById("content"));
main_render.render(<AppFunction/>);

//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);

reportWebVitals();
