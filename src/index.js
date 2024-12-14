import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContext from './context/AppContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <h1>Hello World</h1> */}
  <AppContext><App/></AppContext>
  </>
);
