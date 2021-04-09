import React from "react";
import ReactDOM from 'react-dom';
//import Routes from "./Routes";
//replace app w/Routes component
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
