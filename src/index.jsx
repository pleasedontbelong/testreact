import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import configureStore from "./redux/configureStore.js";

const store = configureStore;

render(
  <Provider store={store}>
    <App />, document.getElementById("app"));
  </Provider>
);
