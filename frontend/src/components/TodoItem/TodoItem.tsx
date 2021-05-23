import axios from "axios";
import { API_BASE_URL } from "../../constants";
import { useStateValue } from "../../context/StateProvider";
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
  const { dispatch } = useStateValue();

  const changeStatus = () => {
    let newStatus =
      todoItem.status === "todo"
        ? "doing"
        : todoItem.status === "doing"
        ? "done"
        : "todo";
    axios
      .put(`${API_BASE_URL}/${todoItem.id}`, { ...todoItem, status: newStatus })
      .then((response) => dispatch({ type: "GET_TODO", todos: response.data }))
      .catch((err) => console.warn(err.message));
  };

  const deleteTodo = () => {
    axios
      .delete(`${API_BASE_URL}/${todoItem.id}`)
      .then((response) => dispatch({ type: "GET_TODO", todos: response.data }))
      .catch((err) => console.warn(err.message));
  };
  return (
    <div className={`todoItem ${todoItem.status}`}>
      <div onClick={changeStatus} className={`todoItem__status`}>
        {todoItem.status === "done" ? (
          <TodoDoneIcon />
        ) : todoItem.status === "doing" ? (
          <TodoDoingIcon />
        ) : (
          <TodoCheckBoxIcon />
        )}
      </div>
      <p className="todoItem__title">{todoItem.title}</p>
      <div className="todoItem__delete" onClick={deleteTodo}>
        <TodoDeleteIcon />
      </div>
    </div>
  );
};

export default TodoItem;
