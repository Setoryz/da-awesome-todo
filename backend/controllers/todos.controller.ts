import { RequestHandler } from "express";
import { v1 as uuidv1 } from "uuid";
import { readFile, writeFile } from "../utils/utils";

export const getTodos: RequestHandler = async (req, res) => {
  try {
    const data = await readFile();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

export const addTodo: RequestHandler = async (req, res) => {
  try {
    const data = await readFile();

    const id = uuidv1();
    let newTodo = req.body;
    newTodo.id = id;
    data.push(newTodo);
    console.log(data);
    await writeFile(JSON.stringify(data));
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};
