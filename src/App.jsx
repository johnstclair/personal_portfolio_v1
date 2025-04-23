import Home from "./components/Home";
import Projects from "./components/Projects";

import "./index.css";
import "./style.css";

import {
    Routes,
    Route,
    HashRouter,
    Navigate
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*" element={<Navigate to="/" />}  />
      </Routes>
  </HashRouter>
  );
}

export default App;

