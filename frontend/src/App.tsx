import axios from "axios";
import { useEffect } from "react";
import "./App.scss";
import AddTodoItem from "./components/AddTodoItem/AddTodoItem";
import TodoCalendar from "./components/TodoCalendar";
import { API_BASE_URL } from "./constants";
import { useStateValue } from "./context/StateProvider";

function App() {
  const { state, dispatch } = useStateValue();

  useEffect(() => {
    axios
      .get(API_BASE_URL)
      .then((response) => {
        dispatch({ type: "GET_TODO", todos: response.data });
      })
      .catch((err) => console.warn(err.message));
    return () => {};
  }, [dispatch]);

  useEffect(() => {
    console.log(state.todos);
    return () => {};
  }, [state]);
  return (
    <div className="App">
      {/* Title */}
      <header>
        <h1>Awesome Todo App</h1>
      </header>

      {/* calendar - week view */}
      <TodoCalendar />
      {state.openAddTodo.open && <AddTodoItem />}
    </div>
  );
}

export default App;
