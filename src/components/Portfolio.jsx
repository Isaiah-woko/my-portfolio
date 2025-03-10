import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "MedifyCare",
    description: "A healthcare platform connecting doctors and patients globally.",
    image: "/Medifycare.jpg",
    technologies: ["React", "Python", "Flask", "MySQL", "Javascript"],
    demoLink: "#",
    repoLink: "https://github.com/Isaiah-woko/MedifyCare.git",
  },
  {
    title: "Simple Shell",
    description: "A simple shell implementation that mimics the behavior of a Unix command-line interpreter.",
    image: "/shell.png",
    technologies: ["C", "Shell"],
    demoLink: "#",
    repoLink: "https://github.com/be-great/simple_shell.git",
  },
  {
    title: "Portfolio Website",
    description: "A modern, animated portfolio showcasing my skills and projects.",
    image: "/my-portfolio.png",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    demoLink: "http://isaiahwoko.vercel.app/",
    repoLink: "https://github.com/Isaiah-woko/my-portfolio.git",
  },
];

const ProjectCard = ({ project, index }) => {
  const { title, description, image, technologies, demoLink, repoLink } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden transform transition-all"
    >
      <img 
        src={image || "/placeholder.png"} 
        alt={title} 
        className="w-full h-40 object-cover" 
        loading="lazy" 
        onError={(e) => { e.target.src = "/placeholder.png"; }} 
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-300 mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech, i) => (
            <span key={i} className="text-xs bg-gray-700 px-2 py-1 rounded-full text-white">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <a 
            href={demoLink} 
            className="text-blue-400 hover:text-blue-500 flex items-center"
            aria-label={`Live demo of ${title}`}
          >
            <FaExternalLinkAlt className="mr-2" /> Live Demo
          </a>
          <a 
            href={repoLink} 
            className="text-gray-400 hover:text-gray-500 flex items-center"
            aria-label={`GitHub repository for ${title}`}
          >
            <FaGithub className="mr-2" /> GitHub Repo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen flex flex-col items-center text-center px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white"
      >
        My Portfolio
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-lg text-gray-300 mt-4"
      >
        Check out some of my latest work.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
