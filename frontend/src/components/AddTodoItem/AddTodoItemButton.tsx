import { useStateValue } from "../../context/StateProvider";
import AddIcon from "../icons/AddIcon";
import "./AddTodoItemButton.scss";

type Props = {
  date: Date;
};
const AddTodoItemButton = ({ date }: Props) => {
  const { dispatch } = useStateValue();
  return (
    <div
      onClick={() => {
        dispatch({ type: "OPEN_ADD_TODO", openAddTodo: { open: true, date } });
      }}
      className="addTodoItemButton"
    >
      <span>Add Todo</span>
      <AddIcon />
    </div>
  );
};

export default AddTodoItemButton;
