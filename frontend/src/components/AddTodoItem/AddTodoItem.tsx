import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useRef, useState } from "react";
import { API_BASE_URL } from "../../constants";
import { useStateValue } from "../../context/StateProvider";
import "./AddTodoItem.scss";

const AddTodoItem = () => {
  const {
    state: { openAddTodo },
    dispatch,
  } = useStateValue();
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [date, setDate] = useState(openAddTodo.date ?? new Date());
  const formRef = useRef<HTMLFormElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    titleInputRef.current!.focus();
  }, []);
  useEffect(() => {
    if (titleError && title) setTitleError(false);
  }, [titleError, title]);

  const closeAddTodo = () =>
    dispatch({ type: "OPEN_ADD_TODO", openAddTodo: { open: false } });

  const handleKeyDown = (event: React.KeyboardEvent) =>
    event.key === "Escape" && closeAddTodo();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!title) {
      setTitleError(true);
      titleInputRef.current!.focus();
    } else {
      axios
        .post(API_BASE_URL, { title, date, status: "todo" })
        .then((response) =>
          dispatch({ type: "ADD_TODO", todos: response.data })
        )
        .catch((err) => console.warn(err.message));
    }
  };
  return (
    <div onKeyDown={handleKeyDown} className="addTodoItem">
      <div className="addTodoItem__background" onClick={closeAddTodo}></div>
      <form ref={formRef} className="addTodoItem__form" onSubmit={handleSubmit}>
        <input
          className={`form__title ${titleError ? "error" : ""}`}
          ref={titleInputRef}
          type="text"
          name="title"
          value={title}
          placeholder="Enter your Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="form__date"
          type="date"
          value={format(date, "yyyy-MM-dd")}
          name="date"
          onChange={(e) => setDate(new Date(e.target.value))}
        />
        <input className="form__button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddTodoItem;
