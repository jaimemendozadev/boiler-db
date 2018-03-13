const Router = require('express').Router();
const {getTodos, postTodo, deleteTodo} = require('./controllers');

Router.get('/todo', getTodos);
Router.post('/todo', postTodo);
Router.delete('/todo', deleteTodo);

module.exports = Router;
