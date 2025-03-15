import React, { useState, useEffect } from "react";
import "./HandleLoading.css";

const LoadingFeature = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // Simulate loading for 2 seconds
  //   return () => clearTimeout(timer); // Clean up the timer on unmount
  // }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <div>Loading...</div>
        </div>
      ) : (
        <button
          className="loading-button"
          onClick={() => {
            handleClick();
          }}
          disabled={loading}
        >
          Loadingfeature
        </button>
      )}
    </div>
  );
};

export default LoadingFeature;
