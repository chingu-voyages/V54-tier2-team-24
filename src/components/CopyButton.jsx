import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1 rounded-md text-blue-500 mt-3 hover:bg-blue-300 transition cursor-pointer"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
    </button>
  );
};

export default CopyButton;
