import express from "express";
import todosRoutes from "./routes/todos.routes";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Express + TypeScript Server"));
app.use("/todos", todosRoutes);

app.listen(PORT, () => {
  console.log(`⚡️ Server running at https://localhost:${PORT}`);
});
