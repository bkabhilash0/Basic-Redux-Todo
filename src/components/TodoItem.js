import { Checkbox } from "@material-ui/core";
import React from "react";
import "./TodoItem.css";
import { setChecked } from "../features/todoSlice";
import { useDispatch } from "react-redux";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setChecked(id));
  };
  return (
    <div className="todoItem">
      {/* Checkbox */}
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      {/* name */}
      <p className={done ? "todoItem--done" : ""}>{name}</p>
    </div>
  );
};

export default TodoItem;
