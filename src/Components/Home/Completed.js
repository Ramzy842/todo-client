import React from "react";
import TodoItem from "./TodoItem";

const Completed = ({ toDos, setToDos, completed }) => {
  return (
    <div className=" w-1/2 p-2 overflow-y-auto">
      <h1 className="text-2xl font-bold ml-1 text-white">Completed</h1>
      <ul>
        {toDos.map(
          (todo) =>
            todo.completed && (
              <TodoItem
                key={todo.id}
                title={todo.title}
                description={todo.description}
                toDos={toDos}
                setToDos={setToDos}
                id={todo.id}
                completed={completed}
              />
            )
        )}
      </ul>
    </div>
  );
};

export default Completed;
