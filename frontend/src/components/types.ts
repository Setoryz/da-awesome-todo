type TodoData = {
  title: string;
  date: Date;
  status: "todo" | "done" | "doing";
  id: string;
};

export type Todos = TodoData[];
