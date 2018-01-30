var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('search', { title: '搜索'});
});

module.exports = router;