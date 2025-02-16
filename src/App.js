import './App.css';
import React from 'react';
import { Homepage, Navbar, About, Portfolio, Skills, Contact, AnimatedBackground } from './components';

function App() {
  return (
    <div>
      {/* Wrapper with background only for Navbar & Homepage */}
      <div className="min-h-screen bg-cover bg-center">
        <AnimatedBackground />
        <Navbar />
        <Homepage />
      </div>

      {/* Sections with default or custom background */}
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
