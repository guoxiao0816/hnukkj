var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('qxdd', { title: '取消订单'});
});

module.exports = router;