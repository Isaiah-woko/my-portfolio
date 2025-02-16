import React from "react";

function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>
      <p className="text-lg text-gray-700 mt-4">Let's build something amazing together! 🚀</p>
      <div className="mt-6 space-x-4">
        <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
        <a href="#" className="text-blue-600 hover:underline">GitHub</a>
        <a href="#" className="text-blue-600 hover:underline">Email</a>
      </div>
    </section>
  );
}

export default Contact;
