export interface Todo {
  id: number;
  name: string;
  category:
    | "Pekerjaan"
    | "Pribadi"
    | "Belanja"
    | "Pendidikan"
    | "Kesehatan"
    | "Keuangan"
    | "Hobi"
    | "Proyek"
    | "Perjalanan"
    | "Lainnya";
  prioritizeLevel: "low" | "medium" | "high";
  status: "pending" | "completed";
  due: Date | null;
  created_at: Date;
}
