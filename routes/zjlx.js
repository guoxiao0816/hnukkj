var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('zjlx', { title: '章节练习'});
});

module.exports = router;