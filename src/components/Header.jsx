import { useState, useEffect } from "react";
import { GiSpellBook } from "react-icons/gi";
import HelpMenu from "./helpMenu/HelpMenu";
import {
  logoutUser,
  signInWithGoogle,
  useFirebaseAuth,
} from "../../utils/firebase/firebase";
import { FaRegQuestionCircle } from "react-icons/fa";
import { format } from "date-fns";

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

  const { user, isAuthenticated } = useFirebaseAuth();

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setCurrentDate(format(getDate(), "MM/dd/yyyy"));
  }, []);

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  return (
    // Swithc to VH
    <header className="flex justify-evenly items-center sticky top-0 left-0 w-full bg-[#02010B] shadow-md p-4 z-50">
      <div className="flex items-center gap-3 w-1/3 ">
        {/* <img
          src="/designAssets/robot_logo.png"
          alt="Description of AiQ Logo"
          className="w-9 h-9"
        /> */}
        <h1 className="text-white font-karla font-bold text-xl ">AiQ</h1>
      </div>
      <div className="w-1/3 text-center ">
        <h3 className="text-white font-sans text-sm sm:text-base">
          {currentDate}
        </h3>
      </div>

      <div className="flex justify-end items-center gap-2 w-1/3">
        {isAuthenticated ? (
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src={user.photoURL}
                alt={`${user.displayName}s Avatar`}
                referrerPolicy="no-referrer"
              />
              <span className="text-white">{user.displayName || "User"}</span>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-4xl text-sm cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-blue-700 hover:bg-blue-500 text-white px-5 py-1 rounded-4xl text-sm cursor-pointer"
          >
            Sign In
          </button>
        )}{" "}
        <button onClick={toggleHelp} className="cursor-pointer ">
          <FaRegQuestionCircle className="text-white h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
export default Header;
