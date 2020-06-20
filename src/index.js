// import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import "materialize-css/dist/css/materialize.css";
import 'core-js/fn/number/is-nan';
// import 'core-js/es7/';
import 'core-js/es6/';
import 'raf/polyfill';
import { store, persistor } from "./redux/store";

import React from "react";
import {
  BrowserRouter,
} from "react-router-dom";
import "./style/prefix.css";
import Navbar from "./components/chunk/navbar";
import { Provider } from "react-redux";


if(!window.intl){
    require('intl');
    ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <Navbar />
        <div>
          <App />
        </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

  
}else{
  ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <Navbar />
        <div>
          <App />
        </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

}

