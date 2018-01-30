var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('djq', { title: '代金券详情页面'});
});

module.exports = router;