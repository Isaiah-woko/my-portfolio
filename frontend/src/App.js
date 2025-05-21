import React from "react";
import { Homepage, Navbar, About, Portfolio, Skills, Contact, AnimatedBackground, Footer, Reviews } from "./components";
import "./App.css";

function App() {
  return (
    <div className="relative">
      
      {/* Full-screen animated background */}
      <AnimatedBackground />
      

      {/* Navbar and Homepage */}
      <div className="relative z-10">
        <Navbar />
        {/* <ThemeSwitcher /> */}
        <Homepage />
        <About />
        <Skills />
        <Portfolio />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;