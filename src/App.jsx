import Home from "./components/Home";
import Projects from "./components/Projects";

import "./index.css";
import "./style.css";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
          </Routes>
      </Router>
  );
}

export default App;

