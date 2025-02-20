import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! I'll get back to you soon. 🚀");
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-12"
    >
      <motion.div
        className="relative z-10 max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-white mb-6">Get in Touch ✉️</h2>

        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Have a project in mind? Let’s build something **amazing** together!  
          Feel free to **reach out** through my socials or drop a message below.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-gray-300 text-left mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-3 bg-white/10 border border-gray-600 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 text-left mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-3 bg-white/10 border border-gray-600 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 text-left mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Write your message..."
              className="p-3 bg-white/10 border border-gray-600 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-md cursor-pointer"
          >
            Send Message 🚀
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
