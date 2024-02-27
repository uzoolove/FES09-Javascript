var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({});
});

router.get('/todolist', function(req, res, next) {
  res.json();
});

router.get('/todolist/:_id', function(req, res, next) {
  res.json({_id});
});

router.get('/todolist', function(req, res, next) {
  res.json({});
});

module.exports = router;
