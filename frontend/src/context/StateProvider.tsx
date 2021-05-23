import { createContext, FC, useContext, useReducer } from "react";
import { initialState } from "./reducer";
import { TodosState, TodosReducer, TodosStateActionTypes } from "./types";

// Wrap the app and provide Context API to components within
type StateProviderProps = {
  reducer: TodosReducer;
  initialState: TodosState;
};

// Prepare Context API
export const StateContext = createContext<{
  state: TodosState;
  dispatch: React.Dispatch<TodosStateActionTypes>;
}>({ state: initialState, dispatch: () => null });
export const TodosStateProvider: FC<StateProviderProps> = ({
  reducer,
  initialState,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

// Pull information from Context API
export const useStateValue = () => useContext(StateContext);
// NOTE :: Context API === Datalayer
