import { useState, useEffect } from "react";
import { GiSpellBook } from "react-icons/gi";
import HelpMenu from "./helpMenu/HelpMenu";
import {
  logoutUser,
  signInWithGoogle,
  useFirebaseAuth,
} from "../../utils/firebase/firebase";

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
    <>
      {/* <HelpMenu
        width="w-full sm:w-1/2 md:w-1/3 lg:w-1/3"
        position="right-0"
        isOpen={showHelp}
        onRequestClose={toggleHelp}
      /> */}

      <header className="flex flex-wrap justify-between items-center sticky top-0 left-0 w-full bg-blue-100 shadow-md p-4 z-50">
        <div className="flex flex-col items-center sm:items-start sm:pl-10 justify-center">
          <div className="flex items-center justify-items-start">
            <img
              src="/designAssets/robot_logo.png"
              alt="Description of AiQ Logo"
              className="w-15 h-15"
            />
            <h1 className="text-blue-400 font-sans text-xl sm:text-lg md:text2xl text-center sm:text-left">
              App Name
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 pr-5 sm:flex-col sm:items-end sm:ml-auto sm:mt-4">
          <div>
            {isAuthenticated ? (
              <div className="flex flex-col items-center gap-4">
                <div className="flex">
                  <img
                    className="w-10 h-10 rounded-4xl"
                    src={user?.photoURL}
                    alt={`${user.displayName}s Avatar`}
                  />
                  <span>{user.displayName || "User"}</span>
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
                className="bg-blue-900 text-white px-4 py-2 "
              >
                Google Sign In
              </button>
            )}
          </div>

          <h3 className="text-blue-400 font-sans mt-6 text-sm sm:text-base">
            {currentDate}
          </h3>
          {/* <button
            className="text-white bg-blue-400 rounded-lg px-2 mt-2 text-sm sm:text-base"
            onClick={toggleHelp}
          >
            Help Menu
          </button> */}
        </div>
      </header>
    </>
  );
}
export default Header;
