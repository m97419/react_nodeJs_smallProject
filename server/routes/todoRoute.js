const express = require("express")
const router = express.Router()

const todoController = require("../controllers/todoController")

router.get("/", todoController.getAllTodos)
router.post("/", todoController.createNewTodo)
router.delete("/", todoController.deleteTodo)
router.put("/", todoController.updateTodo)
router.put("/complete/:id", todoController.updateTodoComplete)

module.exports = router