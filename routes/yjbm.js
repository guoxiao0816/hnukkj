var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('yjbm', { title: '一键报名'});
});

module.exports = router;