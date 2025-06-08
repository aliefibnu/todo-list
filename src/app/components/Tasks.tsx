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
  setIdToEdit: (id: number | null) => void;
  setFormEditVisible: (visible: boolean) => void;
}

export default function Tasks({
  tasks,
  filteredTasks,
  setTasks,
  setIsSorted,
  setFilteredTasks,
  setIdToEdit,
  setFormEditVisible,
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
      },
      () => {},
      {
        titleColor: "#f44336",
        messageColor: "#555",
        okButtonBackground: "#f44336",
        okButtonColor: "#fff",
        cancelButtonBackground: "#e0e0e0",
        cancelButtonColor: "#333",
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
              className={`bg-gradient-to-r p-4 rounded-xl shadow-md transition-all duration-300 cursor-pointer hover:scale-[102%]  ${
                task.status === "completed"
                  ? "from-gray-900 to-gray-900"
                  : "from-blue-100 to-pink-100 dark:from-gray-700 dark:to-gray-800"
              }`}
            >
              <div className="flex justify-between items-center gap-x-10 lg:gap-x-5 ">
                <div
                  className="flex items-center space-x-1 grow"
                  onClick={() => {
                    setIdToEdit(task.id);
                    setFormEditVisible(true);
                  }}
                >
                  <div>
                    <img
                      src={
                        task.prioritizeLevel === "high"
                          ? "/media/task_icon/high.svg"
                          : task.prioritizeLevel === "medium"
                          ? "/media/task_icon/medium.svg"
                          : "/media/task_icon/" + task.category + ".svg"
                      }
                    />
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        task.status === "completed"
                          ? "text-gray-200 dark:text-gray-700 line-through"
                          : "text-gray-800 dark:text-white"
                      }`}
                    >
                      {task.name}
                    </h3>
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
                <div className="flex space-x-4 flex-row items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 aspect-square text-blue-600 dark:text-blue-400 rounded-md border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 cursor-pointer transition-all duration-200 hover:border-blue-500 dark:hover:border-blue-300 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-opacity-50 accent-gray-500"
                    checked={task.status === "completed"}
                    onChange={(e) =>
                      handleStatusChange(
                        task.id,
                        e.target.checked ? "completed" : "pending"
                      )
                    }
                  />
                  <button
                    onClick={() => handleDelete(task.id)}
                    className=" text-red-500 hover:text-red-600 transition-colors duration-300"
                  >
                    <FaTrash className="h-7 aspect-square" />
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
