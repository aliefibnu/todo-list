"use client";
import { Todo } from "@/types/Todo";
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import SearchBar from "./components/SearchBar";
import AddButton from "./components/AddButton";
import AddForm from "./components/AddForm";
import Tasks from "./components/Tasks";
import Notiflix from "notiflix";
import { sortTodos } from "@/modules/todoSorting";
import EditForm from "./components/EditForm";
import ProgressBar from "./components/ProgressBar";

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [idTodoToEdit, setIdTodoToEdit] = useState<number | null>(null);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  useEffect(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        const parsedTodos = JSON.parse(savedTodos);
        setTodos(parsedTodos);
        setFilteredTodos(parsedTodos);
      }
      setError(null);
    } catch (error) {
      setError("Gagal memuat daftar tugas");
      Notiflix.Notify.failure("Gagal memuat daftar tugas");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0 && !isSorted) {
      const sortedTodos = sortTodos([...todos]);
      setTodos(sortedTodos);
      setFilteredTodos(sortedTodos);
      localStorage.setItem("todos", JSON.stringify(sortedTodos));
      setIsSorted(true);
    }
  }, [todos, isSorted]);

  useEffect(() => {
    if (search === "") {
      setFilteredTodos(todos);
    } else {
      const filteredTodosNow = todos.filter((todo) =>
        [todo.name, todo.category ?? "", todo.prioritizeLevel].some((field) =>
          field.toLowerCase().includes(search.toLowerCase())
        )
      );
      setFilteredTodos(filteredTodosNow);
    }
  }, [search, todos]);

  const handleAddTodo = (newTodo: Todo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setShowForm(false);
    Notiflix.Notify.success("Tugas berhasil ditambahkan!");
    setIsSorted(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 overflow-x-hidden">
      <div className="w-full max-w-4xl px-4 py-8">
        <Banner />
        <ProgressBar
          progress={Math.round(
            (todos.filter((todo) => todo.status === "completed").length /
              todos.length) *
              100
          )}
        />
        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center gap-x-10">
            <SearchBar searchValue={search} setSearchValue={setSearch} />
            <AddButton
              onClick={() => setShowForm(!showForm)}
              isFormShowed={showForm}
            />
          </div>
          {showForm && <AddForm onAdd={handleAddTodo} />}
          {loading ? (
            <p className="text-center text-gray-600 dark:text-gray-300">
              Memuat...
            </p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <Tasks
              tasks={todos}
              filteredTasks={filteredTodos}
              setTasks={setTodos}
              setIsSorted={setIsSorted}
              setFilteredTasks={setFilteredTodos}
              setIdToEdit={setIdTodoToEdit}
              setFormEditVisible={setIsEditFormVisible}
            />
          )}
        </div>
      </div>
      {isEditFormVisible && idTodoToEdit && (
        <EditForm
          setTasks={setTodos}
          idTaskToEdit={idTodoToEdit}
          setIdTaskToEdit={setIdTodoToEdit}
          setFormEditVisible={setIsEditFormVisible}
          goSorting={setIsSorted}
        />
      )}
    </div>
  );
}
