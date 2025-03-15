import { useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";

export default function Tooltips({ pentaPrompts }) {
  const { tooltip } = pentaPrompts;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block cursor-pointer">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <BsQuestionCircleFill className="text-2xl text-blue-500 transform transition-transform duration-300 hover:scale-110" />
      </div>

      {isOpen && (
        <div className="absolute right-2 md:left-0 bottom-8 z-10 w-64  p-4 bg-gradient-to-br from-blue-200 to-blue-500 border-1 shadow-xl rounded-xl text-white backdrop-blur-sm font-bold bg-opacity-90 transform transition-all ease-in-out">
          <p className="text-sm text-gray-700">{tooltip}</p>
        </div>
      )}
    </div>
  );
}
