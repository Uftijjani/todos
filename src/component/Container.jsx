import React from "react";
import { FaTrash } from "react-icons/fa";

const Container = ({ todoList, handleDelete }) => {
  return (
    <div className="container">
      {todoList.map((list) => {
        const { id, todo } = list;
        return (
          <div className="itemContainer" key={id}>
            <div className="list">
              <input type="checkbox" />
              <h4>{todo}</h4>
            </div>
            <button>
              <FaTrash className="deleteBtn" onClick={() => handleDelete(id)} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Container;
