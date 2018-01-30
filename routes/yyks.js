var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('yyks', { title: '预约考试'});
});

module.exports = router;