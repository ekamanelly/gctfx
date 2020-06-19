// import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import "materialize-css/dist/css/materialize.css";

import { store, persistor } from "./redux/store";

import React from "react";
import {
  BrowserRouter,
} from "react-router-dom";
import "./style/style.css";
import Navbar from "./components/chunk/navbar";
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        <div>
          <App />
        </div>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
