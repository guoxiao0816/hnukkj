var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('shoucang', { title: '收藏'});
});

module.exports = router;