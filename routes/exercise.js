var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('exercise', { title: '答题页'});
});

module.exports = router;