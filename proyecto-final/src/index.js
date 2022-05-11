import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { CartContextProvider } from './store/Cart-context';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartContextProvider>
      <App />
    </CartContextProvider> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

