import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://my-portfolio-y7mr.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => setSubmitted(false), 3000);
      } else {
        console.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-16">
      <motion.div
        className="relative z-10 max-w-3xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-white mb-8">Get in Touch ✉️</h2>

        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Have a project in mind? Let’s build something <b>amazing</b> together!  
          Feel free to <b>reach out</b> through my socials or drop a message below.
        </p>

        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center justify-center text-green-400 font-semibold bg-green-900/20 py-3 px-5 rounded-md mb-6 space-x-2"
          >
            <span className="text-2xl">✅</span>
            <span>Message sent! I’ll get back to you soon.</span>
          </motion.p>
        )}

        {!submitted && (
          <motion.form onSubmit={handleSubmit} className="space-y-8">
            <motion.div className="flex flex-col">
              <label className="text-gray-300 text-left mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="p-4 text-lg bg-white/10 border border-gray-600 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </motion.div>

            <motion.div className="flex flex-col">
              <label className="text-gray-300 text-left mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="p-4 text-lg bg-white/10 border border-gray-600 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </motion.div>

            <motion.div className="flex flex-col">
              <label className="text-gray-300 text-left mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message..."
                className="p-4 text-lg bg-white/10 border border-gray-600 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: loading ? 1 : 1.05 }}
              whileTap={{ scale: loading ? 1 : 0.95 }}
              disabled={loading}
              className={`w-full py-4 text-lg font-semibold rounded-full shadow-md transition-all ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
              }`}
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </motion.button>
          </motion.form>
        )}
      </motion.div>
    </section>
  );
}

export default Contact;
