var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('chengji', { title: '成绩'});
});

module.exports = router;