const Todo = require("../models/Todos")

const createNewTodo = async (req, res) => {

    const {title, tags} = req.body
    
    if(!title) {
        return res.status(400),json({message: 'Title is required'})
    }

    const todo = await Todo.create({title, tags})
    
    if(todo) {
        return res.status(201).json({message:'New todo created'})
    }

    else {
        return res.status(400).json({message:'Invalid todo'})
    }
}

// ע"פ קריטריונים
const getAllTodos = async (req, res) => {

    const todos = await Todo.find().lean()

    if(!todos?.length) {
        return res.status(400).json({message:'No todos found'})
    }

    res.json(todos)
}

const updateTodo = async (req, res) => {

    const {_id,title, tags} = req.body
    
    if(!_id||!title) {
        return res.status(400).json({message:'Fields are required'})
    }

    const todo = await Todo.findById(_id).exec()

    if(!todo) {
        return res.status(400).json({message:'Todo not found'})
    }

    todo.title = title
    todo.tags = tags

    const updateTodo = await todo.save()

    res.json(`'${updateTodo.title}' updated`)
}

const deleteTodo = async (req, res) => {

    const {id} = req.body
    const todo = await Todo.findById(id).exec()

    if(!todo) {
        return res.status(400).json({message:'Todo not found'})
    }

    const result = await todo.deleteOne()

    const reply = `Todo '${result.name}' ID ${result._id} deleted`
    res.json(reply)
}

const updateTodoComplete = async (req, res) => {
    
    const {id} = req.params
    const todo = await Todo.findById(id).exec()

    if(!todo) {
        return res.status(400).json({message: 'Todo not found'})
    }

    todo.complete = !todo.complete

    const updatedTodo = await todo.save()

    res.json(`'${updatedTodo.name}' updated`)
}

module.exports = {
    getAllTodos,
    createNewTodo,
    updateTodo,
    updateTodoComplete,
    deleteTodo
}