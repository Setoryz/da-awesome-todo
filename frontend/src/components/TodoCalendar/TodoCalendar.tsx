import { useState } from "react";
import { addDays, getDay, isSameDay } from "date-fns";
import "./TodoCalendar.scss";
import TodoCalendarDate from "./TodoCalendarDate";
import TodosColumn from "../TodosColumn/TodosColumn";
import { Todos } from "../types";

const getStartDate = (date: Date) => addDays(date, -getDay(date));

const TodoCalendar = () => {
  const [startDate, setStartDate] = useState(getStartDate(new Date()));
  return (
    <div className="todo__calendar">
      <div className="calendar__btn">
        <button
          className="btn__prev"
          onClick={() => {
            setStartDate((currentStartDate) => addDays(currentStartDate, -7));
          }}
        >
          ◀
        </button>
        <button
          className="btn__next"
          onClick={() => {
            setStartDate((currentStartDate) => addDays(currentStartDate, 7));
          }}
        >
          ▶
        </button>
      </div>
      <div className="calendar__container">
        {[...Array(7)].map((value, index) => (
          <div key={index.toString()} className="calendar__column">
            <TodoCalendarDate columnDate={addDays(startDate, index)} />
            <TodosColumn
              columnDate={addDays(startDate, index)}
              todos={todos.filter(({ date }) =>
                isSameDay(date, addDays(startDate, index))
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoCalendar;

const todos: Todos = [
  {
    title: "Work on Frontend",
    date: new Date("2021/5/24"),
    status: "done",
    id: "7fb45c449d49",
  },
  {
    title: "Handle CI & CD",
    date: new Date("2021/5/24"),
    status: "todo",
    id: "bb24",
  },
  {
    title: "Add New Todo",
    date: new Date("2021/5/26"),
    status: "doing",
    id: "d26a45e0-bb2b-11eb-b2c4-3f9a01b8f7ef",
  },
  {
    title: "Add New Backend",
    date: new Date("2021/5/25"),
    status: "doing",
    id: "e0923c40-bb2b-11eb-8ae2-210f80351355",
  },
];
