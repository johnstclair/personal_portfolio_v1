import Home from "./components/Home";
import Projects from "./components/Projects";

import "./index.css";
import "./style.css";

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    useNavigate,
    Route,
} from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  
  React.useEffect(() => {
    navigate('/'); 
  }, [navigate]);

  return ( <></> );
};

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
  );
}

export default App;

