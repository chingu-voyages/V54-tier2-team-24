import React, { useEffect, useState } from "react";
import {getUserHistory, logoutUser} from "../../../utils/firebase/firebase";
import { FaWindowClose } from "react-icons/fa";
import HistoryItem from "./HistoryItem.jsx";

const History = ({ isOpen,user,onRequestClose, position,width}) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userHistory, setUserHistory] = useState([]);
  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchUserHistory = async () => {
      setLoading(true);
      try {
        if (user) {
          const history = await getUserHistory(user.uid);
          setUserHistory(history);
          setError(null);
        }
      } catch (err) {
        console.error("Error fetching user history:", err);
        setError("Failed to access your history");
      } finally {
        setLoading(false);
      }
    };

    fetchUserHistory();
  }, [user]);

const countWords = (text) => {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}

const wordCountOfResponse = ()=>{
      let responseWords = 0;
      userHistory.forEach(item => {
          if (item.response) {
              responseWords += countWords(item.response);
          }})
      return responseWords;
  }

  const getLatestAccess = () => {
  if (!userHistory || !Array.isArray(userHistory) || userHistory.length === 0) {
    return "Unknown date";
  }
  const latestItem = userHistory[0];
  let formattedDate = "Unknown date";
  let dateObject = null;

  if (latestItem.timestamp) {
    if (latestItem.timestamp.toDate && typeof latestItem.timestamp.toDate === 'function') {
      dateObject = latestItem.timestamp.toDate();
    } else if (latestItem.timestamp instanceof Date) {
      dateObject = latestItem.timestamp;
    } else if (typeof latestItem.timestamp === 'string') {
      dateObject = new Date(latestItem.timestamp);
    } else if (typeof latestItem.timestamp === 'number') {
      dateObject = new Date(latestItem.timestamp);
    }

    if (dateObject) {
      formattedDate = dateObject.toLocaleString();
    }
  }

  return formattedDate;
};
  return (
    <div
      className={`font-Inconsolata-Regular fixed top-0 right-0 bg-black/[0.70] w-full h-screen z-40 transition-blur duration-300
        ${isOpen ? "opacity-100" : "opacity-0"} ${
        isVisible ? "" : "invisible"
      }`}
    >
      <div
        className={`bg-black ${width} absolute ${position} h-full shadow-lg transform transition-transform duration-700
          ${isOpen ? "translate-x-0" : "translate-x-full"} overflow-y-auto`}
      >
        <div className=" w-full flex flex-col gap-5">
          <div className="flex items-center justify-between px-2 pt-5 ">
            <h2 className="text-gray-300 text-2xl font-bold underline">
              Hello, {user.displayName ||"User"}
            </h2>
            <button
              onClick={onRequestClose}
              id="history-dropdown-close"
              className=" text-blue-300 text-4xl hover:text-blue-400  cursor-pointer rounded-2xl"
            >
              <FaWindowClose />
            </button>
          </div>
          <div className="text-center flex flex-col gap-3 mb-4">
            <div className="flex items-center justify-between">
              <img
                className="w-20 h-20 rounded-full m-5"
                src={user.photoURL}
                alt={`${user.displayName}s Avatar`}
                referrerPolicy="no-referrer"
              />
            <button
              onClick={handleLogout}
              className=" font-inconsolataregular bg-blue-300 text-black text-base rounded hover:bg-blue-400 transition cursor-pointer p-2 m-2"
            >Logout</button>
              </div>
              <table className="text-white border-t-2 border-b-2 border-blue-400 m-5">
                  <thead>
                  <tr>
                      <th>Total Prompts</th>
                      <th>Response Word Count</th>
                      <th>Last Access</th>
                  </tr>
                  </thead>
                <tbody>
                  <tr className="border-t-2 border-blue-300">
                      <td>{userHistory.length}</td>
                      <td>{wordCountOfResponse()}</td>
                      <td>{getLatestAccess()}</td>
                  </tr>
                </tbody>
              </table>
        </div>

        <div className="flex flex-col justify-evenly items-stretch h-1/2">
  {!loading && user && userHistory.length === 0 && (
    <div className="text-white m-5">
      <p>You have no history, Start create new prompt now!</p>
    </div>
  )}

      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <div>Loading your history</div>
        </div>
      )}

  {!loading && userHistory.length > 0 && userHistory.map((item) => (
      <HistoryItem key={item.timestamp} item={item} />
  ))}

        </div>
      </div>
    </div>
    </div>
  );
};

export default History;
