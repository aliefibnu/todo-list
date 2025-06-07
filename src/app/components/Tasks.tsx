import { Todo } from "@/types/Todo";
import { FaTrash } from "react-icons/fa";
import Notiflix from "notiflix";
import { motion, AnimatePresence } from "framer-motion";

interface TasksProps {
  tasks: Todo[];
  filteredTasks: Todo[];
  setTasks: (tasks: Todo[]) => void;
  setIsSorted: (isSorted: boolean) => void;
  setFilteredTasks: (tasks: Todo[]) => void;
}

export default function Tasks({
  tasks,
  filteredTasks,
  setTasks,
  setIsSorted,
  setFilteredTasks,
}: TasksProps) {
  const handleDelete = (id: number) => {
    Notiflix.Confirm.show(
      "Konfirmasi Hapus",
      "Apakah Anda yakin ingin menghapus tugas ini?",
      "Ya",
      "Tidak",
      () => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks);
        localStorage.setItem("todos", JSON.stringify(updatedTasks));
        Notiflix.Notify.success("Tugas berhasil dihapus!");
      }
    );
  };

  const handleStatusChange = (id: number, status: Todo["status"]) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
    setIsSorted(false);
    localStorage.setItem("todos", JSON.stringify(updatedTasks));
    Notiflix.Notify.info("Status tugas diperbarui!");
  };

  return (
    <div className="space-y-4 mt-6">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          Belum ada tugas.
        </p>
      ) : (
        <AnimatePresence>
          {filteredTasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-blue-100 to-pink-100 dark:from-gray-700 dark:to-gray-800 p-4 rounded-xl shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div>
                    <img
                      src={
                        task.prioritizeLevel === "high"
                          ? "/media/icon/task_icon/high.svg"
                          : task.prioritizeLevel === "medium"
                          ? "/media/icon/task_icon/medium.svg"
                          : "/media/icon/task_icon/" + task.category + ".svg"
                      }
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {task.name}
                    </h3>
                    {task.category && (
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Kategori: {task.category}
                      </p>
                    )}
                    <p
                      className={`text-sm ${
                        task.prioritizeLevel === "high"
                          ? "font-bold text-red-600 dark:text-red-300"
                          : task.prioritizeLevel === "medium"
                          ? "font-semibold text-yellow-600 dark:text-yellow-300"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      Prioritas: {task.prioritizeLevel}
                    </p>
                    {task.due && (
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Tenggat:{" "}
                        {new Date(task.due).toLocaleDateString("id-ID")}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <select
                    value={task.status}
                    onChange={(e) =>
                      handleStatusChange(
                        task.id,
                        e.target.value as Todo["status"]
                      )
                    }
                    className="p-2 rounded-lg bg-white dark:bg-gray-600 border-2 border-purple-300 dark:border-purple-600 focus:outline-none"
                  >
                    <option value="pending">Pending</option>
                    <option value="in_progress">Dalam Proses</option>
                    <option value="completed">Selesai</option>
                  </select>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="p-2 text-red-500 hover:text-red-600 transition-colors duration-300"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      )}
    </div>
  );
}
