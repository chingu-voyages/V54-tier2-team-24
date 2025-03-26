import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import lostRobot from "../../public/assets/lost-robot.json";

const NotFound = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-blue-100 text-blue-400 p-6 md:gap-20">
      {/* Lottie Animation */}
      <div className="w-64 h-64 md:w-80 md:h-80 mt-6 md:order-2">
        <Lottie animationData={lostRobot} loop={true} />
      </div>
      {/* Text Section */}
      <div className="text-center md:text-left max-w-[320px] md:order-1 md:mt-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Something went wrong!
        </h1>
        <p className="mb-4">
          Looks like the AiQ Elves took a coffee break, or are out partying
          again!
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-4">
          <Link
            to="/"
            className="px-4 py-2 bg-blue-300 text-white rounded hover:bg-blue-400 transition"
          >
            Return To Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-blue-300 text-white rounded hover:bg-blue-400 transition cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
