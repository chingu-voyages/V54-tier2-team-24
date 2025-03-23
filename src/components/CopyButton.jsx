import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={handleCopy}
        className="p-1 rounded-md text-blue-500 mt-3 hover:bg-blue-300 transition cursor-pointer"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      {copied && (
        <span className="absolute top-full mt-1 px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-100 transition">
          Copied!
        </span>
      )}
    </div>
  );
};

export default CopyButton;
