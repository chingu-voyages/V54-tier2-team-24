import React, { useEffect, useState } from "react";
import { usePentagram } from "./PentagramContext.jsx";

const PromptField = () => {
  const { index, inputs, updateInput, pentaPrompts } = usePentagram();
  const [inputValue, setInputValue] = useState(inputs[index]);
  useEffect(() => {
    setInputValue(inputs[index] || "");
  }, [index, inputs]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    updateInput(e.target.value);
  };
  return (
<div className="w-full">
  <textarea
    className="border-3 h-80 border-blue-300 rounded-lg text-blue-350 w-full"
    placeholder={pentaPrompts[index].placeholder}
    value={inputValue}
    required={true}
    onChange={handleChange}
  />
</div>
  );
};
export default PromptField;
