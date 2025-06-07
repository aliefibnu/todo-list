"use client";
import { useEffect, useState } from "react";
import { getRandomQuote } from "@/modules/inspirational-quotes";
import { FaQuoteLeft } from "react-icons/fa";

export default function Banner() {
  const [quote, setQuote] = useState<string>("");

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 text-slate-800 dark:text-white p-6 rounded-2xl shadow-lg max-w-2xl mx-auto transition-all duration-300  w-full">
      <div className="flex items-start space-x-4">
        <FaQuoteLeft className="text-2xl text-blue-500 dark:text-blue-300" />
        <div>
          <h1 className="text-2xl font-bold">{quote}</h1>
          <p className="mt-2 text-sm opacity-80">
            Atur tugas dan kegiatan kamu dengan efisien.
          </p>
        </div>
      </div>
    </div>
  );
}
