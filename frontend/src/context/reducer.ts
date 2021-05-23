import { TodosState, TodosReducer } from "./types";

export const ADD_TODO = "ADD_TODO";
export const OPEN_ADD_TODO = "OPEN_ADD_TODO";
export const GET_TODOS = "GET_TODO";

export const initialState: TodosState = {
  todos: [],
  openAddTodo: { open: false },
};

const reducer: TodosReducer = (state, action) => {
  switch (action.type) {
    // FETCH TODO LIST
    case GET_TODOS:
      return { ...state, todos: action.todos };
    // OPEN ADD TODOS
    case OPEN_ADD_TODO:
      return { ...state, openAddTodo: action.openAddTodo };
    // ADD TODO
    case ADD_TODO:
      return { ...state, openAddTodo: { open: false }, todos: action.todos };
    default:
      return state;
  }
};

export default reducer;
