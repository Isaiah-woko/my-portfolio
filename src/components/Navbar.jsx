import React, { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 p-4 bg-white/10 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Profile Image as Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full overflow-hidden cursor-pointer"
        >
          <img
            alt="User profile"
            src="/Isaiah.jpg"
            onError={(e) => (e.target.src = "/default-avatar.png")}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 90 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            ☰
          </motion.div>
        </button>

        {/* Navigation Links (Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="hidden lg:flex space-x-8 flex-1 justify-center"
        >
          {["Home", "About Me", "Skills", "Portfolio"].map((item) => (
            <motion.a
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-white font-semibold hover:text-blue-400 transition-all"
              onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden mt-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/10"
        >

          <ul className="flex flex-col space-y-2 p-4">
            {["Home", "About Me", "Skills", "Portfolio"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <button
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="w-full text-left text-white font-semibold hover:text-blue-400 transition-all"
                >
                  {item}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
