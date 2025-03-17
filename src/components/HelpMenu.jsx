const HelpMenu = ({ title, width, position, isOpen, onRequestClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 bg-black/[0.65] w-full h-screen z-40 transition-opacity duration-300 
        ${isOpen ? "opacity-100" : "opacity-0 invisible"}`}
    >
      <div
        className={`bg-white px-8 py-12 ${width} absolute ${position} h-screen shadow-lg transform transition-transform duration-700
        ${isOpen ? "translate-x-0" : "translate-x-full"} overflow-y-auto`}
      >
        <h2 className="text-blue-300 text-lg font-bold pt-40 sm:pt-40 md:pt-40">{title}</h2>
        <button
          onClick={onRequestClose}
          className="absolute top-4 right-4 pt-40 sm:pt-30 md:pt-45 text-gray-900 text-xl hover:text-gray-900 cursor-pointer"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default HelpMenu;
