import { useState } from "react";
import { ClipboardCheck, Check } from "lucide-react";

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  return (
    <button className="flex items-center gap-2 px-6 py-2 rounded-md bg-blue-300 text-blue-500 mt-3 hover:bg-blue-400 hover:text-white transition cursor-pointer">
      <ClipboardCheck className="w-5 h-5" />
      Copy
    </button>
  );
};

export default CopyButton;
