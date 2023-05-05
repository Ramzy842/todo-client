import axios from "axios";
const baseUrl = "http://localhost:3001/todos";

const getTodos = () => {
  return axios.get(baseUrl);
};

const addTodo = (title, description) => {
  return axios.post(baseUrl, {
    title,
    description,
  });
};

const removeTodo = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const updateStatus = (id) => {
  return axios.put(`${baseUrl}/${id}`);
};

export {addTodo, getTodos, removeTodo, updateStatus}