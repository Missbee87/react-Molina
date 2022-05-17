import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { CartContextProvider } from './store/Cart-context';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDmMBUGlvLEoGmBrF549O9Zf4aueU_ZZgg",
  authDomain: "proyecto-final-molina.firebaseapp.com",
  projectId: "proyecto-final-molina",
  storageBucket: "proyecto-final-molina.appspot.com",
  messagingSenderId: "1077091744472",
  appId: "1:1077091744472:web:d8d9eb1afd9a85a8c2f5ad"
};
initializeApp(firebaseConfig);

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

