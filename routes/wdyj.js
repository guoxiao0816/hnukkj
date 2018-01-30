var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('wdyj', { title: '我的业绩'});
});

module.exports = router;