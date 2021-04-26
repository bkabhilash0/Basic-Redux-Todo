import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

const App = () => {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="App">
      {/* Todo List */}
      {/* Checkbox for Done */}
      {/* Input Box */}
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((item) => (
            <TodoItem
              name={item.item}
              done={item.done}
              id={item.id}
              key={item.id}
            />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
};

export default App;
