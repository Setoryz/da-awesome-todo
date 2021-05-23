import express from "express";
import todosRoutes from "./routes/todos.routes";
import cors from "cors";
import env from "./dotenv.config";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Welcome to Todos Server"));
app.use("/todos", todosRoutes);

app.listen(env.PORT, () => {
  console.log(`⚡️ Server running at https://localhost:${env.PORT}`);
});
