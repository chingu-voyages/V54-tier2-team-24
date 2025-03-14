import React, { useState } from "react";

const SubmitButton = ({ fields }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div>
      <button className="mt-4 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
