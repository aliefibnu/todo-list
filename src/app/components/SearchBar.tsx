"use client";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export default function SearchBar({
  searchValue,
  setSearchValue,
}: SearchBarProps) {
  return (
    <div className="relative grow">
      <input
        type="text"
        placeholder="Cari tugas..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full p-3 pl-10 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-2 border-purple-300 dark:border-purple-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-all duration-300"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
    </div>
  );
}
