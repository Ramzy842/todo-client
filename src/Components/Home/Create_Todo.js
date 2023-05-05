
import React, { useState } from "react";
import { addTodo } from "../../services/Todos";

const Create_Todo = ({ toDos, setToDos, setShowCreate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descrError, setDescrError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      setTitleError("");
      setDescrError("");
      addTodo(title, description)
        .then((response) => {
          console.log(response.data);
          setToDos(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      setTitle("");
      setDescription("");
      setShowCreate(false);
    } else if (!title && !description) {
      setTitleError("Please enter a title");
      setDescrError("Please enter a description");
    } else if (!title) {
      setDescrError("");
      setTitleError("Please enter a title");
    } else {
      setTitleError("");
      setDescrError("Please enter a description");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" h-1/2 max-w-2xl m-auto flex items-center gap-x-4 pl-4"
    >
      <div className="w-1/3 h-12">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          value={title}
          className=" h-12 outline-gray-300 rounded-sm px-2 font-medium"
          onChange={(e) => setTitle(e.target.value)}
        />
        {titleError && <p className="text-red-500">{titleError}</p>}
      </div>
      <div className="w-1/3 h-12">
        <input
          type="text"
          name="description"
          id="description"
          placeholder="description"
          value={description}
          className=" h-12 outline-gray-300 rounded-md pl-2 font-medium"
          onChange={(e) => setDescription(e.target.value)}
        />
        {descrError && <p className="text-red-500">{descrError}</p>}
      </div>
      <button
        className="rounded-full border-2 flex justify-center items-center p-2 px-4 hover:bg-white hover:text-black font-semibold"
        type="submit"
      >
        Create
      </button>
    </form>
  );
};

export default Create_Todo;
