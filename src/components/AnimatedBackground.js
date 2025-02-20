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
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"
        animate={{
          x: [0, 200, -200, 0],
          y: [0, 100, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-blue-400 rounded-full opacity-20 blur-xl"
        animate={{
          x: [200, -100, 100, 200],
          y: [-100, 100, -50, -100],
          scale: [1, 1.5, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
      />

      
    </motion.div>
  );
};

export default AnimatedBackground;