const express = require('express');
const router = express.Router();
const dataSeededTodos = require('../data');


/* INDEX TODOS */
router.get('/', function(req,res) {

  res.render('todos/index', {
    todos: dataSeededTodos.seededTodos
  });
});


router.get('/new', function (req, res) {
	res.render('todos/new')
})

router.get('/:id', function(req, res) {
  const id = req.params.id;
  const todoNumber = dataSeededTodos.seededTodos[id]
  res.render('todos/shows', {
    todo: todoNumber
  });
   
});

router.post('/', function(req, res) {
	console.log(req.body)
  const newTodo = {
    description: req.body.description,
    urgent: req.body.urgent

  };
  dataSeededTodos.seededTodos.push(newTodo);

  res.redirect("/todos");
})


module.exports = router;