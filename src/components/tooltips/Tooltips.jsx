import { useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";

export default function Tooltips({ pentaPrompts }) {
  const { tooltip } = pentaPrompts;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block cursor-pointer font-inconsolataregular">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <BsQuestionCircleFill className="text-2xl text-icon transform transition-transform duration-300 hover:scale-110" />
      </div>

      {isOpen && (
        <div className="absolute right-4  bottom-5 z-10 w-64 h-24   p-4 bg-gradient-to-br from-blue-200 to-blue-300  shadow-xl rounded-xl  backdrop-blur-sm font-bold bg-opacity-90 transform transition-all ease-in-out">
          <div className="flex items-center justify-center h-full">
            <p className="text-sm text-gray-600 text-center">{tooltip}</p>
          </div>
        </div>
      )}
    </div>
  );
}
