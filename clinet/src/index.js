import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import configureStore from "./Redux/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector("#root")
);
