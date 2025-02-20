import React from "react";
// import ParticleEffect from "./ParticleEffect";
import  AnimatedBackground from "./AnimatedBackground";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
      
    >
      {/* Particle Effect */}
      <AnimatedBackground particleCount={75} particleColor="rgba(255, 255, 255, 0.5)" />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white">About Me</h2>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl">
          With expertise in frontend development, UI/UX design, and backend engineering, I specialize in creating high-performance web applications.
        </p>
      </div>
    </section>
  );
}

export default About;