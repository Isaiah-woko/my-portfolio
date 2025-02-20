import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-12 overflow-hidden"
    >
      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-white mb-6">
          Hey there! I’m Isaiah 👋
        </h2>

        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          I’m a <strong>passionate software engineer</strong> with a knack for building sleek, high-performance web applications. 
          My expertise spans <strong>frontend development</strong>, and <strong>backend engineering</strong>—all fueled by a drive to create seamless user experiences. 
          I'm always exploring the latest technologies to push the boundaries of what's possible on the web.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl shadow-lg w-full md:w-1/3"
          >
            <h3 className="text-xl font-semibold text-white mb-2">My Philosophy</h3>
            <p className="text-sm text-gray-100">
              Clean code, intuitive design, and performance-driven solutions. I believe in crafting digital experiences that resonate with users.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gradient-to-r from-green-500 to-teal-400 rounded-xl shadow-lg w-full md:w-1/3"
          >
            <h3 className="text-xl font-semibold text-white mb-2">My Toolkit</h3>
            <p className="text-sm text-gray-100">
              From <strong>ReactJS</strong>, <strong>Django</strong>, and <strong>Flask</strong> on the web to <strong>MySQL</strong>, <strong>GitHub</strong>, and <strong>Framer Motion</strong>, I bring a versatile skill set to every project.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gradient-to-r from-pink-500 to-red-400 rounded-xl shadow-lg w-full md:w-1/3"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Beyond Code</h3>
            <p className="text-sm text-gray-100">
              When I'm not coding, you'll find me exploring design trends, contributing to open-source projects, or diving into the latest tech podcasts.
            </p>
          </motion.div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-10 inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-md cursor-pointer"
        >
          <a href="#contact">Let’s Connect</a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
