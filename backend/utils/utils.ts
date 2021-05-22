import fs from "fs/promises";
import { Todos } from "./types";

const dataPath = "./data/todos.json";

// Get Data Helper Method
export const readFile = async (filePath = dataPath): Promise<Todos> => {
  try {
    return JSON.parse(await fs.readFile(filePath, { encoding: "utf8" }));
  } catch (err) {
    throw err;
  }
};

// Save Data Helper Method
export const writeFile = async (fileData: string, filePath = dataPath) => {
  try {
    fs.writeFile(filePath, fileData, { encoding: "utf8" });
  } catch (err) {
    throw err;
  }
};
