import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import lostRobot from "../assets/lost-robot.json";
import backgroundImage from "../assets/404-bg.jpg";

const NotFound = () => {
  return (
    <>
      {/* Animated Blob Background */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full"
          style={{
            bottom: "-460px",
            left: "-250px",
            background:
              "radial-gradient(circle,   #2519ad 80%, transparent 60%)",
            filter: "blur(360px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.8],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeOut",
          }}
        />
      </motion.div>

      {/* Not Found Page Content */}
      <div
        className="flex flex-1 flex-col md:flex-row items-center justify-center bg text-white p-6 md:gap-20 w-full h-full relative z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Lottie Animation */}
        <div className="w-64 h-64 md:w-80 md:h-80 mt-0 md:order-2">
          <Lottie animationData={lostRobot} loop={true} />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left max-w-[320px] md:order-1 md:mt-2 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-karlabold">
            Something went wrong!
          </h1>
          <p className="mb-6 font-inconsolataregular text-white/70">
            Looks like the AiQ Elves took a coffee break, or are out partying
            again!
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-4">
            <Link
              to="/"
              className="font-inconsolataregular px-4 py-1 bg-blue-300 text-base text-black rounded hover:bg-blue-400 transition"
            >
              Return To Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="font-inconsolataregular px-4 py-1 bg-blue-300 text-base text-black rounded hover:bg-blue-400 transition cursor-pointer"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
