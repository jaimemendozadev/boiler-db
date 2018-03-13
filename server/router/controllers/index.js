const {Todo} = require('../../db');

const getTodos = async(req, res) => {
  const todosFromDB = await Todo.find({});

  res.send(todosFromDB);
}

const postTodo = async(req, res) => {
  let incoming = req.body;
  const newTodo = await Todo.create(incoming);

  res.send(newTodo);
}

const deleteTodo = async(req, res) => {
  const todosFromDB = await Todo.find({});

  return todosFromDB;
}

module.exports = {
  getTodos,
  postTodo,
  deleteTodo
}