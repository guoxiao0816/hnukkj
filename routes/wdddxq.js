var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('wdddxq', { title: '我的订单详情'});
});

module.exports = router;