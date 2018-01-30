var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('wdxx', { title: '我的消息'});
});

module.exports = router;