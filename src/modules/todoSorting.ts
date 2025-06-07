import { Todo } from "@/types/Todo";

export function sortTodos(todos: Todo[]): Todo[] {
  const sortedTodos = [...todos].sort((a, b) => {
    // Urutkan berdasarkan status (pending > in_progress > completed)
    const statusOrder = { pending: 1, in_progress: 2, completed: 3 };
    if (a.status !== b.status) {
      return statusOrder[a.status] - statusOrder[b.status];
    }

    // Urutkan berdasarkan prioritizeLevel (high > medium > low)
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    if (a.prioritizeLevel !== b.prioritizeLevel) {
      return (
        priorityOrder[a.prioritizeLevel] - priorityOrder[b.prioritizeLevel]
      );
    }

    // Urutkan berdasarkan kategori (null di akhir)
    if (a.category !== b.category) {
      if (!a.category) return 1;
      if (!b.category) return -1;
      return a.category.localeCompare(b.category);
    }

    // Urutkan berdasarkan due date (null di akhir)
    if (a.due !== b.due) {
      if (!a.due) return 1;
      if (!b.due) return -1;
      return new Date(a.due).getTime() - new Date(b.due).getTime();
    }

    // Urutkan berdasarkan created_at
    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
  });
  return sortedTodos;
}
