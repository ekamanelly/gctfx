// import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { PersistGate } from "redux-persist/integration/react";
import "materialize-css/dist/css/materialize.css";
import { store } from "./redux/store";

import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./style/prefix.css";
import Navbar from "./components/chunk/navbar";
import { Provider } from "react-redux";

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
