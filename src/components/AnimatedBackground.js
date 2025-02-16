import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Main gradient blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, 200, -200, 0],
          y: [0, 100, -100, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-blue-400 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [200, -100, 100, 200],
          y: [-100, 100, -50, -100],
          scale: [2, 1.7, 1],
          rotate: [360, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
      />

      {/* Subtle particle effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 1 }}
      >
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Additional layers for depth */}
      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [-100, 150, -150, -100],
          y: [150, -100, 150, 150],
          scale: [1, 1.5, 1],
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default AnimatedBackground;