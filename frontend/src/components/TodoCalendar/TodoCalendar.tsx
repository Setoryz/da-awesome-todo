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
      {[...Array(7)].map((value, index) => (
        <div key={index.toString()} className="todo__calendar__column">
          <TodoCalendarDate columnDate={addDays(startDate, index)} />
          <TodosColumn columnDate={addDays(startDate, index)} />
        </div>
      ))}
    </div>
  );
};

export default TodoCalendar;
