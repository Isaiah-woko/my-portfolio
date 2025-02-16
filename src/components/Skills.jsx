import React from "react";

function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h2 className="text-3xl font-bold text-gray-900">Skills & Technologies</h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div className="p-4 bg-white rounded-lg shadow-md">JavaScript</div>
        <div className="p-4 bg-white rounded-lg shadow-md">React</div>
        <div className="p-4 bg-white rounded-lg shadow-md">Django</div>
        <div className="p-4 bg-white rounded-lg shadow-md">Python</div>
        <div className="p-4 bg-white rounded-lg shadow-md">TailwindCSS</div>
        <div className="p-4 bg-white rounded-lg shadow-md">Framer Motion</div>
        <div className="p-4 bg-white rounded-lg shadow-md">TailwindCSS</div>  
      </div>
    </section>
  );
}

export default Skills;
