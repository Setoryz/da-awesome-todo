import TodoCheckBoxIcon from "../icons/TodoCheckBoxIcon";
import TodoDeleteIcon from "../icons/TodoDeleteIcon";
import TodoDoingIcon from "../icons/TodoDoingIcon";
import TodoDoneIcon from "../icons/TodoDoneIcon";
import { TodoData } from "../types";
import "./TodoItem.scss";

type Props = {
  todoItem: TodoData;
};

const TodoItem = ({ todoItem }: Props) => {
  return (
    <div className={`todoItem ${todoItem.status}`}>
      <div className={`todoItem__status`}>
        {todoItem.status === "done" ? (
          <TodoDoneIcon />
        ) : todoItem.status === "doing" ? (
          <TodoDoingIcon />
        ) : (
          <TodoCheckBoxIcon />
        )}
      </div>
      <span className="todoItem__title">{todoItem.title}</span>
      <div className="todoItem__delete">
        <TodoDeleteIcon />
      </div>
    </div>
  );
};

export default TodoItem;
