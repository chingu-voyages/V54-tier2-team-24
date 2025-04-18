import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

const CopyButton = ({ responseText }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(responseText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };

  return (
    <div
      onClick={handleCopy}
      className="flex justify-center items-center text-center cursor-pointer"
    >
      <button
        className="text-white transition cursor-pointer"
        style={{ fontSize: 40 }}
      >
        {copied ? <Check size={30} /> : <Copy size={30} />}
      </button>
      <p className="ml-2 text-white">Copy</p>
      {copied && (
        <span className="absolute top-full mt-1 px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-100 transition">
          Copied!
        </span>
      )}
    </div>
  );
};

export default CopyButton;
