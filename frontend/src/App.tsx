import axios from "axios";
import { useEffect } from "react";
import "./App.scss";
import TodoCalendar from "./components/TodoCalendar";
import { useStateValue } from "./context/StateProvider";

function App() {
  const { state, dispatch } = useStateValue();

  useEffect(() => {
    axios.get("http://localhost:5000/todos").then((response) => {
      dispatch({ type: "GET_TODO", todos: response.data });
    });
    return () => {};
  }, [dispatch]);

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div className="App">
      {/* Title */}
      <header>
        <h1>Awesome Todo App</h1>
      </header>

      {/* calendar - week view */}
      <TodoCalendar></TodoCalendar>
      {/* calendar data */}
    </div>
  );
}

export default App;
