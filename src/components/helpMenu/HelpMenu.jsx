import { useEffect, useState } from "react";
import { useFirestore } from "../../contexts/FirestoreContext";
import AdvanceFeatures from "./helpMenuSections/AdvanceFeatures";
import Faq from "./helpMenuSections/Faq";
import GettingStarted from "./helpMenuSections/GettingStarted";
import { FaWindowClose } from "react-icons/fa";

const HelpMenu = ({ width, position, isOpen, onRequestClose }) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [isSectionOpen, setIsSectionOpen] = useState(null);
  const { helpDataObject, loading } = useFirestore();
  const getWelcome = (str) => {
    return str.split(" ").slice(0, 4).join(" ");
  };

  const removeWelcome = (str, numWords = 4) => {
    const words = str.split(" ");
    if (words.length <= numWords) {
      return "";
    }
    return words.slice(numWords).join(" ");
  };

  const welcome = getWelcome(helpDataObject?.introduction?.content || "");
  const welcomeContent = removeWelcome(
    helpDataObject?.introduction?.content || ""
  );

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const toggleSection = (sectionId) => {
    setIsSectionOpen((current) => (current === sectionId ? null : sectionId));
  };

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div
      className={`font-Inconsolata-Regular fixed top-0 right-0 backdrop-blur-xs w-full h-screen z-40 transition-blur duration-300
        ${isOpen ? "opacity-100" : "opacity-0"} ${
        isVisible ? "" : "invisible"
      }`}
    >
      <div
        className={`bg-black ${width} absolute ${position} h-full shadow-lg transform transition-transform duration-700
          ${isOpen ? "translate-x-0" : "translate-x-full"} overflow-y-auto`}
      >
        <div className=" w-full flex flex-col gap-5">
          <div className="flex items-center justify-between px-2 pt-10 ">
            <h2 className="text-gray-300  text-2xl font-bold underline">
              {helpDataObject?.introduction.title}
            </h2>
            <button
              onClick={onRequestClose}
              className="sm:pt-10 md:pt-10 text-blue-300 text-4xl hover:text-blue-400  cursor-pointer rounded-2xl"
            >
              <FaWindowClose />
            </button>
          </div>
          <div className="text-center flex flex-col gap-3 mb-4">
            <h2 className="text-center text-white text-3xl font-bold">{welcome}</h2>
            <p className="text-white mx-2">{welcomeContent}</p>
          </div>
        </div>

        <div className="flex flex-col justify-evenly items-stretch h-1/2">
          <GettingStarted
            data={helpDataObject?.gettingStarted}
            toggleSection={toggleSection}
            isSectionOpen={isSectionOpen}
          />
          <Faq
            data={helpDataObject?.faqs}
            toggleSection={toggleSection}
            isSectionOpen={isSectionOpen}
          />
          <AdvanceFeatures
            data={helpDataObject?.advancedFeatures}
            toggleSection={toggleSection}
            isSectionOpen={isSectionOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default HelpMenu;
