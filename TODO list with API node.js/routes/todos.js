const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.get('/', async (req, res)=>{
  const todos = await Todo.find();
  res.json(todos);
});

router.post('/', async(req, res,) =>{
  const newTodo = new Todo(req.body);
  await newTodo.save();
  res.json(newTodo);
});

router.put('/:id', async (req, res) => {
  const updateTodo = await Todo.findByIdAndDelete(req.params.id, req.body, {new: true});
  req.json(updateTodo);
});

router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

module.exports = router;