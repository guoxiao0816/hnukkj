var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('yysj', { title: '选择预约时间'});
});

module.exports = router;