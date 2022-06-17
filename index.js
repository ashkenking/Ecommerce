import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./index.css";
//ReactDOM.render(<NavBar />, document.getElementById("root"));
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
