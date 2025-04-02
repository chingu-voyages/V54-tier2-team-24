import React, { useState, useEffect } from "react";
import "./HandleLoading.css";

const LoadingFeature = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <div>Loading...</div>
        </div>
      ) : null}
    </div>
  );
};

export default LoadingFeature;
