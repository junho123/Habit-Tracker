import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all.js";
import App from "./app";
import SimpleHabit from "./components/simpleHabit";

ReactDOM.render(
  // <React.StrictMode> 생략 가능
  // <App />
  <React.StrictMode>
    <SimpleHabit />
  </React.StrictMode>,
  document.getElementById("root")
);