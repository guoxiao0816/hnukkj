var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('wddd', { title: '我的订单'});
});

module.exports = router;