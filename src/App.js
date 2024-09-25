// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />{" "}
          {/* Optional if you want a dedicated page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
