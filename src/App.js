import React from "react";
import { Homepage, Navbar, About, Portfolio, Skills, Contact, AnimatedBackground } from "./components";
import "./App.css";

function App() {
  return (
    <div className="relative">
      {/* Full-screen animated background */}
      <AnimatedBackground />

      {/* Navbar and Homepage */}
      <div className="relative z-10">
        <Navbar />
        <Homepage />
      </div>

      {/* Other sections */}
      <div className="relative z-10">
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;