import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const languages = [
    { name: "HTML", logo: "/logos/html.svg" },
    { name: "CSS", logo: "/logos/css.svg" },
    { name: "JavaScript", logo: "/logos/javascript.svg" },
    { name: "Python", logo: "/logos/python.svg" },
    { name: "C", logo: "/logos/c.svg" },
  ];

  const frameworks = [
    { name: "Bootstrap", logo: "/logos/boostrap.svg" },
    { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
    { name: "Django", logo: "/logos/django.svg" },
    { name: "Flask", logo: "/logos/flask.svg" },
    { name: "ReactJS", logo: "/logos/react.svg" },
    { name: "Framer Motion", logo: "/logos/framer.svg" },
  ];

  const other = [
    { name: "MySQL", logo: "/logos/mysql.svg" },
    { name: "Npm", logo: "/logos/npm.svg" },
    { name: "Git", logo: "/logos/git.svg" },
    { name: "GitHub", logo: "/logos/github.svg" },
    { name: "Vercel", logo: "/logos/vercel.svg" },
    { name: "Postman", logo: "/logos/postman.svg" },
    { name: "Linux", logo: "/logos/linux.svg" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const renderSkills = (skills, title) => (
    <div className="mb-8">
      <motion.h3
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-xl font-bold text-white mb-4"
      >
        {title}
      </motion.h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="group p-2 bg-white/10 backdrop-blur-md rounded-lg shadow-md border border-transparent transition-all duration-300 ease-in-out flex flex-col items-center justify-center space-y-1 hover:border-gray-400"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-white text-xs font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-8">
      <motion.h2
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl font-bold text-white mb-8"
      >
        Skills & Technologies
      </motion.h2>
      {renderSkills(languages, "Languages")}
      {renderSkills(frameworks, "Frameworks & Libraries")}
      {renderSkills(other, "Other Tools & Technologies")}
    </section>
  );
}

export default Skills;
