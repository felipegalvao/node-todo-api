const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");

var id = "5a84da9d5da3206e5f6fa7fd11";

if (!ObjectID.isValid(id)) {
  console.log("ID not valid");
}

Todo.find({
  _id: id
}).then(todos => {
  console.log("todos", todos);
});

Todo.findOne({
  _id: id
}).then(todo => {
  console.log("todo", todo);
});

Todo.findById(id)
  .then(todo => {
    if (!todo) {
      return console.log("Id not found");
    }
    console.log("Todo by id", todo);
  })
  .catch(e => console.log(e));
