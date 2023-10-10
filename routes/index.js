var express = require('express');
var router = express.Router();

const tasks = [
  {description: "task 1", done: false},
  {description: "task 2", done: false}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'ToDo app'})
});

router.get('/todo', function(req, res, next) {
  res.json(tasks);
});
module.exports = router;