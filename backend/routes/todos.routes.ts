import express from "express";
import { addTodo, getTodos } from "../controllers/todos.controller";

const router = express.Router();
router.get("/", getTodos);
router.post("/", addTodo);

export default router;
