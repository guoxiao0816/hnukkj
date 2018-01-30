var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('qianming', { title: '修改签名'});
});

module.exports = router;