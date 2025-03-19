import { useState } from "react";

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  return <button>Copy</button>;
};

export default CopyButton;
