import { motion } from "framer-motion";

const primary = "#0D00A4";
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
            radial-gradient(circle at 80% 70%, ${secondary}40 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, ${tertiary}40 0%, transparent 40%)
          `,
          filter: "blur(100px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Floating particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/50 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </motion.div>
  );
};

export default BackgroundEffect;
