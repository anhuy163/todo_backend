const database = require("../database");

const promiseFunction = (query) => {
  return new Promise((resolve, reject) => {
    try {
      database.query(query, function (err, results) {
        if (err) console.log(err);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
};

const Todo = function (todo) {
  this.title = todo.title;
  this.status = todo.status;
};

Todo.findAllTodos = function () {
  let query = "SELECT * FROM todos";
  return promiseFunction(query);
  // return new Promise((resolve, reject) => {
  //   try {
  //     database.query(query, function (err, results) {
  //       if (err) console.log(err);
  //       resolve(results);
  //     });
  //   } catch (error) {
  //     reject(error);
  //   }
  // });
};

Todo.createTodo = (todo) => {
  let query = `INSERT INTO todos(todo_title, todo_status) VALUES('${todo.title}','${todo.status}');`;
  return promiseFunction(query);
  return new Promise((resolve, reject) => {
    try {
      database.query(query, function (error, results) {
        if (error) console.log(error);
        resolve(results);
      });
    } catch (err) {
      console.log(err);
    }
  });
};

Todo.updateTodo = (todoId, newData) => {
  let query = `UPDATE todos SET todo_title='${newData.title}', todo_status='${newData.status}' WHERE todo_id=${todoId}`;
  return promiseFunction(query);
  return new Promise((resolve, reject) => {
    try {
      database.query(query, function (err, result) {
        if (err) console.log(err);
        resolve(result);
      });
    } catch (err) {
      console.log(err);
    }
  });
};

Todo.deleteTodo = (todoId) => {
  let query = `DELETE FROM todos WHERE todo_id=${todoId}`;
  return promiseFunction(query);
  return new Promise((resolve, reject) => {
    try {
      database.query(query, function (err, result) {
        if (err) console.log(err);
        resolve(result);
      });
    } catch (err) {
      console.log(err);
    }
  });
};

// class Todo {
//   constructor(title, status) {
//     this.title = title;
//     this.status = status;
//   }

//   createTodo() {
//     let query = `INSERT INTO todos(todo_title, todo_status) VALUES('${this.title}','${this.status}');`;
//     return new Promise((resolve, reject) => {
//       try {
//         database.query(query, function (error, results) {
//           if (error) console.log(error);
//           resolve(results);
//         });
//       } catch (err) {
//         console.log(err);
//       }
//     });
//   }

//   static findAllTodos(callback) {
//     let query = "SELECT * FROM todos";
//     return new Promise((resolve, reject) => {
//       try {
//         database.query(query, function (err, results) {
//           if (err) console.log(err);
//           resolve(results);
//         });
//       } catch (error) {
//         reject(error);
//       }
//     });
//     CALLBACK
//     try {
//       database.query(query, function (error, results) {
//         callback(results);
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }

module.exports = Todo;
