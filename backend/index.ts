import express from "express";
import todosRoutes from "./routes/todos.routes";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Welcome to Todos Server"));
app.use("/todos", todosRoutes);

app.listen(PORT, () => {
  console.log(`⚡️ Server running at https://localhost:${PORT}`);
});
