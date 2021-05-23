import { getDay, isToday } from "date-fns";
import "./TodosColumn.scss";

type Props = {
  columnDate: Date;
};
const TodosColumn = ({ columnDate }: Props) => {
  return (
    <div
      className={`todos__column ${getDay(columnDate) === 6 ? "last" : ""} ${
        isToday(columnDate) ? "today" : ""
      }`}
    >
      <div className="top__row"></div>
      {[...Array(7)].map((value, index) => (
        <div key={index} className="todos__row">
          {/* <p>TodoItem</p> */}
        </div>
      ))}
    </div>
  );
};

export default TodosColumn;
