import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ toDos, setToDos }) => {
  const [toDosCount, setToDosCount] = useState(
    toDos.filter((todo) => !todo.completed).length
  );
  useEffect(() => {
    setToDosCount(toDos.filter((todo) => !todo.completed).length);
  }, [toDos]);
  return toDosCount ? (
    <div className="bg-gray-500 w-3/5 p-2 overflow-y-auto">
      <h1 className="text-2xl font-bold ml-1">To do</h1>
      <ul>
        {toDos.map(
          (todo) =>
            !todo.completed && (
              <TodoItem
                key={todo.id}
                title={todo.title}
                description={todo.description}
                toDos={toDos}
                setToDos={setToDos}
                id={todo.id}
                completed={todo.completed}
                setToDosCount={setToDosCount}
              />
            )
        )}
      </ul>
    </div>
  ) : (
    <h2 className="bg-gray-300 w-3/5 text-3xl font-bold flex justify-center items-center">You Don't have anything to do huh!</h2>
  );
};

export default TodoList;
