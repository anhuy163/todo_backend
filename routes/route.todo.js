const express = require("express");
const TodoController = require("../controllers/todo.controller");
const router = express.Router();

router.get("/todo", TodoController.getAllTodos);
router.post("/todo", TodoController.createTodo);
router.put("/todo", TodoController.updateTodo);
router.delete("/todo/delete/:id", TodoController.deleteTodo);
// router.post("/todo/add")
// router.delete("/todo/delete:id",)
module.exports = router;
