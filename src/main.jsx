import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./components/Home";
import Projects from "./components/Projects";

import "./index.css";
import "./style.css";

import {
  Route,
  Routes,
  HashRouter,
  Navigate
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*" element={<Navigate to="/" />}  />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
