import "./App.scss";
import TodoCalendar from "./components/TodoCalendar";

function App() {
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
