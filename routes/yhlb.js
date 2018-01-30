var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('yhlb', { title: '用户列表'});
});

module.exports = router;