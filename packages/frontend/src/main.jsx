import { Buffer } from 'buffer';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import config from './config';

import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from 'react-moralis';

window.Buffer = Buffer;

console.log(config.MORALIS_APPID,config.MORALIS_SERVER_URL);

ReactDOM.render(
  <MoralisProvider appId={config.MORALIS_APPID} serverUrl={config.MORALIS_SERVER_URL}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MoralisProvider>,
  document.getElementById("root")
);
