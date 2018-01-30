var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('qzmn', { title: '全真模拟'});
});

module.exports = router;