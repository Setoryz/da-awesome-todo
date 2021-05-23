import { getDate, getDay, isToday } from "date-fns";
import "./TodoCalendarDate.scss";

type Props = {
  columnDate: Date;
};
enum Day {
  SUN = 0,
  MON = 1,
  TUE = 2,
  WED = 3,
  THU = 4,
  FRI = 5,
  SAT = 6,
}
const TodoCalendarDate = ({ columnDate }: Props) => {
  return (
    <div className={`date__container ${isToday(columnDate) ? "today" : ""}`}>
      <div className="calendar__day">{Day[getDay(columnDate)]}</div>
      <div className="calendar__date">{getDate(columnDate)}</div>
    </div>
  );
};

export default TodoCalendarDate;
