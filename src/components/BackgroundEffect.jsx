import { motion } from "framer-motion";

const primary = "#02010B";
const secondary = "#A3CAF6";
const tertiary = "#02caa0";

const BackgroundEffect = () => {
  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, ${primary}40 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, ${secondary}30 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, ${tertiary}30 0%, transparent 40%)
          `,
          filter: "blur(100px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </motion.div>
  );
};

export default BackgroundEffect;
