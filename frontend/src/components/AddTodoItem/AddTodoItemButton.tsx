import AddIcon from "../icons/AddIcon";
import "./AddTodoItemButton.scss";

const AddTodoItem = () => {
  return (
    <div className="addTodoItem">
      <span>Add Todo</span>
      <AddIcon />
    </div>
  );
};

export default AddTodoItem;
