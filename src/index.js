import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactES6 from './componses/reactES6';
import ReactComponses from './componses/reactComponses';
import Props from './componses/props';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/reactES6" element={<ReactES6 />} />
        <Route path="/reactcomponses" element={<ReactComponses/>}/>
        <Route path='/props' element={<Props/>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
