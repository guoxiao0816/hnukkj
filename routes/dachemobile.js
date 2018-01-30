var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('dachemobile', { title: '郑州汇通驾校|汇通驾校|汇通大车-优快学车,鸿通驾培'});
});

module.exports = router;