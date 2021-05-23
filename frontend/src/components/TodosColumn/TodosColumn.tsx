import { getDay, isToday } from "date-fns";
import { useEffect } from "react";
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
            {todos[index] && <p>{todos[index].title}</p>}
            {index === todos.length && <p>New Item ➕</p>}
          </div>
        )
      )}
    </div>
  );
};

export default TodosColumn;
