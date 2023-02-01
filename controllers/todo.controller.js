const { json } = require("express");
const database = require("../database");
const Todo = require("../models/Todo");

const TodoController = {
  getAllTodos: (req, res) => {
    Todo.findAllTodos().then((todos) => res.send(todos));
    // Todo.findAllTodos(function (todos) {
    //   res.send(todos);
    // });
    // try {
    //   const todos = Todo.findAllTodos();
    //   console.log(todos);
    //   res.send(todos);
    //   // let query = "SELECT * FROM todos";
    //   // database.query(query, function (req, results) {
    //   //   res.json(results);
    //   // });
    // } catch (err) {
    //   console.log(err);
    // }
  },
  createTodo: (req, res) => {
    console.log(req.body);

    Todo.createTodo(req.body).then((result) => res.send(result));
    // try {
    //   const { id, todo_title, todo_status } = req.body;
    //   let query = `INSERT INTO todos VALUES(${id},${todo_title},${todo_status})`;
    //   database.query(query, function (req, results) {
    //     alert(results);
    //   });
    // } catch (err) {
    //   alert(err);
    // }
  },

  updateTodo: (req, res) => {
    const { id, title, status } = req.body;
    Todo.updateTodo(id, { title, status }).then((result) => res.send(result));
  },
  deleteTodo: (req, res) => {
    Todo.deleteTodo(req.params.id).then((result) => res.send(result));
  },
};

module.exports = TodoController;
