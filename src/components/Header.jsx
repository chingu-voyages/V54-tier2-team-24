import { useState, useEffect } from "react";
import { GiSpellBook } from "react-icons/gi";
import HelpMenu from "./helpMenu/HelpMenu";
import { signInWithGoogle } from "../../utils/firebase/firebase";

function getDate() {
  const today = new Date();
  return today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Header() {
  const [currentDate, setCurrentDate] = useState(getDate());
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    setCurrentDate(getDate());
  }, []);

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  return (
    <>
      <HelpMenu
        width="w-full sm:w-1/2 md:w-1/3 lg:w-1/3"
        position="right-0"
        isOpen={showHelp}
        onRequestClose={toggleHelp}
      />

      <header className="flex flex-wrap justify-between items-center sticky top-0 left-0 w-full bg-blue-100 shadow-md p-4 z-50">
        <div className="flex flex-col items-center sm:items-start sm:pl-10 justify-center">
          <GiSpellBook className="text-blue-400 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
          <h1 className="text-blue-400 font-sans text-xl sm:text-lg md:text2xl text-center sm:text-left">
            App Name
          </h1>
        </div>

        <div className="flex flex-col items-end gap-2 pr-5 sm:flex-col sm:items-end sm:ml-auto sm:mt-4">
          {/* <img
            className="w-12 h-12 ml-8 rounded-full border-2 border-white cursor-pointer"
            src="./avatar.jpeg"
            alt="avatar"
          /> */}
  <button onClick={signInWithGoogle} className="bg-blue-500 text-white px-4 py-2 rounded">
        Sign in with Google
      </button>
          <h3 className="text-blue-400 font-sans mt-6 text-sm sm:text-base">
            {currentDate}
          </h3>

          <button
            className="text-white bg-blue-400 rounded-lg px-2 mt-2 text-sm sm:text-base"
            onClick={toggleHelp}
          >
            Help Menu
          </button>
        </div>
      </header>
    </>
  );
}
export default Header;
