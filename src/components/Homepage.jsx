import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCopy } from "react-icons/fa";

function HomePage() {
  const email = "wokoisaiah68@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
     

      {/* Split Layout */}
      <section
        id="home"
        className="h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 space-y-10 lg:space-y-0 relative z-10"
      >
        {/* Left Side: Illustration */}
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
              marginRight: "clamp(20px, 10vw, 120px)",
              marginTop: "clamp(30px, 10vh, 120px)",
              boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.3)",
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

            {/* Copyable Email Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-6 flex items-center bg-gray-900/30 p-2 rounded-lg border border-white/10"
            >
              <input
                type="text"
                value={email}
                readOnly
                className="bg-transparent text-gray-300 border-none outline-none w-full cursor-text"
              />
              <button
                onClick={copyToClipboard}
                className="text-gray-400 hover:text-blue-400 transition px-2"
              >
                <FaCopy />
              </button>
              {copied && <span className="text-green-400 text-sm ml-2">Copied!</span>}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default HomePage;
