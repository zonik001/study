// routes/todo.js

const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');


// 获取所有待办事项
router.get('/', (req, res) => {
  const query = req.query || {};
  Todo.find({query}).then(results => {
    console.log(`获取到了${results}`);
    res.json(results);
  })
  .catch(err => {
    console.log(err);
      return res.status(500).send(err);
  })
  // Todo.find(query, (err, todos) => {
  //   if (err) {
  //     console.log(err);
  //     return res.status(500).send(err);
  //   }
  //   res.json(todos);
  // });
});

// 创建一个待办事项
router.post('/', (req, res) => {
  const todo = new Todo(req.body);
  todo.save((err, savedTodo) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    console.log(`增加了${results}`);
    res.json(savedTodo);
  });
});

// 更新一个待办事项
router.put('/:id', (req, res) => {
  const id = req.params.id;
  Todo.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedTodo) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.json(updatedTodo);
  });
});

// 删除一个待办事项
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Todo.findByIdAndDelete(id, (err, deletedTodo) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.json(deletedTodo);
  });
});

module.exports = router;
