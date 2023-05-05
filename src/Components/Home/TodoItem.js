import axios from "axios";
import React, { useState } from "react";
import { removeTodo, updateStatus } from "../../services/Todos";

const TodoItem = ({ title, description, toDos, setToDos, id }) => {
  const [showDescr, setShowDesc] = useState(false);
  const handleDelete = () => {
    removeTodo(id).then(() => {
      axios
        .get("http://localhost:3001/todos")
        .then((data) => setToDos(data.data));
    });
  };
  const target = toDos.find((todo) => todo.id === id);
  const handleStatus = () => {
    updateStatus(id).then((data) => setToDos(data.data));
  };

  return (
    <li className="px-4 py-1">
      <div className="flex justify-between">
        <h2
          className={`font-medium ${
            target.completed ? "text-black" : "text-white"
          }`}
        >
          {title}
        </h2>
        <div className="flex justify-evenly gap-x-2  items-start">
          <button
            id="show-desc"
            className="bg-gray-700 px-2 text-gray-200"
            onClick={() => setShowDesc(!showDescr)}
          >
            {showDescr ? "Hide Description" : "Show Description"}
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-700 px-2 text-gray-200"
            id="delete-todo"
          >
            Delete
          </button>
          {!target.completed && (
            <button
              onClick={handleStatus}
              className="bg-green-700 px-2 text-gray-200"
            >
              Mark as completed
            </button>
          )}
        </div>
      </div>
      {showDescr && (
        <p
          className={`mt-2 text-sm pb-2 border-b-2 border-gray-500 rounded-sm ${
            target.completed && "text-white"
          }`}
        >
          {description}
        </p>
      )}
    </li>
  );
};

export default TodoItem;
