import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative py-8 px-6 mt-12 text-gray-400">
      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Logo / Name */}
        <motion.div
          className="text-white text-2xl font-bold tracking-wide"
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        >
          Isaiah's Portfolio 🚀
        </motion.div>

        {/* Quick Links */}
        <nav className="flex space-x-6">
          {["About", "Projects", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-all"
              whileHover={{ scale: 1.1, color: "#ffffff" }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Social Icons */}
        <motion.div className="flex space-x-6">
          {[
            { icon: <FaLinkedin />, href: "#", color: "text-blue-400 hover:text-blue-500" },
            { icon: <FaGithub />, href: "#", color: "text-gray-300 hover:text-white" },
            { icon: <FaEnvelope />, href: "mailto:wokoisaiah68@gmail.com", color: "text-pink-400 hover:text-pink-500" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className={`${social.color} transition-all text-xl`}
              whileHover={{ scale: 1.2 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Isaiah. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
