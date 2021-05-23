import { useState } from "react";
import { addDays, getDay } from "date-fns";
import "./TodoCalendar.scss";
import TodoCalendarDate from "./TodoCalendarDate";
import TodosColumn from "../TodosColumn/TodosColumn";

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
            <TodosColumn columnDate={addDays(startDate, index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoCalendar;
