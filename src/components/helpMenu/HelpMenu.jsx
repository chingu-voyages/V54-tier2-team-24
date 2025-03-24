import { useEffect, useState } from "react";
import { useHelpData } from "../../contexts/HelpDataContext";
import AdvanceFeatures from "./helpMenuSections/AdvanceFeatures";
import Faq from "./helpMenuSections/Faq";
import GettingStarted from "./helpMenuSections/GettingStarted";
import { IoCloseOutline } from "react-icons/io5";
import { FaWindowClose } from "react-icons/fa";

const HelpMenu = ({ width, position, isOpen, onRequestClose }) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [isSectionOpen, setIsSectionOpen] = useState(null);
  const { helpDataObject } = useHelpData();
  const { introduction, gettingStarted, faqs, advancedFeatures } =
    helpDataObject;

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

  return (
    <div
      className={`fixed top-0 right-0 bg-black/[0.65] w-full h-screen z-40 transition-opacity duration-300
        ${isOpen ? "opacity-100" : "opacity-0"} ${
        isVisible ? "" : "invisible"
      }`}
    >
      <div
        className={`bg-white pt-12 ${width} absolute ${position} h-screen shadow-lg transform transition-transform duration-700
          ${isOpen ? "translate-x-0" : "translate-x-full"} overflow-y-auto`}
      >
        <div className=" w-full flex flex-col gap-5">
          <div className="flex items-center justify-between px-2 ">
            <h2 className="text-neutral-900  text-2xl font-bold pt-40 sm:pt-40 md:pt-40 underline">
              {introduction.title}
            </h2>
            <button
              onClick={onRequestClose}
              className="sm:pt-30 md:pt-40 text-neutral-900    text-4xl hover:text-gray-700  cursor-pointer rounded-2xl"
            >
              <FaWindowClose />
            </button>
          </div>

          <p>{introduction.content}</p>
        </div>

        <div>
          <GettingStarted
            data={gettingStarted}
            toggleSection={toggleSection}
            isSectionOpen={isSectionOpen}
          />
          <Faq
            data={faqs}
            toggleSection={toggleSection}
            isSectionOpen={isSectionOpen}
          />
          <AdvanceFeatures
            data={advancedFeatures}
            toggleSection={toggleSection}
            isSectionOpen={isSectionOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default HelpMenu;
