import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; // Optional: For global styles

// Importing Components
import LegacyScrollBar from "../src/components/LegacyScrollBar";
import { TimelineDemo } from "../src/test";
import { AnimatedTestimonialsDemo } from "../src/test2";
// import MenuBar from "../src/menu"; // Assuming you have a MenuBar component
import Hero from "./hero";

const App = () => {
  return (
    <Router>
      {/* <MenuBar /> */}
      <Routes>
        <Route path="/" element={<Hero/>} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/leadership" element={<LegacyScrollBar/>} /> */}
        {/* <Route path="/values" element={<Values />} /> */}
        {/* <Route path="/solutions" element={<Solutions />} /> */}
        {/* <Route path="/impact" element={<Impact />} /> */}
        <Route path="/test" element={<TimelineDemo />} />
        <Route path="/test2" element={<AnimatedTestimonialsDemo />} />
      </Routes>
    </Router>
  );
};

export default App;
