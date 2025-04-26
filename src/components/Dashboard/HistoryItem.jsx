import { Link } from "react-router-dom";
import { deleteUserHistory } from "../../../utils/firebase/firebase"
import { toast } from "react-toastify";

export default function HistoryItem({ item, onDelete }) {
  const handleDelete = async () => {
  try {
    toast.warning(
      ({ closeToast }) => (
        <div>
          <p>Are you sure you want to delete this item?</p>
          <div className="toast-actions">
            <button
              onClick={async () => {
                closeToast();
                try {
                  await deleteUserHistory(item.id);
                  if (onDelete) onDelete(item.id);
                  toast.success("Item deleted successfully");
                } catch (error) {
                  console.error("Error deleting history item:", error);
                  toast.error("Failed to delete item");
                }
              }}
              className="px-4 py-1 rounded-md border-1 border-red-400 text-red-400 mt-3 text-sm shadow-md cursor-pointer"
            >
              Delete
            </button>
            <button onClick={closeToast}
            className="px-4 py-1 rounded-md border-1 border-blue-400 text-blue-400 mt-3 text-sm shadow-md cursor-pointer"
            >Don't Delete</button>
          </div>
        </div>
      ),
      {
        autoClose: false,
        closeOnClick: false,
      }
    );
  } catch (error) {
    console.error("Error displaying delete confirmation:", error);
    toast.error("Something went wrong");
  }
};
  const truncateText = (text, wordLimit) => {
  if (!text) return "Untitled";

  const words = text.split(/\s+/);
  if (words.length <= wordLimit) return text;

  return words.slice(0, wordLimit).join(" ") + "...";
};

  return (
    <div className="border border-blue-400 rounded-xl p-4 m-3 flex justify-between items-center bg-white/20">
      <h4 className="font-medium text-white">
        {item.input[2] ? truncateText(item.input[2], 15) : "Untitled"}
      </h4>

      <div className="flex gap-4">
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>

        <Link
          to={`/user-history/${item.userId}/${item.id}`}
          className="text-blue-300 hover:text-blue-400"
        >
          View
        </Link>
      </div>
    </div>
  );
}