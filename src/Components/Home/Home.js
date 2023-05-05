import React, { useEffect, useState } from "react";
import Completed from "./Completed";
import CreateTodo from "./Create_Todo";
import TodoList from "./TodoList";
import { getTodos } from "../../services/Todos";

const Home = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [toDos, setToDos] = useState(null);

  useEffect(() => {
    getTodos().then((data) => setToDos(data.data));
  }, []);
  if (!toDos)
    return null;
  return (
    <div className="h-screen border-8">
      <button
        className=" bg-indigo-500 py-2 m-4 px-4 font-medium text-lg"
        onClick={() => setShowCreate(!showCreate)}
      >
        Create
      </button>
      {showCreate ? (
        <CreateTodo
          setToDos={setToDos}
          toDos={toDos}
          setShowCreate={setShowCreate}
        />
      ) : (
        <div className="flex gap-x-2 bg-gray-600 max-w-7xl m-auto h-4/5">
          <TodoList toDos={toDos} setToDos={setToDos} />
          <Completed toDos={toDos} setToDos={setToDos} />
        </div>
      )}
    </div>
  );
};

export default Home;
