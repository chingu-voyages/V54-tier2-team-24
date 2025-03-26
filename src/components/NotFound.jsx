import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-blue-400">
      <h1 className="text-4xl font-bold mb-4">404 Error - Page Is Not Found</h1>
      <p className="mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/"
          className="px-4 py-2 bg-blue-300 text-white rounded hover:bg-blue-400 transition"
        >
          Return To Homepage
        </Link>
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-blue-300 text-white rounded hover:bg-blue-400 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
