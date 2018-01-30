var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('my', { title: '我的'});
});

module.exports = router;