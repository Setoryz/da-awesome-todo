import { getDay, isToday } from "date-fns";
import { useEffect } from "react";
import AddTodoItem from "../AddTodoItem/AddTodoItem";
import TodoItem from "../TodoItem/TodoItem";
import { Todos } from "../types";
import "./TodosColumn.scss";

type Props = {
  columnDate: Date;
  todos: Todos;
};
const TodosColumn = ({ columnDate, todos }: Props) => {
  useEffect(() => {}, [columnDate, todos]);
  return (
    <div
      className={`todos__column ${getDay(columnDate) === 6 ? "last" : ""} ${
        isToday(columnDate) ? "today" : ""
      }`}
    >
      <div className="top__row"></div>
      {[...Array(todos.length >= 7 ? todos.length + 1 : 7)].map(
        (value, index) => (
          <div key={index} className="todos__row">
            {todos[index] && <TodoItem todoItem={todos[index]} />}
            {index === todos.length && <AddTodoItem />}
          </div>
        )
      )}
    </div>
  );
};

export default TodosColumn;
