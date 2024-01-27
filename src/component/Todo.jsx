import React, { useState } from "react";
import Container from "./Container";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isNotAdded, setIsNotAdded] = useState(false);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleDelete = (id) => {
    const newTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodo);
  };
  const handlerDanger = () => {
    setIsNotAdded(true);
    setTimeout(() => {
      setIsNotAdded(false);
    }, 2000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      setTodoList([...todoList]);
      handlerDanger();
    } else {
      const newTodo = {
        id: new Date().getTime().toString(),
        todo: input,
      };
      setTodoList([...todoList, newTodo]);
    }

    setInput("");
  };
  return (
    <div className="todoContainer">
      <h1>THINGS TO DO</h1>
      <form onSubmit={handleSubmit}>
        {isNotAdded && (
          <div className="row red">
            <p>Please add a new todo</p>
          </div>
        )}
        <div className="row">
          <input
            className="input"
            type="text"
            name={input}
            placeholder="Add New Todo"
            value={input}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <Container todoList={todoList} handleDelete={handleDelete} />
        <button className="addBtn">Add to list</button>
      </form>
    </div>
  );
};

export default Todo;
