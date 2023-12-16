import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root/root";
import { BrowserRouter as Router } from "react-router-dom";
import "./main.css";
import store from "./redux/index";
import { Provider } from "react-redux";
// import "swipe/css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <Provider store={store}>
      <Router>
        <Root />
      </Router>
    </Provider>
  </React.Fragment>
);
