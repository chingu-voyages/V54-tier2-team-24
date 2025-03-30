import { useState, useEffect } from "react";
import { GiSpellBook } from "react-icons/gi";
import HelpMenu from "./helpMenu/HelpMenu";
import {
  logoutUser,
  signInWithGoogle,
  useFirebaseAuth,
} from "../../utils/firebase/firebase";
import { FaRegQuestionCircle } from "react-icons/fa";

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
    setCurrentDate(getDate());
  }, []);

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  return (
    <header className="flex justify-between items-center sticky top-0 left-0 w-full bg-neutral-900 shadow-md p-4 z-50">
      <div className="flex items-center gap-3">
        <img
          src="/designAssets/robot_logo.png"
          alt="Description of AiQ Logo"
          className="w-9 h-9"
        />
        <h1 className="text-white font-sans text-xl md:text-2xl">AiQ</h1>
      </div>

      <h3 className="text-white font-sans text-sm sm:text-base">
        {currentDate}
      </h3>

      <div>
        {isAuthenticated ? (
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {/* <img
              className="w-10 h-10 rounded-full mr-2"
              src={user?.photoURL}
              alt={`${user.displayName}s Avatar`}
            /> */}
              <p className="w-10 h-10 rounded-full mr-2 bg-blue-200 flex items-center justify-center font-bold">
                A
              </p>
              <span className="text-white">{user.displayName || "User"}</span>
            </div>
            <div>

              
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-blue-700 text-white px-3 py-1 rounded-4xl"
          >
            Sign In
          </button>
        )}{" "}
        <FaRegQuestionCircle className="text-white" />
      </div>
    </header>
  );
}
export default Header;
