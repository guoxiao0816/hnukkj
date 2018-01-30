var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('zxhd', { title: '最新活动'});
});

module.exports = router;