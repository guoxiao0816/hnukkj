var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('bdtg', { title: '优快学车-好驾校，低价挑'});
});

module.exports = router;