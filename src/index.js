import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import clayful from 'clayful/client-js';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

clayful.config({
  clinet:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQzOTAwZTRhMzViNDg0MTA5MjdhYWM2ZDFmNjA1NWIzNzkyYWUzYjU1YzFhMTc2NjE3Yjk1MTYzYjhiY2Q4YmUiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjQ0MzA0MDY3LCJzdG9yZSI6IlM3RUxaNFE5RTlMVy5CUEs2OExYREpaVFYiLCJzdWIiOiI1NEdaM1ZYSjZFVEoifQ.eraf9O-Ox5M7fAkDkxbGEaI_7lcaUTRKhu4SQxaRJA8",
});

clayful.install("request", require("clayful/plugins/request-axios")(axios));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
