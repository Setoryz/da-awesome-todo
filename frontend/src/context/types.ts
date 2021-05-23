import { TodoData, Todos } from "../components/types";
import { ADD_TODO, GET_TODOS, OPEN_ADD_TODO } from "./reducer";

export type TodosState = {
  todos: Todos;
  openAddTodo: boolean;
};

interface GetTodosAction {
  type: typeof GET_TODOS;
  todos: Todos;
}
interface OpenAddTodoAction {
  type: typeof OPEN_ADD_TODO;
  openAddTodo: boolean;
}
interface AddTodoAction {
  type: typeof ADD_TODO;
  todoItem: TodoData;
}

export type TodosStateActionTypes =
  | GetTodosAction
  | OpenAddTodoAction
  | AddTodoAction;

export type TodosReducer = (
  state: TodosState,
  action: TodosStateActionTypes
) => TodosState;
