var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('cjcx', { title: '成绩查询'});
});

module.exports = router;