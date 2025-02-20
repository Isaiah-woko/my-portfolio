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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Hey there! I’m Isaiah 👋
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          I’m a <strong>passionate software engineer</strong> with a knack for building sleek, high-performance web applications. 
          My expertise spans <strong>frontend development</strong>, and <strong>backend engineering</strong>—all fueled by a drive to create seamless user experiences. 
          I'm always exploring the latest technologies to push the boundaries of what's possible on the web.
        </motion.p>

        {/* Cards with staggered animation */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {[
            {
              title: "My Philosophy",
              description:
                "Clean code, intuitive design, and performance-driven solutions. I believe in crafting digital experiences that resonate with users.",
              gradient: "from-teal-900/80 to-teal-900/10",
            },
            {
              title: "My Toolkit",
              description:
                "From ReactJS, Django, and Flask on the web to MySQL, GitHub, and Framer Motion, I bring a versatile skill set to every project.",
              gradient: "from-gray-800 to-gray-900",
            },
            {
              title: "Beyond Code",
              description:
                "When I'm not coding, you'll find me exploring design trends, contributing to open-source projects, or diving into the latest tech podcasts.",
              gradient: "from-blue-900/80 to-blue-900/10",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`p-6 bg-gradient-to-r ${item.gradient} rounded-xl shadow-lg w-full md:w-1/3`}
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-100">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
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
