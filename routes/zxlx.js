var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('zxlx', { title: '专项练习'});
});

module.exports = router;