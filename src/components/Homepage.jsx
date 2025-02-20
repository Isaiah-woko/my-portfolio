import React from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground"; // Import your animated background

function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      

      {/* Split Layout */}
      <section
        id="home"
        className="h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 space-y-10 lg:space-y-0 relative z-10"
      >
        {/* Left Side: Illustration (Tilted & Spaced from Glass) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0"
        >
          <motion.img
            src="/Isaiah.png"
            alt="Developer Illustration"
            className="w-64 sm:w-90 md:w-100 lg:w-[20rem] h-64 sm:h-90 md:h-100 lg:h-[20rem] rounded-lg shadow-2xl object-cover"
            style={{
              transform: "rotate(-6deg)", // Slight tilt
              marginRight: "clamp(20px, 10vw, 120px)", // Responsive spacing
              marginTop: "clamp(30px, 10vh, 120px)", // Responsive spacing
              boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.3)", // Soft glow
              filter: "drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.4))",
              rotate: "-3deg",
            }}
            whileHover={{ scale: 1.05, rotate: "-3deg" }} // Less tilt on hover
          />
        </motion.div>

        {/* Right Side: Glassmorphism Text Container */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
        >
          <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg max-w-md w-full mx-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              Hey, I’m Isaiah! 👋
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg lg:text-xl text-gray-300 mt-4"
            >
              A passionate <span className="text-blue-400">Software Engineer</span> &{" "}
              <span className="text-purple-400">Backend Developer</span> crafting sleek, modern web
              experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-8 flex space-x-4"
            >
              {/* Add buttons or other elements here */}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default HomePage;