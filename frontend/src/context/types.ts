import { Todos } from "../components/types";
import { ADD_TODO, GET_TODOS, OPEN_ADD_TODO } from "./reducer";

type OpenAddTodo = { open: boolean; date?: Date };
export type TodosState = {
  todos: Todos;
  openAddTodo: OpenAddTodo;
};

interface GetTodosAction {
  type: typeof GET_TODOS;
  todos: Todos;
}
interface OpenAddTodoAction {
  type: typeof OPEN_ADD_TODO;
  openAddTodo: OpenAddTodo;
}
interface AddTodoAction {
  type: typeof ADD_TODO;
  todos: Todos;
}

export type TodosStateActionTypes =
  | GetTodosAction
  | OpenAddTodoAction
  | AddTodoAction;

export type TodosReducer = (
  state: TodosState,
  action: TodosStateActionTypes
) => TodosState;
