import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);
