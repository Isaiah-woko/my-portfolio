import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "MedifyCare",
    description: "A healthcare platform connecting doctors and patients globally.",
    image: "/projects/medifycare.png",
    technologies: ["React", "Django", "Tailwind"],
    demoLink: "#",
    repoLink: "#",
  },
  {
    title: "Directory Platform",
    description: "A structured listing and user profile directory platform.",
    image: "/projects/directory.png",
    technologies: ["Next.js", "MySQL", "Framer Motion"],
    demoLink: "#",
    repoLink: "#",
  },
  {
    title: "Portfolio Website",
    description: "A modern, animated portfolio showcasing my skills and projects.",
    image: "/projects/portfolio.png",
    technologies: ["React", "Framer Motion", "Tailwind"],
    demoLink: "#",
    repoLink: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen flex flex-col items-center text-center px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white"
      >
        My Portfolio
      </motion.h2>
      <p className="text-lg text-gray-300 mt-4">Check out some of my latest work.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden transform transition-all"
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs bg-gray-700 px-2 py-1 rounded-full text-white">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-between">
                <a href={project.demoLink} className="text-blue-400 hover:text-blue-500 flex items-center">
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
                <a href={project.repoLink} className="text-gray-400 hover:text-gray-500 flex items-center">
                  <FaGithub className="mr-2" /> GitHub Repo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
