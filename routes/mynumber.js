var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('mynumber', { title: '我的邀请码'});
});

module.exports = router;