import { FaTimes, FaPlus } from "react-icons/fa";

interface AddButtonProps {
  onClick: () => void;
  isFormShowed: boolean;
}

export default function AddButton({ onClick, isFormShowed }: AddButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 text-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
    >
      <FaPlus
        className={`transition-all duration-500 text-lg ${
          isFormShowed && "rotate-45"
        }`}
      />
    </button>
  );
}
