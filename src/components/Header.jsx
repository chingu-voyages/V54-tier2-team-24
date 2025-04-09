import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
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
      setShowDropdown(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setCurrentDate(format(getDate(), "MM/dd/yyyy"));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="grid grid-cols-3 items-center sticky top-0 left-0 w-full bg-[#02010B] shadow-md p-4 z-50 h-[7vh]">
      <div className="flex items-center gap-3">
        <h1
          className="text-white font-karlasemibold text-2xl cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          AiQ
        </h1>
      </div>

      <div className="text-center">
        <h3 className="text-white font-karlasemibold text-xs sm:text-base">
          {currentDate}
        </h3>
      </div>

      <div className="flex justify-end items-center gap-2">
        {isAuthenticated ? (
          <div className="flex items-center gap-2 relative" ref={dropdownRef}>
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-full cursor-pointer"
                src={user.photoURL}
                alt={`${user.displayName}s Avatar`}
                referrerPolicy="no-referrer"
                onClick={toggleDropdown}
              />
              <span className="hidden sm:inline text-white font-karlasemibold ml-2">
                {user.displayName || "User"}
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="hidden sm:block bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-4xl text-sm font-karlasemibold cursor-pointer"
            >
              Sign Out
            </button>

            {showDropdown && (
              <div className="absolute right-0 top-10 bg-[#1a1a2e] rounded-md shadow-lg py-2 z-50 min-w-[120px]">
                <div className="px-4 py-2 text-white text-sm border-b border-gray-700 hidden sm:block">
                  {user.displayName || "User"}
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-white text-sm hover:bg-[#2a2a40] transition-colors"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-blue-700 hover:bg-blue-500 text-white px-3 sm:px-5 py-1 rounded-4xl text-sm font-karlasemibold cursor-pointer"
          >
            Sign In
          </button>
        )}
        <button onClick={toggleHelp} className="cursor-pointer ml-2">
          <FaRegQuestionCircle className="text-white h-5 w-5" />
        </button>
      </div>

      {showHelp && <HelpMenu onClose={toggleHelp} />}
    </header>
  );
}
export default Header;
