import Home from "./components/Home";
import Projects from "./components/Projects";

import "./index.css";
import "./style.css";

import ReactDOM from 'react-dom/client'
import React from "react";
import {
    Routes,
    useNavigate,
    Route,
    HashRouter
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
  </HashRouter>
  </React.StrictMode>
)
