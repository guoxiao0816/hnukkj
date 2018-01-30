var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('searchTag', { title: '搜索标签'});
});

module.exports = router;