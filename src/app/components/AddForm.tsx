"use client";
import { useState } from "react";
import { Todo } from "@/types/Todo";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Notiflix from "notiflix";
import Select, { SingleValue } from "react-select";

// Definisikan opsi kategori
const categoryOptions: { value: Todo["category"]; label: string }[] = [
  { value: "Pekerjaan", label: "Pekerjaan" },
  { value: "Pribadi", label: "Pribadi" },
  { value: "Belanja", label: "Belanja" },
  { value: "Pendidikan", label: "Pendidikan" },
  { value: "Kesehatan", label: "Kesehatan" },
  { value: "Keuangan", label: "Keuangan" },
  { value: "Hobi", label: "Hobi" },
  { value: "Proyek", label: "Proyek" },
  { value: "Perjalanan", label: "Perjalanan" },
  { value: "Lainnya", label: "Lainnya" },
];

interface AddFormProps {
  onAdd: (todo: Todo) => void;
}

export default function AddForm({ onAdd }: AddFormProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<Todo["category"]>("Lainnya");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("low");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      Notiflix.Notify.warning("Nama tugas tidak boleh kosong!");
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      name,
      category,
      prioritizeLevel: priority,
      status: "pending",
      due: dueDate ? new Date(dueDate) : null,
      created_at: new Date(),
    };

    onAdd(newTodo);
    setName("");
    setCategory("Lainnya");
    setPriority("low");
    setDueDate("");
  };

  // Menangani perubahan kategori
  const handleCategoryChange = (
    selected: SingleValue<{ value: Todo["category"]; label: string }>
  ) => {
    setCategory(selected?.value ?? "Lainnya");
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-r from-pink-200 to-purple-200 dark:from-gray-700 dark:to-gray-800 p-6 rounded-2xl shadow-lg mt-4"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Nama Tugas
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded-lg bg-white dark:bg-gray-600 border-2 border-purple-300 dark:border-purple-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-all duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Kategori (Opsional)
            </label>
            <Select
              options={categoryOptions}
              value={categoryOptions.find(
                (option) => option.value === category
              )}
              onChange={handleCategoryChange}
              placeholder="Pilih atau ketik kategori..."
              isClearable
              className="text-gray-800 dark:text-gray-200"
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: "var(--select-bg)",
                  borderColor: "var(--select-border)",
                  borderRadius: "0.5rem",
                  padding: "0.25rem",
                  boxShadow: "none",
                  "&:hover": {
                    borderColor: "var(--select-border-hover)",
                  },
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: "var(--select-bg)",
                  borderRadius: "0.5rem",
                }),
                option: (base, { isFocused }) => ({
                  ...base,
                  backgroundColor: isFocused
                    ? "var(--select-option-hover)"
                    : "var(--select-bg)",
                  color: "var(--select-text)",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "var(--select-text)",
                }),
                placeholder: (base) => ({
                  ...base,
                  color: "var(--select-placeholder)",
                }),
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Prioritas
            </label>
            <select
              value={priority}
              onChange={(e) =>
                setPriority(e.target.value as "low" | "medium" | "high")
              }
              className="w-full p-2 rounded-lg bg-white dark:bg-gray-600 border-2 border-purple-300 dark:border-purple-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-all duration-300"
            >
              <option value="low">Rendah</option>
              <option value="medium">Sedang</option>
              <option value="high">Tinggi</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Tenggat Waktu (Opsional)
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full p-2 rounded-lg bg-white dark:bg-gray-600 border-2 border-purple-300 dark:border-purple-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 text-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Tambah Tugas
          </button>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}
