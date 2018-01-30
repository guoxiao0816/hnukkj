var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('mnks', { title: '模拟考试'});
});

module.exports = router;