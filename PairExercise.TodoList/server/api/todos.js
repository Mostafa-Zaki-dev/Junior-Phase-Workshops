const router = require('express').Router()
const {Todo} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const todos = await Todo.findAll()
    res.json(todos)
  } catch (e) {
    next(e)
  }
})

router.get('/:todoId', async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.todoId)
    res.json(todo)
  } catch (e) {
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body)
    res.json(todo)
  } catch (e) {
    next(e)
  }
})

router.put('/:todoId', async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.todoId)
    await todo.update(req.body)
    res.json(todo)
  } catch(e) {
    next(e)
  }
})

router.delete('/:todoId', async (req, res, next) => {
  try {
    await Todo.destroy({
      where: {
        id: req.params.todoId
      }
    })
    res.status(204).end()
  } catch(e) {
    next(e)
  }
})

module.exports = router