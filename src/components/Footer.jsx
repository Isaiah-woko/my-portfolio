import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative  py-8 px-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
        {/* Logo / Name */}
        <motion.div
          className="text-white text-2xl font-bold tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Isaiah's Portfolio 🚀
        </motion.div>

        {/* Quick Links */}
        <nav className="flex space-x-6">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#about"
            className="hover:text-white transition-all"
          >
            About
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#projects"
            className="hover:text-white transition-all"
          >
            Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#contact"
            className="hover:text-white transition-all"
          >
            Contact
          </motion.a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="text-blue-400 hover:text-blue-500 transition-all text-xl"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="text-gray-300 hover:text-white transition-all text-xl"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="mailto:wokoisaiah68@gmail.com"
            className="text-pink-400 hover:text-pink-500 transition-all text-xl"
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Isaiah. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
