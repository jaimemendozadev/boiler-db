const mongoose = require('mongoose');
 
const Schema = mongoose.Schema
 
const TodoSchema = new Schema({
  taskName: String,
  dateAssigned: Date,
  dateCompleted: Date,
  assignedTo: String
});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = {
  Todo: TodoModel
}

